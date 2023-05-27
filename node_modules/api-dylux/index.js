const axios = require('axios')
const cheerio = require('cheerio')
const path = require('path')
const request = require('request')
const qs = require('qs')
const cookie = require('cookie')
const FormData = require('form-data')
const { JSDOM } = require('jsdom')
const fetch = require('node-fetch')
const yts = require('yt-search')
const ytdl = require("ytdl-core")
const { sizeFormatter } = require("human-readable")
const author = "@FG98"

//---
let formatSize = sizeFormatter({
	std: 'JEDEC', decimalPlaces: 2, keepTrailingZeroes: false, render: (literal, symbol) => `${literal} ${symbol}B`
})


//--   BUSCAR Y DESCARGAR STICKERS
const stickersearch = (query) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://getstickerpack.com/stickers?query=${query}`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const source = [];
                const link = [];
                $('#stickerPacks > div > div:nth-child(3) > div > a').each(function(a, b) {
                    source.push($(b).attr('href'))
                })
                axios.get(source[Math.floor(Math.random() * source.length)])
                    .then(({
                        data
                    }) => {
                        const $$ = cheerio.load(data)
                        $$('#stickerPack > div > div.row > div > img').each(function(c, d) {
                            link.push($$(d).attr('src').replace(/&d=200x200/g,''))
                        })
                        result = {
                            status: 200,
                            author: author,
                            title: $$('#intro > div > div > h1').text(),
                            sticker_url: link
                        }
                        resolve(result)
                    })
            }).catch(reject)
    })
}




//- igstalk
async function igStalk(username) {
    try {
        username = username.replace(/^@/, '');
        const html = await (await fetch(`https://dumpor.com/v/${username}`)).text();
        const $$ = cheerio.load(html);

        // Verificar si el usuario existe o no
        const errorTitle = $$('h1.error__title').text().trim();
        if (errorTitle === 'Page not found') {
            throw new Error(`El usuario "${username}" no existe.`);
        }

        const name = $$('div.user__title > a > h1').text().trim();
        const Uname = $$('div.user__title > h4').text().trim();
        const description = $$('div.user__info-desc').text().trim();
        const profilePic = $$('div.user__img').attr('style').match(/url\('(.+)'\)/)[1];
        const row = $$('#user-page > div.container > div > div > div:nth-child(1) > div > a');
        const postsH = row.eq(0).text().replace(/Posts/i, '').trim();
        const followersH = row.eq(2).text().replace(/Followers/i, '').trim();
        const followingH = row.eq(3).text().replace(/Following/i, '').trim();
        const list = $$('ul.list > li.list__item');
        const posts = parseInt(list.eq(0).text().replace(/Posts/i, '').replace(/\s+/g, ''));
        const followers = parseInt(list.eq(1).text().replace(/Followers/i, '').replace(/\s+/g, ''));
        const following = parseInt(list.eq(2).text().replace(/Following/i, '').replace(/\s+/g, ''));
        return {
            name,
            username: Uname,
            description,
            postsH,
            posts,
            followersH,
            followers,
            followingH,
            following,
            profilePic
        };
    } catch (error) {
        console.error(error);
        return { error: error.message };
    }
}

// ttstalk
async function tiktokStalk(user) {
    let res = await axios.get(`https://urlebird.com/user/${user}/`)
    let $ = cheerio.load(res.data)
    const pp_user = $('div[class="col-md-auto justify-content-center text-center"] > img').attr('src')
    const name = $('h1.user').text().trim()
    const username = $('div.content > h5').text().trim()
    const followers = $('div[class="col-7 col-md-auto text-truncate"]').text().trim().split(' ')[1]
    const following = $('div[class="col-auto d-none d-sm-block text-truncate"]').text().trim().split(' ')[1]
    const description = $('div.content > p').text().trim()
    return {
        profile: pp_user,
        name: username, 
        username: name, 
        followers, 
        following, 
        desc: description
     } 
  }

// twitter dl
async function twitter(link) {
	return new Promise((resolve, reject) => {
    let config = {
	'URL': link
     }
axios.post('https://twdown.net/download.php',qs.stringify(config),{
	headers: {
"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
"sec-ch-ua": '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
"cookie": "_ga=GA1.2.1388798541.1625064838; _gid=GA1.2.1351476739.1625064838; __gads=ID=7a60905ab10b2596-229566750eca0064:T=1625064837:RT=1625064837:S=ALNI_Mbg3GGC2b3oBVCUJt9UImup-j20Iw; _gat=1"
	}
})
.then(({ data }) => {
const $ = cheerio.load(data)
resolve({
desc: $('div:nth-child(1) > div:nth-child(2) > p').text().trim(),
thumb: $('div:nth-child(1) > img').attr('src'),
HD: $('tbody > tr:nth-child(1) > td:nth-child(4) > a').attr('href'),
SD: $('tr:nth-child(2) > td:nth-child(4) > a').attr('href'),
audio: 'https://twdown.net/' + $('tr:nth-child(4) > td:nth-child(4) > a').attr('href')
	})
})
	.catch(reject)
	})
}

// Mediafire DL
async function mediafireDl(url) {
	const res = await axios.get(url) 
	const $ = cheerio.load(res.data)
	const hasil = []
	const link = $('a#downloadButton').attr('href')
	const size = $('a#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace(/\n|\s/g, '')
	const sizeN = parseFloat(size.replace(/[^0-9.,]/g, ''))
	const seplit = link.split('/')
	const name = seplit[5]
	const ext = path.extname(name).slice(1);
	hasil.push({ status: 200, author: author, name, size, link, ext, sizeN })
	return hasil[0]
}

// DL Pinterest
async function pinterest(query) {
    const headers = {
      'sec-ch-ua': '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
      'cookie': '_auth=1; _b="AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg="; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
    };
    const url = `https://ar.pinterest.com/search/pins/?autologin=true&q=${query}`;
    const response = await axios.get(url, { headers: headers });
    const results = [];
    const $ = cheerio.load(response.data);
    $('img').each(function () {
      results.push($(this).attr('src'));
    });
    return results;
  }


async function Emoji(emoticon) {
    const emojii = encodeURI(`${emoticon}`)
    const link = await axios.get(`https://emojipedia.org/${emojii}/`)
    const $ = cheerio.load(link.data)
    var apple = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(1) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
    var google = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(2) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
    var samsung = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(3) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
    var microsoft = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(4) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
    var whatsapp = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(5) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
    var twitter = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(6) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
    var facebook = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(7) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
    var jooxpixel = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(8) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
    var openmoji = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(9) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
    var emojidex = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(10) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
    var messager = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(11) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
    var LG = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(12) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
    var HTC = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(13) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
    var mozilla = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(14) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
    var softbank = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(15) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
    var docomo = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(16) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
    var KDDI = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(17) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
    const result = {
        status: 200,
        author: author,
        apple: apple.replace('120', '240'),
        google: google.replace('120', '240'),
        samsung: samsung.replace('120', '240'),
        microsoft: microsoft.replace('120', '240'),
        whatsapp: whatsapp.replace('120', '240'),
        twitter: twitter.replace('120', '240'),
        facebook: facebook.replace('120', '240'),
        jooxPixel: jooxpixel.replace('120', '240'),
        openemoji: openmoji.replace('120', '240'),
        emojidex: emojidex.replace('120', '240'),
        messanger: messager.replace('120', '240'),
        LG: LG.replace('120', '240'),
        HTC: HTC.replace('120', '240'),
        mozilla: mozilla.replace('120', '240'),
        softbank: softbank.replace('120', '240'),
        docomo: docomo.replace('120', '240'),
        KDDI: KDDI.replace('120', '240')
    }
    return result
}

//DL Facebook
async function facebook(url) {
    try {
      const { data } = await axios.post('https://getmyfb.com/process', new URLSearchParams({
        id: decodeURIComponent(url),
        locale: 'en',
      }), {
        headers: {
          accept: '*/*',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          'cache-control': 'no-cache',
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'hx-current-url': 'https://getmyfb.com/',
          'hx-request': 'true',
          'hx-target': 'target',
          'hx-trigger': 'form',
          pragma: 'no-cache',
          Referer: 'https://getmyfb.com/',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
        },
      });
      
      const $ = cheerio.load(data);
      const title = $('.results-item-text')
        .text()
        .replace(/\s{2,}/g, '')
        .replace(/[\t\n]/g, '');
      const urls = [];
      
      $('.results-download > ul > li').each((i, e) => {
        const type = $(e).find('a').attr('download');
        const url = $(e).find('a').attr('href');
        
        if (/hd/i.test(type)) {
          urls.push({ quality: 'HD', url });
        } else if (/sd/i.test(type)) {
          urls.push({ quality: 'SD', url });
        }
      });
      
      if (urls.length === 0) {
        throw new Error('No se encontraron enlaces de descarga');
      }
      
      const hdUrl = urls.find(u => u.quality === 'HD');
      const videoUrl = hdUrl ? hdUrl.url : urls[0].url;
      
      return { title, videoUrl };
    } catch (e) {
      throw new Error(`Error al obtener el video de Facebook: ${e.message}`);
    }
  }
  
// TikTok Dl
function RapidApiInit(url) {
	const _key =
	  "JTJGMCUyRmIlMkY4JTJGMyUyRjglMkY4JTJGYiUyRjclMkY3JTJGNSUyRm0lMkZzJTJGaCUyRjQlMkYwJTJGOCUyRjQlMkY5JTJGOCUyRjYlMkYxJTJGMyUyRjAlMkY4JTJGYiUyRmUlMkY3JTJGMCUyRnAlMkYxJTJGNyUyRmMlMkYwJTJGMyUyRjMlMkZqJTJGcyUyRm4lMkYzJTJGZSUyRjAlMkY4JTJGNSUyRmElMkZkJTJGYyUyRjglMkZlJTJGZiUyRjElMkY=";
	// Attempt to avoid rapidapi detector  :)
	const key = decodeURIComponent(
	  Buffer.from(_key, "base64").toString("ascii")
	).replace(/\//g, "");
	return {
	  headers: {
		"x-rapidapi-key": key,
	  },
	  params: {
		url: url,
		hd: 1,
	  },
	};
  }

  
  async function tiktokdl(url) {
	try {
	  const { data: responseData } = await axios.get(
		"https://tiktok-video-no-watermark2.p.rapidapi.com" + "/",
		RapidApiInit(url)
	  );
  
	  if (!responseData) {
		throw new Error(`No se recibió respuesta del servicio`);
	  }
  
	  if (responseData.code !== 0) {
		throw new Error(responseData.message || `Error en la respuesta del servicio`);
	  }
  
	  const { author, download_count, duration, title, play, wmplay, hdplay, music } =
		responseData?.data || {};
  
	  if (!author || typeof author !== "object") {
		throw new Error(`La respuesta del servicio es inválida`);
	  }
  
	  const minutes = Math.floor(duration / 60);
     const seconds = duration % 60;

	  return {
		nickname: author.nickname,
		unique_id: author.unique_id,
		download_count,
		duration: `${minutes}:${seconds.toString().padStart(2, '0')}`,
		description: title,
		play,
		wmplay,
		hdplay,
		music,
	  };
	} catch (error) {
	  return {
		error: true,
		message: error.message,
		stack: error.stack,
	  };
	}
  }


  //YouTube Dl
async function validar() {
    try {
        const { headers, status } = await axios.get("https://onlinevideoconverter.pro", {
            maxRedirects: 0,
        });
        if (status === 301 || (status === 302 && headers && headers["location"])) {
            return headers["location"];
        } else {
            return "https://onlinevideoconverter.pro";
        }
    } catch (e) {
        const response = e.response;
        return response && response.headers && response.headers.location
            ? response.headers.location
            : "https://onlinevideoconverter.pro";
    }
}

async function youtubedl(url) {
    try {
        const validUrl = await validar();
        const { data } = await axios.request({
            url: "https://onlinevideoconverter.pro".replace(/https:\/\//, "https://api.") +
                "/api/convert",
            method: "POST",
            headers: {
                Accept: "application/json, tex/plain, */*",
                "Content-Type": "application/json",
                referer: validUrl.split("/").slice(0, 3).join("/") + "/",
            },
            data: JSON.stringify({ url }),
        }).catch((e) => e?.response);
        if (data && typeof data === "object") {
            const urls = [];
            for (const _url of data.url) {
                urls.push({
                    url: _url.url,
                    quality: _url.quality || _url.subname,
                    ext: _url.ext || _url.type,
                });
                if (urls.length >= 2) {
                    break;
                }
            }
            return {
                title: data.meta.title,
                source: data.meta.source,
                duration: data.meta.duration,
                thumbnail: data.thumb,
                link: urls,
                mp3: data.mp3Converter,
            };
        }
        else {
            if (data?.code === 102) {
                throw new Error("Probably invalid youtube url.");
            }
            else {
                throw new Error(data?.message || `failed to fetch data from ${"https://onlinevideoconverter.pro"}`);
            }
        }
    }
    catch (e) {
        return {
            error: true,
            message: String(e),
        };
    }
}


//DL Instagram

exports.igdl = async (url_media) => {
    return new Promise(async (resolve,reject)=>{
        const BASE_URL = "https://instasupersave.com/"
        
        //New Session = Cookies
        try {
            const resp = await axios(BASE_URL);
            const cookie = resp.headers["set-cookie"]; // get cookie from request
            const session = cookie[0].split(";")[0].replace("XSRF-TOKEN=","").replace("%3D", "")
            
            //REQUEST CONFIG
            var config = {
                method: 'post',
                url: `${BASE_URL}api/convert`,
                headers: { 
                    'origin': 'https://instasupersave.com', 
                    'referer': 'https://instasupersave.com/pt/', 
                    'sec-fetch-dest': 'empty', 
                    'sec-fetch-mode': 'cors', 
                    'sec-fetch-site': 'same-origin', 
                    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 Edg/107.0.1418.52', 
                    'x-xsrf-token': session, 
                    'Content-Type': 'application/json', 
                    'Cookie': `XSRF-TOKEN=${session}; instasupersave_session=${session}`
                },
                data : {
                    url: url_media
                }
            };

            //REQUEST
            axios(config).then(function (response) {
                let ig = []
                if(Array.isArray(response.data)){
                    response.data.forEach(post => { ig.push(post.sd === undefined ? post.thumb : post.sd.url)})
                } else {
                    ig.push(response.data.url[0].url)    
                }
                
                resolve({
                    results_number : ig.length,
                    url_list: ig
                })
            })
            .catch(function (error) {
                reject(error.message)
            })
        } catch(e){
            reject(e.message)
        }
    })
}
//

// Buscar y descaragar Wallpapers
async function wallpaper(title, page = '1') {
    return new Promise((resolve, reject) => {
        axios.get(`https://www.besthdwallpaper.com/search?CurrentPage=${page}&q=${title}`)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('div.grid-item').each(function (a, b) {
                hasil.push({
                    title: $(b).find('div.info > a > h3').text(),
                    type: $(b).find('div.info > a:nth-child(2)').text(),
                    source: 'https://www.besthdwallpaper.com/'+$(b).find('div > a:nth-child(3)').attr('href'),
                    image: [$(b).find('picture > img').attr('data-src') || $(b).find('picture > img').attr('src'), $(b).find('picture > source:nth-child(1)').attr('srcset'), $(b).find('picture > source:nth-child(2)').attr('srcset')]
                })
            })
            resolve(hasil)
        })
    })
}


async function sfileSearch(query, page = 1) {
	let res = await fetch(`https://sfile.mobi/search.php?q=${query}&page=${page}`)
	let $ = cheerio.load(await res.text())
	let result = []
	$('div.list').each(function () {
		let title = $(this).find('a').text()
		let size = $(this).text().trim().split('(')[1]
		let icon = $(this).find('img').attr('src')
		let link = $(this).find('a').attr('href')
		if (link) result.push({ title, icon, size: size.replace(')', ''), link })
	})
	return result
}

async function sfileDl(url) {
	let res = await fetch(url)
	let $ = cheerio.load(await res.text())
	let filename = $('div.w3-row-padding').find('img').attr('alt')
	let mimetype = $('div.list').text().split(' - ')[1].split('\n')[0]
	let filesize = $('#download').text().replace(/Download File/g, '').replace(/\(|\)/g, '').trim()
	let download = $('#download').attr('href') + '&k=' + Math.floor(Math.random() * (15 - 10 + 1) + 10)
	return { filename, filesize, mimetype, download }
}


//--- google drive
 async function gdrivedl(url) {
	let id
	if (!(url && url.match(/drive\.google/i))) throw 'Invalid URL'
	id = (url.match(/\/?id=(.+)/i) || url.match(/\/d\/(.*?)\//))[1]
	if (!id) throw 'ID Not Found'
	let res = await fetch(`https://drive.google.com/uc?id=${id}&authuser=0&export=download`, {
		method: 'post',
		headers: {
			'accept-encoding': 'gzip, deflate, br',
			'content-length': 0,
			'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
			'origin': 'https://drive.google.com',
			'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
			'x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=',
			'x-drive-first-party': 'DriveWebUi',
			'x-json-requested': 'true' 
		}
	})
	let { fileName, sizeBytes, downloadUrl } =  JSON.parse((await res.text()).slice(4))
	if (!downloadUrl) throw 'Límite de descarga del link'
	let data = await fetch(downloadUrl)
	if (data.status !== 200) throw data.statusText
	return { downloadUrl, fileName, fileSize: formatSize(sizeBytes), mimetype: data.headers.get('content-type') }
}



/// Buscar en XVIDEOS 
async function xvideosSearch(url) {
    return new Promise(async (resolve) => {
     await axios.request(`https://www.xvideos.com/?k=${url}&p=${Math.floor(Math.random() * 9) +1}`, {method: "get"}).then(async result => {
    let $ = cheerio.load(result.data, {xmlMod3: false});
    let title = [];
    let duration = [];
    let quality = [];
    let url = [];
    let thumb = [];
    let hasil = [];
  
    $("div.mozaique > div > div.thumb-under > p.title").each(function(a,b){
      title.push($(this).find("a").attr("title"));
      duration.push($(this).find("span.duration").text());
      url.push("https://www.xvideos.com"+$(this).find("a").attr("href"));
    });
    $("div.mozaique > div > div.thumb-under").each(function(a,b){
      quality.push($(this).find("span.video-hd-mark").text());
    });
    $("div.mozaique > div > div > div.thumb > a").each(function(a,b){
      thumb.push($(this).find("img").attr("data-src"));
    });
    for(let i=0; i < title.length; i++){
      hasil.push({
        title: title[i],
        duration: duration[i],
        quality: quality[i],
        thumb: thumb[i],
        url: url[i]
      });
    }
    resolve(hasil);
  });
  });
  };
  

  // descargar de xvideos
   async function xvideosdl(url) {
    return new Promise((resolve, reject) => {
		fetch(`${url}`, {method: 'get'})
		.then(res => res.text())
		.then(res => {
			let $ = cheerio.load(res, {
				xmlMode: false
			});

    //let $ = cheerio.load(result.data, {xmlMod3: false});

     const title = $("meta[property='og:title']").attr("content")
     const keyword = $("meta[name='keywords']").attr("content")
     const views = $("div#video-tabs > div > div > div > div > strong.mobile-hide").text()+" views"
     const vote = $("div.rate-infos > span.rating-total-txt").text()
     const likes = $("span.rating-good-nbr").text()
     const deslikes = $("span.rating-bad-nbr").text()
     const thumb = $("meta[property='og:image']").attr("content")
     const url = $("#html5video > #html5video_base > div > a").attr("href")
    
    resolve({
        status: 200,
        result: {
            title,
            url,
            keyword,
            views,
            vote,
            likes,
            deslikes,
            thumb
        }
    })
})
})
};


///   descargar de XNXX
async function xnxxdl(URL) { 
  try {
    const res = await fetch(URL);
    const html = await res.text();
    const $ = cheerio.load(html);

    const title = $('meta[property="og:title"]').attr('content');
    const duration = $("span.metadata").text().replace(/\n/gi, "").split("\t\t\t\t\t")[1].split(/-/)[0];
    const quality = $("span.metadata").text().trim().split("- ")[1].replace(/\t\t\t\t\t/, "");
    const image = $('meta[property="og:image"]').attr('content');
    const videoType = $('meta[property="og:video:type"]').attr('content');
    const videoWidth = $('meta[property="og:video:width"]').attr('content');
    const videoHeight = $('meta[property="og:video:height"]').attr('content');
    const info = $('span.metadata').text();
    const videoScript = $('#video-player-bg > script:nth-child(6)').html();

    const files = {
      low: (videoScript.match('html5player.setVideoUrlLow\\(\'(.*?)\'\\);') || [])[1],
      high: videoScript.match('html5player.setVideoUrlHigh\\(\'(.*?)\'\\);' || [])[1],
      HLS: videoScript.match('html5player.setVideoHLS\\(\'(.*?)\'\\);' || [])[1],
      thumb: videoScript.match('html5player.setThumbUrl\\(\'(.*?)\'\\);' || [])[1],
      thumb69: videoScript.match('html5player.setThumbUrl169\\(\'(.*?)\'\\);' || [])[1],
      thumbSlide: videoScript.match('html5player.setThumbSlide\\(\'(.*?)\'\\);' || [])[1],
      thumbSlideBig: videoScript.match('html5player.setThumbSlideBig\\(\'(.*?)\'\\);' || [])[1],
    };

    return {
      status: 200,
      result: {
        title,
        URL,
        duration,
        quality,
        image,
        videoType,
        videoWidth,
        videoHeight,
        info,
        files
      }
    };
  } catch (error) {
    throw { code: 503, status: false, result: error };
  }
}

//  buscar en xnxx
async function xnxxSearch(query) {
  const baseurl = 'https://www.xnxx.com';
  const res = await fetch(`${baseurl}/search/${query}/${Math.floor(Math.random() * 3) + 1}`, { method: 'get' });
  const html = await res.text();
  const $ = cheerio.load(html, { xmlMode: false });

  let results = [];
  $('div.mozaique').each(function (a, b) {
    const urls = $(b).find('div.thumb a').map((c, d) => baseurl + $(d).attr('href').replace('/THUMBNUM/', '/')).get();
    const titles = $(b).find('div.thumb-under a').map((c, d) => $(d).attr('title')).get();
    for (let i = 0; i < urls.length; i++) {
      results.push({
        title: titles[i],
        link: urls[i]
      });
    }
  });

  return {
    code: 200,
    status: true,
    result: results
  };
}

// TTP letra de color
async function ttp(text, tcolor = "30F4EF") {
    return new Promise((resolve, reject) => {
            const options = {
                method: 'POST',
                url: `https://www.picturetopeople.org/p2p/text_effects_generator.p2p/transparent_text_effect`,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
                    "Cookie": "_ga=GA1.2.1667267761.1655982457; _gid=GA1.2.77586860.1655982457; __gads=ID=c5a896288a559a38-224105aab0d30085:T=1655982456:RT=1655982456:S=ALNI_MbtHcmgQmVUZI-a2agP40JXqeRnyQ; __gpi=UID=000006149da5cba6:T=1655982456:RT=1655982456:S=ALNI_MY1RmQtva14GH-aAPr7-7vWpxWtmg; _gat_gtag_UA_6584688_1=1"
                },
                formData: {
                    'TextToRender': text,
                    'FontSize': '100',
                    'Margin': '30',
                    'LayoutStyle': '0',
                    'TextRotation': '0',
                    'TextColor': `${tcolor}`,
                    'TextTransparency': '0',
                    'OutlineThickness': '3',
                    'OutlineColor': '000000',
                    'FontName': 'Lekton',
                    'ResultType': 'view'
                }
            };
            request(options, async function(error, response, body) {
                if (error) throw new Error(error)
                const $ = cheerio.load(body)
                const result = 'https://www.picturetopeople.org' + $('#idResultFile').attr('value')
                resolve({ status: 200, result: result })
            });
        })
}

//  SSWEB Tomar captura de pantalla a una web
 async function sswebA(url = '', full = false, type = 'desktop') {
	type = type.toLowerCase()
	if (!['desktop', 'tablet', 'phone'].includes(type)) type = 'desktop'
	let form = new URLSearchParams()
	form.append('url', url)
	form.append('device', type)
	if (!!full) form.append('full', 'on')
	form.append('cacheLimit', 0)
	let res = await axios({
		url: 'https://www.screenshotmachine.com/capture.php',
		method: 'post',
		data: form
	})
	let cookies = res.headers['set-cookie']
	let buffer = await axios({
		url: 'https://www.screenshotmachine.com/' + res.data.link,
		headers: {
			'cookie': cookies.join('')
		},
		responseType: 'arraybuffer' 
	})
	return Buffer.from(buffer.data)
}

async function lyrics(search) {
  const searchUrl = `https://www.musixmatch.com/search/${search}`;
  const searchResponse = await axios.get(searchUrl);
  const searchHtml = searchResponse.data;
  const $ = cheerio.load(searchHtml);

  const link = $('div.media-card-body > div > h2').find('a').attr('href');
  const lyricsUrl = `https://www.musixmatch.com${link}`;
  const lyricsResponse = await axios.get(lyricsUrl);
  const lyricsHtml = lyricsResponse.data;
  const $$ = cheerio.load(lyricsHtml);

  const thumb = $$('div.col-sm-1.col-md-2.col-ml-3.col-lg-3.static-position > div > div > div').find('img').attr('src');
  const lyrics1 = $$('div.col-sm-10.col-md-8.col-ml-6.col-lg-6 > div.mxm-lyrics > span > p > span').text().trim();
  const lyrics2 = $$('div.col-sm-10.col-md-8.col-ml-6.col-lg-6 > div.mxm-lyrics > span > div > p > span').text().trim();
  const title = $$('#site > div > div > div > main > div > div > div.mxm-track-banner.top > div > div > div').find('div.col-sm-10.col-md-8.col-ml-9.col-lg-9.static-position > div.track-title-header > div.mxm-track-title > h1').text().trim().replace('Lyrics','')
  const artist = $$('#site > div > div > div > main > div > div > div > div > div > div > div> div > div > h2 > span').text().trim();

  if (!thumb || (!lyrics1 && !lyrics2)) {
    throw new Error('No se encontraron letras para la canción');
  }

  const lyrics = `${lyrics1}\n${lyrics2}`;
  return { thumb: `https:${thumb}`, lyrics, title, artist };
}


async function googleImage(query) {
  const data = await fetch(`https://www.google.com/search?q=${query}&tbm=isch`, {
    headers: {
      accept:
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'accept-encoding': 'gzip, deflate, br',
      'accept-language': 'en-US,en;q=0.9,id;q=0.8',
      'user-agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36',
    },
  }).then((response) => response.text());

  const $ = cheerio.load(data);
  const pattern =
    /\[1,\[0,"(?<id>[\d\w\-_]+)",\["https?:\/\/(?:[^"]+)",\d+,\d+\]\s?,\["(?<url>https?:\/\/(?:[^"]+))",\d+,\d+\]/gm;
  const matches = [...$.html().matchAll(pattern)];
  const decodeUrl = (url) => decodeURIComponent(JSON.parse(`"${url}"`));

  return matches
    .map(({ groups }) => decodeUrl(groups?.url))
    .filter((v) => /.*\.jpe?g|png$/gi.test(v));
}

///
module.exports.Emoji = Emoji
module.exports.StickerSearch = stickersearch
module.exports.Gdrive = gdrivedl
module.exports.igStalk = igStalk
module.exports.tiktokStalk = tiktokStalk
module.exports.twitter = twitter //
module.exports.xvideosSe = xvideosSearch
module.exports.xnxxSe = xnxxSearch
module.exports.xvideosdl = xvideosdl
module.exports.xnxxdl = xnxxdl
module.exports.sfileSe = sfileSearch
module.exports.sfileDl = sfileDl
module.exports.ttp = ttp
module.exports.wphd = wallpaper
module.exports.sswebE = sswebA
module.exports.facebookE = facebook
module.exports.mediafireDlE = mediafireDl
module.exports.tiktokE = tiktokdl
module.exports.youtube = youtubedl
module.exports.Pinterest = pinterest
module.exports.Lyrics = lyrics
module.exports.gimg = googleImage