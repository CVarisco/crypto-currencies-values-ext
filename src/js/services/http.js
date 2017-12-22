import 'whatwg-fetch'

const http = {
  /**
   * HTTP GET method
   * @param {String} url
   * @return {Object} Promise
   */
  get(url) {
    return new Promise((resolve) => {
      fetch(url).then(res => resolve(res.json()))
    })
  },
}

export default http
