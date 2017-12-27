/**
 * Should be refactored ASAP
 */

import coinbaseApi from './services/coinbaseApi'
import generateProduct from './templates/products'
import PRODUCTS from './constants/products'

const addProductToHTML = product => (res) => {
  const productTemplate = generateProduct(product, res)
  document.getElementById('products').insertAdjacentHTML('beforeend', productTemplate)
}

function addProduct(products) {
  products.forEach((product) => {
    Promise.all(product.apiCalls).then(addProductToHTML(product))
  })
}

function generateProductStructure() {
  return Object.keys(PRODUCTS).map(productName => ({
    ...PRODUCTS[productName],
    apiCalls: PRODUCTS[productName].currencyPairs.map(currencyPair =>
      coinbaseApi.getSpotPrice(currencyPair)
    ),
  }))
}

function main() {
  const products = generateProductStructure()

  addProduct(products)
}

// TODO: Refactor the logic of FETCH and create products
// I put this bad setTimeout because of this: https://github.com/CVarisco/crypto-chrome-ext/issues/1
window.onload = () => {
  setTimeout(() => {
    main()
  }, 500)
}
