"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseArtistSearchResult = exports.parseArtistData = exports.parseArtistsAlbumItem = exports.parseMusicInAlbumItem = exports.parseAlbumHeader = exports.parseAlbumItem = exports.parseMusicInPlaylistItem = exports.parsePlaylistItem = exports.parseSuggestionItem = exports.parseMusicItem = exports.listArtists = void 0;
const models_1 = require("./models");
const explicitBadgeText = 'MUSIC_EXPLICIT_BADGE';
const parseDuration = (durationLabel) => {
    const durationList = durationLabel.split(':');
    return durationList.length === 3
        ? parseInt(durationList[0], 10) * 3600 +
            parseInt(durationList[1], 10) * 60 +
            parseInt(durationList[2], 10)
        : parseInt(durationList[0], 10) * 60 + parseInt(durationList[1], 10);
};
const getAlbumType = (typeText) => {
    switch (typeText) {
        case models_1.AlbumType.album:
            return models_1.AlbumType.album;
        case models_1.AlbumType.ep:
            return models_1.AlbumType.ep;
        default:
            return models_1.AlbumType.single;
    }
};
// Detects multiple artists of the MusicVideo
const listArtists = (data) => {
    const artists = [];
    data.forEach(item => {
        if (item.navigationEndpoint && item.navigationEndpoint.browseEndpoint.browseEndpointContextSupportedConfigs.browseEndpointContextMusicConfig.pageType === models_1.PageType.artist) {
            artists.push({ name: item.text, id: item.navigationEndpoint.browseEndpoint.browseId });
        }
    });
    if (artists.length === 0) {
        const delimiterIndex = data.findIndex(item => item.text === ' • ');
        if (delimiterIndex !== -1) {
            data.filter((item, index) => index < delimiterIndex && item.name !== ' & ')
                .forEach(item => artists.push({ name: item.text }));
        }
    }
    return artists;
};
exports.listArtists = listArtists;
const parseMusicItem = (content) => {
    var _a;
    let youtubeId;
    try {
        youtubeId =
            content.musicResponsiveListItemRenderer.flexColumns[0]
                .musicResponsiveListItemFlexColumnRenderer.text.runs[0]
                .navigationEndpoint.watchEndpoint.videoId;
    }
    catch (err) {
        console.log("Couldn't parse youtube id", err);
    }
    let title;
    try {
        title =
            content.musicResponsiveListItemRenderer.flexColumns[0]
                .musicResponsiveListItemFlexColumnRenderer.text.runs[0].text;
    }
    catch (err) {
        console.log("Couldn't parse title", err);
    }
    let artists;
    try {
        artists = exports.listArtists(content.musicResponsiveListItemRenderer.flexColumns[1]
            .musicResponsiveListItemFlexColumnRenderer.text.runs);
    }
    catch (err) {
        console.log("Couldn't parse artist", err);
    }
    let album;
    try {
        const { length } = content.musicResponsiveListItemRenderer.flexColumns[1]
            .musicResponsiveListItemFlexColumnRenderer.text.runs;
        album =
            content.musicResponsiveListItemRenderer.flexColumns[1]
                .musicResponsiveListItemFlexColumnRenderer.text.runs[length - 3].text;
    }
    catch (err) {
        console.log("Couldn't parse album", err);
    }
    let thumbnailUrl;
    try {
        thumbnailUrl = (_a = content.musicResponsiveListItemRenderer.thumbnail.musicThumbnailRenderer.thumbnail.thumbnails.pop()) === null || _a === void 0 ? void 0 : _a.url;
    }
    catch (err) {
        console.log("Couldn't parse thumbnailUrl", err);
    }
    let duration;
    try {
        const label = content.musicResponsiveListItemRenderer.flexColumns[1]
            .musicResponsiveListItemFlexColumnRenderer.text.runs[content.musicResponsiveListItemRenderer.flexColumns[1]
            .musicResponsiveListItemFlexColumnRenderer.text.runs.length - 1].text;
        duration = {
            label,
            totalSeconds: parseDuration(label),
        };
    }
    catch (err) {
        console.log("Couldn't parse duration", err);
    }
    let isExplicit;
    try {
        isExplicit =
            content.musicResponsiveListItemRenderer.badges[0].musicInlineBadgeRenderer
                .icon.iconType === explicitBadgeText;
    }
    catch (err) {
        isExplicit = false;
    }
    return {
        youtubeId,
        title,
        artists,
        album,
        thumbnailUrl,
        duration,
        isExplicit,
    };
};
exports.parseMusicItem = parseMusicItem;
const parseSuggestionItem = (content) => {
    var _a;
    let youtubeId;
    try {
        youtubeId =
            content.playlistPanelVideoRenderer.navigationEndpoint.watchEndpoint
                .videoId;
    }
    catch (err) {
        console.log("Couldn't parse youtube id", err);
    }
    let title;
    try {
        title = content.playlistPanelVideoRenderer.title.runs[0].text;
    }
    catch (err) {
        console.log("Couldn't parse title", err);
    }
    let artists;
    try {
        artists = exports.listArtists(content.playlistPanelVideoRenderer.longBylineText.runs);
    }
    catch (err) {
        console.log("Couldn't parse artist", err);
    }
    let album;
    try {
        album = content.playlistPanelVideoRenderer.longBylineText.runs[2].text;
    }
    catch (err) {
        console.log("Couldn't parse album", err);
    }
    let isExplicit;
    try {
        isExplicit = content.playlistPanelVideoRenderer.badges[0].musicInlineBadgeRenderer.icon.iconType === "MUSIC_EXPLICIT_BADGE";
    }
    catch (err) {
        isExplicit = false;
    }
    let thumbnailUrl;
    try {
        thumbnailUrl = (_a = content.playlistPanelVideoRenderer.thumbnail.thumbnails.pop()) === null || _a === void 0 ? void 0 : _a.url;
    }
    catch (err) {
        console.log("Couldn't parse thumbnailUrl", err);
    }
    let duration;
    try {
        duration = {
            label: content.playlistPanelVideoRenderer.lengthText.runs[0].text,
            totalSeconds: parseDuration(content.playlistPanelVideoRenderer.lengthText.runs[0].text),
        };
    }
    catch (err) {
        console.log("Couldn't parse duration", err);
    }
    return {
        youtubeId,
        title,
        artists,
        isExplicit,
        album,
        thumbnailUrl,
        duration,
    };
};
exports.parseSuggestionItem = parseSuggestionItem;
const parsePlaylistItem = (content, onlyOfficialPlaylists) => {
    var _a;
    let playlistId;
    try {
        playlistId =
            content.musicResponsiveListItemRenderer.navigationEndpoint.browseEndpoint
                .browseId;
    }
    catch (err) {
        console.log("Couldn't parse youtube id", err);
    }
    if (onlyOfficialPlaylists &&
        content.musicResponsiveListItemRenderer.flexColumns[1]
            .musicResponsiveListItemFlexColumnRenderer.text.runs[0].text !==
            'YouTube Music') {
        return null;
    }
    let title;
    try {
        title =
            content.musicResponsiveListItemRenderer.flexColumns[0]
                .musicResponsiveListItemFlexColumnRenderer.text.runs[0].text;
    }
    catch (err) {
        console.log("Couldn't parse title", err);
    }
    let totalSongs;
    try {
        totalSongs = parseInt(content.musicResponsiveListItemRenderer.flexColumns[1].musicResponsiveListItemFlexColumnRenderer.text.runs[2].text.split(' ')[0], 10);
    }
    catch (err) {
        console.log("Couldn't parse artist", err);
    }
    let thumbnailUrl;
    try {
        thumbnailUrl = (_a = content.musicResponsiveListItemRenderer.thumbnail.musicThumbnailRenderer.thumbnail.thumbnails.pop()) === null || _a === void 0 ? void 0 : _a.url;
    }
    catch (err) {
        console.log("Couldn't parse thumbnailUrl", err);
    }
    return {
        playlistId,
        title,
        totalSongs,
        thumbnailUrl,
    };
};
exports.parsePlaylistItem = parsePlaylistItem;
const parseMusicInPlaylistItem = (content) => {
    var _a, _b;
    let youtubeId;
    try {
        youtubeId =
            content.musicResponsiveListItemRenderer.flexColumns[0]
                .musicResponsiveListItemFlexColumnRenderer.text.runs[0]
                .navigationEndpoint.watchEndpoint.videoId;
    }
    catch (err) {
        console.log("Couldn't parse youtube id", err);
    }
    let title;
    try {
        title =
            content.musicResponsiveListItemRenderer.flexColumns[0]
                .musicResponsiveListItemFlexColumnRenderer.text.runs[0].text;
    }
    catch (err) {
        console.log("Couldn't parse title", err);
    }
    let artists;
    try {
        artists = exports.listArtists(content.musicResponsiveListItemRenderer.flexColumns[1]
            .musicResponsiveListItemFlexColumnRenderer.text.runs);
    }
    catch (err) {
        console.log("Couldn't parse artist", err);
    }
    let album;
    try {
        album =
            content.musicResponsiveListItemRenderer.flexColumns[2]
                .musicResponsiveListItemFlexColumnRenderer.text.runs[0].text;
    }
    catch (err) {
        console.log("Couldn't parse album", err);
    }
    let thumbnailUrl;
    try {
        thumbnailUrl = (_a = content.musicResponsiveListItemRenderer.thumbnail.musicThumbnailRenderer.thumbnail.thumbnails.pop()) === null || _a === void 0 ? void 0 : _a.url;
    }
    catch (err) {
        console.log("Couldn't parse thumbnailUrl", err);
    }
    let duration;
    try {
        duration = {
            label: content.musicResponsiveListItemRenderer.fixedColumns[0]
                .musicResponsiveListItemFixedColumnRenderer.text.runs[0].text,
            totalSeconds: parseDuration(content.musicResponsiveListItemRenderer.fixedColumns[0]
                .musicResponsiveListItemFixedColumnRenderer.text.runs[0].text),
        };
    }
    catch (err) {
        console.log("Couldn't parse duration", err);
    }
    let isExplicit;
    try {
        isExplicit =
            ((_b = content.musicResponsiveListItemRenderer) === null || _b === void 0 ? void 0 : _b.badges[0].musicInlineBadgeRenderer.icon.iconType) === explicitBadgeText;
    }
    catch (err) {
        isExplicit = false;
    }
    return {
        youtubeId,
        title,
        artists,
        album,
        thumbnailUrl,
        duration,
        isExplicit,
    };
};
exports.parseMusicInPlaylistItem = parseMusicInPlaylistItem;
const parseAlbumItem = (content) => {
    var _a, _b, _c;
    let albumId;
    try {
        albumId =
            content.musicResponsiveListItemRenderer.navigationEndpoint.browseEndpoint
                .browseId;
    }
    catch (err) {
        console.error("Couldn't parse albumId", err);
    }
    let title;
    try {
        title =
            content.musicResponsiveListItemRenderer.flexColumns[0]
                .musicResponsiveListItemFlexColumnRenderer.text.runs[0].text;
    }
    catch (err) {
        console.error("Couldn't parse title", err);
    }
    let type;
    try {
        type = getAlbumType(content.musicResponsiveListItemRenderer.flexColumns[1].musicResponsiveListItemFlexColumnRenderer.text.runs[0].text);
    }
    catch (err) {
        console.error("Couldn't parse album type", err);
    }
    let thumbnailUrl;
    try {
        thumbnailUrl = (_a = content.musicResponsiveListItemRenderer.thumbnail.musicThumbnailRenderer.thumbnail.thumbnails.pop()) === null || _a === void 0 ? void 0 : _a.url;
    }
    catch (err) {
        console.error("Couldn't parse thumbnailUrl", err);
    }
    let artist;
    try {
        artist =
            content.musicResponsiveListItemRenderer.flexColumns[1]
                .musicResponsiveListItemFlexColumnRenderer.text.runs[2].text;
    }
    catch (err) {
        console.error("Couldn't parse artist", err);
    }
    let artistId;
    try {
        artistId =
            (_b = content.musicResponsiveListItemRenderer.flexColumns[1]
                .musicResponsiveListItemFlexColumnRenderer.text.runs[2]
                .navigationEndpoint) === null || _b === void 0 ? void 0 : _b.browseEndpoint.browseId;
    }
    catch (err) {
        console.error("Couldn't parse artistId", err);
    }
    let year;
    try {
        year =
            content.musicResponsiveListItemRenderer.flexColumns[1]
                .musicResponsiveListItemFlexColumnRenderer.text.runs[4].text;
    }
    catch (err) {
        console.error("Couldn't parse year", err);
    }
    let isExplicit;
    try {
        isExplicit =
            ((_c = content.musicResponsiveListItemRenderer) === null || _c === void 0 ? void 0 : _c.badges[0].musicInlineBadgeRenderer.icon.iconType) === explicitBadgeText;
    }
    catch (err) {
        isExplicit = false;
    }
    return {
        albumId,
        title,
        type,
        thumbnailUrl,
        artist,
        artistId,
        year,
        isExplicit,
    };
};
exports.parseAlbumItem = parseAlbumItem;
const parseAlbumHeader = (content) => {
    var _a;
    let artist;
    try {
        artist = content.musicDetailHeaderRenderer.subtitle.runs[2].text;
    }
    catch (err) {
        console.error("Couldn't parse artist from album header", err);
    }
    let album;
    try {
        album = content.musicDetailHeaderRenderer.title.runs[0].text;
    }
    catch (err) {
        console.error("Couldn't parse title from album header", err);
    }
    let thumbnailUrl;
    try {
        thumbnailUrl = (_a = content.musicDetailHeaderRenderer.thumbnail.croppedSquareThumbnailRenderer.thumbnail.thumbnails.pop()) === null || _a === void 0 ? void 0 : _a.url;
    }
    catch (err) {
        console.error("Couldn't parse thumbnailUrl from album header", err);
    }
    return {
        artist,
        album,
        thumbnailUrl,
    };
};
exports.parseAlbumHeader = parseAlbumHeader;
const parseMusicInAlbumItem = (content) => {
    var _a, _b;
    let youtubeId;
    try {
        youtubeId =
            content.musicResponsiveListItemRenderer.flexColumns[0]
                .musicResponsiveListItemFlexColumnRenderer.text.runs[0]
                .navigationEndpoint.watchEndpoint.videoId;
    }
    catch (err) {
        console.log("Couldn't parse youtube id", err);
    }
    let title;
    try {
        title =
            content.musicResponsiveListItemRenderer.flexColumns[0]
                .musicResponsiveListItemFlexColumnRenderer.text.runs[0].text;
    }
    catch (err) {
        console.log("Couldn't parse title", err);
    }
    const artists = [];
    try {
        if ((_a = content.musicResponsiveListItemRenderer.flexColumns[1]) === null || _a === void 0 ? void 0 : _a.musicResponsiveListItemFlexColumnRenderer.text.runs)
            for (let i = 0; i < content.musicResponsiveListItemRenderer.flexColumns[1].musicResponsiveListItemFlexColumnRenderer.text.runs.length; i += 2) {
                artists.push({ name: content.musicResponsiveListItemRenderer.flexColumns[1].musicResponsiveListItemFlexColumnRenderer.text.runs[i].text });
            }
    }
    catch (err) {
        console.log("Couldn't parse artists", err);
    }
    let duration;
    try {
        duration = {
            label: content.musicResponsiveListItemRenderer.fixedColumns[0]
                .musicResponsiveListItemFixedColumnRenderer.text.runs[0].text,
            totalSeconds: parseDuration(content.musicResponsiveListItemRenderer.fixedColumns[0]
                .musicResponsiveListItemFixedColumnRenderer.text.runs[0].text),
        };
    }
    catch (err) {
        console.log("Couldn't parse duration", err);
    }
    let isExplicit;
    try {
        isExplicit =
            ((_b = content.musicResponsiveListItemRenderer) === null || _b === void 0 ? void 0 : _b.badges[0].musicInlineBadgeRenderer.icon.iconType) === explicitBadgeText;
    }
    catch (err) {
        isExplicit = false;
    }
    return {
        youtubeId,
        artists,
        title,
        duration,
        isExplicit
    };
};
exports.parseMusicInAlbumItem = parseMusicInAlbumItem;
const parseArtistsAlbumItem = (item) => {
    var _a, _b;
    let title;
    try {
        title = item.musicTwoRowItemRenderer.title.runs[0].text;
    }
    catch (e) {
        console.error("Couldn't get title", e);
    }
    let type;
    try {
        type = getAlbumType(item.musicTwoRowItemRenderer.subtitle.runs[0].text);
    }
    catch (e) {
        console.error("Couldn't get album type", e);
    }
    let albumId;
    try {
        albumId = item.musicTwoRowItemRenderer.title.runs[0].navigationEndpoint.browseEndpoint.browseId;
    }
    catch (e) {
        console.error("Couldn't get albumId", e);
    }
    let year;
    try {
        year = (_a = item.musicTwoRowItemRenderer.subtitle.runs.pop()) === null || _a === void 0 ? void 0 : _a.text;
    }
    catch (e) {
        console.error("Couldn't get year", e);
    }
    let isExplicit;
    try {
        isExplicit = item.musicTwoRowItemRenderer.subtitleBadges[0].musicInlineBadgeRenderer.icon.iconType === explicitBadgeText;
    }
    catch (e) {
        isExplicit = false;
    }
    let thumbnailUrl;
    try {
        thumbnailUrl = (_b = item.musicTwoRowItemRenderer.thumbnailRenderer.musicThumbnailRenderer.thumbnail.thumbnails.shift()) === null || _b === void 0 ? void 0 : _b.url;
    }
    catch (e) {
        console.error("Couldn't get thumbnailUrl", e);
    }
    return {
        title,
        type,
        albumId,
        year,
        thumbnailUrl,
        isExplicit
    };
};
exports.parseArtistsAlbumItem = parseArtistsAlbumItem;
const parseArtistsSuggestionsItem = (item) => {
    var _a;
    let artistId;
    try {
        artistId = item.musicTwoRowItemRenderer.title.runs[0].navigationEndpoint.browseEndpoint.browseId;
    }
    catch (e) {
        console.error("Couldn't get artistId", e);
    }
    let name;
    try {
        name = item.musicTwoRowItemRenderer.title.runs[0].text;
    }
    catch (e) {
        console.error("Couldn't get name", e);
    }
    let subscribers;
    try {
        subscribers = item.musicTwoRowItemRenderer.subtitle.runs[0].text;
        const subscribersArray = subscribers.split(" ");
        subscribersArray.pop();
        subscribers = subscribersArray.join(" ");
    }
    catch (e) {
        console.error("Couldn't get subscribers", e);
    }
    let thumbnailUrl;
    try {
        thumbnailUrl = (_a = item.musicTwoRowItemRenderer.thumbnailRenderer.musicThumbnailRenderer.thumbnail.thumbnails.pop()) === null || _a === void 0 ? void 0 : _a.url;
    }
    catch (e) {
        console.error("Couldn't get thumbnailUrl", e);
    }
    return {
        artistId,
        name,
        subscribers,
        thumbnailUrl,
    };
};
const parseArtistData = (body, artistId) => {
    var _a, _b;
    let name;
    try {
        name = body.header.musicImmersiveHeaderRenderer.title.runs[0].text;
    }
    catch (e) {
        console.error("Couldn't get artist name", e);
    }
    let description;
    try {
        description = body.header.musicImmersiveHeaderRenderer.description.runs[0].text;
    }
    catch (e) {
        console.error("Couldn't get artist description", e);
    }
    const thumbnails = [];
    try {
        const thumbnailArray = body.header.musicImmersiveHeaderRenderer.thumbnail.musicThumbnailRenderer.thumbnail.thumbnails;
        thumbnailArray.forEach((e) => {
            thumbnails.push(e);
        });
    }
    catch (e) {
        console.error("Couldn't get artist thumbnails", e);
    }
    let songsPlaylistId;
    try {
        songsPlaylistId = body.contents.singleColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents[0].musicShelfRenderer.title.runs[0].navigationEndpoint.browseEndpoint.browseId;
    }
    catch (e) {
        console.error("Couldn't get artist songPlaylistId", e);
    }
    const albums = [];
    const singles = [];
    try {
        const { contents } = body.contents.singleColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer;
        // eslint-disable-next-line  no-restricted-syntax
        for (const shelf of contents) {
            if ((_a = shelf.musicCarouselShelfRenderer) === null || _a === void 0 ? void 0 : _a.contents) {
                if (((_b = shelf.musicCarouselShelfRenderer.contents[0].musicTwoRowItemRenderer.title.runs[0].navigationEndpoint) === null || _b === void 0 ? void 0 : _b.browseEndpoint.browseEndpointContextSupportedConfigs.browseEndpointContextMusicConfig.pageType) === models_1.PageType.album)
                    shelf.musicCarouselShelfRenderer.contents.forEach(item => {
                        const parsedItem = exports.parseArtistsAlbumItem(item);
                        if (parsedItem.type === models_1.AlbumType.single)
                            singles.push(parsedItem);
                        else
                            albums.push(parsedItem);
                    });
            }
        }
    }
    catch (e) {
        console.error("Couldn't get albums", e);
    }
    const suggestedArtists = [];
    try {
        const { contents } = body.contents.singleColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer;
        // eslint-disable-next-line  no-restricted-syntax
        for (let i = contents.length - 1; i >= 0; i -= 1) {
            if (contents[i].musicCarouselShelfRenderer) {
                if (contents[i].musicCarouselShelfRenderer.contents[0].musicTwoRowItemRenderer.title.runs[0].navigationEndpoint.browseEndpoint.browseEndpointContextSupportedConfigs.browseEndpointContextMusicConfig.pageType === models_1.PageType.artist)
                    contents[i].musicCarouselShelfRenderer.contents.forEach(v => {
                        suggestedArtists.push(parseArtistsSuggestionsItem(v));
                    });
                break;
            }
        }
    }
    catch (e) {
        console.error("Couldn't get suggestedArtists", e);
    }
    let subscribers;
    try {
        subscribers = body.header.musicImmersiveHeaderRenderer.subscriptionButton.subscribeButtonRenderer.subscriberCountWithSubscribeText.runs[0].text;
    }
    catch (e) {
        console.error("Couldn't get subscribers", e);
    }
    return {
        artistId,
        name,
        description,
        albums,
        singles,
        thumbnails,
        songsPlaylistId,
        suggestedArtists,
        subscribers
    };
};
exports.parseArtistData = parseArtistData;
const parseArtistSearchResult = (content) => {
    var _a;
    let name;
    try {
        name = content.musicResponsiveListItemRenderer.flexColumns[0].musicResponsiveListItemFlexColumnRenderer.text.runs[0].text;
    }
    catch (e) {
        console.error("Couldn't get name", e);
    }
    let artistId;
    try {
        artistId = content.musicResponsiveListItemRenderer.navigationEndpoint.browseEndpoint.browseId;
    }
    catch (e) {
        console.error("Couldn't get artistId", e);
    }
    let thumbnailUrl;
    try {
        thumbnailUrl = (_a = content.musicResponsiveListItemRenderer.thumbnail.musicThumbnailRenderer.thumbnail.thumbnails.pop()) === null || _a === void 0 ? void 0 : _a.url;
    }
    catch (e) {
        console.error("Couldn't get thumbnailUrl", e);
    }
    let subscribers;
    try {
        subscribers = content.musicResponsiveListItemRenderer.flexColumns[1].musicResponsiveListItemFlexColumnRenderer.text.runs[2].text;
    }
    catch (e) {
        console.error("Couldn't get subscribers", e);
    }
    return {
        name,
        artistId,
        thumbnailUrl,
        subscribers
    };
};
exports.parseArtistSearchResult = parseArtistSearchResult;
