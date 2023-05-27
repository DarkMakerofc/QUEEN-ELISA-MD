const fetch = require('node-fetch');
const cheerio = require('cheerio');

const clearRegex = /((\[|\()(?!.*?(remix|edit|remake)).*?(\]|\))|\/+|-+| x |,|"|video oficial|official lyric video| ft.?|\|+|yhlqmdlg|x100pre|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF]|\u274C)/g, clearRegex2 = /  +/g;
const finderLyrics = async function(s){
	s = s.toLowerCase().replace(clearRegex, "").replace(clearRegex2, " ").trim();
	const html = await (0, fetch.default)(`https://www.google.com/search?q=${encodeURIComponent(s)}+lyrics&ie=UTF-8&tob=true`, {}).then((x) => x.textConverted());
	const $ = cheerio.default.load(html);
	let lyrics = $('div[class="hwc"]')
	.find('div[class="BNeawe tAd8D AP7Wnd"]')
	.map((i, value) => {
		return $(value);
	}), name_s = $('span[class="BNeawe tAd8D AP7Wnd"]')?.text(), artist_s = $('span[class="BNeawe s3v9rd AP7Wnd"]').map((i, value) => {
		return $(value);
	}), source_s = $('span[class="uEec3 AP7Wnd"]')?.text(),stat_s = 1,lyrics_s = lyrics[0]?.text(),artists_s = artist_s[1]?.text();
	if (!lyrics?.[0]){ stat_s = 0; name_s = ''; lyrics_s = ''; artists_s = ''; source_s = ''; }

	return {
		stat: stat_s,
		title: name_s,
		artist: artists_s,
		lyrics: lyrics_s,
		source: source_s,
	};
};

module.exports = finderLyrics;
