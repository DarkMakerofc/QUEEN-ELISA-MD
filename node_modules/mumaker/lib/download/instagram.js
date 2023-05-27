const qs = require('qs')
const cheerio = require('cheerio')
const axios = require('axios')
const {
	default: Axios
} = require('axios')
const cookie = require('cookie')
const fetch = require('node-fetch')
const FormData = require('form-data')


function instagram(url) {
	return new Promise(async (resolve, reject) => {
		axios.request({
				url: 'https://www.instagramsave.com/download-instagram-videos.php',
				method: 'GET',
				headers: {
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
					"cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg"
				}
			})
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const token = $('#token').attr('value')
				let config = {
					headers: {
						'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
						"sec-ch-ua": '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
						"cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg",
						"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
					},
					data: {
						'url': url,
						'action': 'post',
						'token': token
					}
				}
				axios.post('https://www.instagramsave.com/system/action.php', qs.stringify(config.data), {
						headers: config.headers
					})
					.then(({
						data
					}) => {
						resolve(data.medias)
					})
			})
			.catch(reject)
	})
}

module.exports = instagram;