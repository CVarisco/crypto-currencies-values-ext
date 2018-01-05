import 'whatwg-fetch'

const http = {
  /**
   * HTTP GET method
   * @param {String} url
   * @return {Object} Promise
   */
  get(url) {
    return  fetch(url).then(res => res.json())
  },
}

export default http
