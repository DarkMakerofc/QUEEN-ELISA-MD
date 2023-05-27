"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const got_1 = __importDefault(require("got"));
const cheerio_1 = require("cheerio");
async function aiovideodl(url) {
    var _a;
    const resToken = await (0, got_1.default)('https://aiovideodl.ml/');
    const cookie = (_a = resToken.headers['set-cookie']) === null || _a === void 0 ? void 0 : _a.map(v => v.split(';')[0]).join('; ').trim();
    const $$ = (0, cheerio_1.load)(resToken.body);
    const token = $$('#token').val();
    const body = new URLSearchParams();
    body.append('url', url);
    body.append('token', token);
    return await (0, got_1.default)('https://aiovideodl.ml/wp-json/aio-dl/video-data/', {
        method: 'post',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            cookie: cookie || 'pll_language=en; _ga=GA1.2.946338805.1646539824; PHPSESSID=f5ec5a6eb553bf3a55508ad4ce2ed200; _gid=GA1.2.425279475.1647856193; _gat_gtag_UA_46116261_21=1',
            origin: 'https://aiovideodl.ml',
            referer: 'https://aiovideodl.ml/',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36'
        },
        body: body.toString()
    }).json();
}
exports.default = aiovideodl;
//# sourceMappingURL=aiovideodl.js.map