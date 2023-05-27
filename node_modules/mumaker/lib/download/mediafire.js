const qs = require('qs')
const cheerio = require('cheerio')
const axios = require('axios')
const {
	default: Axios
} = require('axios')
const cookie = require('cookie')
const fetch = require('node-fetch')
const FormData = require('form-data')


const mediafire = async (url) => {
	const res = await axios.get(url)
	const $ = cheerio.load(res.data)
	const hasil = []
	const link = $('a#downloadButton').attr('href')
	const size = $('a#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '')
	const seplit = link.split('/')
	const nama = seplit[5]
	mime = nama.split('.')
	mime = mime[1]
	hasil.push({
		nama,
		mime,
		size,
		link
	})
	return hasil
}

module.exports = mediafire;