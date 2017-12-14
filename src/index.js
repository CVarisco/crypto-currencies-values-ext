import './popup.css';
import coinbaseApi from './coinbaseApi';
import { generateProduct } from './template';
import { PRODUCTS } from './constants';

coinbaseApi.getSpotPrice('LTC-EUR').then(({ data }) => {
  const productTemplate = generateProduct(data)
  document.getElementById('products').innerHTML = productTemplate;
});
