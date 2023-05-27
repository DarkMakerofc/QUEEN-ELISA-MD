const test = require('ava')
const { getWatchListFromUser } = require('../src')

test.beforeEach(async t => {
  await new Promise(resolve => setTimeout(resolve, 1500))
})

test('getWachListFromUser returns an error if no user given', async t => {
  try {
    await getWatchListFromUser()

    t.fail()
  } catch (e) {
    e.message.includes('[Mal-Scraper]')
      ? t.pass()
      : t.fail()
  }
})

test('getWatchListFromUser returns a valid array with entries', async t => {
  try {
    const data = await getWatchListFromUser('Kylart')

    t.is(typeof data, 'object')
    t.not(data.lists.length, 0)
    t.not(data.stats, undefined)
  } catch (e) {
    console.log(e.message)
    t.fail()
  }
})

test('getWatchListFromUser returns an error if invalid user', async t => {
  try {
    await getWatchListFromUser('thisuserprollyDoesNotExist')

    t.fail()
  } catch (e) {
    t.is(e.response.status, 400)
  }
})
