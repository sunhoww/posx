import Vue from 'vue/dist/vue.js';
import store from './store';

import Cart from './Cart.vue';
import makeExtension from '../../utils/make-extension';

export default class POSCart {
  constructor({ frm, wrapper, events }) {
    this.frm = frm;
    this.wrapper = wrapper;
    this.events = events;
    store.init({ frm });
    frm.doc = store.doc;
    this.make();
  }
  make() {
    this.vm = new Vue({
      el: $('<div />').appendTo(this.wrapper)[0],
      render: (h) =>
        h(Cart, {
          props: {
            onPay: this.events.onPay.bind(this),
            toggleItems: this.events.toggleItems.bind(this),
          },
        }),
    });
  }
  unselect_all() {}
  exists(item_code, batch_no) {
    return !!this.frm.doc.items.find(
      (x) => x.item_code === item_code && x.batch_no === batch_no
    );
  }
  update_taxes_and_totals() {}
  update_grand_total() {}
  update_qty_total() {}
  scroll_to_item(item_code) {}
  add_item(item) {}
  reset() {}
}

export function updated_cart(Pos) {
  return makeExtension(
    'updated_cart',
    class PosWithUpdatedCart extends Pos {
      make_cart() {
        this.wrapper.find('.pos').css('min-height', 'calc(100vh - 111px)');
        this.cart = new POSCart({
          frm: this.frm,
          wrapper: this.wrapper.find('.cart-container'),
          events: {
            onPay: () => {
              if (!this.payment) {
                this.make_payment_modal();
              } else {
                this.frm.doc.payments.map((p) => {
                  this.payment.dialog.set_value(p.mode_of_payment, p.amount);
                });
                this.payment.set_title();
              }
              this.payment.open_modal();
            },
            toggleItems: this._toggleItemsArea.bind(this),
          },
        });
      }

      /**
       *
       * @param {string} item_code
       * @param {string} field _qty_ | _serial_no_ | _batch_no_. Possible but unused values - _discount_percentage_, _rate_
       * @param {string | number} value
       * @param {string} _batch_no unused
       */
      async update_item_in_cart(
        item_code,
        field = 'qty',
        value = 1,
        _batch_no
      ) {
        try {
          frappe.dom.freeze();

          const existing = this.frm.doc.items.find(
            (x) => x.item_code === item_code
          );
          if (existing) {
            const qty = existing.qty + 1;
            if (
              (existing.has_batch_no && qty <= existing.actual_batch_qty) ||
              qty <= existing.actual_qty
            ) {
              frappe.model.set_value(existing, { qty });
            } else {
              store.setSelected(existing.name);
              this._toggleItemsArea(false);
            }
          } else {
            const item = await store.addItem(
              Object.assign(
                { item_code },
                ['batch_no', 'serial_no'].includes(field) && { [field]: value }
              )
            );
            if (item.has_batch_no && !item.batch_no) {
              store.setSelected(item.name);
              this._toggleItemsArea(false);
            }
            await store.updateItem(item);
          }
        } finally {
          frappe.dom.unfreeze();
        }
      }
      _toggleItemsArea(state) {
        this.wrapper.find('.item-container').toggle(state);
      }
    }
  );
}