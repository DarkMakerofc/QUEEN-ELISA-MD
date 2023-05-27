import { getSuggestions, searchMusics } from '../src';

const main = async () => {
  const music = (await searchMusics('Liem if only')).shift();
  if (!music) {
    throw Error();
  }
  if (!music.youtubeId) return {};
  return getSuggestions(music.youtubeId);
};

main().then((results) => console.log(results));
