import {getArtist, searchArtists, listMusicsFromPlaylist} from '../src';

// Search for artist
searchArtists('Selena Gomez').then(r=>{
    console.log("Search results",r)
    const id = r[0].artistId
    // Get more data about artist
    getArtist(id!).then(data=>{
        console.log("More Data", data)
        // You can also get playlist with all songs if author has more than 5
        // songsPlaylistId is undefined when artist has exacly 5 or less songs
        // For example Bella Porach has only 2 songs which are only listed as singles
        if(data.songsPlaylistId) {
            listMusicsFromPlaylist(data.songsPlaylistId).then(list=>{
                console.log("Playlist", list)
            })
        }
    });
});
