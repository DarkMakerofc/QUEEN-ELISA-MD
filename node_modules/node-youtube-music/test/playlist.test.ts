import { listMusicsFromPlaylist, searchPlaylists } from '../src';

test('Search for Jazz playlists and the first one should return a list of results', async () => {
  const query = 'jazz';

  const results = await searchPlaylists(query);
  expect(results.length).toBeGreaterThan(1);
  const firstPlaylist = results.shift();
  expect(firstPlaylist).toBeDefined();
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const songsResult = await listMusicsFromPlaylist(results[0].playlistId!);
  expect(songsResult.length).toBeGreaterThan(1);
});
