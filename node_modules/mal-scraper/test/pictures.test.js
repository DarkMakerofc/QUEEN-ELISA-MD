const test = require('ava')
const { getPictures } = require('../src')

const NS = {
  name: 'Ginga Eiyuu Densetsu',
  id: 820
}

test.beforeEach(async t => {
  await new Promise(resolve => setTimeout(resolve, 5000))
})

test('getPictures returns the pictures for Ginga Eiyuu Densetsu with ID and name', async t => {
  try {
    const data = await getPictures({
      name: NS.name,
      id: NS.id
    })

    t.is(typeof data, 'object')
    t.is(data[0].imageLink, 'https://cdn.myanimelist.net/images/anime/8/9568.jpg')
    t.is(data[1].imageLink, 'https://cdn.myanimelist.net/images/anime/13/13225.jpg')
  } catch (e) {
    t.fail()
  }
})

test('getPictures returns the pictures for Ginga Eiyuu Densetsu with name only', async t => {
  try {
    const data = await getPictures(NS.name)

    t.is(typeof data, 'object')
    t.is(data[0].imageLink, 'https://cdn.myanimelist.net/images/anime/8/9568.jpg')
    t.is(data[1].imageLink, 'https://cdn.myanimelist.net/images/anime/13/13225.jpg')
  } catch (e) {
    t.fail()
  }
})

test('getPictures returns an error if called with no arguments', async t => {
  try {
    await getPictures()
  } catch (e) {
    t.true(e.message === '[Mal-Scraper]: No id nor name received.')
  }
})

test('getPictures returns an error if called with malformed object', async t => {
  try {
    await getPictures({ name: NS.name })
  } catch (e) {
    t.true(e.message === '[Mal-Scraper]: Malformed input. ID or name is malformed or missing.')
  }
})
