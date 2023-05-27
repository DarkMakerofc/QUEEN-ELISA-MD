const test = require('ava')
const { getNewsNoDetails } = require('../src')

test.beforeEach(async t => {
  await new Promise(resolve => setTimeout(resolve, 1500))
})

test('getNewsNoDetails returns 160 news entries', async t => {
  try {
    const data = await getNewsNoDetails()

    t.is(data.length, 160)
  } catch (e) {
    console.log(e.message)
    t.fail()
  }
})

test('getNewsNoDetails returns 24 news entries', async t => {
  try {
    const data = await getNewsNoDetails(24)

    t.is(data.length, 24)
  } catch (e) {
    console.log(e.message)
    t.fail()
  }
})

test('getNewsNoDetails returns 18 news entries', async t => {
  try {
    const data = await getNewsNoDetails(18)

    t.is(data.length, 18)
  } catch (e) {
    console.log(e.message)
    t.fail()
  }
})
