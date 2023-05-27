"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.facebookdlv3 = exports.facebookdlv2 = exports.facebookdl = void 0;
const cheerio_1 = __importDefault(require("cheerio"));
const got_1 = __importDefault(require("got"));
const crypto_js_1 = require("../encryptions/crypto.js");
const utils_js_1 = require("../utils.js");
// only support download video yet
async function facebookdl(url) {
    /* eslint no-mixed-spaces-and-tabs: ["error", "smart-tabs"] */
    const { data: { id, thumbnail, duration, a, av, v } } = await (0, got_1.default)('https://youtube4kdownloader.com/ajax/getLinks.php', {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36'
        },
        searchParams: {
            video: url,
            rand: (0, crypto_js_1.randomBytes)(13)
        }
    }).json();
    const result = (a || [])
        .concat(av)
        .concat(v)
        .map(({ size, ext, url, quality, vcodec, fid }) => {
        const isVideo = ext === 'mp4';
        const isWebm = ext === 'webm';
        return {
            size,
            ext,
            url,
            quality,
            vcodec,
            fid,
            isVideo: isVideo || isWebm,
            isAudio: /audio/i.test(quality || '') || (isVideo && !isWebm)
        };
        // ext webm video without audio
    });
    if (!result.length)
        throw new utils_js_1.ScraperError(`Can't download!\n${JSON.stringify({ id, thumbnail, duration, a, av, v }, null, 2)}`);
    return {
        id,
        thumbnail,
        duration,
        result
    };
}
exports.facebookdl = facebookdl;
async function facebookdlv2(url) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    const params = {
        url: encodeURI(url)
    };
    const res = await got_1.default
        .post('https://snapsave.app/action.php', {
        headers: {
            accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-US,en;q=0.9',
            'content-type': 'application/x-www-form-urlencoded',
            origin: 'https://snapsave.app',
            referer: 'https://snapsave.app/',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML,like Gecko) Chrome/96.0.4664.110 Safari/537.36'
        },
        form: params
    }).text();
    const decodeParams = (_b = (_a = res.split('))</script>')[0]
        .split('decodeURIComponent(escape(r))}(')[1]) === null || _a === void 0 ? void 0 : _a.split(',')) === null || _b === void 0 ? void 0 : _b.map(v => v.replace(/^"/, '')
        .replace(/"$/, '').trim());
    let html;
    if (!Array.isArray(decodeParams) || decodeParams.length !== 6)
        html = (_c = (typeof res === 'string' ? JSON.parse(res) : res)) === null || _c === void 0 ? void 0 : _c.data;
    else {
        const decode = (0, utils_js_1.decodeSnapApp)(...decodeParams);
        html = (_j = (_h = (_g = (_f = (_e = (_d = decode === null || decode === void 0 ? void 0 : decode.split('("download-section").innerHTML = "')[1]) === null || _d === void 0 ? void 0 : _d.split('; parent.document.getElementById("inputData").remove();')[0]) === null || _e === void 0 ? void 0 : _e.split('</style><section class=')[1].split('"> ')) === null || _f === void 0 ? void 0 : _f.slice(1)) === null || _g === void 0 ? void 0 : _g.map(v => (v + '">').trim()).join()) === null || _h === void 0 ? void 0 : _h.split('</section><div class=')[0]) === null || _j === void 0 ? void 0 : _j.replace(/\\(\\)?/g, '');
    }
    if (!html)
        throw new utils_js_1.ScraperError(`Can't parse encode params!\n${res}`);
    const result = [];
    const $ = cheerio_1.default.load(html);
    $('table.table > tbody > tr').each(function () {
        var _a, _b;
        const el = $(this).find('td');
        if (/tidak|no/i.test(el.eq(1).text())) {
            const quality = (_b = (_a = el.eq(0).text().split('(')) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.trim();
            const url = el.eq(2).find('a[href]').attr('href');
            if (url)
                result.push({ quality, url });
        }
    });
    if (!result.length)
        throw new utils_js_1.ScraperError(`Can't download!\n${$.html()}`);
    return {
        id: ((_l = (_k = $('div.media-content > div.content > p > strong')
            .text()
            .split('#')) === null || _k === void 0 ? void 0 : _k[1]) === null || _l === void 0 ? void 0 : _l.trim()) || '',
        title: $('div.media-content > div.content > p > strong').text(),
        description: $('div.media-content > div.content > p > span.video-des').text(),
        thumbnail: $('figure > p.image > img[src]').attr('src'),
        result
    };
}
exports.facebookdlv2 = facebookdlv2;
async function facebookdlv3(url) {
    var _a;
    const payload = {
        url
    };
    const text = await (0, got_1.default)('https://www.getfvid.com/downloader', {
        method: 'POST',
        headers: {
            accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-US,en;q=0.9',
            'content-type': 'application/x-www-form-urlencoded',
            cookie: '_ga=GA1.2.887753826.1642391325; _gid=GA1.2.2022692773.1642391325; __gads=ID=4ea88e3817c8d71b-22332defffcf0045:T=1642391326:RT=1642391326:S=ALNI_MY3oJyiEG_b8KXZBJ7RqvN2Mn8wbw; XSRF-TOKEN=eyJpdiI6ImdNUElWWU83S01jOTdZeitCUWdkWXc9PSIsInZhbHVlIjoiTGxnaE9oRVJTKzA5NDBncUtBa0xEdCtqNHBJXC9ZMVFPR1U2RnBSYUFzZHltWElZS2VtVUltUTJ2TjB5V3pEeTYzRUNMcENjMURGSkhBXC9OUitpcjMrZz09IiwibWFjIjoiMTViZTNjZDI3ZTZmOTk2ZWRjOWM1NTA5MTU2NDFhYWFlMjIxNTQxZTJlYjliMjJiMzE3YzlkNGMxODc2NjhmMCJ9; laravel_session=eyJpdiI6IjhZbElIRmpLSkVqZGZpQXJoK2MzVHc9PSIsInZhbHVlIjoianBSSFhPb2t0RFY4Q1wvYkk1S3pxMUNxXC82b0U1NHZROTVpS1Z4dGhES3ZTYTNsenJUSXpwcWNMVDkwWFk4OUY1TitGNmlDK1RXbTVyREVzcHVoRnRidz09IiwibWFjIjoiY2U1YzI2ODZlYWI2NzFkZDU1NTQ5Zjk0M2NmMDc2MTZhY2M3ODQxYjljZGUzMDQwMTYxZGQwZGYxMDM3NDMyZSJ9; __cf_bm=ephRNXRqwgrTB4SmHlsudy886EfsR2Ns2KtXVBnph4I-1642392732-0-AXtTUW5HRNQUeUcTJPhJTOPlMcjBFmMyoLKYOnxrDZ6Fa06XaJ4pMNW9arLg4zco/ef+ji00IV8NZb0nGOAKgfg=; _gat=1; __atuvc=6%7C3; __atuvs=61e4e71d2b803588005; __atssc=google%3B3',
            origin: 'https://www.getfvid.com',
            referer: 'https://www.getfvid.com/',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36'
        },
        form: payload
    }).text();
    const $ = cheerio_1.default.load(text);
    const row = $('div.card > div.row > div');
    const thumbnail = (_a = /background-image: url\((.*?)\);/i.exec(row.eq(0).find('a[href]').attr('style'))) === null || _a === void 0 ? void 0 : _a[1];
    const result = [];
    row.find('.btns-download > p > a[href]').each(function () {
        var _a;
        const el = $(this);
        const url = el.attr('href');
        const info = el.text().trim();
        const isAudio = /audio/i.test(info);
        const quality = isAudio ? 'audio' : (_a = /Download in (\w+) Quality/i.exec(info)) === null || _a === void 0 ? void 0 : _a[1];
        const isVideo = quality !== 'audio';
        if (url) {
            result.push({
                url,
                quality,
                isAudio,
                isVideo
            });
        }
    });
    if (!result.length)
        throw new utils_js_1.ScraperError(`Can't download!\n${$.html()}`);
    return {
        title: $('#title_video').val(),
        thumbnail,
        result
    };
}
exports.facebookdlv3 = facebookdlv3;
//# sourceMappingURL=facebook.js.map