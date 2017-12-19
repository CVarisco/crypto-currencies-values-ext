import coinbaseApi from './coinbaseApi'
import generateProduct from './template'
import PRODUCTS from './constants'

function addProduct(product, res) {
  const productTemplate = generateProduct(product, res)
  document.getElementById('products').insertAdjacentHTML('beforeend', productTemplate)
}

function main() {
  console.log(PRODUCTS)

  const products = Object.keys(PRODUCTS).map(productName => ({
    ...PRODUCTS[productName],
    apiCalls: PRODUCTS[productName].currencyPairs.map(currencyPair =>
      coinbaseApi.getSpotPrice(currencyPair)
    ),
  }))

  products.forEach((product) => {
    Promise.all(product.apiCalls).then((res) => {
      addProduct(product, res)
    })
  })
}

main()
