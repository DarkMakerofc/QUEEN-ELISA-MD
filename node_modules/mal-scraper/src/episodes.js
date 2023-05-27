const axios = require('axios')
const cheerio = require('cheerio')
const { getResultsFromSearch } = require('./info.js')

const BASE_URI = 'https://myanimelist.net/anime/'

const parsePage = ($) => {
  const allItems = $('tr.episode-list-data')
  const result = []

  // Because MAL shows twice the number of elements for the order
  const items = allItems.slice(0, allItems.length / 2)

  items.each(function (elem) {
    result.push({
      epNumber: +$(this).find('td.episode-number').text().trim(),
      aired: $(this).find('td.episode-aired').text().trim(),
      discussionLink: $(this).find('td.episode-forum > a').attr('href'),
      title: $(this).find('td.episode-title > a').text().trim(),
      japaneseTitle: $(this).find('td.episode-title > span').text().trim()
    })
  })

  return result
}

const searchPage = (url, offset = 0, res = []) => {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: {
        offset
      }
    })
      .then(({ data }) => {
        const $ = cheerio.load(data)

        const tmpRes = parsePage($)
        res = res.concat(tmpRes)

        if (tmpRes.length) {
          searchPage(url, offset + 100, res)
            .then((data) => resolve(data))
            .catch(/* istanbul ignore next */(err) => reject(err))
        } else {
          resolve(res)
        }
      })
      .catch(/* istanbul ignore next */(err) => reject(err))
  })
}

const getEpisodesFromName = (name) => {
  return new Promise((resolve, reject) => {
    getResultsFromSearch(name)
      .then((items) => {
        const { url } = items[0]

        searchPage(`${encodeURI(url)}/episode`)
          .then((data) => resolve(data))
          .catch(/* istanbul ignore next */(err) => reject(err))
      })
      .catch(/* istanbul ignore next */(err) => reject(err))
  })
}

const getEpisodesFromNameAndId = (id, name) => {
  return new Promise((resolve, reject) => {
    searchPage(`${BASE_URI}${id}/${encodeURI(name)}/episode`)
      .then((data) => resolve(data))
      .catch(/* istanbul ignore next */(err) => reject(err))
  })
}

const getEpisodesList = (obj) => {
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

      getEpisodesFromNameAndId(id, name)
        .then((data) => resolve(data))
        .catch(/* istanbul ignore next */(err) => reject(err))
    } else {
      getEpisodesFromName(obj)
        .then((data) => resolve(data))
        .catch(/* istanbul ignore next */(err) => reject(err))
    }
  })
}

module.exports = {
  getEpisodesList
}
