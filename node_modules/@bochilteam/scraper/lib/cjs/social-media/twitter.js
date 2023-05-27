"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.twitterdlv2 = exports.twitterdl = void 0;
const cheerio_1 = __importDefault(require("cheerio"));
const got_1 = __importDefault(require("got"));
const utils_js_1 = require("../utils.js");
async function twitterdl(url) {
    if (!/https:\/\/twitter\.com\//i.test(url))
        throw new utils_js_1.ScraperError('URL invalid!');
    const payload = { url };
    const res = await (0, got_1.default)('https://www.expertsphp.com/instagram-reels-downloader.php', {
        method: 'POST',
        searchParams: new URLSearchParams(Object.entries(payload)),
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            cookie: '_ga=GA1.2.783835709.1637038175; __gads=ID=5b4991618655cd86-22e2c7aeadce00ae:T=1637038176:RT=1637038176:S=ALNI_MaCe3McPrVVswzBEqcQlgnVZXtZ1g; _gid=GA1.2.1817576486.1639614645; _gat_gtag_UA_120752274_1=1',
            origin: 'https://www.expertsphp.com',
            referer: 'https://www.expertsphp.com/twitter-video-downloader.html',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36'
        }
    }).text();
    const $ = cheerio_1.default.load(res);
    const results = [];
    $('table.table > tbody > tr').each(function () {
        const quality = $(this).find('td').eq(2).find('strong').text();
        const type = $(this).find('td').eq(1).find('strong').text();
        const url = $(this).find('td').eq(0).find('a[href]').attr('href');
        const isVideo = /video/i.test(type);
        if (url) {
            results.push({
                quality,
                type,
                url,
                isVideo
            });
        }
    });
    return results;
}
exports.twitterdl = twitterdl;
async function twitterdlv2(url) {
    const resToken = await (0, got_1.default)('https://twittervideodownloader.com/', {
        headers: {
            accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'accept-encoding': 'gzip, deflate, br',
            cookie: 'csrftoken=au5r4nZ6uN48szGKtaEYp4sh4hBWSbL72M7LggD0nPUh8JGajAI403UIpWhrc5dU; _ga=GA1.2.1240680676.1641628632; _gid=GA1.2.414203301.1641628632; __qca=P0-603222438-1641628633090; _pbjs_userid_consent_data=6683316680106290; _pubcid=529c1986-42d2-4dec-a0e8-3a7d7c453add; __gads=ID=c7fcfc8de61626ad:T=1641628636:S=ALNI_MaE6t3k60TjxfxOEU_7fiYOKTdg8Q; session_id=6831c9ed-aeaf-47cd-a4ea-fdf1667efea2; _gat=1; cto_bundle=3Tj6Hl93WmQzcHglMkJDRmdjWnFTYWg1ZHpLeWE5allVRUU2dlFOU1huayUyRjFTM0xYJTJCSzhsajNRRkF1Q2N2OU9JS1NlSjlxWmYzRTFqSzRuaSUyQjlacHNtYXFSRTV1UHZ1UE42djg4TUJuN05FaVdwTTR4c1hkSUlCRlY4WkJaSmd2WXhLc1NDdHRrRm44c25yeTIwMkRRRSUyQkhJalMlMkJBZ3YxZzZwck5VdTIwclNoMkRvbzglM0Q; cto_bundle=3YOlHV93WmQzcHglMkJDRmdjWnFTYWg1ZHpLeVhBUGgzakxaV0xpZTJpJTJCQ3ZDVDd6SyUyQmJsdmxXcW8lMkZtZkZoMVlNNlJ4SU0xaUVxZXg0eGptZU1oZU4xOHIlMkZaamxlY3gwYnJ1ZSUyQkpVVTUyV2p0cm9PNkFRNEl3ZVBoaUtNSmpnNWRjeWtrWktoYTIzV1ZUdEJ6bFZDTWtCSDV4UWdWV2JPbGZJMzBzM2lxaVVRanNWSkElM0Q; cto_bidid=19sjyV9TQVBXTlA4SGwxYUt5Z0JqVFlHUSUyRk1QZ3Vwa1BaUGZubk1meUVmYSUyQmRSSzBUTkdGQiUyQll0bThNbWVGbjVxV293a2RDUVEzNTFvdVZxR09vaWxSWlE4a2lKTVQwYnp3JTJGV05GV0g2UUxWMnc5N2RJWG1NZGtKVWdiRm1WYXNqU0Ey',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36'
        }
    }).text();
    const $ = cheerio_1.default.load(resToken);
    const payload = {
        csrfmiddlewaretoken: $('input[name="csrfmiddlewaretoken"]').val(),
        tweet: url
    };
    const res = await got_1.default
        .post('https://twittervideodownloader.com/download', {
        form: payload,
        headers: {
            accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'accept-encoding': 'gzip, deflate, br',
            'content-type': 'application/x-www-form-urlencoded',
            cookie: 'csrftoken=au5r4nZ6uN48szGKtaEYp4sh4hBWSbL72M7LggD0nPUh8JGajAI403UIpWhrc5dU; _ga=GA1.2.1240680676.1641628632; _gid=GA1.2.414203301.1641628632; __qca=P0-603222438-1641628633090; _pbjs_userid_consent_data=6683316680106290; _pubcid=529c1986-42d2-4dec-a0e8-3a7d7c453add; __gads=ID=c7fcfc8de61626ad:T=1641628636:S=ALNI_MaE6t3k60TjxfxOEU_7fiYOKTdg8Q; session_id=6831c9ed-aeaf-47cd-a4ea-fdf1667efea2; cto_bundle=3Tj6Hl93WmQzcHglMkJDRmdjWnFTYWg1ZHpLeWE5allVRUU2dlFOU1huayUyRjFTM0xYJTJCSzhsajNRRkF1Q2N2OU9JS1NlSjlxWmYzRTFqSzRuaSUyQjlacHNtYXFSRTV1UHZ1UE42djg4TUJuN05FaVdwTTR4c1hkSUlCRlY4WkJaSmd2WXhLc1NDdHRrRm44c25yeTIwMkRRRSUyQkhJalMlMkJBZ3YxZzZwck5VdTIwclNoMkRvbzglM0Q; cto_bundle=ZKGKs193WmQzcHglMkJDRmdjWnFTYWg1ZHpLeWF0Z3V5SVY2JTJGTDNCd3A1MHVWVmJMWCUyQjdLTHh2MGZjRzh3ZU5CdWs4TEJyWTNmN2IlMkZuUCUyQiUyRlBDazBORUZIM2d3d0NUR2E3VWh6bmhxNzNDMm9mQUtnTVNPMjBiOUxpSXNXZGoydGxlZjB0YTZIbkNCeU91NnZ2Y0xUJTJGV0ppYkJ0JTJCZlIxYW8yNXBGRXdLaG1Za3RWZzJrJTNE; cto_bidid=U6ndml9TQVBXTlA4SGwxYUt5Z0JqVFlHUSUyRk1QZ3Vwa1BaUGZubk1meUVmYSUyQmRSSzBUTkdGQiUyQll0bThNbWVGbjVxV293a2RDUVEzNTFvdVZxR09vaWxSWlE4a2lKTVQwYnp3JTJGV05GV0g2UUxWMnc5VkJXSFlsN2x6cExKb3pPQTAzWEZZ',
            origin: 'https://twittervideodownloader.com',
            referer: 'https://twittervideodownloader.com/',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36'
        }
    })
        .text();
    const results = [];
    const $$ = cheerio_1.default.load(res);
    $$('div.row.body-container > div > center > div.row').each(function () {
        var _a, _b;
        const el = $(this).find('div');
        const _quality = el.eq(1).find('p').text().split(':');
        const quality = (_a = _quality === null || _quality === void 0 ? void 0 : _quality[0]) === null || _a === void 0 ? void 0 : _a.trim();
        const type = (_b = _quality === null || _quality === void 0 ? void 0 : _quality[1]) === null || _b === void 0 ? void 0 : _b.trim();
        const url = el.eq(0).find('a[download]').attr('href');
        results.push({ quality, type, url });
    });
    return results;
}
exports.twitterdlv2 = twitterdlv2;
//# sourceMappingURL=twitter.js.map