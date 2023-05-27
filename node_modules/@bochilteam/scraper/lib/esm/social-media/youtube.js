import cheerio from 'cheerio';
import got from 'got';
import { ScraperError } from '../utils.js';
import { sizeFormatter } from 'human-readable';
const toFormat = sizeFormatter({
    std: 'JEDEC',
    decimalPlaces: 2,
    keepTrailingZeroes: false,
    render: (literal, symbol) => `${literal} ${symbol}B`
});
// https://github.com/BochilGaming/games-wabot/blob/main/lib/y2mate.js
const servers = ['en163', 'id90', 'en172'];
export async function youtubedl(url, server = 'en163') {
    if (!servers.includes(server))
        server = servers[0];
    const params = {
        url: url,
        q_auto: 0,
        ajax: 1
    };
    const json = await got
        .post(`https://www.y2mate.com/mates/${server}/analyze/ajax`, {
        headers: {
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            cookie: '_ga=GA1.2.1405332118.1641699259; _gid=GA1.2.70284915.1642387108; _gat_gtag_UA_84863187_23=1',
            origin: 'https://www.y2mate.com'
        },
        form: params
    })
        .json();
    const $ = cheerio.load(json.result);
    const id = (/var k__id = "(.*?)"/.exec($.html()) || ['', ''])[1];
    const v_id = (/var k_data_vid = "(.*?)"/.exec($.html()) || ['', ''])[1];
    const thumbnail = $('.video-thumbnail > img').attr('src');
    const title = $('div.caption > b').text().trim();
    const video = {};
    const audio = {};
    $('#mp4 > table > tbody > tr').each(function () {
        var _a, _b, _c;
        const el = $(this).find('td');
        const _quality = el.eq(0).find('a').text();
        const quality = (_c = (_b = (_a = _quality.split('(')) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.trim()) === null || _c === void 0 ? void 0 : _c.toLowerCase();
        const fileSizeH = el.eq(1).text();
        if (!/\.3gp/i.test(_quality)) {
            video[quality] = {
                quality,
                fileSizeH,
                fileSize: parseFloat(fileSizeH) * (/MB$/.test(fileSizeH) ? 1000 : 1),
                download: convert.bind(null, id, v_id, 'mp4', quality.replace(/p/i, ''))
            };
        }
    });
    $('#mp3 > table > tbody > tr').each(function () {
        var _a, _b, _c, _d;
        const el = $(this).find('td');
        const _quality = el.eq(0).find('a').text();
        const quality = (_d = (_c = (_b = (_a = _quality
            .split('(')) === null || _a === void 0 ? void 0 : _a[1]) === null || _b === void 0 ? void 0 : _b.replace(')', '')) === null || _c === void 0 ? void 0 : _c.trim()) === null || _d === void 0 ? void 0 : _d.toLowerCase();
        const fileSizeH = el.eq(1).text();
        audio[quality] = {
            quality,
            fileSizeH,
            fileSize: parseFloat(fileSizeH) * (/MB$/.test(fileSizeH) ? 1000 : 1),
            download: convert.bind(null, id, v_id, 'mp3', quality.replace(/kbps/i, ''))
        };
    });
    return {
        id,
        v_id,
        thumbnail,
        title,
        video,
        audio
    };
}
export async function youtubedlv2(url) {
    const html = await got('https://yt5s.com/en32').text();
    const urlAjax = (/k_url_search="(.*?)"/.exec(html) || ['', ''])[1];
    const urlConvert = (/k_url_convert="(.*?)"/.exec(html) || ['', ''])[1];
    const params = {
        q: url,
        vt: 'home'
    };
    const json = await got(urlAjax, {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            cookie: '__cflb=04dToSoFRg9oqH9pYF2En9gKJK4fe8D9TcYtUD6tYu; _ga=GA1.2.1350132744.1641709803; _gid=GA1.2.1492233267.1641709803; _gat_gtag_UA_122831834_4=1',
            origin: 'https://yt5s.com',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36'
        },
        searchParams: new URLSearchParams(Object.entries(params))
    }).json();
    const video = {};
    Object.values(json.links.mp4).forEach(({ k, size }) => {
        video[k] = {
            quality: k,
            fileSizeH: size,
            fileSize: parseFloat(size) * (/MB$/.test(size) ? 1000 : 1),
            // @ts-ignore
            download: convertv2.bind(null, urlConvert, json.vid, 'mp4', k, json.token, parseInt(json.timeExpires), json.fn)
        };
    });
    const audio = {};
    Object.values(json.links.mp3).forEach(({ key, size }) => {
        audio[key] = {
            quality: key,
            fileSizeH: size,
            fileSize: parseFloat(size) * (/MB$/.test(size) ? 1000 : 1),
            // @ts-ignore
            download: convertv2.bind(null, urlConvert, json.vid, 'mp3', key.replace(/kbps/i, ''), json.token, parseInt(json.timeExpires), json.fn)
        };
    });
    return {
        id: json.vid,
        title: json.title,
        thumbnail: `https://i.ytimg.com/vi/${json.vid}/0.jpg`,
        video,
        audio
    };
}
export async function youtubedlv3(url) {
    const payload = {
        url
    };
    const { id, meta: { title }, thumb, url: results } = await got.post('https://api.onlinevideoconverter.pro/api/convert', {
        headers: {
            accept: 'application/json, text/plain, */*',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-US,en;q=0.9',
            'content-type': 'application/json',
            origin: 'https://onlinevideoconverter.pro',
            referer: 'https://onlinevideoconverter.pro/',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36'
        },
        body: JSON.stringify(payload)
    }).json();
    const video = {};
    const audioArray = {};
    results.forEach(({ url, info_url, attr, quality, audio, no_audio, filesize, ext }) => {
        if (!no_audio && ext === 'mp4') {
            video[quality] = {
                quality,
                fileSizeH: (filesize && toFormat(filesize)) || undefined,
                fileSize: filesize,
                download: async () => (url || info_url)
            };
        }
        if (audio && !no_audio) {
            audioArray[quality] = {
                quality,
                fileSizeH: (filesize && toFormat(filesize)) || undefined,
                fileSize: filesize,
                download: async () => (url || info_url)
            };
        }
    });
    return {
        id,
        title,
        thumbnail: thumb,
        video,
        audio: audioArray
    };
}
async function convert(_id, v_id, ftype, fquality) {
    const params = {
        type: 'youtube',
        _id,
        v_id,
        ajax: '1',
        token: '',
        ftype,
        fquality
    };
    const json = await got('https://www.y2mate.com/mates/convert', {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            cookie: '_ga=GA1.2.1405332118.1641699259; _gid=GA1.2.1117783105.1641699259; MarketGidStorage=%7B%220%22%3A%7B%7D%2C%22C702514%22%3A%7B%22page%22%3A2%2C%22time%22%3A1641701743540%7D%7D; _PN_SBSCRBR_FALLBACK_DENIED=1641701744162',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36'
        },
        form: params
    }).json();
    const $ = cheerio.load(json.result);
    const link = $('a[href]').attr('href');
    if (link === 'https://app.y2mate.com/download')
        throw new ScraperError(JSON.stringify({ link, json: json }, null, 2));
    return link;
}
function convertv2(url, v_id, ftype, fquality, token, timeExpire, fname) {
    return new Promise(async (resolve, reject) => {
        const params = {
            v_id,
            ftype,
            fquality,
            token,
            timeExpire,
            client: 'yt5s.com'
        };
        const resServer = await got(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                origin: 'https://yt5s.com',
                referer: 'https://yt5s.com/',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
                'X-Requested-Key': 'de0cfuirtgf67a'
            },
            form: params
        }).json();
        const server = resServer.c_server;
        if (!server && ftype === 'mp3')
            return resolve(server || resServer.d_url || '');
        const payload = {
            v_id,
            ftype,
            fquality,
            fname,
            token,
            timeExpire
        };
        const results = await got(`${server}/api/json/convert`, {
            method: 'POST',
            form: payload
        }).json();
        if (results.statusCode === 200)
            return resolve(results.result);
        else if (results.statusCode === 300) {
            try {
                // @ts-ignore
                const WebSocket = (await import('ws')).default;
                const Url = new URL(server);
                const WSUrl = `${/https/i.test(Url.protocol) ? 'wss:' : 'ws:'}//${Url.host}/sub/${results.jobId}?fname=yt5s.com`;
                const ws = new WebSocket(WSUrl, undefined, {
                    headers: {
                        'Accept-Encoding': 'gzip, deflate, br',
                        Host: Url.host,
                        Origin: 'https://yt5s.com',
                        'Sec-WebSocket-Extensions': 'permessage-deflate; client_max_window_bits',
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36'
                    }
                });
                ws.on('message', function incoming(message) {
                    const msg = JSON.parse(message.toString());
                    if (msg.action === 'success') {
                        try {
                            ws.close();
                        }
                        catch (e) {
                            console.error(e);
                        }
                        ws.removeAllListeners('message');
                        return resolve(msg.url);
                    }
                    else if (msg.action === 'error')
                        return reject(msg);
                });
            }
            catch (e) {
                console.error(e);
                return reject(e);
            }
        }
        else
            return reject(results);
    });
}
//# sourceMappingURL=youtube.js.map