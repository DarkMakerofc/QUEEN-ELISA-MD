"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
// Search for artist
src_1.searchArtists('Selena Gomez').then(r => {
    console.log("Search results", r);
    const id = r[0].artistId;
    // Get more data about artist
    src_1.getArtist(id).then(data => {
        console.log("More Data", data);
        // You can also get playlist with all songs if author has more than 5
        // songsPlaylistId is undefined when artist has exacly 5 or less songs
        // For example Bella Porach has only 2 songs which are only listed as singles
        if (data.songsPlaylistId) {
            src_1.listMusicsFromPlaylist(data.songsPlaylistId).then(list => {
                console.log("Playlist", list);
            });
        }
    });
});
