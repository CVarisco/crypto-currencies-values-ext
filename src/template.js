const generateProduct = (data) => {
  return (`
<li class="product">
  <h2 class="product-title">${data.base}</h2>
  <ul class="product-list-items">
    ${generateProductListItems(data)}
  </ul>
</li>
`)
}

const generateProductListItems = (data) => {
  return (`
 <li class="product-list-item">
  <span class="item-title">${data.base}/${data.currency}</span>
  <div class="item-info">
    <span class="item-value">${data.amount} ${data.currency}</span>
  </div>
</li>
  `)
}

export {
  generateProduct
}