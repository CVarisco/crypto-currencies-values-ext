import coinbaseApi from './services/coinbaseApi'
import generateProduct from './templates/products'
import PRODUCTS from './constants/products'

/**
 * Insert on the HTML the generate component template
 * @param {Object} product informations about the product
 * @param {Array} res array of prices from the API 
 */
const addProductToHTML = (product, res) => {
  const productTemplate = generateProduct(product, res)
  document.getElementById('products').insertAdjacentHTML('beforeend', productTemplate)
}

/**
 * Wait the resolve for all the API calls for the singol product 
 * and create the component template
 * @param {Array} products array of object generated on generateProductStrucure
 */
async function addProduct(products) {
  for (const product of products) {
    const result = await Promise.all(product.apiCalls)
    addProductToHTML(product, result)
  }
}

/**
 * Generate a products structure with also the API calls to get prices
 * @return {Array} products Array of object with the Promises to the API prices call
 */
function generateProductStructure() {
  return Object.keys(PRODUCTS).map(productName => ({
    ...PRODUCTS[productName],
    apiCalls: PRODUCTS[productName].currencyPairs.map(currencyPair =>
      coinbaseApi.getSpotPrice(currencyPair)
    ),
  }))
}

(function main() {
  const products = generateProductStructure()

  addProduct(products)
})()