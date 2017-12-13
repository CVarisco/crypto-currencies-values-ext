import './popup.css';
import coinbaseApi from './coinbaseApi';

coinbaseApi.getSpotPrice('BTC-EUR').then((price) => {
  console.log(price)
})
