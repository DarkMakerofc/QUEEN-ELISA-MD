const test = require('ava')
const { getRecommendationsList } = require('../src')

const NS = {
  name: 'Bleach',
  id: 269
}

test.beforeEach(async t => {
  await new Promise(resolve => setTimeout(resolve, 5000))
})

test('getRecommendationsList returns the recommendation for Bleach with ID and name', async t => {
  try {
    const data = await getRecommendationsList({
      name: NS.name,
      id: NS.id
    })

    t.is(typeof data, 'object')
    t.is(data[0].author, 'banglaCM')
    t.is(data[0].animeLink, 'https://myanimelist.net/anime/392/Yuu☆Yuu☆Hakusho')
    t.truthy(data[0].pictureImage)
    t.truthy(data[0].mainRecommendation)
    t.is(data[1].author, 'nate23nate23')
    t.is(data[1].anime, 'Naruto: Shippuuden')
    t.is(data[2].author, 'xaynie')
    t.is(data[2].anime, 'Naruto')
    t.is(data[3].anime, 'Jujutsu Kaisen')
  } catch (e) {
    t.fail()
  }
})

test('getRecommendationsList returns the stats for Bleach with name only', async t => {
  try {
    const data = await getRecommendationsList(NS.name)

    t.is(typeof data, 'object')
    t.is(data[0].author, 'Wolf48')
    t.is(data[0].animeLink, 'https://myanimelist.net/anime/4155/One_Piece_Film__Strong_World')
    t.truthy(data[0].pictureImage)
    t.truthy(data[0].mainRecommendation)
    t.is(data[1].author, 'supermegasonic')
    t.is(data[1].anime, 'Naruto: Shippuuden Movie 4 - The Lost Tower')
  } catch (e) {
    t.fail(e)
  }
})

test('getRecommendationsList returns an error if called with no arguments', async t => {
  try {
    await getRecommendationsList()
  } catch (e) {
    t.true(e.message === '[Mal-Scraper]: No id nor name received.')
  }
})

test('getRecommendationsList returns an error if called with malformed object', async t => {
  try {
    await getRecommendationsList({ name: NS.name })
  } catch (e) {
    t.true(e.message === '[Mal-Scraper]: Malformed input. ID or name is malformed or missing.')
  }
})
