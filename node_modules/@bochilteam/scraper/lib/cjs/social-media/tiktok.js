"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tiktokfyp = exports.tiktokdlv3 = exports.tiktokdlv2 = exports.tiktokdl = void 0;
const got_1 = __importDefault(require("got"));
const cheerio_1 = __importDefault(require("cheerio"));
const utils_js_1 = require("../utils.js");
async function tiktokdl(url) {
    var _a, _b, _c, _d, _e, _f;
    const resToken = await (0, got_1.default)('https://snaptik.app/ID');
    const cookie = (_a = resToken.headers['set-cookie']) === null || _a === void 0 ? void 0 : _a.map(v => v.split(';')[0]).join('; ');
    const $$ = cheerio_1.default.load(resToken.body);
    const html = await (0, got_1.default)('https://snaptik.app/abc.php', {
        headers: {
            cookie: cookie || 'PHPSESSID=gphtms9fofqm2fikr9ofqrld25; current_language=ID; ref=google; __cflb=04dToWzoGizosSfR1ww5Ce8foMmhJkC5absiUehuAK; _ga=GA1.2.500024560.1646295641; _gid=GA1.2.786638280.1646295641; __gads=ID=2d9fb59650bbba88-22611414cbd0004a:T=1646295642:RT=1646295642:S=ALNI_MbDUnOcA1ZoJcH9yeqYgALtEC3W2w; ads_new=1; __cfruid=e4d99b4f4c1cabd9c94cc558b0c7eee4d7508448-1646295654; _gat=1',
            referer: 'https://snaptik.app/ID',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36'
        },
        searchParams: {
            url: encodeURI(url),
            lang: 'ID',
            token: $$('input[name="token"]').val()
        }
    }).text();
    const decodeParams = (_c = (_b = html.split('))</script>')[0]
        .split('decodeURIComponent(escape(r))}(')[1]) === null || _b === void 0 ? void 0 : _b.split(',')) === null || _c === void 0 ? void 0 : _c.map(v => v.replace(/^"/, '')
        .replace(/"$/, '').trim());
    if (!Array.isArray(decodeParams) || decodeParams.length !== 6)
        throw new utils_js_1.ScraperError(`failed to parse decode params!\n${html}`);
    const decode = (0, utils_js_1.decodeSnapApp)(...decodeParams);
    const result = (_f = (_e = (_d = decode.split('; elem.innerHTML = \\\'')) === null || _d === void 0 ? void 0 : _d[1].split('\\\'; parent.ga(')) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.replace(/\\(\\)?/g, '');
    if (!result)
        throw new utils_js_1.ScraperError(`failed to parse html from decode!\n${decode}`);
    const $ = cheerio_1.default.load(result);
    const $snaptik_middle = $('.snaptikvid > div.snaptik-middle');
    const $a = $('#download-block > .abuttons').find('a');
    let no_watermark2 = $a.eq(1).attr('href');
    if (!/https?:\/\//.test(no_watermark2))
        no_watermark2 = `https://snaptik.app${no_watermark2}`;
    return {
        author: {
            nickname: $snaptik_middle.find('h3').text()
        },
        description: $snaptik_middle.find('span').text(),
        video: {
            no_watermark: $a.eq(0).attr('href'),
            no_watermark2,
            no_watermark_raw: $a.eq(2).attr('href')
        }
    };
}
exports.tiktokdl = tiktokdl;
async function tiktokdlv2(url) {
    const data = await got_1.default
        .post('https://api.tikmate.app/api/lookup', {
        headers: {
            accept: '*/*',
            'accept-language': 'en-US,en;q=0.9',
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            origin: 'https://tikmate.app',
            referer: 'https://tikmate.app/',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36'
        },
        form: { url }
    })
        .json();
    return {
        author: {
            unique_id: data.author_id,
            nickname: data.author_name,
            avatar: data.author_avatar
        },
        video: {
            no_watermark: `https://tikmate.app/download/${data.token}/${data.id}.mp4`,
            no_watermark_hd: `https://tikmate.app/download/${data.token}/${data.id}.mp4?hd=1`
        }
    };
}
exports.tiktokdlv2 = tiktokdlv2;
async function tiktokdlv3(url) {
    var _a;
    const resToken = await (0, got_1.default)('https://ssstik.io/id');
    const cookie = (_a = resToken.headers['set-cookie']) === null || _a === void 0 ? void 0 : _a.map(v => v.split(';')[0]).join('; ');
    const $$ = cheerio_1.default.load(resToken.body);
    const postUrl = $$('#_gcaptcha_pt').attr('hx-post');
    const html = await (0, got_1.default)('https://ssstik.io' + postUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            cookie: cookie || 'PHPSESSID=gb6hgnvvpkfg28ulo80l1u2qrl; __cflb=02DiuEcwseaiqqyPC5pE7Qjdp2jcR2J5YEMX3jgTCHMYX; _ga=GA1.2.1294804934.1647840559; _gid=GA1.2.1211588131.1647840559; __gads=ID=3ba3f6d3a5959cb0-224bbeea15d100da:T=1647840559:RT=1647840559:S=ALNI_MYtTuJ9ICRAeHGfemUzb2rwyaT6lw; ga_show=2; _gat_UA-3524196-6=1',
            'hx-current-url': 'https://ssstik.io/id',
            'hx-request': 'true',
            'hx-target': 'target',
            'hx-trigger': ' _gcaptcha_pt',
            origin: 'https://ssstik.io',
            referer: 'https://ssstik.io/id',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537'
        },
        form: {
            id: encodeURI(url),
            locale: 'id',
            gc: 0,
            tt: 0,
            ts: 0
        }
    }).text();
    const $ = cheerio_1.default.load(html);
    const $img = $('img.u-round');
    const $a = $('a.pure-button');
    let no_watermark = $a.eq(0).attr('href');
    if (!/https?:\/\//.test(no_watermark))
        no_watermark = `https://ssstik.io${no_watermark}`;
    return {
        author: {
            nickname: $img.attr('alt'),
            avatar: $img.attr('src')
        },
        description: $('p.maintext').text(),
        video: {
            no_watermark,
            no_watermark2: $a.eq(1).attr('href')
        },
        music: $a.eq(2).attr('href')
    };
}
exports.tiktokdlv3 = tiktokdlv3;
async function tiktokfyp() {
    const data = await (0, got_1.default)('https://t.tiktok.com/api/recommend/item_list/?aid=1988&app_name=tiktok_web&device_platform=web_pc&device_id=6982004129280116226&region=ID&priority_region=&os=windows&referer=&cookie_enabled=true&screen_width=1920&screen_height=1080&browser_language=en-US&browser_platform=Win32&browser_name=Mozilla&browser_version=5.0+(Windows+NT+10.0%3B+Win64%3B+x64)+AppleWebKit%2F537.36+(KHTML,+like+Gecko)+Chrome%2F96.0.4664.93+Safari%2F537.36&browser_online=true&verifyFp=verify_kx30laei_YkR2lQiI_UBWz_4MZK_ACKV_loiPDs4PyDtw&app_language=en&timezone_name=Asia%2FJakarta&is_page_visible=true&focus_state=true&is_fullscreen=false&history_len=2&battery_info=%7B%7D&count=30&itemID=1&language=en&from_page=fyp&insertedItemID=&versions=70232694,70338434,70001178,70138197,70156809&msToken=Wi63JD_P7xxD_7pFmaF_UcHM6oJwSKjR9wnfsMUaDdz51KLZ3J8tazDrcY2gh_t3PyG_5926qyw8g7DhrgFa3mbDmxLhzmLs_3l_sOk4zf6TdMqfAT51s_n8ZPG8vovv76h1kCkR&X-Bogus=DFSzswVOAxxANJf/SEhC1eM/W7oh&_signature=').json();
    return data.itemList || [];
}
exports.tiktokfyp = tiktokfyp;
// export async function tiktokstalk(name: string): Promise<{
//     username: string;
//     profile: string;
//     avatar: string;
//     verified: boolean;
//     following: string;
//     followers: string;
//     likes: string;
//     description: string;
// }> {
//     const { data } = await axios.get(`https://www.tiktok.com/@${name}?lang=en`, {
//         headers: {
//             accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
//             cookie: 'tt_csrf_token=hlVsM4KILUl4mGcUkB6w6FJR; s_v_web_id=verify_kx30laei_YkR2lQiI_UBWz_4MZK_ACKV_loiPDs4PyDtw; ttwid=1%7CY1AOcjfoIgvlYizkFtt8slCK0i4qZqApyt2VHzQW2jY%7C1639301134%7C43c115b2541a4ae28ba3b0f194641f223a4a3b18a3fcf83212c133eaf4518b04; msToken=9Ac544Pz7Cc_nUXjNNhx8MBVx96CEeL0mgtWiPUQ5Ef3XxRI81YIpRNDkWa3TM5mqAFr-rhaNE1HWEXop_kpLp4BTCqhLQdu3ppGSbLHhUnqEKmzpF86bWvmur5xyKDCVmE63Q==',
//             'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36'
//         }
//     })
//     const $ = cheerio.load(data)
//     let container = $('div.share-title-container > h2')
//     let username = container.text()?.trim()
//     let avatar = $('span.tiktok-avatar.tiktok-avatar-circle.avatar > img').attr('src')
//     let verified = /verified$/.test(container.attr('class'))
//     let profile = $('h1.share-sub-title > span.profile').text()?.trim()
//     let stats = $('h2.count-infos > div.number')
//     let following = stats.eq(0).find('strong').text()?.trim()
//     let followers = stats.eq(1).find('strong').text()?.trim()
//     let likes = stats.eq(2).find('strong').text()?.trim()
//     let description = $('h2.share-desc').text()?.trim()
//     return {
//         username,
//         profile,
//         avatar,
//         verified,
//         following,
//         followers,
//         likes,
//         description
//     }
// }
// export async function tiktoksearch(query: string) {
//     const { data } = await axios.get(`https://www.tiktok.com/search?q=${query}&t=${+new Date()}`)
//     const $ = cheerio.load(data)
// }
//# sourceMappingURL=tiktok.js.map