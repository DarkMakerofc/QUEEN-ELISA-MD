"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageType = exports.AlbumType = exports.AccountType = void 0;
var AccountType;
(function (AccountType) {
    AccountType["REGULAR"] = "regular";
    AccountType["VERIFIED_ARTIST"] = "BADGE_STYLE_TYPE_VERIFIED_ARTIST";
})(AccountType = exports.AccountType || (exports.AccountType = {}));
var AlbumType;
(function (AlbumType) {
    AlbumType["ep"] = "EP";
    AlbumType["album"] = "Album";
    AlbumType["single"] = "Single";
})(AlbumType = exports.AlbumType || (exports.AlbumType = {}));
var PageType;
(function (PageType) {
    PageType["artist"] = "MUSIC_PAGE_TYPE_ARTIST";
    PageType["album"] = "MUSIC_PAGE_TYPE_ALBUM";
    PageType["playlist"] = "MUSIC_PAGE_TYPE_PLAYLIST";
})(PageType = exports.PageType || (exports.PageType = {}));
