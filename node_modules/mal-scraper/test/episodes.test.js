const test = require('ava')
const { getEpisodesList } = require('../src')

const drifers = {
  name: 'Drifters',
  id: 31339
}

const NS = {
  name: 'Naruto Shippuuden',
  id: 1735
}

test.beforeEach(async t => {
  await new Promise(resolve => setTimeout(resolve, 5000))
})

test('getEpisodesList returns the right number of episode for Naruto Shippuuden with ID and name', async t => {
  try {
    const data = await getEpisodesList({
      name: NS.name,
      id: NS.id
    })

    t.is(typeof data, 'object')
    t.is(data.length, 250)
    t.is(data[0].title, 'Homecoming')
    t.is(data[100].title, 'Painful Decision')
  } catch (e) {
    t.fail()
  }
})

test('getEpisodesList returns an error if called with no arguments', async t => {
  try {
    await getEpisodesList()
  } catch (e) {
    t.true(e.message === '[Mal-Scraper]: No id nor name received.')
  }
})

test('getEpisodesList returns the right number of episode for Drifters with ID and name', async t => {
  try {
    const data = await getEpisodesList({
      name: drifers.name,
      id: drifers.id
    })

    t.is(typeof data, 'object')
    t.is(data.length, 6)
    t.is(data[0].title, 'Fight Song')
  } catch (e) {
    t.fail()
  }
})

test('getEpisodesList returns an error if called with malformed object', async t => {
  try {
    await getEpisodesList({ name: drifers })
  } catch (e) {
    t.true(e.message === '[Mal-Scraper]: Malformed input. ID or name is malformed or missing.')
  }
})

test('getEpisodesList returns the right number of episode for Drifters with name only', async t => {
  try {
    const data = await getEpisodesList(drifers.name)

    t.is(typeof data, 'object')
    t.is(data.length, 6)
    t.is(data[0].title, 'Fight Song')
  } catch (e) {
    t.fail()
  }
})
