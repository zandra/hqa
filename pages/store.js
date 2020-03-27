export const reports = [{
  shipping: ['Complete Shipping Report', 'Shipping Destinations', 'Shipping Services', 'Shipping Margin'],
  inventory: ['Inventory Status', 'Inventory Low Stock']
}]

export const wikiNav = [
  {
    key: 'reports',
    title: 'Reports',
    type: 'wiki'
  },
  {
    key: 'im',
    title: 'Products',
    type: 'wiki',
    catalogue: {
      title: 'Product Catalogue'
    },
    inventory: {
      title: 'Inventory Management'
    }
  },
  {
    key: 'carriers',
    title: 'Carrier 101',
    type: 'blog'
  }
]
