import getCurrencySymbol from './utils'

const generateProductListItem = ({ base, currency, amount }) => `
<li class="product-list-item">
  <span class="item-title">${base}/${currency}</span>
  <div class="item-info">
    <span class="item-value">${amount}${getCurrencySymbol(currency)}</span>
  </div>
</li>
`

const generateProductListItemError = () => `
<li class="product-list-item">
 <span class="item-title">Error fetching result</span>
</li>
`

const generateProductListItems = (res) => {
  const templates = res.map(({ data }) => {
    if (res.errors) {
      return generateProductListItemError()
    }
    return generateProductListItem(data)
  })

  return templates.join('')
}

const generateProduct = (product, res) => `
<li class="product ${product.id}">
  <h2 class="product-title"><img class="logo" src="./assets/images/${product.id}.svg" />${
  product.name
}</h2>
  <ul class="product-list-items">
    ${generateProductListItems(res)}
  </ul>
</li>
`

export default generateProduct
