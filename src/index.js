import './popup.css';
import coinbaseApi from './coinbaseApi';

const one = coinbaseApi.getSpotPrice('LTC-EUR');
const two = coinbaseApi.getSpotPrice('BTC-EUR');


Promise.all([one,
  two]).then((data) => { console.log(data) })
