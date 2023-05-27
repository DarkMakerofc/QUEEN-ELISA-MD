const axios = require("axios");
const cheerio = require("cheerio");

/*
 * @BBC - News
 */

const BBC = async () => {
	try {
	  const hasil = [];
	const link = `https://www.bbc.com/indonesia`;
	const res = await axios.get(link, {
		headers: {
			"User-Agent": "Mozilla/5.0 (Linux; Android 9; Redmi 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36"
		}
	});
	const $ = cheerio.load(res.data);
	$('li.e57qer20.bbc-lpu9rr.eom0ln51').each(function(a, b) {
		let berita = $(b).find("p").text();
		let berita_diupload = $(b).find("time").text();
		let berita_url = $(b).find("a").attr("href");
		const result = {
  status: res.status,
  creator: "@dehan_j1ng",
			berita,
			berita_diupload,
			berita_url: "https://www.bbc.com" + berita_url,
		};
		hasil.push(result);
	});
	akhir = hasil.filter(v => v.berita !== "" && v.berita_diupload !== "");
	return akhir;
	} catch (eror404) {
		return "=> Error =>" + eror404;
	}
};

/*
 * @Kumparan.com
 */
const Kumparan_ = async () => {
  try {
const res = await axios.get(`https://m.kumparan.com/channel/news`, {
method: 'GET',
headers: { 
           "User-Agent": "Mozilla/5.0 (Linux; Android 9; Redmi 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36",
         }
})
const hasil = []
const $ = cheerio.load(res.data)
$('div.Viewweb__StyledView-p5eu6e-0.erokzz').each(function(a, b) {
let berita = $(b).find('span.Textweb__StyledText-sc-1fa9e8r-0.jeegbA.CardContentweb__CustomText-sc-1wr516g-0.hpLohH').text().trim()
let berita_url = $(b).find('a').attr('href')
let berita_thumb = $(b).find('div.Imageweb__ImageWrapper-sc-1kvvof-0.eZCymS').attr('style').slice(15).replace(') center center / cover repeat','').replace('fl_progressive,fl_lossy,c_fill,e_blur:80,q_auto:best,w_16,ar_1:1/','')
let berita_diupload = $(b).find('span.Textweb__StyledText-sc-1fa9e8r-0.exBPjh').text().trim().replace(' ',' : ').slice(5)
const result = {
  status: res.status,
  creator: "@dehan_j1ng",
	berita,
	berita_url: 'https://m.kumparan.com' + berita_url,
	berita_thumb,
	berita_diupload
}
hasil.push(result)
})
  return hasil
  } catch (eror404) {
    return "=> Error =>" + eror404
  }
}

/*
 * @iNews TV
 */
const iNewsTV_ = async () => {
  try {
const res = await axios.get(`https://www.inews.id/news`, {
method: 'GET',
headers: { 
           "User-Agent": "Mozilla/5.0 (Linux; Android 9; Redmi 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36",
         }
})
const hasil = []
const $ = cheerio.load(res.data)
$('div.wdtop-row.more-news').each(function (a, b) {
let berita = $(b).find('h2.wdtop-text').text().trim()
let berita_diupload = $(b).find('span.wd-date').text().trim().slice(0, 35)
let berita_jenis = $(b).find('span.wd-date > strong').text().trim()
let berita_url = $(b).find('a').attr('href')
let berita_thumb = $(b).find('div.lazy.wdtop-col-img').attr('data-src')
const result = {
  status: res.status,
  creator: "@dehan_j1ng",
	berita,
	berita_url,
	berita_diupload,
  berita_jenis,
  berita_thumb
}
hasil.push(result)
})
 return hasil
  } catch (eror404) {
    return "=> Error =>" + eror404
  }
}

/*
 * @CNN Indonesia
 */
const CNN_ = async () => {
  try {
const res = await axios.get(`https://www.cnnindonesia.com/`, {
method: 'GET'
})
const hasil = []
const $ = cheerio.load(res.data)
$('article').each(function (a, b) {
let berita = $(b).find('a').attr('href')
let y = $(b).find('img').attr('alt')
let img = $(b).find('img').attr('src')
let jenis = $(b).find('span.date').text().trim()
const result = {
  status: res.status,
  creator: "@dehan_j1ng",
	berita: y,
	berita_url: berita,
	berita_thumb: img
}
hasil.push(result)
})
akhir = hasil.filter(v => v.berita !== undefined && v.berita_url !== undefined && v.berita_thumb !== undefined)
  return akhir
  } catch (eror404) {
    return "=> Error =>" + eror404
  }
}

/*
 * @Metro TV
 */
const metroTV_ = async () => {
  try {
const res = await axios.get(`https://m.metrotvnews.com/news`, {
method: 'GET'
})
const hasil = []
const $ = cheerio.load(res.data)
$('div.item-5-mobile').each(function(a, b) {
let img = $(b).find('img').attr('src')
let title = $(b).find('h2 > a').text().trim()
let berita_url = $(b).find('h2 > a').attr('href')
const result = {
  status: res.status,
  creator: "@dehan_j1ng",
 berita: title,
berita_url: 'https://m.metrotvnews.com' + berita_url,
 berita_thumb: img
}
hasil.push(result)
})
  return hasil
  } catch (eror404) {
    return "=> Error =>" + eror404
  }
}

/*
 * @Tribun News
 */
const Tribun_ = async () => {
  try {
const res = await axios.get(`https://m.tribunnews.com/news`, {
method: 'GET',
headers: { 
           "User-Agent": "Mozilla/5.0 (Linux; Android 9; Redmi 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36",
         }
})
const hasil = []
const $ = cheerio.load(res.data)
$('ul#latestul > li').next().next().next().next().next().next().next().next().next().next().next().each(function(a, b) {
let berita = $(b).find('h3').text().trim()
let berita_url = $(b).find('a').attr('href')
let berita_thumb = $(b).find('img').attr('src')
let berita_jenis = $(b).find('h4 > a').text().trim()
let berita_diupload = $(b).find('time').text().trim()
const result = {
  status: res.status,
  creator: "@dehan_j1ng",
	berita,
	berita_url,
	berita_thumb,
	berita_jenis,
	berita_diupload
}
hasil.push(result)
})
  return hasil
  } catch (eror404) {
    return "=> Error =>" + eror404
  }
}

/*
 * @Dailynews
 */
const DailyNews_ = async () => {
  try {
const res = await axios.get(`https://www.dailynewsindonesia.com/rubrik/news`, {
method: 'GET',
headers: { 
           "User-Agent": "Mozilla/5.0 (Linux; Android 9; Redmi 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36",
         }
})
const hasil = []
const $ = cheerio.load(res.data)
$('div.jeg_posts.jeg_load_more_flag > article').each(function(a, b) {
let berita = $(b).find('h3.jeg_post_title').text().trim()
let berita_url = $(b).find('a').attr('href')
let berita_thumb = $(b).find('img').attr('data-src')
const result = {
  status: res.status,
  creator: "@dehan_j1ng",
	berita,
	berita_url,
	berita_thumb
}
hasil.push(result)
})
  return hasil
  } catch (eror404) {
    return "=> Error =>" + eror404
  }
}

/*
 * @Detik.com
 */
const DetikNews_ = async () => {
  try {
const res = await axios.get(`https://www.detik.com/terpopuler?tag_from=framebar&_ga=2.250751302.1905924499.1623147163-1763618333.1613153099`, {
method: 'GET'
})
const hasil = []
const $ = cheerio.load(res.data)
$('article').each(function (a, b) {
let berita = $(b).find('div > div > h3.media__title > a.media__link').text().trim()
let berita_url = $(b).find('a.media__link').attr('href')
let berita_thumb = $(b).find('img').attr('src').replace('?w=220&q=90','')
let berita_diupload = $(b).find('div.media__date > span').attr('title')
const result = {
  status: res.status,
  creator: "@dehan_j1ng",
	berita,
	berita_url,
	berita_thumb,
	berita_diupload
}
hasil.push(result)
})
  return hasil
  } catch (eror404) {
    return "=> Error =>" + eror404
  }
}

/*
 * @Okezone
 */
const Okezone_ = async() => {
  try {
const res = await axios.get(`https://news.okezone.com/`, {
method: 'GET',
headers: { 
           "User-Agent": "Mozilla/5.0 (Linux; Android 9; Redmi 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36",
         }
})
const hasil = [];
const $ = cheerio.load(res.data);
$('ul.list-berita > div > li').each(function(a, b) {
	$(b).find('div.img').each(function(c, d) {
	$(b).find('h2.title').each(function(e, f) {
let berita = $(f).find('a').text().replace(/\n/g,'')
let berita_thumb = $(d).find('a').attr('data-original')
let berita_url = $(d).find('a').attr('href')
let berita_diupload = $(f).find('span.timego').text().slice(1)
const result = {
  status: res.status,
  creator: "@dehan_j1ng",
	berita,
	berita_url,
	berita_thumb,
	berita_diupload: ' - ' + berita_diupload
};
hasil.push(result);
})
})
})
  return hasil
  } catch (eror404) {
    return "=> Error =>" + eror404
  }
}

/*
 * @CNBC Indonesia
 */
const CNBC_ = async () => {
  try {
const res = await axios.get(`https://www.cnbcindonesia.com/news/indeks/3/1?kanal=3&date=`, {
method: 'GET',
headers: { 
           "User-Agent": "Mozilla/5.0 (Linux; Android 9; Redmi 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36",
         }
})
const hasil = []
const $ = cheerio.load(res.data)
$('article.list__item.clearfix').each(function (a, b) {
let berita = $(b).find('h4').text().trim()
let berita_url = $(b).find('a').attr('href')
let berita_diupload = $(b).find('span.date').text().trim()
let berita_thumb = $(b).find('img').attr('src')
const result = {
  status: res.status,
  creator: "@dehan_j1ng",
	berita,
	berita_url,
	berita_thumb,
	berita_diupload
}
hasil.push(result)
})
  return hasil
  } catch (eror404) {
    return "=> Error =>" + eror404
  }
}

/*
 * @Fajar News
 */
const KoranFajar_ = async () => {
  try {
const res = await axios.get(`https://fajar.co.id/category/nasional/`, {
method: 'GET',
headers: { 
           "User-Agent": "Mozilla/5.0 (Linux; Android 9; Redmi 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36",
         }
})
const hasil = []
const $ = cheerio.load(res.data)
$('article').each(function (a, b) {
let berita = $(b).find('a.txt__3').text().trim()
let berita_url = $(b).find('a').attr('href')
let berita_diupload = $(b).find('span').text().trim()
let berita_jenis = $(b).find('li.post-meta').text().trim()
let berita_thumb = $(b).find('img.img-home.wp-post-image').attr('data-cfsrc')
const result = {
  status: res.status,
  creator: "@dehan_j1ng",
	berita,
	berita_url,
	berita_thumb,
	berita_jenis,
	berita_diupload
}
hasil.push(result)
})
  return hasil
  } catch (eror404) {
    return "=> Error =>" + eror404
  }
}

/*
 * @Kompas.com
 */
const Kompas_ = async () => {
  try {
const res = await axios.get(`https://news.kompas.com/`, {
method: 'GET',
headers: { 
           "User-Agent": "Mozilla/5.0 (Linux; Android 9; Redmi 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36",
         }
})
const hasil = []
const $ = cheerio.load(res.data)
$('ul#latest_content > li.box-shadow-new > div.ListCol').each(function (a, b) {
let berita = $(b).find('h3 > a').text().trim()
let berita_url = $(b).find('a').attr('href')
let berita_thumb = $(b).find('img.lozad').attr('data-src')
let berita_jenis = $(b).find('strong > a').text().trim()
let berita_diupload = $(b).find('div.article__channel').text().trim().slice(11).replace(' - ','')
const result = {
  status: res.status,
  creator: "@dehan_j1ng",
	berita,
	berita_url,
  berita_thumb,
  berita_jenis,
  berita_diupload
}
hasil.push(result)
})
  return hasil
  } catch (eror404) {
    return "=> Error =>" + eror404
  }
}

/*
 * @Koran Sindo
 */
const KoranSindo_ = async () => {
  try {
const res = await axios.get(`https://nasional.sindonews.com/`, {
method: 'GET',
headers: { 
           "User-Agent": "Mozilla/5.0 (Linux; Android 9; Redmi 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36",
         }
})
const hasil = []
const $ = cheerio.load(res.data)
$('div.news').find('ul > li').next().next().next().next().next().next().next().next().next().next().each(function (a, b) {
let berita = $(b).find('div.breaking-title > a').text().trim()
let berita_thumb = $(b).find('div > a > img').attr('src')
let berita_url = $(b).find('div > a').attr('href')
let berita_jenis = $(b).find('div.breaking-title > p').text().trim()
const result = {
  status: res.status,
  creator: "@dehan_j1ng",
	berita,
	berita_jenis,
	berita_url,
	berita_thumb
}
hasil.push(result)
})
  return hasil
  } catch (eror404) {
    return "=> Error =>" + eror404
  }
}

/*
 * @Tempo.com
 */
const TempoNews_ = async () => {
  try {
const res = await axios.get(`https://nasional.tempo.co/`, {
method: 'GET',
headers: { 
           "User-Agent": "Mozilla/5.0 (Linux; Android 9; Redmi 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36",
         }
})
const hasil = [];
const $ = cheerio.load(res.data);
$('div.wrapper.clearfix').each(function(a, b) {
let berita = $(b).find('h2.title').text()
let berita_url = $(b).find('a').attr('href')
let berita_thumb = $(b).find('a > img').attr('src')
let berita_diupload = $(b).find('span').text()
const result = {
  status: res.status,
  creator: "@dehan_j1ng",
	berita,
	berita_url,
	berita_thumb,
	berita_diupload
}
hasil.push(result)
})
akhir = hasil.filter(v => v.berita !== 'POPULER' && v.berita_thumb !== undefined)
  return akhir
  } catch (eror404) {
    return "=> Error =>" + eror404
  }
}

/*
 * @Indozone News
 */
const Indozone_ = async () => {
  try {
const res = await axios.get(`https://www.indozone.id/index`, {
method: 'GET',
headers: { 
           "User-Agent": "Mozilla/5.0 (Linux; Android 9; Redmi 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36",
         }
})
const hasil = [];
const $ = cheerio.load(res.data);
$('ul.news_box.square_box.image-left').each(function(f, d) {
	$(d).find('li').each(function(a, b) {
let berita = $(b).find('h3').text().replace(/\n/g,'').replace(/  /g,'')
let berita_url = $(b).find('a').attr('href')
let berita_thumb = $(b).find('img').attr('src')
let berita_jenis = $(b).find('div.text').text().replace(/\n/g,'').replace(/      /g,'').slice(4).slice(0, 6).replace(/ /g,'')
let berita_diupload= $(b).find('div.info.un-i').text().replace(/\n/g,'').replace(/  /g,'')
const result = {
  status: res.status,
  creator: "@dehan_j1ng",
 berita,
 berita_url,
 berita_thumb,
 berita_diupload,
 berita_jenis
}
hasil.push(result)
})
})
akhir = hasil.filter(v => v.berita_url !== undefined && v.berita_diupload !== '')
  return akhir
  } catch (eror404) {
    return "=> Error =>" + eror404
  }
}

/*
 * @Antara News
 */
const AntaraNews_ = async () => {
  try {
const res = await axios.get(`https://m.antaranews.com/terkini`, {
method: 'GET',
headers: { 
           "User-Agent": "Mozilla/5.0 (Linux; Android 9; Redmi 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36",
         }
})
const hasil = [];
const $ = cheerio.load(res.data);
$('div.row.item').each(function(a, b) {
let berita = $(b).find('h3').text()
let berita_url = $(b).find('a').attr('href')
let berita_jenis = $(b).find('div.meta > a').text()
let berita_diupload = $(b).find('div.meta').text().replace(' -','     ').slice(10).replace(/  /g,'')
let berita_thumb = $(b).find('img').attr('data-src')
const result = {
  status: res.status,
  creator: "@dehan_j1ng",
	berita,
	berita_url,
	berita_thumb,
	berita_jenis,
	berita_diupload
}
hasil.push(result)
})
  return hasil
  } catch (eror404) {
    return "=> Error =>" + eror404
  }
}

/*
 * @Republika News
 */
const Republika_ = async() => {
  try {
const res = await axios.get(`https://m.republika.co.id/kanal/news`, {
method: 'GET',
headers: { 
           "User-Agent": "Mozilla/5.0 (Linux; Android 9; Redmi 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36",
         }
})
const hasil = [];
const $ = cheerio.load(res.data);
$('article').each(function(a, b) {
let berita = $(b).find('h2').text()
let berita_url = $(b).find('a').attr('href')
let berita_jenis = $(b).find('a.nm-kanal').text()
let berita_diupload = $(b).find('span.date').text()
let berita_thumb = $(b).find('img').attr('data-original')
const result = {
  status: res.status,
  creator: "@dehan_j1ng",
	berita,
	berita_url,
	berita_thumb,
	berita_jenis,
	berita_diupload
}
hasil.push(result)
})
akhir = hasil.filter(v => v.berita_thumb !== '')
  return akhir
  } catch (eror404) {
    return "=> Error =>" + eror404
  }
}

/*
 * @Viva.id - News
 */
 
const VIVA_ = async () => {
  try {
   const res = await axios.request(`https://www.viva.co.id/amp/berita`, {
    method: "GET",
    headers: {
      "User-Agent": "Mozilla/5.0 (Linux; Android 9; Redmi 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36"
    }
  });
  let hasil = [];
  const $ = cheerio.load(res.data);
  $("li > div.al-row").each(function(a, b) {
    let berita = $(b).find("a.al-title > h3").text();
    let berita_url = $(b).find("a").attr("href");
    let berita_thumb = $(b).find(".coverimg").attr("src");
    let berita_jenis = $(b).find(".al-cate > h4").text().replace(/[\n|\t|  ]/g,"");
    let berita_diupload = $(b).find("li").eq(1).text();
    const result = {
      berita,
      berita_url,
      berita_thumb,
      berita_jenis,
      berita_diupload
    };
    hasil.push(result);
  });
  var filter = hasil.filter(v => v.berita !== "");
  return filter;
  } catch (error404) {
    return "=> Error => " + error404;
  }
}

/*
 * @Kontan.id - News 
 */

const Kontan_ = async () => {
  try {
   const res = await axios.request(`https://www.kontan.co.id/`, {
    method: "GET",
    headers: {
      "User-Agent": "Mozilla/5.0 (Linux; Android 9; Redmi 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36"
    }
  });
  let hasil = [];
  const $ = cheerio.load(res.data);
  $("div.news-list > ul > li").each(function(a, b) {
    let berita = $(b).find("div.box-news.fleft > a > h1").text();
    let berita_url = $(b).find("a").attr("href");
    let berita_thumb = $(b).find("div.image-thumb").find("img").attr("data-src");
    let berita_jenis = $(b).find("a.link-orange").text();
    let berita_diupload = $(b).find("div.box-news.fleft").text().split(/[|]/g).splice(1).join("").slice(1);
     const result = {
       berita,
       berita_url,
       berita_thumb,
       berita_jenis,
       berita_diupload
     };
     hasil.push(result);
  });
  var filter = hasil.filter(v => v.berita !== "" && v.berita_diupload !== undefined);
  return filter;
  } catch (error404) {
    return "=> Error => " + error404;
  }
}

/*
 * @Merdeka - News 
 */

const Merdeka_ = async () => {
  try {
   const res = await axios.request(`https://m.merdeka.com/`, {
    method: "GET",
    headers: {
      "User-Agent": "Mozilla/5.0 (Linux; Android 9; Redmi 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36"
    }
  });
  let hasil = [];
  const $ = cheerio.load(res.data);
  $("li").find("div.mdk-top-stories-item-container").each(function(a, b) {
    let berita = $(b).find("img.lazy_loaded").attr("title");
    let berita_url = "https://m.merdeka.com" + $(b).find("a").attr("href");
    let berita_thumb = $(b).find("img.lazy_loaded").attr("data-src");
    let berita_diupload = $(b).find("div.time").text();
    const result = {
      status: res.status,
      creator: "@dehan_j1ng",
      berita,
      berita_url,
      berita_thumb,
      berita_diupload
    };
    hasil.push(result);
  });
  var filter = hasil.filter(v => v.berita !== "");
  return filter;
  } catch (error404) {
    return "=> Error => " + error404;
  }
}

module.exports = {
  metroTV_, 
  CNN_, 
  iNewsTV_, 
  Kumparan_, 
  Tribun_, 
  DailyNews_, 
  DetikNews_, 
  Okezone_, 
  CNBC_, 
  KoranFajar_, 
  Kompas_, 
  KoranSindo_, 
  TempoNews_, 
  Indozone_, 
  AntaraNews_, 
  Republika_,
  BBC,
  VIVA_,
  Kontan_,
  Merdeka_
}

/*
 *
 * @dehan_j1ng
 * An Example Api for De-BOTZ
 *
 */