<p>
  <a href="https://www.npmjs.com/package/simple-find-lyrics" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/simple-find-lyrics.svg" />
  </a>
</p>

> Search for lyrics with artist, song title and source.

### Installation

```sh
npm install --save simple-find-lyrics
```

### Usage

```ts
const findLyrics = require('simple-find-lyrics');

async function lyrics(s) {
    const lyrics = await findLyrics(s);
    console.log(lyrics);
}

lyrics("numb linkinpark");

// Output

// {
//   stat: 1,
//   title: 'numb',
//   artist: 'linkinpark',
//   lyrics: '..........',
//   source: 'Musixmatch'
// }
or
// {
//   stat: 0,
//   title: '',
//   artist: '',
//   lyrics: '',
//   source: ''
// }
```
> ~
