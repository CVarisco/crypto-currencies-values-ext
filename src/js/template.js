import getCurrencySymbol from './utils'

const generateProductListItems = (res) => {
  const templates = res.map(({ data }) => {
    if (res.errors) {
      return `
      <li class="product-list-item">
       <span class="item-title">Error fetching result</span>
     </li>
       `
    }
    return `
    <li class="product-list-item">
      <span class="item-title">${data.base}/${data.currency}</span>
      <div class="item-info">
        <span class="item-value">${data.amount}${getCurrencySymbol(data.currency)}</span>
      </div>
    </li>
    `
  })

  return templates.join('')
}

const generateProduct = (product, res) => `
<li class="product ${product.name.toLowerCase()}">
  <h2 class="product-title"><img class="logo" src="./assets/images/${product.id}.svg" />${
  product.name
}</h2>
  <ul class="product-list-items">
    ${generateProductListItems(res)}
  </ul>
</li>
`

export default generateProduct
