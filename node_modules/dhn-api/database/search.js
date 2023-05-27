const axios = require('axios')
const cheerio = require('cheerio')

/*
 * @Layar Kaca 21
 */
 
const layarkaca_ = async (pilem) => {
  if (!pilem) {
    return new TypeError("No Querry Input! Bakaaa >\/\/<")
  }
  try {
const res = await axios.get(`http://149.56.24.226/?s=` + pilem, {
headers: { 
           "cache-control": "no-transform",
           "content-type": "text/html; charset=UTF-8",
           "User-Agent": "Mozilla/5.0 (Linux; Android 9; Redmi 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36",
         }
})
const hasil = []
const $ = cheerio.load(res.data)
$('div.row > div.col-xs-3.col-sm-2.search-poster').each(function (a, b) {
let url = $(b).find('a').attr('href')
let img = $(b).find('img').attr('src').replace('//','')
let title = $(b).find('a').attr('title')
const result = {
  status: res.status,
  creator: "@dehan_j1ng",
	film_title: title,
	film_link: url,
	film_thumb: img,
}
hasil.push(result)
})
  return hasil
  } catch (error404) {
    return new Error("=> Error =>" + error404)
  }
}

/*
 * @Palingmurah.net
 */
 
const palingmurah_ = async (produk) => {
  if (!produk) {
    return new TypeError("No Querry Input! Bakaaa >\/\/<")
  }
  try {
const res = await axios.get(`https://palingmurah.net/pencarian-produk/?term=` + produk)
const hasil = []
const $ = cheerio.load(res.data)
$('div.ui.card.wpj-card-style-2 ').each(function (a, b) {
let url = $(b).find('a.image').attr('href')
let img = $(b).find('img.my_image.lazyload').attr('data-src')
let title = $(b).find('a.list-header').text().trim()
let product_desc = $(b).find('div.description.visible-on-list').text().trim()
let price = $(b).find('div.flex-master.card-job-price.text-right.text-vertical-center').text().trim()
const result = {
  status: res.status,
  creator: "@dehan_j1ng",
	product: title,
	product_desc: product_desc,
	product_image: img,
	product_url: url,
	price
}
hasil.push(result)
})
  return hasil
  } catch (error404) {
    return new Error("=> Error =>" + error404)
  }
}

/*
 * @AminoApps - Search
 */
const Amino_ = async (komu) => {
  if (!komu) {
    return new TypeError("No Querry Input! Bakaaa >\/\/<")
  }
  try {
const res = await axios.get(`https://aminoapps.com/search/community?q=`+ komu, {
method: 'GET',
headers: { 
           "User-Agent": "Mozilla/5.0 (Linux; Android 9; Redmi 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36",
         }
})
const hasil = [];
const $ = cheerio.load(res.data);
$('li.community-item.list-item').each(function(a, b) {
let title = $(b).find('h4.name.font-montserrat-black').text()
let desc = $(b).find('p.tagline').text()
let url = $(b).find('a').attr('href')
let member_count = $(b).find('div.desc > div.member-count').text().replace(/\n/g,'').replace(/  /g,'')
let image = $(b).find('img.logo').attr('src').replace('//','')
const result = {
  status: res.status,
  creator: "@dehan_j1ng",
	community: title,
	community_link: 'https://aminoapps.com' + url,
	community_thumb: image,
	community_desc: desc,
	member_count
}
hasil.push(result)
})
  return hasil
  } catch (error404) {
    return new Error("=> Error =>" + error404)
  }
}

/*
 * @Mangatoon - Search
 */

const Mangatoon = async (search) => {
  if (!search) return "No Querry Input! Bakaa >\/\/<";
  try {
  const res = await axios.get(`https://mangatoon.mobi/en/search?word=${search}`, {
    method: "GET",
    headers: {
      "User-Agent": "Mozilla/5.0 (Linux; Android 9; Redmi 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36"
    }
  });
  const hasil = [];
  const $ = cheerio.load(res.data);
  $('div.recommend-item').each(function(a, b) {
    let comic_name = $(b).find('div.recommend-comics-title > span').text();
    let comic_type = $(b).find('div.comics-type > span').text().slice(1).split(/ /g).join("");
    let comic_url = $(b).find('a').attr('href');
    let comic_thumb = $(b).find('img').attr('src');
    const result = {
      status: res.status,
      creator: "@dehan_j1ng",
      comic_name,
      comic_type,
      comic_url: 'https://mangatoon.mobi' + comic_url,
      comic_thumb
    };
    hasil.push(result);
  });
  let filt = hasil.filter(v => v.comic_name !== undefined && v.comic_type !== undefined);
  return filt;
  } catch (eror404) {
    return "=> Error =>" + eror404;
  }
}

/*
 * @Whatsapp Mods - Search
 */

const WAMods = async (search) => {
  if (!search) return "No Querry Input! Bakaaa >\/\/<";
  try {
  const res = await axios.request(`https://www.whatsappmods.net/search?q=${search}`, {
    method: "GET",
    headers: {
      "User-Agent": "Mozilla/5.0 (Linux; Android 9; Redmi 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36"
    }
  });
  let hasil = [];
  const $ = cheerio.load(res.data);
  $('div.gmr-clearfix').each(function(a, b) {
    let apk_name = $(b).find('h2.post-title.entry-title > a').text();
    let apk_url = $(b).find('a').attr('href');
    let apk_image = $(b).find('img.post-thumbnail').attr('src');
    let apk_desc = $(b).find('div.post-item.entry-content').text().split(/[\n]|-|  /g).join("");
    const result = {
      status: res.status,
      creator: "@dehan_j1ng",
      apk_name,
      apk_url,
      apk_image,
      apk_desc
    };
    hasil.push(result);
  });
  akhir = hasil.filter(v => v.apk_name !== '');
  return akhir;
  } catch (error404) {
    return "=> Error =>" + error404;
  }
}

module.exports = { 
  palingmurah_,
  layarkaca_,
  Amino_,
  Mangatoon,
  WAMods
}

/*
 *
 * @dehan_j1ng
 * An Example Api for De-BOTZ
 *
 */