const request = require('request')
const { xml2JSON, JSON2Xml, flatten } = require('./utils')

const routes = {
  verify: 'account/verify_credentials.xml',
  search: {
    anime: 'anime/search.xml',
    manga: 'manga/search.xml'
  },
  lists: {
    anime: {
      add: (id) => `animelist/add/${id}.xml`,
      update: (id) => `animelist/update/${id}.xml`,
      delete: (id) => `animelist/delete/${id}.xml`
    },
    manga: {
      add: (id) => `mangalist/add/${id}.xml`,
      update: (id) => `mangalist/update/${id}.xml`,
      delete: (id) => `mangalist/delete/${id}.xml`
    }
  }
}

module.exports = class {
  constructor (credentials) {
    if (!credentials || !credentials.username || !credentials.password) {
      throw new Error('[Mal-Scraper]: Received no credentials or malformed ones.')
    }

    this.setCredentials(credentials)
  }

  /**
   * Allows to (re)set the credentials
   * @param {object} credentials - Object containing a username and a password.
   * @param {string} credentials.username - The username you want to use.
   * @param {string} credentials.password - The password you want to use.
   */
  setCredentials (credentials) {
    if (!credentials || !credentials.username || !credentials.password) {
      throw new Error('[Mal-Scraper]: Received no credentials or malformed ones.')
    } else {
      this._credentials = credentials

      this.req = request.defaults({
        auth: credentials,
        baseUrl: 'https://myanimelist.net/api/'
      })
    }
  }

  /**
   * Allows to check the credentials.
   *
   * @returns {promise}
   */
  checkCredentials () {
    return new Promise((resolve, reject) => {
      this.req.get(routes.verify, (err, res, body) => {
        if (err) {
          reject(err)
          return
        }
        resolve(body)
      })
    })
  }

  /**
   * Allows to search an anime or a manga on MyAnimeList database.
   * @param {string} type - Can be either "anime" or "manga". Defaults to "anime".
   * @param {string} name - The name of the anime or the manga you want to research on.
   *
   * @returns {promise}
   */
  search (type = 'anime', name) {
    return new Promise((resolve, reject) => {
      if (!name) {
        reject(new Error('[Mal-Scraper]: No name to search.'))
        return
      }
      if (!routes.search[type]) {
        reject(new Error('[Mal-Scraper]: Wrong type for research.'))
        return
      }

      this.req.get(routes.search[type], {
        qs: {
          q: name
        }
      }, (err, res, body) => {
        if (err) {
          reject(err)
          return
        }
        resolve(flatten(xml2JSON(body)[type].entry))
      })
    })
  }

  /**
   * Allows to add an anime or a manga on your MyAnimeList lists.
   * @param {object} type - Object specifying support and action to do.
   * @param {string} type.support - Can be either "anime" or "manga". Defaults to "anime".
   * @param {string} type.action - Can be either "add" or "update" or "delete". Defaults to "update".
   * @param {number} id - ID
   * @param {object} opts - Object containing the values your want to enter for this entry.
   * @param {number} opts.episode
   * @param {number|string} opts.status - 1/watching, 2/completed, 3/onhold, 4/dropped, 6/plantowatch
   * @param {number} opts.score
   * @param {number} opts.storage_type - Anime only
   * @param {number} opts.storage_value - Anime only
   * @param {number} opts.times_rewatched - Anime only
   * @param {string} opts.date_start - mmddyyyy
   * @param {string} opts.date_finish - mmddyyyy
   * @param {number} opts.priority
   * @param {number} opts.enable_discussion - 1 = enable, 0 = disable
   * @param {number} opts.enable_rewatching - 1 = enable, 0 = disable - Anime only
   * @param {number} opts.enable_rereading - 1 = enable, 0 = disable - Manga only
   * @param {string} opts.comments
   * @param {string} opts.tags - Tags separated by commas
   * @param {string} opts.retail_volumes - Manga only
   * @param {number} opts.volume - Manga only
   * @param {number} opts.times_reread - Manga only
   * @param {number} opts.reread_value - Manga only
   * @param {string} opts.scan_group - Manga only
   *
   * @returns {promise}
   */
  actOnList (type = { support: 'anime', action: 'update' }, id, opts) {
    return new Promise((resolve, reject) => {
      if (!routes.lists[type.support]) {
        reject(new Error('[Mal-Scraper]: Wrong support type received.'))
        return
      }
      if (!routes.lists[type.support][type.action]) {
        reject(new Error('[Mal-Scraper]: Wrong action type received.'))
        return
      }
      if (!id) {
        reject(new Error('[Mal-Scraper]: No id to for anime|manga add.'))
        return
      }

      this.req.post({
        url: routes.lists[type.support][type.action](id),
        formData: type.action !== 'delete' ? {
          data: JSON2Xml(opts)
        } : {}
      }, (err, res, body) => {
        if (err) {
          reject(err)
          return
        }

        resolve(body)
      })
    })
  }
}
