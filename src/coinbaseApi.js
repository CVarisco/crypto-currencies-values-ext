import { Client } from 'coinbase';

const coinbaseClient = (() => {
  const client = new Client();

  const getSpotPrice = (currencyPair) => {
    return new Promise((resolve, reject) => {
      client.getSpotPrice({ currencyPair }, (err, price) => {
        if (err) {
          return reject(err)
        }
        return resolve(price)
      });
    });
  }
})


export default coinbaseClient