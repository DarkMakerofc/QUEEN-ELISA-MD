const axios = require('axios')
const cheerio = require('cheerio')

const BASE_URI = 'https://myanimelist.net/profile/'

/**
 * funtction that makes a string in camelCase
 * @param str a string
 * @returns camelCase string
 */
function camelize (str) {
  return str.replace(/^\w|[A-Z]|\b\w/g, function (word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase()
  }).replace(/\s+/g, '')
}

/**
 * Method that it's used to add user's favorites
 * @param $
 * @param res the result object
 * @param fav list of favourites
 * @param i integer for specific favorite
 */
const addFavorites = ($, res, fav, i) => {
  if ($(fav).text() !== '') { // check if there are no favorites
    const favs = []
    fav.each(function () {
      favs.push($(this).text())
    })
    if (i === 1) {
      Object.assign(res, { favoriteAnime: favs })
    } else if (i === 2) {
      Object.assign(res, { favoriteManga: favs })
    } else if (i === 3) {
      Object.assign(res, { favoriteCharacters: favs })
    } else {
      Object.assign(res, { favoritePeople: favs })
    }
  }
}

/* the method that it's used in order to use to parse the page
   and get all the info we want
 */
const parsePage = ($, name) => {
  const pfp = $('#content .user-image img') // getting the profile picture page section
  const statusTitles = $('#content .user-profile .user-status-title') // getting the status titles page section
  const statusData = $('#content .user-profile .user-status-data') // getting the status data page section
  const result = [] // we will put here all the properties of the final object
  // pushing some basic properties and values
  Object.assign(result, { username: name })
  Object.assign(result, { profilePictureLink: $(pfp).attr('data-src').trim() })
  Object.assign(result, { lastOnline: $(statusData[0]).text() })
  statusTitles.each(function (index, status) {
    if ($(status).text() === 'Gender' || $(status).text() === 'Birthday' || $(status).text() === 'Joined' || $(status).text() === 'Location') {
      Object.assign(result, { [camelize($(status).text())]: $(statusData[index]).text() })
    }
  })
  const bio = $('#content .profile-about-user .word-break') // getting the bio page section
  if ($(bio).text() !== '') { // check if there is no bio
    Object.assign(result, { Bio: $(bio).text().replace(/\n\n/g, '').trim().replace(/\n/g, ' ').trim() }) // trim the whitespaces and remove extra newlines
  }
  // getting the text of the stats page section
  const stats = $('#statistics .stat-score').text().replace(/\n\n/g, '').trim().replace(/\n/g, ' ').replace(/\s+/g, ' ').trim()
  // getting the words of the text
  const words = stats.split(' ')
  // pushing the right values
  Object.assign(result, { animeDays: words[1] })
  Object.assign(result, { animeMeanScore: words[4] })
  Object.assign(result, { mangaDays: words[6] })
  Object.assign(result, { mangaMeanScore: words[9] })
  /*
    getting and adding the user's favorites
    anime, manga, characters and people
  */
  const FavoriteAnime = $('#anime_favorites .fs10')
  addFavorites($, result, FavoriteAnime, 1)
  const favMangas = $('#manga_favorites .fs10')
  addFavorites($, result, favMangas, 2)
  const favChars = $('#character_favorites .fs10')
  addFavorites($, result, favChars, 3)
  const favActors = $('.favmore .fs10')
  addFavorites($, result, favActors, 4)
  return result
}

const searchPage = (url, name) => {
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then(({ data }) => {
        const $ = cheerio.load(data)
        const res = parsePage($, name)
        resolve(res)
      })
      .catch(/* istanbul ignore next */(err) => reject(err))
  })
}

const getUserFromName = (name) => {
  return new Promise((resolve, reject) => {
    searchPage(`${BASE_URI}${name}`, name)
      .then((data) => resolve(data))
      .catch(/* istanbul ignore next */(err) => reject(err))
  })
}

// wrapper method to check if @name is actually string
const getUser = (name) => {
  return new Promise((resolve, reject) => {
    if (!name || typeof name !== 'string') {
      reject(new Error('[Mal-Scraper]: Malformed input. Name is malformed or missing.'))
      return
    }

    getUserFromName(name)
      .then((data) => resolve(data))
      .catch(/* istanbul ignore next */(err) => reject(err))
  })
}

module.exports = {
  getUser
}
