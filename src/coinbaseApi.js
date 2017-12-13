import { Client } from 'coinbase';

const coinbaseClient = (() => {
  const client = new Client({
    apiKey: 'API KEY',
    apiSecret: 'API SECRET',
    strictSSL: false,
  });

  /**
   * 
   * @param {Object} response from the API
   */
  const cleanResponse = (response) => {
    if (response.data) {
      return response.data;
    }
    return response;
  }

  /**
   * Functions that handle all the API from the coinbase lib 
   * @param {Func} resolve 
   * @param {Func} reject 
   */
  const responseHandler = (resolve, reject) => (err, res) => {
    if (err) {
      return reject(err)
    }
    return resolve(cleanResponse(res))
  }

  /**
   * Get the current market price for bitcoin. This is usually somewhere in between the buy and sell price.
   * @param {String} currencyPair pair of currencies, example BTC-EUR
   */
  const getSpotPrice = (currencyPair) => {
    return new Promise((resolve, reject) => {
      client.getSpotPrice({ currencyPair }, responseHandler(resolve, reject));
    });
  }

  return {
    getSpotPrice
  }
})()


export default coinbaseClient