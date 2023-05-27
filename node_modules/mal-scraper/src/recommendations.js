const axios = require('axios')
const cheerio = require('cheerio')
const { getResultsFromSearch } = require('./info.js')

const BASE_URI = 'https://myanimelist.net/anime/'

const parsePage = ($) => {
  const recommendations = $('#content td:nth-child(2) .borderClass table')
  const results = []
  recommendations.each(function () {
    const recommendation = {}
    recommendation.pictureImage = $(this).find('tr td:nth-child(1) .picSurround img').attr('data-src')
    recommendation.animeLink = $(this).find('tr td:nth-child(1) .picSurround a').attr('href')
    recommendation.anime = $(this).find('tr td:nth-child(2) div:nth-child(2) a strong').text().trim()
    recommendation.mainRecommendation = $(this).find('tr td:nth-child(2) .detail-user-recs-text').text().trim()
    recommendation.author = $(this).find('tr td:nth-child(2) > .borderClass .spaceit_pad:nth-child(2) > a').text().trim()
    results.push(recommendation)
  })

  return results
}

const searchPage = (url) => {
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then(({ data }) => {
        const $ = cheerio.load(data)
        const res = parsePage($)
        resolve(res)
      })
      .catch(/* istanbul ignore next */(err) => reject(err))
  })
}

const getRecommendationsFromName = (name) => {
  return new Promise((resolve, reject) => {
    getResultsFromSearch(name)
      .then((items) => {
        const { url } = items[0]

        searchPage(`${encodeURI(url)}/userrecs`)
          .then((data) => resolve(data))
          .catch(/* istanbul ignore next */(err) => reject(err))
      })
      .catch(/* istanbul ignore next */(err) => reject(err))
  })
}

const getRecommendationsFromNameAndId = (id, name = 'anything') => {
  return new Promise((resolve, reject) => {
    searchPage(`${BASE_URI}${id}/${encodeURI(name)}/userrecs`)
      .then((data) => resolve(data))
      .catch(/* istanbul ignore next */(err) => reject(err))
  })
}

const getRecommendationsList = (obj) => {
  return new Promise((resolve, reject) => {
    if (!obj) {
      reject(new Error('[Mal-Scraper]: No id nor name received.'))
      return
    }

    if (typeof obj === 'object' && !obj[0]) {
      const { id, name } = obj

      if (!id || isNaN(+id) || (name && typeof name !== 'string')) {
        reject(new Error('[Mal-Scraper]: Malformed input. ID or name is malformed or missing.'))
        return
      }

      getRecommendationsFromNameAndId(id, name)
        .then((data) => resolve(data))
        .catch(/* istanbul ignore next */(err) => reject(err))
    } else {
      getRecommendationsFromName(obj)
        .then((data) => resolve(data))
        .catch(/* istanbul ignore next */(err) => reject(err))
    }
  })
}

module.exports = {
  getRecommendationsList
}
