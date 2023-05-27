const axios = require('axios')
const cheerio = require('cheerio')
const { getResultsFromSearch } = require('./info.js')

const BASE_URI = 'https://myanimelist.net/anime/'

const malNumberToJsNumber = (malNumber) => {
  if (malNumber) {
    malNumber = malNumber.replace(/\D/gi, '')
    return Number(malNumber)
  }

  return 0
}

const parsePage = ($) => {
  const stats = $('#content table td:nth-child(2) .spaceit_pad')

  const summaryStats = stats.slice(0, 6)
  const scoreStats = stats.slice(6)
  const scoreStatsLength = scoreStats.length
  const result = {}

  summaryStats.each(function (elem) {
    $(this).find('span').remove()
  })

  result.watching = malNumberToJsNumber($(summaryStats[0]).text())
  result.completed = malNumberToJsNumber($(summaryStats[1]).text())
  result.onHold = malNumberToJsNumber($(summaryStats[2]).text())
  result.dropped = malNumberToJsNumber($(summaryStats[3]).text())
  result.planToWatch = malNumberToJsNumber($(summaryStats[4]).text())
  result.total = malNumberToJsNumber($(summaryStats[5]).text())

  scoreStats.each(function (index) {
    result['score' + (scoreStatsLength - index)] = malNumberToJsNumber($(this).find('small').text())
  })

  return result
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

const getStatsFromName = (name) => {
  return new Promise((resolve, reject) => {
    getResultsFromSearch(name)
      .then((items) => {
        const { url } = items[0]

        searchPage(`${encodeURI(url)}/stats`)
          .then((data) => resolve(data))
          .catch(/* istanbul ignore next */(err) => reject(err))
      })
      .catch(/* istanbul ignore next */(err) => reject(err))
  })
}

const getStatsFromNameAndId = (id, name) => {
  return new Promise((resolve, reject) => {
    searchPage(`${BASE_URI}${id}/${encodeURI(name)}/stats`)
      .then((data) => resolve(data))
      .catch(/* istanbul ignore next */(err) => reject(err))
  })
}

const getStats = (obj) => {
  return new Promise((resolve, reject) => {
    if (!obj) {
      reject(new Error('[Mal-Scraper]: No id nor name received.'))
      return
    }

    if (typeof obj === 'object' && !obj[0]) {
      const { id, name } = obj

      if (!id || !name || isNaN(+id) || typeof name !== 'string') {
        reject(new Error('[Mal-Scraper]: Malformed input. ID or name is malformed or missing.'))
        return
      }

      getStatsFromNameAndId(id, name)
        .then((data) => resolve(data))
        .catch(/* istanbul ignore next */(err) => reject(err))
    } else {
      getStatsFromName(obj)
        .then((data) => resolve(data))
        .catch(/* istanbul ignore next */(err) => reject(err))
    }
  })
}

module.exports = {
  getStats
}
