import { listMusicsFromAlbum } from '../src';

// https://music.youtube.com/browse?id=MPREb_iWdtzQKst5b
const main = () => listMusicsFromAlbum('MPREb_iWdtzQKst5b');

main().then((results) => console.log(results));
