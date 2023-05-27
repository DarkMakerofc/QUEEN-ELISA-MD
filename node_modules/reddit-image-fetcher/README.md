<p align="center">
  <a href="https://arifszn.github.io/reddit-image-fetcher" target="_blank">
    <img src="https://arifszn.github.io/reddit-image-fetcher/img/logo/logo.png" alt="Reddit Image Fetcher" title="Reddit Image Fetcher" width="80">
  </a>
</p>

<h1 align="center">Reddit Image Fetcher</h1>
<p align="center">A JavaScript package for fetching reddit images, memes, wallpapers and more.</p>
<p align="center"><a href="https://arifszn.github.io/reddit-image-fetcher">https://arifszn.github.io/reddit-image-fetcher</a></p>

<p align="center">
    <a href="https://www.npmjs.com/package/reddit-image-fetcher"><img src="https://img.shields.io/npm/v/reddit-image-fetcher"/></a>
    <img src="https://img.shields.io/bundlephobia/min/reddit-image-fetcher"/>
    <a href="https://github.com/arifszn/reddit-image-fetcher/blob/main/LICENSE"><img src="https://img.shields.io/github/license/arifszn/reddit-image-fetcher"/></a>
</p>

<br/>

<p align="center">
  <a href="https://arifszn.github.io/reddit-image-fetcher">
    <img src="https://arifszn.github.io/reddit-image-fetcher/img/preview.gif" width="60%" alt="Preview"/>
  </a>
  <br/>
  <a href="#arifszn"><img src="https://arifszn.github.io/assets/img/drop-shadow.png" width="60%" alt="Shadow"/></a>
</p>

Reddit Image Fetcher is a JavaScript package that can fetch bulk images, memes or wallpapers. Supports node, react and other any JavaScript language.

- Bulk images
- Bulk memes
- Bulk wallpapers
- Customizable
- Lightweight <small><code><20KB</code></small>

> PHP version: <a href="https://github.com/arifszn/reddit-image-fetcher-php">Reddit Image Fetcher</a>


## Resources

- [Demo](https://memedb.netlify.app)
- [Documentation](https://arifszn.github.io/reddit-image-fetcher)
- [CodeSandbox](https://codesandbox.io/s/reddit-image-fetcher-53x89)


## Installation

Install via <a href="https://www.npmjs.com/package/reddit-image-fetcher">NPM</a>
```
npm install reddit-image-fetcher
```

Install via <a href="https://yarnpkg.com/package/reddit-image-fetcher">Yarn</a>
```
yarn add reddit-image-fetcher
```


## Usage

```js
const RedditImageFetcher = require("reddit-image-fetcher");

// fetch 1 meme
RedditImageFetcher.fetch({
    type: 'meme'
}).then(result => {
    console.log(result);
});

// fetch 1 wallpaper
RedditImageFetcher.fetch({
    type: 'wallpaper'
}).then(result => {
    console.log(result);
});

// fetch 50 wallpapers
RedditImageFetcher.fetch({
    type: 'wallpaper',
    total: 50
}).then(result => {
    console.log(result);
});

// fetch 50 cat images from custom subreddit library
RedditImageFetcher.fetch({
    type: 'custom',
    total: 50, 
    subreddit: ['cats', 'Catswhoyell', 'sleepingcats']
}).then(result => {
    console.log(result);
});

// fetch 50 memes by adding two subreddits and removing 1 subreddit from default subreddit library
RedditImageFetcher.fetch({
    type: 'custom',
    total: 50, 
    addSubreddit: ['memes', 'funny'],
    removeSubreddit: ['dankmemes']
}).then(result => {
    console.log(result);
});
```

## Sample Response

```js
[
  {
    id: "hfh51v",
    type: "wallpaper",
    title: "Illuminated City at Night [1920 x 1200]",
    postLink: "https://redd.it/hfh51v",
    image: "https://i.redd.it/b6x9i2n830751.jpg",
    thumbnail: "https://b.thumbs.redditmedia.com/mLCk8Bh0N4M8hZafHsbAmw8rM7JEEznsT2nRZSo3GsU.jpg",
    subreddit: "wallpaper",
    NSFW: false,
    spoiler: false,
    createdUtc: 1593066557,
    upvotes: 1899,
    upvoteRatio: 1.0
  },
  {
    id: "h9glhi",
    type: "wallpaper",
    title: "Missing Home by Just Jaker",
    postLink: "https://redd.it/h9glhi",
    image: "https://cdnb.artstation.com/p/assets/images/images/027/020/665/large/just-jaker-galax-noise.jpg",
    thumbnail: "https://b.thumbs.redditmedia.com/4utBLNbsIDDLl46z494PCRkDhmAnapQq9FL7l-07aJo.jpg",
    subreddit: "ImaginaryFuturism",
    NSFW: false,
    spoiler: false,
    createdUtc: 1592228591,
    upvotes: 462,
    upvoteRatio: 1.0
  }
]

```

</details>


## Options

| Property            |  Type   | Description                                               | Default |
| :-----------        | :---:   | :-------------------------------------                    | :----:  |
| type               | string  | <code>'meme'</code> \| <code>'wallpaper'</code> \| <code>'custom'</code>          | <code>'meme'</code>       |
| total               | number  | How many images to get. Max is 50                         | <code>1</code>       |
| subreddit        | [string]   | Custom subreddit library                    |   <code>[ ]</code>   |
| addSubreddit        | [string]   | Add subreddits to subreddit library                    | <code>[ ]</code>     |
| removeSubreddit     | [string]   | Remove subreddits from subreddit library               | <code>[ ]</code>     |
| allowNSFW    | boolean   | Allow NSFW results              | <code>true</code>     |


## Contribute

To contribute, clone this repo locally and commit your code on a new branch. Feel free to create an issue or make a pull request.


## Support

<a href="https://www.buymeacoffee.com/arifszn" target="_blank">
  <img src="https://raw.githubusercontent.com/arifszn/arifszn/main/assets/bmc-button.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" >
</a>


## License

**Reddit Image Fetcher** is licensed under the [MIT License](https://github.com/arifszn/reddit-image-fetcher/blob/main/LICENSE).
