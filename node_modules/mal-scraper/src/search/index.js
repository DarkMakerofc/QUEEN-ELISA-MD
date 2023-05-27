const axios = require('axios')
const cheerio = require('cheerio')

const {
  trace,
  ROOT_URL,
  BASE_URL,
  availableValues,
  columns,
  lists,
  orderMap
} = require('./constants.js')

/**
 * @typedef {{value: String, name: String}} Genre
 *
 * @typedef {{
 *   sd: Number,
 *   sm: Number,
 *   sy: Number,
 * }} StartDate
 *
 * @typedef {{
 *   ed: Number,
 *   em: Number,
 *   ey: Number,
 * }} EndDate
 *
 * @typedef {{
 *    term: String,
 *    type: Number,
 *    status: Number,
 *    score: Number,
 *    producer: Number,
 *    rating: Number,
 *    startDate: StartDate,
 *    endDate: EndDate,
 *    genreType: Number,
 *    genres: Genre[],
 *    has: Number
 * }} SearchOpts
 */

const getOrderParams = (opts) => {
  const { keys, order = ['DESC', 'DESC'] } = opts

  if (!Array.isArray(keys) || !Array.isArray(order)) throw new Error('Invalid order parameters.')
  if (!keys.length) throw new Error('Invalid order keys.')
  if (order && order.length !== keys.length) throw new Error('Invalid order.')

  return keys.reduce((acc, key, index) => {
    const _order = order[index]

    acc += `o=${encodeURIComponent(orderMap.keys[key])}&w=${encodeURIComponent(orderMap.order[_order])}&`

    return acc
  }, '?')
}

const getParams = (_type, opts) => {
  const {
    term = '',
    type = 0,
    status = 0,
    score = 0,
    producer = 0,
    rating = 0,
    startDate = {},
    endDate = {},
    genreType = 0,
    genres = [],
    has: after
  } = opts

  if (!availableValues.type.map(({ value }) => +value).includes(type)) throw new Error('Invalid Type.')
  if (!availableValues.status.map(({ value }) => +value).includes(status)) throw new Error('Invalid status.')
  if (_type === 'anime' && !availableValues.r.map(({ value }) => +value).includes(rating)) throw new Error('Invalid rating.')

  if (!availableValues.score.includes(score)) throw new Error('Invalid score.')

  if (!availableValues.p[_type].map(({ value }) => +value).includes(producer)) throw new Error('Invalid producer.')

  genres.forEach((genre) => {
    if (genre && !availableValues.genre[_type].map(({ value }) => +value).includes(genre)) throw new Error('Invalid genre.')
  })

  return JSON.parse(JSON.stringify({
    sd: startDate.day || 0,
    sm: startDate.month || 0,
    sy: startDate.year || 0,
    ed: endDate.day || 0,
    em: endDate.month || 0,
    ey: endDate.year || 0,

    c: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],

    gx: genreType === 'exclude' ? 1 : 0,

    q: term,
    p: producer,
    r: _type === 'anime' ? rating : undefined,

    genre: genres,
    type,
    status,
    score,

    show: typeof after === 'number' ? after : undefined
  }))
}

const parsePage = (type, $) => {
  const result = []
  const table = $('#content div.list table tbody tr')

  table.each(function (index) {
    if (index === 0) return

    const entry = {}

    $(this).find('td').each(function (subIndex) {
      if (subIndex === 0) {
        entry.thumbnail = $(this).find('.picSurround > a > img').attr('data-srcset').split(', ')[1].split(' ')[0]
        return
      }

      if (subIndex === 1) {
        $(this).find('a').each(function (_i) {
          if (_i > 1) return

          if (_i === 0) entry.url = $(this).attr('href')
          if (_i === 1) entry.video = $(this).text().trim() !== 'add' ? $(this).attr('href') : null
        })

        entry.shortDescription = $(this).children().last().text()

        entry.title = $(this).find('a strong').text().trim()

        return
      }

      entry[columns[type][subIndex]] = $(this).text().trim()
    })

    result.push(entry)
  })

  return result
}

const hasNext = ($) => {
  // This should be like
  // [1] <a href="...">2</a> <a href="...">3</a> ... <a href="...">20</a>
  const anchor = $('#content > div.normal_header > div').find('span')

  // If last character is a closing bracket, it means that the current page is at the end.
  const hasNext = anchor.text().slice(-1) !== ']'
  let nextUrl = null

  if (hasNext) {
    // Looking for the current page which is between brackets
    const currentPageNumber = anchor.text().match(/\[\d+\]/)

    if (currentPageNumber.length) {
      // Removing brackets and adding one to find next page
      const nextPageNumber = +currentPageNumber[0].slice(1, -1) + 1

      // href is a patial URI missing the website URL.
      nextUrl = ROOT_URL + anchor.find(`a:contains(${nextPageNumber})`).attr('href')
    }
  }

  return { hasNext, nextUrl }
}

const getResults = (type, url, params = {}, maxResult = 50, result = []) => {
  return new Promise((resolve, reject) => {
    axios.get(url, { params })
      .then((res) => {
        const { data } = res
        const $ = cheerio.load(data)
        const next = hasNext($)
        const _result = [...result, ...parsePage(type, $)]

        resolve(
          _result.length < maxResult && next.hasNext
            ? getResults(type, next.nextUrl, {}, maxResult, _result)
            : _result
        )
      })
      .catch(reject)
  })
}

/**
 * Makes a search request based on:
 *  -- https://myanimelist.net/anime.php
 *  -- https://myanimelist.net/manga.php
 *
 * @param {String} type anime | manga
 * @param {SearchOpts} opts
 */
const search = (type, opts) => {
  const params = getParams(type, opts)
  const order = opts.order && getOrderParams(opts.order)

  return getResults(
    type,
    BASE_URL.replace(trace, type) + (order || ''),
    params, opts.maxResults
  )
}

module.exports = {
  search,
  helpers: {
    availableValues,
    producersList: lists.producers,
    genresList: lists.genres,
    orderTypes: Object.keys(orderMap.keys)
  }
}
