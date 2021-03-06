# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from . import __version__

app_name = "posx"
app_version = __version__
app_title = "POS X"
app_publisher = "Libermatic"
app_description = "ERPNext POS Extended"
app_icon = "octicon octicon-light-bulb"
app_color = "green"
app_email = "info@libermatic.com"
app_license = "MIT"

fixtures = [
    {
        "doctype": "Custom Field",
        "filters": {
            "fieldname": ("like", "px_%"),
            "dt": (
                "in",
                [
                    "Item",
                    "Batch",
                    "POS Profile",
                    "Payment Entry",
                    "Purchase Invoice Item",
                    "Purchase Receipt Item",
                    "Stock Entry Detail",
                ],
            ),
        },
    },
]

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/posx/css/posx.css"
app_include_js = ["/assets/js/posx.min.js"]

# include js, css files in header of web template
# web_include_css = "/assets/posx/css/posx.css"
# web_include_js = "/assets/posx/js/posx.js"

# include js in page
page_js = {"point-of-sale": "public/includes/point_of_sale.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
# 	"Role": "home_page"
# }

# Website user home page (by function)
# get_website_user_home_page = "posx.utils.get_home_page"

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Installation
# ------------

# before_install = "posx.install.before_install"
# after_install = "posx.install.after_install"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "posx.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# Document Events
# ---------------
# Hook on document methods and events

doc_events = {
    "POS Profile": {"validate": "posx.doc_events.pos_profile.validate",},
    "Purchase Receipt": {
        "before_validate": "posx.doc_events.purchase_receipt.before_validate",
    },
    "Purchase Invoice": {
        "before_validate": "posx.doc_events.purchase_invoice.before_validate",
    },
    "Stock Entry": {"before_validate": "posx.doc_events.stock_entry.before_validate"},
}

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"posx.tasks.all"
# 	],
# 	"daily": [
# 		"posx.tasks.daily"
# 	],
# 	"hourly": [
# 		"posx.tasks.hourly"
# 	],
# 	"weekly": [
# 		"posx.tasks.weekly"
# 	]
# 	"monthly": [
# 		"posx.tasks.monthly"
# 	]
# }

# Testing
# -------

# before_tests = "posx.install.before_tests"

# Overriding Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "posx.event.get_events"
# }
#
# each overriding function accepts a `data` argument;
# generated from the base implementation of the doctype dashboard,
# along with any modifications made in other Frappe apps
# override_doctype_dashboards = {
# 	"Task": "posx.task.get_dashboard_data"
# }

