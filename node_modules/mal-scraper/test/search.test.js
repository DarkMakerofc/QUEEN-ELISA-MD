const test = require('ava')
const { search } = require('../src')

test.beforeEach(async t => {
  await new Promise(resolve => setTimeout(resolve, 5000))
})

test('Search.search Checking that the search return the correct number of element', async t => {
  try {
    const data = await search.search('anime', {
      term: 'Sakura',
      maxResults: 100
    })

    t.is(typeof data, 'object')
    t.is(data.length, 100)
  } catch (e) {
    t.fail()
  }
})
