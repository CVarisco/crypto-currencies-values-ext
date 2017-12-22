import http from './http'

const API_BASE_URL = 'http://api.coinbase.com/v2'

const coinbaseClient = {
  /**
   * Get the current market price for bitcoin.
   * This is usually somewhere in between the buy and sell price.
   * @param {String} currencyPair pair of currencies, example BTC-EUR
   * @param {Object} Promise
   */
  getSpotPrice(currencyPair) {
    return http.get(`${API_BASE_URL}/prices/${currencyPair}/spot`)
  },
}

export default coinbaseClient
