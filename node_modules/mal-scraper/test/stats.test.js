const test = require('ava')
const { getStats } = require('../src')

const NS = {
  name: 'Ginga Eiyuu Densetsu',
  id: 820
}

test.beforeEach(async t => {
  await new Promise(resolve => setTimeout(resolve, 5000))
})

test('getStats returns the stats for Ginga Eiyuu Densetsu with ID and name', async t => {
  try {
    const data = await getStats({
      name: NS.name,
      id: NS.id
    })

    t.is(typeof data, 'object')
    t.is(typeof data.watching, 'number')
    t.is(typeof data.completed, 'number')
    t.is(typeof data.onHold, 'number')
    t.is(typeof data.dropped, 'number')
    t.is(typeof data.planToWatch, 'number')
    t.is(typeof data.total, 'number')
    t.is(typeof data.score10, 'number')
    t.is(typeof data.score1, 'number')
    t.assert(data.watching > 23000)
    t.assert(data.completed > 47000)
    t.assert(data.onHold > 13000)
    t.assert(data.dropped > 5000)
    t.assert(data.planToWatch > 114000)
    t.assert(data.total > 204000)
    t.assert(data.score10 > 27000)
    t.assert(data.score1 > 1700)
  } catch (e) {
    t.fail()
  }
})

test('getStats returns the stats for Ginga Eiyuu Densetsu with name only', async t => {
  try {
    const data = await getStats(NS.name)

    t.is(typeof data, 'object')
    t.is(typeof data.watching, 'number')
    t.is(typeof data.completed, 'number')
    t.is(typeof data.onHold, 'number')
    t.is(typeof data.dropped, 'number')
    t.is(typeof data.planToWatch, 'number')
    t.is(typeof data.total, 'number')
    t.is(typeof data.score10, 'number')
    t.is(typeof data.score1, 'number')
    t.assert(data.watching > 23000)
    t.assert(data.completed > 47000)
    t.assert(data.onHold > 13000)
    t.assert(data.dropped > 5000)
    t.assert(data.planToWatch > 114000)
    t.assert(data.total > 204000)
    t.assert(data.score10 > 27000)
    t.assert(data.score1 > 1700)
  } catch (e) {
    t.fail()
  }
})

test('getStats returns an error if called with no arguments', async t => {
  try {
    await getStats()
  } catch (e) {
    t.true(e.message === '[Mal-Scraper]: No id nor name received.')
  }
})

test('getStats returns an error if called with malformed object', async t => {
  try {
    await getStats({ name: NS.name })
  } catch (e) {
    t.true(e.message === '[Mal-Scraper]: Malformed input. ID or name is malformed or missing.')
  }
})
