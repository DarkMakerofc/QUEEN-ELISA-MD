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
test('Search for Heaven & Hell album, pick first and get song list', () => __awaiter(void 0, void 0, void 0, function* () {
    const query = 'Heaven & Hell';
    const results = yield src_1.searchAlbums(query);
    expect(results.length).toBeGreaterThan(1);
    const firstAlbum = results.shift();
    expect(firstAlbum).toBeDefined();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const songsResult = yield src_1.listMusicsFromAlbum(results[0].albumId);
    console.log(songsResult);
    expect(songsResult.length).toBeGreaterThan(1);
}));
