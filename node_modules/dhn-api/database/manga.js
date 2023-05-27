const axios = require('axios')
const cheerio = require('cheerio')

/*
 * @Komiku-Search
 */
 const Komiku_ = async (manga) => {
   if (!manga) {
     return new TypeError("No Querry Input! Bakaaa >\/\/<");
   } 
	try {
    const res = await axios.request(`https://data3.komiku.id/cari/?post_type=manga&s=${manga}`, {
        method: "GET",
        headers: {
          "User-Agent": "Mozilla/5.0 (Linux; Android 9; Redmi 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36"
        }
    })
const hasil = []
const $ = cheerio.load(res.data)
$('div.bge').each(function (a, b) {
let title = $(b).find('a > h3').text().trim()
let url = $(b).find('a').attr('href')
let desc = $(b).find('p').text().trim()
let img = $(b).find('img').attr('data-src')
let chapter = $(b).find('div.new1 > a').attr('href')
let baru = $(b).find('div.new1 > a').eq(1).attr('href')
const result = {
  status: res.status,
  creator: "@dehan_j1ng",
	manga: title,
	manga_desc: desc,
	manga_url: 'https://data3.komiku.id' + url,
	manga_thumb: img,
	chapter: {
	  pertama: 'https://data3.komiku.id' + chapter,
	  terbaru: 'https://data3.komiku.id' + baru
	}
}
hasil.push(result)
})
return hasil
  } catch (eror404) {
    return "=> Error =>" + eror404
  }
}

/*
 * @Anime-Planet Search
 */
const AnimePlanet_ = async (manga) => {
if (!manga) {
     return new TypeError("No Querry Input! Bakaaa >\/\/<");
   }
  try {
const res = await axios.get(`https://www.anime-planet.com/manga/all?name=` + manga, {
method: 'GET',
headers: { 
           "User-Agent": "Mozilla/5.0 (Linux; Android 9; Redmi 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36",
         }
})
const hasil = [];
const $ = cheerio.load(res.data);
$('li.card').find('a').each(function(a, b) {
let manga_name = $(b).find('h3.cardName').text()
let manga_thumb = $(b).find('div.crop > img').attr('data-src')
let manga_url = $(b).attr('href')
const result = {
  status: res.status,
  creator: "@dehan_j1ng",
	manga_name,
	manga_url: 'https://www.anime-planet.com' + manga_url,
	manga_thumb: 'https://www.anime-planet.com' + manga_thumb,
}
hasil.push(result)
})
  return hasil
  } catch (eror404) {
    return "=> Error =>" + eror404
  }
}

/*
 * @Komik Fox - Search
 */
const KomikFox_ = async(manga) => {
if (!manga) {
     return new TypeError("No Querry Input! Bakaaa >\/\/<");
   } 
  try {
const res = await axios.get(`https://komikfox.web.id/page/1/?s=`+ manga, {
method: 'GET',
headers: { 
           "User-Agent": "Mozilla/5.0 (Linux; Android 9; Redmi 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36",
         }
})
const hasil = [];
const $ = cheerio.load(res.data);
$('div.td_module_10.td_module_wrap.td-animation-stack').each(function(a, b) {
let manga_name = $(b).find('a.td-image-wrap').attr('title')
let manga_url = $(b).find('a').attr('href')
let manga_release = $(b).find('span.td-post-date').text()
let manga_thumb = $(b).find('img').attr('src').replace('//i0.wp.com/','')
const result = {
  status: res.status,
  creator: "@dehan_j1ng",
	manga_name,
	manga_url,
	manga_thumb,
	manga_release
}
hasil.push(result)
})
  return hasil
  } catch (eror404) {
    return "=> Error =>" + eror404
  }
}

/*
 * @Komik Station - Search
 */
const KomikStation_ = async(manga) => {
if (!manga) {
     return new TypeError("No Querry Input! Bakaaa >\/\/<");
   }
  try {
const res = await axios.get(`https://www.komikstation.com/?s=`+ manga, {
method: 'GET',
headers: { 
           "User-Agent": "Mozilla/5.0 (Linux; Android 9; Redmi 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36",
         }
})
const hasil = []
const $ = cheerio.load(res.data);
$('div.bs').each(function(a, b) {
let manga_name = $(b).find('a').attr('title')
let manga_url = $(b).find('a').attr('href')
let manga_thumb = $(b).find('img').attr('src')
let manga_eps = $(b).find('div.epxs').text()
const result = {
  status: res.status,
  creator: "@dehan_j1ng",
	manga_name,
	manga_url,
	manga_thumb,
	manga_eps
}
hasil.push(result)
})
  return hasil
  } catch (eror404) {
    return "=> Error =>" + eror404
  }
}

/*
 * @Mangaku - Search
 */
const Mangakus_ = async (manga) => {
if (!manga) {
     return new TypeError("No Querry Input! Bakaaa >\/\/<");
   }
   try {
let mangasss = manga.replace(/ /g,'+')
const res = await axios.get(`https://mangaku.pro/search/`+ manga, {
headers: { 
           "User-Agent": "Mozilla/5.0 (Linux; Android 9; Redmi 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36",
         }
})
const hasil = [];
const $ = cheerio.load(res.data);
$('div.bs').each(function(a, b) {
let manga_name = $(b).find('div.tt').text().replace(' ','')
let manga_url = $(b).find('a').attr('href')
let manga_thumb = $(b).find('img').attr('data-src')
let manga_rating = $(b).find('span.vts > b').text()
let manga_eps = $(b).find('div.epxs > span').text()
const result = {
  status: res.status,
  creator: "@dehan_j1ng",
	manga_name,
	manga_url,
	manga_thumb,
	manga_eps,
	manga_rating: manga_rating  + ' rate',
}
hasil.push(result)
})
  return hasil
  } catch (eror404) {
    return "=> Error =>" + eror404
  }
}

/*
 * @Kiryuu.id - Search
 */
const Kiryuus_ = async (manga) => {
if (!manga) {
     return new TypeError("No Querry Input! Bakaaa >\/\/<");
   } 
  try {
const res = await axios.get(`https://kiryuu.id/?s=`+ manga, {
method: 'GET',
headers: { 
           "User-Agent": "Mozilla/5.0 (Linux; Android 9; Redmi 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36",
         }
})
const hasil = [];
const $ = cheerio.load(res.data);
$('div.bs').each(function(a, b) {
let manga_name = $(b).find('div.tt').text().replace(' ','')
let manga_url = $(b).find('a').attr('href')
let manga_thumb = $(b).find('img').attr('src')
let manga_rating = $(b).find('div.numscore').text()
let manga_eps = $(b).find('div.epxs').text()
const result = {
  status: res.status,
  creator: "@dehan_j1ng",
	manga_name,
	manga_url,
	manga_thumb,
	manga_eps,
	manga_rating: manga_rating  + ' rate',
}
hasil.push(result)
})
  return hasil
  } catch (eror404) {
    return "=> Error =>" + eror404
  }
}

/*
 * @Kissmanga - Search
 */
const KissM_ = async(manga) => {
if (!manga) {
     return new TypeError("No Querry Input! Bakaaa >\/\/<");
   }
   try {
const res = await axios.get(`https://kissmanga.org/manga_list?q=${manga}&action=search`, {
method: 'GET',
headers: { 
           "User-Agent": "Mozilla/5.0 (Linux; Android 9; Redmi 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36",
         }
})
const hasil = [];
const $ = cheerio.load(res.data);
$('div.listing.full > div').each(function(a, b) {
let manga_name = $(b).find('a.item_movies_link').text()
let manga_url = $(b).find('a.item_movies_link').attr('href')
const result = {
  status: res.status,
  creator: "@dehan_j1ng",
	manga_name,
	manga_url: 'https://kissmanga.org'+ manga_url
}
hasil.push(result)
})
akhir = hasil.filter(v => v.manga_name !== '' && v.manga_url !== undefined)
  return akhir
  } catch (eror404) {
    return "=> Error =>" + eror404
  }
}

/*
 * @Klikmanga - Search
 */
const KlikS_ = async (manga) => {
if (!manga) {
     return new TypeError("No Querry Input! Bakaaa >\/\/<");
   } 
  try {
const res = await axios.get(`https://klikmanga.com/?s=${manga}&post_type=wp-manga`, {
method: 'GET',
headers: { 
           "User-Agent": "Mozilla/5.0 (Linux; Android 9; Redmi 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36",
         }
})
const hasil = [];
const $ = cheerio.load(res.data);
$('div.row.c-tabs-item__content').each(function(a, b) {
let manga_name = $(b).find('h3').text()
let manga_url = $(b).find('a').attr('href')
let manga_thumb = $(b).find('img').attr('src')
let manga_desc = $(b).find('div.post-content_item.mg_alternative').text().slice(1)
let manga_author = $(b).find('div.post-content_item.mg_author').text().slice(1)
let manga_status = $(b).find('div.post-content_item.mg_status').text().slice(1)
let manga_release = $(b).find('div.post-content_item.mg_release').text().slice(1)
let manga_genre = $(b).find('div.post-content_item.mg_genres').text().slice(1)
const result = {
  status: res.status,
  creator: "@dehan_j1ng",
	manga_name,
	manga_url,
	manga_thumb,
	manga_author,
	manga_genre,
	manga_status,
	manga_release,
	manga_desc
}
hasil.push(result)
})
  return hasil
  } catch (eror404) {
    return "=> Error =>" + eror404
  }
}

module.exports = { 
  Komiku_, 
  AnimePlanet_, 
  KomikFox_, 
  KomikStation_, 
  Mangakus_, 
  Kiryuus_,
  KissM_, 
  KlikS_
}

/*
 *
 * @dehan_j1ng
 * An Example Api for De-BOTZ
 *
 */