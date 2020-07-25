export const ENTITIES = [
  {
    doctype: 'Company',
    fields: [
      'company_name',
      // 'abbr',
      // 'change_abbr',
      // 'is_group',
      // 'domain',
      // 'parent_company',
      'default_currency',
      // 'default_letter_head',
      // 'default_holiday_list',
      // 'default_finance_book',
      // 'standard_working_hours',
      // 'default_selling_terms',
      // 'default_buying_terms',
      // 'default_warehouse_for_sales_return',
      // 'country',
      // 'create_chart_of_accounts_based_on',
      // 'chart_of_accounts',
      // 'existing_company',
      // 'tax_id',
      // 'date_of_establishment',
      // 'monthly_sales_target',
      // 'sales_monthly_history',
      // 'transactions_annual_history',
      // 'total_monthly_sales',
      // 'default_bank_account',
      // 'default_cash_account',
      'default_receivable_account',
      // 'round_off_account',
      // 'round_off_cost_center',
      // 'write_off_account',
      // 'discount_allowed_account',
      // 'discount_received_account',
      // 'exchange_gain_loss_account',
      // 'unrealized_exchange_gain_loss_account',
      // 'allow_account_creation_against_child_company',
      // 'default_payable_account',
      // 'default_employee_advance_account',
      // 'default_expense_account',
      // 'default_income_account',
      // 'default_deferred_revenue_account',
      // 'default_deferred_expense_account',
      // 'default_payroll_payable_account',
      // 'default_expense_claim_payable_account',
      // 'cost_center',
      // 'credit_limit',
      // 'payment_terms',
      // 'enable_perpetual_inventory',
      // 'default_inventory_account',
      // 'stock_adjustment_account',
      // 'stock_received_but_not_billed',
      // 'expenses_included_in_valuation',
      // 'accumulated_depreciation_account',
      // 'depreciation_expense_account',
      // 'series_for_depreciation_entry',
      // 'expenses_included_in_asset_valuation',
      // 'disposal_account',
      // 'depreciation_cost_center',
      // 'capital_work_in_progress_account',
      // 'asset_received_but_not_billed',
      // 'exception_budget_approver_role',
      // 'company_logo',
      // 'date_of_incorporation',
      // 'date_of_commencement',
      // 'phone_no',
      // 'fax',
      // 'email',
      // 'website',
      // 'company_description',
      // 'registration_details',
      // 'delete_company_transactions',
      // 'lft',
      // 'rgt',
      // 'old_parent',
    ],
    get_filters: () => ({ name: frappe.defaults.get_user_default('company') }),
  },
  {
    doctype: 'Account',
    fields: [
      // 'disabled',
      'account_name',
      // 'account_number',
      // 'is_group',
      // 'company',
      // 'root_type',
      // 'report_type',
      'account_currency',
      // 'inter_company_account',
      // 'parent_account',
      // 'account_type',
      // 'tax_rate',
      // 'freeze_account',
      // 'balance_must_be',
      // 'lft',
      // 'rgt',
      // 'old_parent',
      // 'include_in_gross',
    ],
    get_filters: () => ({
      disabled: 0,
      company: frappe.defaults.get_user_default('company'),
    }),
  },
  {
    doctype: 'Cost Center',
    fields: [
      'cost_center_name',
      // 'cost_center_number',
      // 'parent_cost_center',
      // 'company',
      // 'is_group',
      // 'disabled',
      // 'lft',
      // 'rgt',
      // 'old_parent',
    ],
    get_filters: () => ({
      disabled: 0,
      company: frappe.defaults.get_user_default('company'),
    }),
  },
  {
    doctype: 'Currency',
    fields: [
      'currency_name',
      // 'enabled',
      // 'fraction',
      // 'fraction_units',
      // 'smallest_currency_fraction_value',
      // 'symbol',
      // 'number_format',
    ],
    get_filters: () => ({ name: frappe.defaults.get_user_default('currency') }),
  },
  {
    doctype: 'Price List',
    fields: [
      'enabled',
      'price_list_name',
      'currency',
      // 'buying',
      // 'selling',
      'price_not_uom_dependent',
    ],
    get_filters: () => ({ selling: 1 }),
  },
  {
    doctype: 'Sales Taxes and Charges Template',
    fields: [
      'title',
      'is_default',
      // 'disabled',
      'company',
      'tax_category',
    ],
    children: [
      {
        doctype: 'Sales Taxes and Charges',
        fields: [
          'charge_type',
          'row_id',
          'account_head',
          'description',
          'included_in_print_rate',
          'cost_center',
          'rate',
          'tax_amount',
          'total',
          'tax_amount_after_discount_amount',
          'base_tax_amount',
          'base_total',
          'base_tax_amount_after_discount_amount',
          'item_wise_tax_detail',
        ],
      },
    ],
    get_filters: () => ({
      disabled: 0,
      company: frappe.defaults.get_user_default('company'),
    }),
  },
  {
    doctype: 'POS Profile',
    fields: [
      // 'naming_series',
      // 'customer',
      // 'company',
      'warehouse',
      // 'company_address',
      // 'px_theme',
      // 'update_stock',
      // 'ignore_pricing_rule',
      'px_theme',
      // 'update_stock',
      // 'ignore_pricing_rule',
      // 'allow_delete',
      // 'allow_user_to_edit_rate',
      // 'allow_user_to_edit_discount',
      // 'allow_print_before_pay',
      // 'display_items_in_stock',
      'px_enable_xz_report',
      'px_use_batch_price',
      'px_disabled_write_off',
      'px_use_local_datastore',
      'print_format_for_online',
      // 'letter_head',
      // 'tc_name',
      // 'select_print_heading',
      'selling_price_list',
      // 'currency',
      // 'write_off_account',
      // 'write_off_cost_center',
      // 'account_for_change_amount',
      // 'income_account',
      // 'expense_account',
      'taxes_and_charges',
      // 'tax_category',
      // 'apply_discount_on',
    ],
    children: [
      {
        doctype: 'POS Profile User',
        fields: ['default', 'user'],
      },
      {
        doctype: 'Sales Invoice Payment',
        fields: ['default', 'mode_of_payment', 'account', 'type'],
      },
      {
        doctype: 'POS Item Group',
        fields: ['item_group'],
      },
      {
        doctype: 'POS Customer Group',
        fields: ['customer_group'],
      },
    ],
    get_filters: () => ({ user: frappe.session.user }),
  },
  {
    doctype: 'Item Group',
    fields: [
      'item_group_name',
      'parent_item_group',
      'is_group',
      'lft',
      'rgt',
      // 'old_parent',
    ],
    children: [
      {
        doctype: 'Item Default',
        fields: [
          'company',
          // 'default_warehouse',
          // 'default_price_list',
          // 'buying_cost_center',
          // 'default_supplier',
          // 'expense_account',
          // 'selling_cost_center',
          // 'income_account',
        ],
      },
      {
        doctype: 'Item Tax',
        fields: ['item_tax_template', 'tax_category', 'valid_from'],
      },
    ],
  },
  {
    doctype: 'Item',
    fields: [
      // 'hub_sync_id',
      // 'naming_series',
      'item_code',
      // 'variant_of',
      // 'item_name',
      // 'item_group',
      // 'gst_hsn_code',
      // 'is_nil_exempt',
      // 'is_non_gst',
      // 'is_item_from_hub',
      // 'stock_uom',
      // 'disabled',
      // 'allow_alternative_item',
      // 'is_stock_item',
      // 'include_item_in_manufacturing',
      // 'opening_stock',
      // 'valuation_rate',
      // 'standard_rate',
      // 'is_fixed_asset',
      // 'auto_create_assets',
      // 'asset_category',
      // 'asset_naming_series',
      // 'over_delivery_receipt_allowance',
      // 'over_billing_allowance',
      // 'image',
      // 'brand',
      // 'description',
      // 'shelf_life_in_days',
      // 'end_of_life',
      // 'default_material_request_type',
      // 'valuation_method',
      // 'warranty_period',
      // 'weight_per_unit',
      // 'weight_uom',
      // 'reorder_levels',
      'has_batch_no',
      // 'create_new_batch',
      // 'batch_number_series',
      // 'has_expiry_date',
      // 'retain_sample',
      // 'sample_quantity',
      'has_serial_no',
      // 'serial_no_series',
      // 'has_variants',
      // 'variant_based_on',
      // 'is_purchase_item',
      // 'purchase_uom',
      // 'min_order_qty',
      // 'safety_stock',
      // 'lead_time_days',
      // 'last_purchase_rate',
      // 'is_customer_provided_item',
      // 'customer',
      // 'delivered_by_supplier',
      // 'country_of_origin',
      // 'customs_tariff_number',
      // 'sales_uom',
      // 'is_sales_item',
      // 'max_discount',
      // 'deferred_revenue_account',
      // 'enable_deferred_revenue',
      // 'no_of_months',
      // 'deferred_expense_account',
      // 'enable_deferred_expense',
      // 'no_of_months_exp',
      // 'inspection_required_before_purchase',
      // 'inspection_required_before_delivery',
      // 'quality_inspection_template',
      // 'default_bom',
      // 'is_sub_contracted_item',
      // 'customer_code',
      // 'default_item_manufacturer',
      // 'default_manufacturer_part_no',
      // 'show_in_website',
      // 'show_variant_in_website',
      // 'route',
      // 'weightage',
      // 'slideshow',
      // 'website_image',
      // 'thumbnail',
      // 'website_warehouse',
      // 'set_meta_tags',
      // 'copy_from_item_group',
      // 'web_long_description',
      // 'website_content',
      // 'total_projected_qty',
      // 'publish_in_hub',
      // 'hub_category_to_publish',
      // 'hub_warehouse',
      // 'synced_with_hub',
    ],
    children: [
      {
        doctype: 'Item Barcode',
        fields: ['barcode'],
      },
      {
        doctype: 'UOM Conversion Detail',
        fields: ['uom', 'conversion_factor'],
      },
      // {
      //   doctype: 'Item Variant Attribute',
      //   fields: [
      //     'variant_of',
      //     'attribute',
      //     'attribute_value',
      //     'numeric_values',
      //     'from_range',
      //     'increment',
      //     'to_range',
      //   ],
      // },
      {
        doctype: 'Item Default',
        fields: [
          'company',
          // 'default_warehouse',
          // 'default_price_list',
          // 'buying_cost_center',
          // 'default_supplier',
          // 'expense_account',
          // 'selling_cost_center',
          // 'income_account',
        ],
      },
      {
        doctype: 'Item Tax',
        fields: ['item_tax_template', 'tax_category', 'valid_from'],
      },
    ],
  },
  {
    doctype: 'Item Price',
    indices: ['item_code'],
    fields: [
      'item_code',
      'uom',
      'packing_unit',
      // 'item_name',
      // 'brand',
      // 'item_description',
      'price_list',
      'customer',
      // 'supplier',
      // 'buying',
      // 'selling',
      // 'currency',
      'price_list_rate',
      'valid_from',
      // 'lead_time_days',
      'valid_upto',
      // 'note',
      // 'reference',
    ],
    get_filters: () => ({ selling: 1 }),
  },
  {
    doctype: 'Batch',
    indices: ['item'],
    fields: [
      'batch_id',
      'item',
      // 'image',
      // 'parent_batch',
      'disabled',
      'manufacturing_date',
      'expiry_date',
      'px_price_list_rate',
      // 'supplier',
      // 'reference_doctype',
      // 'reference_name',
      // 'description',
    ],
    get_filters: () => ({ disabled: 0 }),
  },
  {
    doctype: 'Customer',
    fields: [
      // 'naming_series',
      // 'salutation',
      'customer_name',
      // 'gender',
      // 'customer_type',
      'gst_category',
      'export_type',
      // 'default_bank_account',
      // 'lead_name',
      // 'image',
      // 'account_manager',
      'customer_group',
      'territory',
      'tax_id',
      // 'tax_category',
      // 'so_required',
      // 'dn_required',
      // 'disabled',
      // 'is_internal_customer',
      // 'represents_company',
      'default_currency',
      'default_price_list',
      'language',
      // 'website',
      // 'customer_primary_contact',
      'mobile_no',
      // 'email_id',
      // 'customer_primary_address',
      'primary_address',
      // 'payment_terms',
      // 'customer_details',
      // 'market_segment',
      // 'industry',
      // 'is_frozen',
      'loyalty_program',
      // 'loyalty_program_tier',
      'default_sales_partner',
      'default_commission_rate',
      // 'customer_pos_id',
    ],
    children: [
      { doctype: 'Party Account', fields: ['company', 'account'] },
      {
        doctype: 'Sales Team',
        fields: [
          'sales_person',
          // 'contact_no',
          'allocated_percentage',
          // 'allocated_amount',
          // 'commission_rate',
          // 'incentives',
        ],
      },
    ],
  },
  {
    doctype: 'Territory',
    fields: [
      'territory_name',
      // 'parent_territory',
      // 'is_group',
      // 'territory_manager',
      // 'lft',
      // 'rgt',
      // 'old_parent',
    ],
  },
  {
    doctype: 'Customer Group',
    fields: [
      'customer_group_name',
      // 'parent_customer_group',
      // 'is_group',
      'default_price_list',
      // 'payment_terms',
      // 'lft',
      // 'rgt',
      // 'old_parent',
    ],
    children: [{ doctype: 'Party Account', fields: ['company', 'account'] }],
  },
  {
    doctype: 'Address',
    fields: [
      'address_title',
      // 'address_type',
      // 'address_line1',
      // 'address_line2',
      // 'city',
      // 'county',
      // 'state',
      // 'country',
      // 'pincode',
      // 'email_id',
      // 'phone',
      // 'fax',
      'tax_category',
      'gstin',
      // 'gst_state',
      // 'gst_state_number',
      'is_primary_address',
      // 'is_shipping_address',
      // 'disabled',
      // 'is_your_company_address',
    ],
    children: [
      {
        doctype: 'Dynamic Link',
        indices: ['link_name'],
        fields: [
          'link_doctype',
          'link_name',
          // 'link_title',
        ],
      },
    ],
    get_filters: () => ({
      disabled: 0,
      link_doctype: ['in', ['Company', 'Customer']],
    }),
  },
  {
    doctype: 'Contact',
    fields: [
      'first_name',
      'middle_name',
      'last_name',
      'email_id',
      // 'user',
      // 'address',
      // 'sync_with_google_contacts',
      // 'status',
      'salutation',
      'designation',
      // 'gender',
      'phone',
      'mobile_no',
      // 'company_name',
      // 'image',
      // 'google_contacts',
      // 'google_contacts_id',
      // 'pulled_from_google_contacts',
      'is_primary_contact',
      'department',
      // 'unsubscribed',
    ],
    children: [
      {
        doctype: 'Contact Email',
        fields: ['email_id', 'is_primary'],
      },
      {
        doctype: 'Contact Phone',
        fields: ['phone', 'is_primary_phone', 'is_primary_mobile_no'],
      },
      {
        doctype: 'Dynamic Link',
        indices: ['link_name'],
        fields: [
          'link_doctype',
          'link_name',
          // 'link_title',
        ],
      },
    ],
    get_filters: () => ({ link_doctype: 'Customer' }),
  },
];
