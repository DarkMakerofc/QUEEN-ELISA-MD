import {searchArtists, getArtist, searchMusics} from '../src';

test('Search for Dua Lipa and get more data', async () => {
  const query = 'Dua Lipa';

  const results = await searchArtists(query);
  expect(results.length).toBeGreaterThanOrEqual(1);
  const firstResult = results[0]
  expect(firstResult).toBeDefined()
  const data = await getArtist(firstResult.artistId!)
  expect(data).toBeDefined()
  expect(data.suggestedArtists?.length).toBeGreaterThanOrEqual(1)
  expect(data.albums?.length).toBeGreaterThanOrEqual(1)
  expect(data.singles?.length).toBeGreaterThanOrEqual(1)
  console.log(data)
});

test("Parse artist for songs whose artist does not have a navigationEndpoint", async () => {
  const query = "Running in the 90s";

  const results = await searchMusics(query);
  expect(results.length).toBeGreaterThanOrEqual(1);
  const firstResult = results[0];
  expect(firstResult).toBeDefined();
  expect(firstResult.artists?.length).toBeGreaterThanOrEqual(1);
  console.log(firstResult.artists);
})
