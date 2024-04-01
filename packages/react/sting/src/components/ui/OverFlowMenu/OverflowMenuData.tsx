export const showcaseList01 = {
  title: "Your subscription has been upgraded to Superior plan.",
  items: [
    {label: "List item", value: "li01", action : "#"},
    {label: "List item", value: "li02", action : () => alert("clicked once")},
    {label: "List item", value: "li03"},
    {label: "List item", value: "li04"}
  ]
};

export const showcaseList02 = {
  title: "Showcase Group 02",
  items: [
    {label: "List item 02", value: "li01"},
    {label: "List item 02", value: "li02"},
    {label: "List item 02", value: "li03"},
    {label: "List item 02", value: "li04"}
  ]
};

export const customerQuickActions = {
  title: "Customer Quick Actions",
  items: [
    {label: "Edit Customer", value: "Edit"},
    {label: "Create New Subscription", value: "New Subscription"},
    {label: "Request Payment Method", value: "Request Payment"},
    {label: "Add Credit Card", value: "Add Card"},
    {label: "Add Billing Info", value: "Add Billing"},
    {label: "Change Auto Collection", value: "Change Auto Collection"},
    {label: "Delete Customer", value: "Delete", className: "alert"},
  ]
};

export const customerReferences = {
  title: "Customer References",
  items: [
    {label: "Associated Subscriptions", value: "Subscriptions"},
    {label: "Associated Invoices", value: "Invoices"},
    {label: "Associated Transactions", value: "Transactions"},
    {label: "Associated Orders", value: "Orders"},
  ]
};
  