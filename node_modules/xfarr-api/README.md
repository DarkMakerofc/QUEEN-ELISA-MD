<center><img src="https://tinyurl.com/yj6s63a2" alt="XFar" width="500" />
</p></center>
<p align="center">
<a href="#"><img title="xfarr-api" src="https://img.shields.io/badge/xfarr-api-green?colorA=%23ff0000&colorB=%23017e40&style=for-the-badge"></a>

<p align="center">
<a href="https://github.com/xfar05/xfarr-api"><img title="Followers" src="https://img.shields.io/github/followers/xfar05?color=blue&style=flat-square"></a>
<a href="https://github.com/xfar05/xfarr-api"><img title="Stars" src="https://img.shields.io/github/stars/xfar05/xfarr-api?color=red&style=flat-square"></a>
<a href="https://github.com/xfar05/xfarr-api/network/members"><img title="Forks" src="https://img.shields.io/github/forks/xfar05/xfarr-api?color=red&style=flat-square"></a>
<a href="https://github.com/xfar05/xfarr-api/watchers"><img title="Watching" src="https://img.shields.io/github/watchers/xfar05/xfarr-api?label=Watchers&color=blue&style=flat-square"></a>
</p>

## Penginstalan
> npm install xfarr-api
>
> npm uninstall xfarr-api

## ```Downloader```
```js
const xa = require('xfarr-api');

const url_youtube = 'https://youtu.be/zXiSTrOQhxM'
const url_tiktok = 'https://vt.tiktok.com/ZSehyjVW9/'
const url_instagram = 'https://www.instagram.com/p/CJFsOsKJMHa6FCRkbjn0mR3jJ0KwHOCCMaW7_Q0/?utm_medium=copy_link'
const url_facebook = 'http://www.facebook.com/groups/526909968570398/permalink/571916620736399/'
const url_twitter = 'https://twitter.com/LucuLucuVideo/status/1454834787382816775?s=20'
const url_soundcloud = 'https://soundcloud.com/enggak-tau-829795349/tri-suaka-aku-bukan-jodohnya?utm_campaign=social_sharing&utm_source=mobi&utm_terms=social_sharing_on_mobi.control%2Ctop_curators.top_curators'
const url_imgur = 'https://imgur.com/gallery/rK8ppvC'
const url_imdb = 'https://www.imdb.com/video/vi146981657?listId=ls053181649'
const url_telesticker = 'https://t.me/addstickers/c1129234339_by_HarukaAyaBot'

// youtube
xa.Youtube(url_youtube)
    .then(data => {console.log(data)
});

// tiktok
xa.Tiktok(url_tiktok)
    .then(data => {console.log(data)
});

// instagram
xa.Instagram(url_instagram)
    .then(data => {console.log(data)
});

// facebook
xa.Facebook(url_facebook)
    .then(data => {console.log(data)
});

// twitter
xa.Twitter(url_twitter)
    .then(data => {console.log(data)
});

// soundcloud
xa.SoundCloud(url_soundcloud)
    .then(data => {console.log(data)
});

// imgur
xa.Imgur(url_imgur)
    .then(data => {console.log(data)
});

// imdb
xa.Imdb(url_imdb)
    .then(data => {console.log(data)
});

// telesticker
xa.Telesticker(url_telesticker)
    .then(data => {console.log(data)
});
```

## ```Anime```
```js
const xa = require('xfarr-api');

const query = 'naruto'

// anime
xa.Anime(query)
    .then(data => {console.log(data)
});

// manga
xa.Manga(query)
    .then(data => {console.log(data)
});

// character
xa.Character(query)
    .then(data => {console.log(data)
});
```

## ```Search```
```js
const xa = require('xfarr-api');

const query_pinterest = 'elaina'
const query_film = 'love'
const query_wattpad = 'love'
const query_webtoons = 'love'
const query_mangatoons = 'love'
const query_drakor = 'love'
const query_stickersearch = 'patrick'

// pinterest
xa.Pinterest(query_pinterest)
    .then(data => {console.log(data)
});

// film
xa.Film(query_film)
    .then(data => {console.log(data)
});

// wattpad
xa.Wattpad(query_wattpad)
    .then(data => {console.log(data)
});

// webtoons
xa.Webtoons(query_webtoons)
    .then(data => {console.log(data)
});

// mangatoons
xa.Mangatoons(query_mangatoons)
    .then(data => {console.log(data)
});

// drakor
xa.Drakor(query_drakor)
    .then(data => {console.log(data)
});

// stickersearch
xa.StickerSearch(query_stickersearch)
    .then(data => {console.log(data)
});
```

## ```Islami```
```js
const xa = require('xfarr-api');

const query = 'luqman'

// listsurah
xa.ListSurah()
    .then(data => {console.log(data)
});

// surah
xa.Surah(query)
    .then(data => {console.log(data)
});

// tafsirsurah
xa.TafsirSurah(query)
    .then(data => {console.log(data)
});
```

## ```Information && News```
```js
const xa = require('xfarr-api');

const username = 'WattpadRomanceIN'

// jadwalbola
xa.JadwalBola()
    .then(data => {console.log(data)
});

// jadwaltv
xa.JadwalTv()
    .then(data => {console.log(data)
});

// jadwalsholat
xa.JadwalSholat()
    .then(data => {console.log(data)
});

// kompasnews
xa.KompasNews()
    .then(data => {console.log(data)
});

// inews
xa.Inews()
    .then(data => {console.log(data)
});

// wattpaduser
xa.WattpadUser(username)
     .then(data => {console.log(data)
});
```

# THANKS TO 🎉
<a href="https://github.com/providerxploit"><img src="https://github.com/providerxploit.png?size=100" width="100" height="100"></a> | [![Fajar](http://github.com/Zynfinity.png?size=100)](http://github.com/Zynfinity) | [![Hexa](http://github.com/hexagonz.png?size=100)](http://github.com/hexagonz)
----|----|----
[ProviderXploit](https://github.com/providerxploit) | [Fajar](http://github.com/Zynfinity) | [Hexa](http://github.com/hexagonz)
My team (pedo) | Fajar insana | Hexagonz (pedo)