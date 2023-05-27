import { listMusicsFromAlbum, searchAlbums } from '../src';

test('Search for Heaven & Hell album, pick first and get song list', async () => {
  const query = 'Heaven & Hell';

  const results = await searchAlbums(query);
  expect(results.length).toBeGreaterThan(1);
  const firstAlbum = results.shift();
  expect(firstAlbum).toBeDefined();
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const songsResult = await listMusicsFromAlbum(results[0].albumId!);
  console.log(songsResult);
  expect(songsResult.length).toBeGreaterThan(1);
});
