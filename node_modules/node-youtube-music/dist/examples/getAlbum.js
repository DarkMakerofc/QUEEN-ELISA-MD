"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
// https://music.youtube.com/browse?id=MPREb_iWdtzQKst5b
const main = () => src_1.listMusicsFromAlbum('MPREb_iWdtzQKst5b');
main().then((results) => console.log(results));
