const axios = require('axios')

const toCamelCase = (string) => {
  return string
    .split('_')
    .map((chunk, index) => index ? chunk.charAt(0).toUpperCase() + chunk.slice(1) : chunk)
    .join('')
}

const format = (obj) => {
  return Object.keys(obj)
    .reduce((acc, key) => {
      acc[toCamelCase(key)] = obj[key]

      return acc
    }, {})
}

/**
 * Allows to retrieve a user's watch lists and stuff.
 * @param {string} user The name of the user.
 * @param {number} after How many results you already have.
 * @param {string} type Can be either 'anime' or 'manga'
 * @param {number} status Status in the user's watch list (completed, on-hold...)
 *
 * @returns {promise}
 */

const getWatchListFromUser = (user, after = 0, type = 'anime', status = 7) => {
  return new Promise((resolve, reject) => {
    if (!user) {
      reject(new Error('[Mal-Scraper]: No user received.'))
      return
    }

    axios.get(`https://myanimelist.net/${type}list/${user}/load.json`, {
      params: {
        offset: after,
        status
      }
    })
      .then(({ data }) => {
        resolve(data.map(format))
      })
      .catch((err) => reject(err))
  })
}

module.exports = {
  getWatchListFromUser
}
