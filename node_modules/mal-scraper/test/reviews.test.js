const test = require('ava')
const { getReviewsList } = require('../src')

const NS = {
  name: 'Naruto Shippuuden',
  id: 1735
}

test.beforeEach(async t => {
  await new Promise(resolve => setTimeout(resolve, 5000))
})

test('getReviewsList returns the first review for Naruto Shippuuden with ID and name', async t => {
  try {
    const data = await getReviewsList({
      name: NS.name,
      id: NS.id,
      limit: 40
    })

    t.is(typeof data, 'object')
    t.is(data.length, 40)
    t.is(data[0].author, 'Xyik')
    t.is(data[0].overall, 6)
    t.is(data[0].story, 8)
    t.is(data[0].animation, 7)
    t.is(data[0].sound, 6)
    t.is(data[0].character, 8)
    t.is(data[0].enjoyment, 7)
    t.is(data[20].author, 'husa2004')
    t.is(data[20].overall, 10)
    t.is(data[20].story, 10)
    t.is(data[20].animation, 9)
    t.is(data[20].sound, 9)
    t.is(data[20].character, 9)
    t.is(data[20].enjoyment, 10)
  } catch (e) {
    t.fail()
  }
})

test('getReviewsList returns the second reviews after the first page for Naruto Shippuuden with ID and name', async t => {
  try {
    const data = await getReviewsList({
      name: NS.name,
      id: NS.id,
      limit: 1,
      skip: 21
    })

    t.is(typeof data, 'object')
    t.is(data.length, 1)
    t.is(data[0].author, 'Bluthut')
    t.is(data[0].overall, 9)
    t.is(data[0].story, 9)
    t.is(data[0].animation, 8)
    t.is(data[0].sound, 9)
    t.is(data[0].character, 9)
    t.is(data[0].enjoyment, 10)
  } catch (e) {
    t.fail()
  }
})

test('getReviewsList returns the 20 firsts review base on the name of the anime', async t => {
  try {
    const data = await getReviewsList({
      name: NS.name,
      limit: 40
    })

    t.is(typeof data, 'object')
    t.is(data.length, 40)
    t.is(data[0].author, 'Xyik')
    t.is(data[0].overall, 6)
    t.is(data[0].story, 8)
    t.is(data[0].animation, 7)
    t.is(data[0].sound, 6)
    t.is(data[0].character, 8)
    t.is(data[0].enjoyment, 7)
    t.is(data[20].author, 'husa2004')
    t.is(data[20].overall, 10)
    t.is(data[20].story, 10)
    t.is(data[20].animation, 9)
    t.is(data[20].sound, 9)
    t.is(data[20].character, 9)
    t.is(data[20].enjoyment, 10)
  } catch (e) {
    t.fail()
  }
})
