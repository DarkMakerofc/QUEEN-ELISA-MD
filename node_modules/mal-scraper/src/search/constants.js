
const lists = require('./getLists.js')

const trace = '####'
const ROOT_URL = 'https://myanimelist.net'
const BASE_URL = `${ROOT_URL}/${trace}.php`

const availableValues = {
  type: [
    { name: 'none', value: 0 },
    { name: 'tv', value: 1 },
    { name: 'ova', value: 2 },
    { name: 'movie', value: 3 },
    { name: 'special', value: 4 },
    { name: 'ona', value: 5 },
    { name: 'music', value: 6 }
  ],
  status: [
    { name: 'none', value: 0 },
    { name: 'finished', value: 1 },
    { name: 'currently', value: 2 },
    { name: 'not-aired', value: 3 }
  ],
  r: [
    { name: 'none', value: 0 },
    { name: 'G', value: 1 },
    { name: 'PG', value: 2 },
    { name: 'PG-13', value: 3 },
    { name: 'R', value: 4 },
    { name: 'R+', value: 5 },
    { name: 'Rx', value: 6 }
  ],
  score: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  p: lists.producers,
  genre: lists.genres
}

const orderMap = {
  keys: {
    startDate: 2,
    score: 3,
    eps: 4,
    endDate: 5,
    type: 6,
    members: 7,
    rated: 8
  },
  order: {
    DESC: 2,
    ASC: 1
  }
}

const columns = {
  anime: [
    'thumbnail',
    'title',
    'type',
    'nbEps',
    'score',
    'startDate',
    'endDate',
    'members',
    'rating'
  ],
  manga: [
    'thumbnail',
    'title',
    'type',
    'vols',
    'nbChapters',
    'score',
    'startDate',
    'endDate',
    'members'
  ]
}

module.exports = {
  trace,
  ROOT_URL,
  BASE_URL,
  lists,
  availableValues,
  orderMap,
  columns
}
