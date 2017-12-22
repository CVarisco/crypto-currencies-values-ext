/**
 * Return the symbol of the currency from the text
 * @param {String} textValue currency in text
 * @return {String} textValue currency in text
 */
const getCurrencySymbol = (textValue) => {
  if (textValue === 'EUR') {
    return '&#x20AC;'
  }

  if (textValue === 'USD') {
    return '&#x24;'
  }

  if (textValue === 'GBP') {
    return '&#xa3;'
  }

  return textValue
}

export default getCurrencySymbol
