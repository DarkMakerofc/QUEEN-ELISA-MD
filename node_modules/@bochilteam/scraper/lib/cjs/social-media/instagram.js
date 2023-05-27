"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.instagramStalk = exports.instagramStoryv2 = exports.instagramStory = exports.instagramdlv4 = exports.instagramdlv3 = exports.instagramdlv2 = exports.instagramdl = void 0;
/* eslint-disable no-mixed-spaces-and-tabs */
const cheerio_1 = __importDefault(require("cheerio"));
const got_1 = __importDefault(require("got"));
const utils_js_1 = require("../utils.js");
const form_data_1 = __importDefault(require("form-data"));
async function instagramdl(url) {
    var _a, _b, _c;
    if (!/https?:\/\/www\.instagram\.com\/(reel|tv|p)\//i.test(url)) {
        throw new utils_js_1.ScraperError('Invalid url!!');
    }
    const data = await got_1.default
        .post('https://snapinsta.app/action.php', {
        form: {
            url: encodeURI(url),
            action: 'post'
        },
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            origin: 'https://snapinsta.app',
            referer: 'https://snapinsta.app/',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36'
        }
    })
        .text();
    const params = (_a = data.split('))</script>')[0]
        .split('decodeURIComponent(escape(r))}(')[1]) === null || _a === void 0 ? void 0 : _a.split(',').map(v => v.replace(/^"/, '')
        .replace(/"$/, '').trim());
    if (!Array.isArray(params) || params.length !== 6)
        throw new utils_js_1.ScraperError(`Can't parse decode parameters!\n${data}`);
    const decode = (0, utils_js_1.decodeSnapApp)(...params);
    const html = (_c = (_b = decode === null || decode === void 0 ? void 0 : decode.split('("div_download").innerHTML = "')) === null || _b === void 0 ? void 0 : _b[1].split('"; parent.document.getElementById("hero-section").remove();')[0].split('</style> <section class=')[1].split('"> ')[1]) === null || _c === void 0 ? void 0 : _c.split(' </section> ')[0].replace(/\\(\\)?/g, '');
    const $ = cheerio_1.default.load(html);
    const results = [];
    $('.row.download-box > div.col-md-4').each(function () {
        let thumbnail = $(this)
            .find('.download-items__thumb > img[src]')
            .attr('src');
        if (!/https?:\/\//i.test(thumbnail))
            thumbnail = 'https://snapinsta.app' + thumbnail;
        let url = $(this).find('.download-items__btn > a[href]').attr('href');
        if (!/https?:\/\//i.test(url || '')) {
            url = encodeURI('https://snapinsta.app' + url);
        }
        if (url)
            results.push({ thumbnail, url });
    });
    if (!results.length)
        throw new utils_js_1.ScraperError(`Can't download!\n${decode}`);
    return results;
}
exports.instagramdl = instagramdl;
async function instagramdlv2(url) {
    if (!/https?:\/\/www\.instagram\.com\/(reel|tv|p)\//i.test(url)) {
        throw new utils_js_1.ScraperError('Invalid url!!');
    }
    const payload = {
        url: url,
        submit: ' '
    };
    const data = await got_1.default
        .post('https://downloadgram.org/', {
        form: payload,
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            cookie: '_ga=GA1.2.654346005.1642149344; _gid=GA1.2.1562255413.1642149344; _gat_gtag_UA_142480840_1=1; __atuvc=1%7C2; __atuvs=61e135df10258fab000; __gads=ID=b4c9d2019034e5ed-227b64f3e5cf003a:T=1642149344:RT=1642149344:S=ALNI_MbtRULwcpAb_-lCLCSUPN5m5rd54A',
            origin: 'https://downloadgram.org',
            referer: 'https://downloadgram.org/',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36'
        }
    })
        .text();
    const $ = cheerio_1.default.load(data);
    let results = [];
    if ($('#downloadBox > a').length) {
        const temp = [];
        $('#downloadBox > video').each(function (i) {
            const thumbnail = $(this).attr('poster');
            const sourceUrl = $(this).find('source[src]').attr('src');
            if (thumbnail) {
                temp.push({
                    thumbnail,
                    sourceUrl,
                    index: i
                });
            }
        });
        $('#downloadBox > img').each(function (i) {
            const j = temp.findIndex(({ index }) => index === i);
            const thumbnail = $(this).attr('src');
            if (thumbnail) {
                if (j !== -1)
                    temp[j].thumbnail = thumbnail;
                else
                    temp.push({ thumbnail, index: i });
            }
        });
        $('#downloadBox > a').each(function (i) {
            const j = temp.findIndex(({ index }) => index === i);
            const url = $(this).attr('href');
            if (j !== -1)
                temp[j].url = url;
            else
                temp.push({ url, index: i });
        });
        results = temp.map((tmp) => ({
            thumbnail: tmp.thumbnail,
            sourceUrl: tmp.sourceUrl,
            url: tmp.url
        }));
    }
    if (!results.length)
        throw new utils_js_1.ScraperError(`Can't download!\n${$.html()}`);
    return results;
}
exports.instagramdlv2 = instagramdlv2;
async function instagramdlv3(url) {
    const payload = {
        link: url,
        submit: ''
    };
    const headers = {
        'content-type': 'application/x-www-form-urlencoded',
        origin: 'https://instasave.website',
        referer: 'https://instasave.website/',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36'
    };
    const body = await (0, got_1.default)('https://instasave.website/', {
        form: payload,
        method: 'POST',
        headers: headers
    }).catch(async (_) => await (0, got_1.default)('https://server.instasave.website/', {
        form: payload,
        method: 'POST',
        headers: {
            ...headers,
            origin: 'https://server.instasave.website',
            referer: 'https://server.instasave.website'
        }
    }));
    const $ = cheerio_1.default.load(body.body);
    let results = [];
    if ($('#downloadBox > a').length) {
        const temp = [];
        $('#downloadBox > video').each(function (i) {
            const thumbnail = $(this).attr('poster');
            const sourceUrl = $(this).find('source[src]').attr('src');
            if (thumbnail) {
                temp.push({
                    thumbnail,
                    sourceUrl,
                    index: i
                });
            }
        });
        $('#downloadBox > img').each(function (i) {
            const j = temp.findIndex(({ index }) => index === i);
            const thumbnail = $(this).attr('src');
            if (thumbnail) {
                if (j !== -1)
                    temp[j].thumbnail = thumbnail;
                else
                    temp.push({ thumbnail, index: i });
            }
        });
        $('#downloadBox > a').each(function (i) {
            const j = temp.findIndex(({ index }) => index === i);
            const url = $(this).attr('href');
            if (j !== -1)
                temp[j].url = url;
            else
                temp.push({ url, index: i });
        });
        results = temp.map((tmp) => ({
            thumbnail: tmp.thumbnail,
            sourceUrl: tmp.sourceUrl,
            url: tmp.url
        }));
    }
    if (!results.length)
        throw new utils_js_1.ScraperError(`Can't download!\n${$.html()}`);
    return results;
}
exports.instagramdlv3 = instagramdlv3;
async function instagramdlv4(url) {
    var _a, _b;
    const payload = {
        url: encodeURIComponent(url)
    };
    const data = await (0, got_1.default)('https://instadownloader.co/insta_downloader.php', {
        headers: {
            cookie: '_ga=GA1.2.1733350350.1642305936; __gads=ID=b4bd840227b997e8-22bf10a0f9cf00c8:T=1642305940:RT=1642305940:S=ALNI_MYAmf2IjxwGlzs5qXm4WFoP5pgocg; PHPSESSID=336eed35f823c84f35a580ae2f326934; _gid=GA1.2.1286454531.1646479747; _gat=1',
            referer: 'https://instadownloader.co/id/',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36'
        },
        searchParams: payload
    }).json();
    const json = JSON.parse(data);
    if (!(((_a = json.images_links) === null || _a === void 0 ? void 0 : _a.length) || ((_b = json.videos_links) === null || _b === void 0 ? void 0 : _b.length)))
        throw new utils_js_1.ScraperError(`Can't download!\n${JSON.stringify(json, null, 2)}`);
    return [
        ...json.images_links,
        ...json.videos_links
    ];
}
exports.instagramdlv4 = instagramdlv4;
// export async function instagramdlv5 (url: string): Promise<InstagramDownloaderV5[]> {
//   const json: {
//     url: {
//       url: string;
//       name: string;
//       type: string;
//       ext: string;
//     }[];
//     meta: {
//       title: string;
//       source: string;
//     }
//     thumb: string;
//     [Key: string]: any
//   } = await got('https://api.savefrom.biz/api/convert', {
//     method: 'POST',
//     headers: {
//       'content-type': 'application/json',
//       origin: 'https://savefrom.biz',
//       referer: 'https://savefrom.biz/',
//       'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36'
//     },
//     json: {
//       url
//     }
//   }).json()
//   return json.url.map(({ url, ext }) => ({
//     url: `https://savefrom.biz${encodeURIComponent(url)}`,
//     ext
//   })) as InstagramDownloaderV5[]
// }
async function instagramStory(name) {
    var _a;
    const resKey = await (0, got_1.default)('https://storydownloader.app/en');
    const $$ = cheerio_1.default.load(resKey.body);
    const _token = $$('input[name="_token"]').attr('value');
    const cookie = (_a = resKey.headers['set-cookie']) === null || _a === void 0 ? void 0 : _a.map(v => v.split('; ')[0]).join('; ').trim();
    const headers = {
        accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        cookie: cookie || 'locale=eyJpdiI6IjE5VUJqZm1DdXl3ODhoQnV2SHJaMFE9PSIsInZhbHVlIjoiUnBqZTMvbDFUTWZLWVkvQy9rVjVhOUdrbjRWTVRCYmp2aTVaUlVsUnZZY0RWN2ZoVkdjMVNhemM1MFl6eWt2dCIsIm1hYyI6IjdlMTc4ZDZkMTYyMDVmMTcwZTc5Nzg3YTBjM2ZkOWEyNjRlODZmZDIwOGY5OTgyYzQzZjE3YTY3MjQ2NGNlYzQiLCJ0YWciOiIifQ%3D%3D; _ga_ZXS0LB5VTY=GS1.1.1647856609.1.0.1647856609.0; _ga=GA1.1.1392191220.1647856609; XSRF-TOKEN=eyJpdiI6IkhjVVdRMmRSZ0tOaklvUHlncWxqeVE9PSIsInZhbHVlIjoiTkZLTnFmUnpjM0Y0KzF3NmpxNnMyMTJQWmNPRXFPVjlKQW9la3poN3kySEN4UUw0TUd3TGIzZ0plT2RUWXJGTEp1bzF1NkN2R3FrQkdLbmJpa0o4cUZUM2EzS2N4QTY2aGVKdFM0ZWNhclZBQVBhMDV1cm4vcEZFMVB5NXRLL1UiLCJtYWMiOiI4MjQ1ZDJhYWE2NjQ1MGUyMmY5ZmQ0OTlkMDFhNjZjOWE2MGVjMTRlNmFjN2VjMmNkYzA0OGY5OTRkMDY3MjI3IiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6IjQ2RHJ3TUtRU1gxblhpbGtsNXRqamc9PSIsInZhbHVlIjoiTFl2bTg5QVhxcHBkZUN2THRPYkxhbnBmWEkyaWdBc0RFbDM0eUhhbGY0RCs2NFFmRXQ2NXBaNktUMkVpYk9wcDF2SE11SUQ0bW9zazJYaUdLQVZFbjJTaXZ3MmREUEJURnczb1c4ZE5uNDJzTVprNytjNzVCT3loS1ovKysyR1oiLCJtYWMiOiIzOTAyMDc5MDg1N2UxZjgwYmExODcwMjQ2ZWQzNGJjODM3YzkxOTI2MTkwMTEzMTFjNjExN2IzZjdkMmY0ODI4IiwidGFnIjoiIn0%3D',
        origin: 'https://storydownloader.app',
        referer: 'https://storydownloader.app/en',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36',
        'X-CSRF-TOKEN': _token
    };
    const formData = new form_data_1.default();
    formData.append('username', name);
    formData.append('_token', _token);
    const res = await (0, got_1.default)('https://storydownloader.app/request', {
        method: 'POST',
        headers: {
            ...headers,
            ...formData.getHeaders()
        },
        body: formData.getBuffer()
    });
    const { html } = JSON.parse(res.body);
    if (!html)
        throw new utils_js_1.ScraperError(`Can't download!\n${res.body}`);
    const $ = cheerio_1.default.load(html);
    const username = $('h3.card-title').text();
    const profilePicUrl = $('img.card-avatar').attr('src');
    const results = [];
    $('div.row > div').each(function () {
        const $el = $(this);
        const thumbnail = $el.find('img').attr('src');
        const url = $el.find('a').attr('href');
        const type = /video_dashinit\.mp4/i.test(url) ? 'video' : 'image';
        const isVideo = type === 'video';
        if (thumbnail && url) {
            results.push({
                thumbnail,
                url,
                type,
                isVideo
            });
        }
    });
    return {
        user: {
            username,
            profilePicUrl
        },
        results
    };
}
exports.instagramStory = instagramStory;
async function instagramStoryv2(name) {
    const headers = {
        accept: '*/*',
        cookie: '_ga=GA1.2.1814586753.1642307018; _gid=GA1.2.136857157.1642307018; __gads=ID=6f5ca6608dd8b1e9-22e4ea18ffcf0077:T=1642307019:RT=1642307019:S=ALNI_MZA7NeGtOEcSPXyFhf4LY8w7Myg9g; PHPSESSID=1i9dscs75l6v2h17cvdtd587b4; _gat=1; FCNEC=[["AKsRol9R3FQaOjrrETFMIMIvWtuoY3xRHpQEPHMujRWOd_nxuLgWCSyYK9lLC3ev0L5V8fuaSIjhupCtaReRepP4qNvch536pzvrcU13Gh8CRHSEIh8O3zM42ASwGUQfjoKbxkTV1L15EA6O7FLZ-Qh3Fy1rvh_h8w=="],null,[]]',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36'
    };
    const data = await (0, got_1.default)('https://www.instagramsave.com/instagram-story-downloader.php', {
        headers: {
            ...headers,
            accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            referer: 'https://www.google.com/'
        }
    }).text();
    const $ = cheerio_1.default.load(data);
    const payload = {
        url: 'https://www.instagram.com/' + name,
        action: 'story',
        token: $('#token').val(),
        json: ''
    };
    const { user, medias: results, error } = await (0, got_1.default)('https://www.instagramsave.com/system/action.php', {
        form: payload,
        method: 'POST',
        headers: {
            ...headers,
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            origin: 'https://www.instagramsave.com',
            referer: 'https://www.instagramsave.com/instagram-story-downloader.php'
        }
    }).json();
    if (error || !results)
        throw new utils_js_1.ScraperError(`Maybe user ${name} not have story!!\n${JSON.stringify({ user, results, payload }, null, 2)}`);
    return {
        user,
        results: results.map(({ preview, url, downloadUrl, type, fileType }) => ({
            thumbnail: preview,
            url: downloadUrl,
            sourceUrl: url,
            type,
            fileType,
            isVideo: type === 'video'
        }))
    };
}
exports.instagramStoryv2 = instagramStoryv2;
async function instagramStalk(username) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    const data = await (0, got_1.default)(`https://dumpor.com/search?query=${encodeURIComponent(username).replace(/%20/g, '+')}`).text();
    const $ = cheerio_1.default.load(data);
    const accounts = [];
    $('#nav-profiles > div > div.search-item').each(function () {
        var _a, _b;
        const el = $(this);
        const url = (_a = el.find('.content__img-wrap > a')
            .attr('href')) === null || _a === void 0 ? void 0 : _a.trim();
        if (url) {
            accounts.push({
                url,
                avatar: (_b = el.find('.content__img-wrap > a > img')
                    .attr('src')) === null || _b === void 0 ? void 0 : _b.trim(),
                username: el.find('.content__text > a')
                    .text().trim()
            });
        }
    });
    const html = await (0, got_1.default)(`https://dumpor.com/${accounts[0].url}`).text();
    const $$ = cheerio_1.default.load(html);
    const name = $$('div.user__title > a > h1').text().trim();
    const Uname = $$('div.user__title > h4').text().trim();
    const description = $$('div.user__info-desc').text().trim();
    const row = $$('#user-page > div.container > div > div > div:nth-child(1) > div > a');
    const postsH = (_a = row.eq(0).text().replace(/Posts/i, '')) === null || _a === void 0 ? void 0 : _a.trim();
    const followersH = (_b = row.eq(2).text().replace(/Followers/i, '')) === null || _b === void 0 ? void 0 : _b.trim();
    const followingH = (_c = row.eq(3).text().replace(/Following/i, '')) === null || _c === void 0 ? void 0 : _c.trim();
    const list = $$('ul.list > li.list__item');
    const posts = parseInt((_e = (_d = list.eq(0).text().replace(/Posts/i, '')) === null || _d === void 0 ? void 0 : _d.trim()) === null || _e === void 0 ? void 0 : _e.replace(/\s/g, ''));
    const followers = parseInt((_g = (_f = list.eq(1).text().replace(/Followers/i, '')) === null || _f === void 0 ? void 0 : _f.trim()) === null || _g === void 0 ? void 0 : _g.replace(/\s/g, ''));
    const following = parseInt((_j = (_h = list.eq(2).text().replace(/Following/i, '')) === null || _h === void 0 ? void 0 : _h.trim()) === null || _j === void 0 ? void 0 : _j.replace(/\s/g, ''));
    return {
        name,
        username: Uname,
        avatar: accounts[0].avatar,
        description,
        postsH,
        posts,
        followersH,
        followers,
        followingH,
        following
    };
}
exports.instagramStalk = instagramStalk;
//# sourceMappingURL=instagram.js.map