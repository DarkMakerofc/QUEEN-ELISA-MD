import { searchAlbums } from '../src';

const main = () => searchAlbums('Future Nostalgia');

main().then((results) => console.log(results));
