const test = require('ava')
const nock = require('nock')
const { getInfoFromName, getInfoFromURL, getResultsFromSearch } = require('../src')

const name = 'Sakura Trick'
const url = 'https://myanimelist.net/anime/20047/Sakura_Trick'

test.beforeEach(async t => {
  await new Promise(resolve => setTimeout(resolve, 1500))
})

test('getInfoFromName returns null if no result - static tests', async t => {
  // Static tests
  nock('https://myanimelist.net')
    .get('/search/prefix.json?type=anime&keyword=l')
    .reply(200, { categories: [{ type: 'anime', items: [] }] })

  try {
    const data = await getInfoFromName('l')
    t.is(data, null)

    nock.cleanAll()
  } catch (e) {
    t.fail()
  }
})

test('getInfoFromURL returns valid information for a novel', async t => {
  try {
    const data = await getInfoFromURL('https://myanimelist.net/manga/21479/Sword_Art_Online')

    t.is(typeof data, 'object')
    t.is(data.id, 21479)
    t.is(data.title, 'Sword Art Online')
    t.is(data.englishTitle, 'Sword Art Online')
    t.is(data.japaneseTitle, 'ソードアート・オンライン')
    t.is(data.status, 'Publishing')
    t.is(data.authors[0], 'BUNBUN')
    t.is(data.authors[1], 'Kawahara, Reki')
    t.is(data.type, 'Light Novel')
    t.is(data.synonyms[0], 'S.A.O')
    t.is(data.synonyms[1], 'SAO')
    t.is(data.genres[0], 'Action')
    t.is(data.genres[1], 'Adventure')
    t.is(data.genres[2], 'Fantasy')
    t.is(data.genres[3], 'Romance')
    t.is(data.characters.length, 10)
    t.not(data.characters[0].link, undefined)
    t.not(data.characters[0].picture, undefined)
    t.is(data.characters[0].name, 'Kirigaya, Kazuto')
    t.is(data.characters[0].role, 'Main')
    t.is(data.staff, undefined)
    t.is(data.serialization, 'None')
    t.not(data.synopsis, undefined)
    t.not(data.picture, undefined)
    t.not(data.score, undefined)
    t.not(data.scoreStats, undefined)
    t.not(data.ranked, undefined)
    t.not(data.popularity, undefined)
    t.not(data.members, undefined)
    t.not(data.favorites, undefined)
  } catch (e) {
    t.fail()
  }
})

test('getInfoFromURL returns valid information for an anime that has mix names', async t => {
  try {
    const data = await getInfoFromURL('https://myanimelist.net/anime/30654/Ansatsu_Kyoushitsu_2nd_Season')

    t.is(typeof data, 'object')
    t.is(data.id, 30654)
    t.is(data.title, 'Ansatsu Kyoushitsu 2nd Season')
    t.not(data.synopsis, undefined)
    t.not(data.picture, undefined)
    t.is(data.characters.length, 10)
    t.not(data.characters[0].link, undefined)
    t.not(data.characters[0].picture, undefined)
    t.is(data.characters[0].name, 'Koro-sensei')
    t.is(data.characters[0].role, 'Main')
    t.is(data.staff.length, 4)
    t.not(data.staff[0].link, undefined)
    t.not(data.staff[0].picture, undefined)
    t.is(data.staff[0].name, 'Cook, Justin')
    t.is(data.staff[0].role, 'Producer')
    t.not(data.trailer, undefined)
    t.is(data.englishTitle, 'Assassination Classroom Second Season')
    t.is(data.japaneseTitle, '暗殺教室　第２期')
    t.is(data.synonyms[0], 'Ansatsu Kyoushitsu Season 2')
    t.is(data.synonyms[1], 'Ansatsu Kyoushitsu Final Season')
    t.is(data.type, 'TV')
    t.is(data.episodes, '25')
    t.is(data.aired, 'Jan 8, 2016 to Jul 1, 2016')
    t.is(data.premiered, 'Winter 2016')
    t.is(data.broadcast, 'Fridays at 01:25 (JST)')
    t.is(data.producers.length, 7)
    t.is(data.producers[0], 'Dentsu')
    t.is(data.producers[1], 'Studio Hibari')
    t.is(data.producers[2], 'Fuji TV')
    t.is(data.studios[0], 'Lerche')
    t.is(data.source, 'Manga')
    t.is(data.duration, '23 min. per ep.')
    t.is(data.status, 'Finished Airing')
    t.is(data.rating, 'PG-13 - Teens 13 or older')
    t.is(data.genres.length, 2)
    t.is(data.genres[0], 'Action')
    t.is(data.genres[1], 'Comedy')
    t.not(data.score, undefined)
    t.not(data.scoreStats, undefined)
    t.not(data.ranked, undefined)
    t.not(data.popularity, undefined)
    t.not(data.members, undefined)
    t.not(data.favorites, undefined)
  } catch (e) {
    t.fail()
  }
})

test('getInfoFromURL returns an error if invalid url', async t => {
  try {
    await getInfoFromURL('hello')
  } catch (e) {
    e.message.includes('Invalid Url')
      ? t.pass()
      : t.fail()
  }
})

test('getInfoFromURL returns valid information', async t => {
  try {
    const data = await getInfoFromURL(url)

    t.is(typeof data, 'object')
    t.is(data.title, name)
    t.is(data.characters.length, 10)
    t.is(data.staff.length, 4)
    t.is(data.status, 'Finished Airing')
    t.is(data.studios[0], 'Studio Deen')
    t.not(data.picture, undefined)
  } catch (e) {
    t.fail()
  }
})

test('getInfoFromName returns an error if invalid name', async t => {
  try {
    await getInfoFromName()
  } catch (e) {
    e.message.includes('Invalid name')
      ? t.pass()
      : t.fail()
  }
})

test('getInfoFromName returns valid information', async t => {
  try {
    const data = await getInfoFromName(name)

    t.is(typeof data, 'object')
    t.is(data.title, name)
    t.is(data.characters.length, 10)
    t.is(data.staff.length, 4)
    t.is(data.status, 'Finished Airing')
    t.is(data.studios[0], 'Studio Deen')
  } catch (e) {
    t.fail()
  }
})

test('getInfoFromName returns valid  with not the best match', async t => {
  try {
    const data = await getInfoFromName(name, false)

    t.is(typeof data, 'object')
    t.is(data.title, name)
    t.is(data.characters.length, 10)
    t.is(data.staff.length, 4)
    t.is(data.status, 'Finished Airing')
    t.is(data.studios[0], 'Studio Deen')
  } catch (e) {
    t.fail()
  }
})

test('getInfoFromName returns valid when best match gives no answer', async t => {
  try {
    const data = await getInfoFromName('gakkou gurashi', false)

    t.is(typeof data, 'object')
    t.is(data.title, 'Gakkougurashi!')
    t.is(data.url, 'https://myanimelist.net/anime/24765/Gakkougurashi')
  } catch (e) {
    t.fail()
  }
})

test('getResultsFromSearch returns an error if invalid keyword', async t => {
  try {
    await getResultsFromSearch()
  } catch (e) {
    e.message.includes('[Mal-Scraper]')
      ? t.pass()
      : t.fail()
  }
})

test('getResultsFromSearch returns a valid array', async t => {
  try {
    const data = await getResultsFromSearch(name)

    t.is(typeof data, 'object')
    t.is(data.length, 10)
    t.is(data[0].name, name)
    t.is(data[0].id, 20047)
  } catch (e) {
    t.fail()
  }
})
