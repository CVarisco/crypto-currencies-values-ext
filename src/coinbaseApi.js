import 'whatwg-fetch'

const API_BASE_URL = "http://api.coinbase.com/v2"

const coinbaseClient = {
  /**
   * Get the current market price for bitcoin. This is usually somewhere in between the buy and sell price.
   * @param {String} currencyPair pair of currencies, example BTC-EUR
   */
  getSpotPrice(currencyPair) {
    return new Promise((resolve, reject) => {
      fetch(`${API_BASE_URL}/prices/${currencyPair}/spot`).then((res) => resolve(res.json()))
    })
  }
}

export default coinbaseClient