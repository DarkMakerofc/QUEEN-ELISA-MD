const cheerio = require("cheerio");
const axios = require("axios");

function palingmurah(query) {
return new Promise((resolve, reject) => {
  axios.get(`https://palingmurah.net/pencarian-produk/?term=${query}`).then(async tod => {
  const $ = cheerio.load(tod.data)
  
  hasil = []
  
  $("div.ui.card.wpj-card-style-2").each(function(c, d) {
    //INFO BARANG
    name = $(d).find("div.content.wpj-small.list-70-right > a.list-header").text().trim();
    link = $(d).find("div.content.wpj-small.list-70-right > a.list-header").attr('href');
    img = $(d).find("div.card-image-helper > img").attr('data-src');
    harga = $(d).find("div.flex-master.card-job-price.text-right.text-vertical-center").text().trim();
    //user
    usernamepenjual = $(d).find("strong").text().trim();
    linkpenjual = $(d).find("a.ui.wpj-big.avatar.image").attr('href');
    iconpenjual = $(d).find("a.ui.wpj-big.avatar.image > img").attr('data-src');
    const Data = {
      author: "YogiPw",
      name: name,
      harga: harga,
      img: img,
      link: link,
      usernamepenjual: usernamepenjual,
      linkpenjual: linkpenjual,
      iconpenjual: iconpenjual
    }
    hasil.push(Data)
  })
  resolve(hasil)
  }).catch(reject)
  });
}
function moddroid(query) {
return new Promise((resolve, reject) => {
  axios.get(`https://moddroid.com/?s=${query}`).then( tod => {
  const $ = cheerio.load(tod.data)
  
  hasil = []
  
  $("div.col-12.col-md-6.mb-4").each(function(c, d) {
    link = $(d).find("a.d-flex.position-relative.archive-post").attr('href');
    name = $(d).find("div > h3.h5.font-weight-semibold.text-truncate.text-primary.w-100").text().trim();
    img = $(d).find("div.flex-shrink-0.mr-2 > img").attr('src');
    desc = $(d).find("div.text-truncate.text-muted > span.align-middle").text();
    const Data = {
      author: "YogiPw",
      img: img,
      name: name,
      desc: desc,
      link: link
    }
    hasil.push(Data)
  })
  resolve(hasil)
  }).catch(reject)
  });
}  
function apkmody(query) {
return new Promise((resolve, reject) => {
  axios.get(`https://apkmody.io/?s=${query}`).then( tod => {
  const $ = cheerio.load(tod.data)
  
  hasil = []
  
  $("div.flex-item").each(function(c, d) {
    name = $(d).find("div.card-title > h2.truncate").text();
    desc = $(d).find("div.card-body > p.card-excerpt.has-small-font-size.truncate").text().trim();
    img = $(d).find("div.card-image > img").attr('src');
    link = $(d).find("article.card.has-shadow.clickable > a").attr('href');
    const Data = {
      author: "YogiPw",
      img: img,
      name: name,
      desc: desc,
      link: link
    }
    hasil.push(Data)
  })
  resolve(hasil)
  }).catch(reject)
  });
}
function wpsearch(query) {
return new Promise((resolve, reject) => {
  axios.get(`https://www.wallpaperflare.com/search?wallpaper=${query}`).then(async tod => {
  const $ = cheerio.load(tod.data)
  
  hasil = []
  
    $("#gallery > li > figure> a").each(function(i, cuk) {
    const img = $(cuk).find("img").attr('data-src');
    hasil.push(img)
  })
  resolve(hasil)
  }).catch(reject);
  });
}
function happymod(query) {
  return new Promise((resolve, reject) => {
  axios.get(`https://www.happymod.com/search.html?q=${query}`).then(async tod => {
  const $ = cheerio.load(tod.data)
  
  hasil = []
  
   $("div.pdt-app-box").each(function(c, d) {
  
     
        name = $(d).find("a").text().trim();
        icon = $(d).find("img.lazy").attr('data-original');
        link = $(d).find("a").attr('href');
        link2 = `https://www.happymod.com${link}`
        const Data = {
          author: "YogiPw",
          icon: icon,
          name: name,
          link: link2
        }
        hasil.push(Data)
   })
   resolve(hasil);
  }).catch(reject)
  });
  }
  function muihalal(query, page) {
  return new Promise((resolve, reject) => {
    axios.get(`https://www.halalmui.org/mui14/searchproduk/search/?kategori=nama_produk&katakunci=${query}&page=${page}`).then( tod => {
    const $ = cheerio.load(tod.data)
    
    hasil = []
    
    $("tr > td").each(function(c, d) {
      name = $(d).find("span").eq(0).text()
      namee = name.replace('Nama Produk :', '')
      nmr = $(d).find("span").eq(1).text()
      nmrr = nmr.replace('Nomor Sertifikat :', '')
      const Data = {
        author: "YogiPw",
        title: namee,
        nomorsertifikat: nmrr
      }
      hasil.push(Data)
    resolve(hasil)
    }).catch(reject)
  })
  })
}
  function mcpedl(query) {
    return new Promise((resolve, reject) => {
    axios.get(`https://mcpedl.com/?s=${query}`).then(async tod => {
    const $ = cheerio.load(tod.data)
    
    hasil = []
    
    $("div.post").each(function(c, d) {
      
      name = $(d).find("h2.post__title").text().trim();
      date = $(d).find("div.post__date").text().trim();
      desc = $(d).find("p.post__text").text().trim();
      category = $(d).find("div.post__category > a").text().trim();
      link = $(d).find("a").attr('href')
      link2 = `https://mcpedl.com${link}`
      const Data = {
        author: "YogiPw",
        name: name,
        category: category,
        date: date,
        desc: desc,
        link: link2
      }
      hasil.push(Data)
      
    })
     resolve(hasil)
    }).catch(reject)
    });
    }
function sfilesearch(query) {
return new Promise((resolve, reject) => {
axios.get(`https://sfile.mobi/search.php?q=${query}&search=Search`).then(async tod => {
const $ = cheerio.load(tod.data)

hasil = []

  $("div.list").each(function(i, cuk) {
  ico  = $(cuk).find("img").attr("src");
  lin  = $(cuk).find("a").attr("href");
  name  = $(cuk).find("a").text();
  const Data = {
    author: "YogiPw",
    icon: ico,
    name: name,
    link: lin
  }
  hasil.push(Data)

})
resolve(hasil)
});
});
}
function turnbackhoax() {
return new Promise((resolve, reject) => {
  axios.get(`https://turnbackhoax.id/`).then( tod => {
  const $ = cheerio.load(tod.data)
  
  hasil = []
  
  $("figure.mh-loop-thumb").each(function(a, b) {
    $("div.mh-loop-content.mh-clearfix").each(function(c, d) {
    link = $(d).find("h3.entry-title.mh-loop-title > a").attr('href');
    img = $(b).find("img.attachment-mh-magazine-lite-medium.size-mh-magazine-lite-medium.wp-post-image").attr('src');
    title = $(d).find("h3.entry-title.mh-loop-title > a").text().trim();
    desc = $(d).find("div.mh-excerpt > p").text().trim();
    date = $(d).find("span.mh-meta-date.updated").text().trim();
    const Data = {
      author: "YogiPw",
      title: title,
      thumbnail: img,
      desc: desc,
      date: date,
      link: link
    }
    hasil.push(Data)
    })
  })
  resolve(hasil)
  }).catch(reject)
  });
}
function igvideo(link) {
  return new Promise(async(resolve, reject) => {
    let config = {
      'url': link,
      'submit': ''
    }
      axios('https://downloadgram.org/video-downloader.php',{
        method: 'POST',
        data : new URLSearchParams(Object.entries(config)),
        headers: {
          "cookie": "_ga=GA1.2.623704211.1625264926; __gads=ID=a078e4fc2781b47b-22330cd520ca006e:T=1625264920:RT=1625264920:S=ALNI_MYS-jyPCjNa94DU8n-sX4aNF-ODOg; __atssc=google%3B3; _gid=GA1.2.1953813019.1625397379; __atuvc=4%7C26%2C6%7C27; __atuvs=60e2ab6d67a322ec003",
          "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
          }
        })
      .then(tod => {
        const $ = cheerio.load(tod.data)
        resolve({
          link: $('#downloadBox > a').attr('href')
      })
        })
        })
  }
  function igfoto(link) {
    return new Promise(async(resolve, reject) => {
      let config = {
        'url': link,
        'submit': ''
      }
        axios('https://downloadgram.org/photo-downloader.php',{
          method: 'POST',
          data : new URLSearchParams(Object.entries(config)),
          headers: {
            "cookie": "_ga=GA1.2.623704211.1625264926; __gads=ID=a078e4fc2781b47b-22330cd520ca006e:T=1625264920:RT=1625264920:S=ALNI_MYS-jyPCjNa94DU8n-sX4aNF-ODOg; __atssc=google%3B3; _gid=GA1.2.1953813019.1625397379; __atuvc=4%7C26%2C6%7C27; __atuvs=60e2ab6d67a322ec003",
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
            }
          })
        .then(tod => {
          const $ = cheerio.load(tod.data)
          resolve({
            link: $('#downloadBox > a').attr('href')
        })
          })
          })
    }
    function igtv(link) {
      return new Promise(async(resolve, reject) => {
        let config = {
          'url': link,
          'submit': ''
        }
          axios('https://downloadgram.org/igtv-downloader.php',{
            method: 'POST',
            data : new URLSearchParams(Object.entries(config)),
            headers: {
              "cookie": "_ga=GA1.2.623704211.1625264926; __gads=ID=a078e4fc2781b47b-22330cd520ca006e:T=1625264920:RT=1625264920:S=ALNI_MYS-jyPCjNa94DU8n-sX4aNF-ODOg; __atssc=google%3B3; _gid=GA1.2.1953813019.1625397379; __atuvc=4%7C26%2C6%7C27; __atuvs=60e2ab6d67a322ec003",
              "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
              "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
              }
            })
          .then(tod => {
            const $ = cheerio.load(tod.data)
            resolve({
              link: $('#downloadBox > a').attr('href')
          })
            })
            })
      }
      function servermc() {
      return new Promise((resolve, reject) => {
        axios.get(`https://minecraftpocket-servers.com/country/indonesia/`).then( tod => {
        const $ = cheerio.load(tod.data)
        
        hasil = []
        
        $("tr").each(function(c, d) {
          ip = $(d).find("button.btn.btn-secondary.btn-sm").eq(1).text().trim().replace(':19132', '')
          port = '19132'
          versi = $(d).find("a.btn.btn-info.btn-sm").text()
          player = $(d).find("td.d-none.d-md-table-cell > strong").eq(1).text().trim()
          const Data = {
            author: "YogiPw",
            ip: ip,
            port: port,
            versi: versi,
            player: player
          }
          hasil.push(Data)
        })
        resolve(hasil)
      }).catch(reject)
      })
    }
    function pstore(query, page) {
    return new Promise((resolve, reject) => {
      axios.get(`https://p-store.net/search?query=${query}&page=${page}`).then(async tod => {
      const $ = cheerio.load(tod.data)
      
      hasil = []
      
        $("div.col-xs-6.col-md-4.col-cusong").each(function(i, cuk) {
        title  = $(cuk).find("p > a").text();
        thumb  = $(cuk).find("a > img").attr("src");
        link  = $(cuk).find("p > a").attr("href");
        harga  = $(cuk).find("div.price").text();
        const Data = {
            author: "YogiPw",
            title: title,
            thumb: thumb,
            link: link,
            harga: harga
          }
          hasil.push(Data)
      
      })
      resolve(hasil)
      });
      });
    }
    function jalantikus(query) {
    return new Promise((resolve, reject) => {
      axios.get(`https://jalantikus.com/search/articles/${query}/`).then( tod => {
      const $ = cheerio.load(tod.data)
      
      hasil = []
      
      $("div.post-block-with-category").each(function(c, d) {
        title = $(d).find("a.post-block-with-category__link").text()
        category = $(d).find("a.post-info__category-link").text()
      date = $(d).find("time").text()
        link = `https://jalantikus.com${$(d).find("a").attr('href')}`
      const Data = {
          author: "YogiPw",
          title: title,
          category: category,
          date: date,
          link: link
        }
        hasil.push(Data)
      })
      resolve(hasil)
    }).catch(reject)
    })
    }
//BERITA API
function tribunnews() {
  return new Promise((resolve, reject) => {
    axios.get(`https://www.tribunnews.com/news`).then( tod => {
    const $ = cheerio.load(tod.data)
    
    hasil = []
    
    $("li.p1520.art-list.pos_rel").each(function(c, d) {
      title = $(d).find("div.mr140 > h3 > a.f20.ln24.fbo.txt-oev-2").text().trim()
      thumb = $(d).find("div.fr.mt5.pos_rel > a > img.shou2.bgwhite").attr('src')
      desc = $(d).find("div.grey2.pt5.f13.ln18.txt-oev-3").text().trim()
      date = $(d).find("div.grey.pt5 > time.foot.timeago").text().trim()
      link = $(d).find("div.fr.mt5.pos_rel > a").attr('href')
      const Data = {
        author: "YogiPw",
        title: title,
        thumb: thumb,
        desc: desc,
        date: date,
        link: link
      }
      hasil.push(Data)
    })
    resolve(hasil)
  }).catch(reject)
  })
}
function kompasnews() {
  return new Promise((resolve, reject) => {
    axios.get(`https://news.kompas.com/`).then( tod => {
    const $ = cheerio.load(tod.data)
    
    hasil = []
    
    $("div.col-bs9-3").each(function(c, d) {
      title = $(d).find("h3.article__title > a.article__link").text()
      desc = $(d).find("div.article__lead").text().trim()
      date = $(d).find("div.article__date").text().trim()
      link = $(d).find("h3.article__title > a.article__link").attr('href')
      const Data = {
        author: "YogiPw",
        title: title,
        desc: desc,
        date: date,
        link: link
      }
      hasil.push(Data)
    })
    resolve(hasil)
  }).catch(reject)
  })
  }



  module.exports.palingmurah = palingmurah
  module.exports.moddroid = moddroid
  module.exports.apkmody = apkmody
  module.exports.happymod = happymod
  module.exports.wpsearch = wpsearch
  module.exports.muihalal = muihalal
  module.exports.mcpedl = mcpedl
  module.exports.servermc = servermc
  module.exports.pstore = pstore
  module.exports.jalantikus = jalantikus
  module.exports.sfilesearch = sfilesearch
  module.exports.turnbackhoax = turnbackhoax
  module.exports.igfoto = igfoto
  module.exports.igvideo = igvideo
  module.exports.igtv = igtv
  module.exports.tribunnews = tribunnews
  module.exports.kompasnews = kompasnews