const axios = require('axios')
const cheerio = require('cheerio')

const NEWS_URL_URI = 'https://myanimelist.net/news?p='

/* istanbul ignore next */
const byProperty = (prop) => {
  return (a, b) => {
    return typeof a[prop] === 'number'
      ? (a[prop] - b[prop])
      : (a[prop] < b[prop])
        ? -1
        : (a[prop] > b[prop])
          ? 1
          : 0
  }
}

// 160 news. This is already expensive enough
module.exports = (nbNews = 160) => {
  return new Promise((resolve, reject) => {
    const maxPage = Math.ceil(nbNews / 20) + 1

    const promises = []

    for (let i = 1; i < maxPage; ++i) {
      promises.push(axios.get(`${NEWS_URL_URI}${i}`))
    }

    axios.all(promises)
      .then(axios.spread(function () {
        const result = []

        for (let i = 0; i < maxPage - 1; ++i) {
          const { data } = arguments[`${i}`]
          const $ = cheerio.load(data)

          const pageElements = $('.news-unit-right') // 20 elements

          // Pictures for each element
          const images = []
          $('.image').each(function () {
            images.push($(this).attr('src'))
          })

          // Get links for info
          const links = []
          $('.image-link').each(function () {
            links.push($(this).attr('href'))
          })

          // Gathering news' Titles
          const titles = pageElements.find('p.title').text().split('\n      ')
          titles.shift()
          const texts = pageElements.find('div.text').text().split('\n      ')
          texts.shift()

          for (let i = 0, l = titles.length; i < l; ++i) {
            titles[i] = titles[i].slice(0, -5)
            texts[i] = texts[i].slice(0, -5)
          }

          for (let i = 0, l = titles.length; i < l; ++i) {
            const tmp = links[i].split('/')
            result.push({
              title: titles[i],
              link: links[i],
              image: images[i],
              text: texts[i],
              newsNumber: tmp[tmp.length - 1]
            })
          }
        }

        result.sort(byProperty('newsNumber'))
        result.reverse()
        resolve(result.slice(0, nbNews))
      }))
      .catch(/* istanbul ignore next */(err) => reject(err))
  })
}
