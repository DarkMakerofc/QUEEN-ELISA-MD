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
const src_1 = require("../src");
test('Search for Jazz playlists and the first one should return a list of results', () => __awaiter(void 0, void 0, void 0, function* () {
    const query = 'jazz';
    const results = yield src_1.searchPlaylists(query);
    expect(results.length).toBeGreaterThan(1);
    const firstPlaylist = results.shift();
    expect(firstPlaylist).toBeDefined();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const songsResult = yield src_1.listMusicsFromPlaylist(results[0].playlistId);
    expect(songsResult.length).toBeGreaterThan(1);
}));
