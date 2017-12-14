const generateProduct = (product, res) => {
  return (`
<li class="product">
  <h2 class="product-title">${product.name}</h2>
  <ul class="product-list-items">
    ${generateProductListItems(res)}
  </ul>
</li>
`)
}

const generateProductListItems = (res) => {
  const templates = res.map(({ data }) => {
    if (res.errors) {
      return (`
      <li class="product-list-item">
       <span class="item-title">Error fetching result</span>
     </li>
       `)
    }
    return (`
    <li class="product-list-item">
      <span class="item-title">${data.base}/${data.currency}</span>
      <div class="item-info">
        <span class="item-value">${data.amount} ${data.currency}</span>
      </div>
    </li>
    `)
  });

  return templates.join('');
}

export {
  generateProduct
}