import { searchPlaylists } from '../src';

const main = () =>
  searchPlaylists('Daft Punk', { onlyOfficialPlaylists: true });

main().then((results) => console.log(results));
