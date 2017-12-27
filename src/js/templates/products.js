import getCurrencySymbol from '../utils'

/**
 * Generate the product item
 * @param {Object} data contains information about the product
 * @return {String} li html element that contains the product info
 */
const generateProductListItem = ({ base, currency, amount }) => `
<li class="product-list-item">
  <span class="item-title">${base}/${currency}</span>
  <div class="item-info">
    <span class="item-value">${amount}${getCurrencySymbol(currency)}</span>
  </div>
</li>
`

/**
 * Generate the product item error
 * @return {String} li html element that contains the item error
 */
const generateProductListItemError = () => `
<li class="product-list-item">
 <span class="item-title">Error fetching result</span>
</li>
`

/**
 * Generate the list of product items
 * @param {Array} res contains all the response from the API
 * @return {String} All the products items generated
 */
const generateProductListItems = (res) => {
  const templates = res.map(({ data }) => {
    if (res.errors) {
      return generateProductListItemError()
    }
    return generateProductListItem(data)
  })

  return templates.join('')
}

/**
 * Generate product item (crypto currency) that contains all the prices
 * @param {Object} product all the informations about the product (crypto currency)
 * @param {Array} res contains all the response from the API
 * @return {String} entiry product template
 */
const generateProduct = (product, res) => `
<li class="product ${product.id}">
  <h2 class="product-title"><img class="logo" src="./assets/images/${product.id}.svg" />
    ${product.name}
  </h2>
  <ul class="product-list-items">
    ${generateProductListItems(res)}
  </ul>
</li>
`

export default generateProduct
