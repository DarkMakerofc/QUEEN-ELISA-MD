"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchArtists = exports.parseArtistsSearchBody = void 0;
const got_1 = require("got");
const context_1 = require("./context");
const parsers_1 = require("./parsers");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseArtistsSearchBody = (body) => {
    const { contents } = body.contents.tabbedSearchResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents.pop().musicShelfRenderer;
    const results = [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    contents.forEach((content) => {
        try {
            const artist = parsers_1.parseArtistSearchResult(content);
            if (artist) {
                results.push(artist);
            }
        }
        catch (err) {
            console.error(err);
        }
    });
    return results;
};
exports.parseArtistsSearchBody = parseArtistsSearchBody;
function searchArtists(query, options) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield got_1.default.post('https://music.youtube.com/youtubei/v1/search?alt=json&key=AIzaSyC9XL3ZjWddXya6X74dJoCTL-WEYFDNX30', {
            json: Object.assign(Object.assign({}, context_1.default.body), { params: 'EgWKAQIgAWoKEAMQBBAJEAoQBQ%3D%3D', query }),
            headers: {
                'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
                'Accept-Language': (_a = options === null || options === void 0 ? void 0 : options.lang) !== null && _a !== void 0 ? _a : 'en',
                origin: 'https://music.youtube.com',
            },
        });
        try {
            return exports.parseArtistsSearchBody(JSON.parse(response.body));
        }
        catch (e) {
            console.error(e);
            return [];
        }
    });
}
exports.searchArtists = searchArtists;
