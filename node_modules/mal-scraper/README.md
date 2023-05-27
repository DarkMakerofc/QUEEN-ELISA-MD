<h1 align="center">MalScraper</h1>

<p align="center">
  <a href="http://forthebadge.com/" target="_blank">
    <img src="http://forthebadge.com/images/badges/built-with-love.svg"/>
  </a>
</p>

<p align="center">
  <a href="https://standardjs.com/" target="_blank">
    <img src="https://cdn.rawgit.com/feross/standard/master/badge.svg" />
  </a>
</p>

<p align="center">
  <a href="https://travis-ci.org/Kylart/MalScraper" target="_blank">
    <img src="https://travis-ci.org/Kylart/MalScraper.svg?branch=master" alt="Build Status">
  </a>
  <a href="https://codecov.io/gh/Kylart/MalScraper" target="_blank">
    <img src="https://codecov.io/gh/Kylart/MalScraper/branch/master/graph/badge.svg" alt="Codecov" />
  </a>
  <a href="https://opensource.org/licenses/MIT" target="_blank">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License">
  </a>
</p>

At the moment, _MalScraper_ allows one to:
* Gather information about all the anime being released in a season.
* Gather anime-related news (include light-novels, manga, films...). 160 news available.
* Make an anime search (in 2 different ways!).
* Get different information for this anime.
* Get only the best result for an anime search.
* Get a list of an anime's episodes.
* Access the full official MyAnimeList API (includes search, add, update and delete from your user watch lists).

_MalScraper_ is being developed mainly for [_KawAnime_](https://github.com/Kylart/KawAnime) but anyone can use it for
 its own purpose.

Any contribution is welcomed.

Tables of content:
* [Installation](https://github.com/Kylart/MalScraper/blob/master/README.md#installation)
* [Use](https://github.com/Kylart/MalScraper/blob/master/README.md#use)
* [Methods](https://github.com/Kylart/MalScraper/blob/master/README.md#methods)
- * [search.search()](https://github.com/Kylart/MalScraper/blob/master/README.md#searchsearch)
- * [getInfoFromName()](https://github.com/Kylart/MalScraper/blob/master/README.md#getinfofromname)
- * [getInfoFromURL()](https://github.com/Kylart/MalScraper/blob/master/README.md#getinfofromurl)
- * [getResultsFromSearch()](https://github.com/Kylart/MalScraper/blob/master/README.md#getresultsfromsearch)
- * [getWatchListFromUser()](https://github.com/Kylart/MalScraper/blob/master/README.md#getwatchlistfromuser)
- * [getSeason()](https://github.com/Kylart/MalScraper/blob/master/README.md#getseason)
- * [getNewsNoDetails()](https://github.com/Kylart/MalScraper/blob/master/README.md#getnewsnodetails)
- * [getEpisodesList()](https://github.com/Kylart/MalScraper/blob/master/README.md#getepisodeslist)
- * [getReviewsList()](https://github.com/Kylart/MalScraper/blob/master/README.md#getreviewslist)
- * [getRecommendationsList()](https://github.com/Kylart/MalScraper/blob/master/README.md#getrecommendationslist)
- * [getStats()](https://github.com/Kylart/MalScraper/blob/master/README.md#getstats)
- * [getPictures()](https://github.com/Kylart/MalScraper/blob/master/README.md#getpictures)
- * [getUser()](https://github.com/Kylart/MalScraper/blob/master/README.md#getuser)
- * [Official API Constructor](https://github.com/Kylart/MalScraper/blob/master/README.md#official-api-constructor)
- - * [checkCredentials()](https://github.com/Kylart/MalScraper/blob/master/README.md#checkcredentials)
- - * [search()](https://github.com/Kylart/MalScraper/blob/master/README.md#search)
- - * [actOnList()](https://github.com/Kylart/MalScraper/blob/master/README.md#actonlist)
* [Data models](https://github.com/Kylart/MalScraper/blob/master/README.md#data-models)
- * [Anime data model](https://github.com/Kylart/MalScraper/blob/master/README.md#anime-data-model)
- * [Character data model](https://github.com/Kylart/MalScraper/blob/master/README.md#character-data-model)
- * [Staff data model](https://github.com/Kylart/MalScraper/blob/master/README.md#staff-data-model)
- * [Search result data model](https://github.com/Kylart/MalScraper/blob/master/README.md#search-result-data-model)
- * [Seasonal release data model](https://github.com/Kylart/MalScraper/blob/master/README.md#seasonal-release-data-model)
- * [Seasonal anime release data model](https://github.com/Kylart/MalScraper/blob/master/README.md#seasonal-anime-release-data-model)
- * [News data model](https://github.com/Kylart/MalScraper/blob/master/README.md#news-data-model)
* [Contributing](https://github.com/Kylart/MalScraper/blob/master/README.md#contributing)
* [License](https://github.com/Kylart/MalScraper/blob/master/README.md#license)

## Installation
```npm install --save mal-scraper```

## Use
```javascript
const malScraper = require('mal-scraper')
```

## Methods

### search.search()
| Parameter | Type | Description |
| --- | --- | --- |
| type | string | type of search (manga or anime) |
| opts | object | options for search (all keys are optional) |

Usage example:
```js
const malScraper = require('mal-scraper')
const search = malScraper.search

const type = 'anime'

// Helpers for types, genres and list you might need for your research
console.log(search.helpers)

search.search(type, {
  // All optionnals, but all values must be in their relative search.helpers.availableValues.
  maxResults: 100, // how many results at most (default: 50)
  has: 250, // If you already have results and just want what follows it, you can say it here. Allows pagination!

  term: 'Sakura', // search term
  type: 0, // 0-> none, else go check search.helpers.availableValues.type
  status: 0, // 0 -> none, else go check https://github.com/Kylart/MalScraper/blob/master/README.md#series-statuses-references or search.helpers.availableValues.status
  score: 0, // 0-> none, else go check search.helpers.availableValues.score
  producer: 0, // go check search.helpers.availableValue.p.<type>.value
  rating: 0, // 0-> none, else go check search.helpers.availableValues.r
  startDate: {
    day: 12,
    month: 2,
    year: 1990
  },
  endDate: {
    day: 12,
    month: 2,
    year: 2015
  },
  genreType: 0, // 0 for include genre list, 1 for exclude genre list
  genres: [1] // go check search.helpers.availableValues.genres.<type>.value
})
  .then(console.log)
  .catch(console.error)
```

Returns: A [Anime search model](https://github.com/Kylart/MalScraper/blob/master/README.md#anime-search-model)
or [Manga search model](https://github.com/Kylart/MalScraper/blob/master/README.md#manga-search-model) object

### getInfoFromName()

| Parameter | Type | Description |
| --- | --- | --- |
| Name | string | The name of the anime to search, the best match corresponding to that name will be returned |
| getBestMatch | Boolean | Whether you want to use [`match-sorter`](https://github.com/kentcdodds/match-sorter) to find the best result or not (defaults to true) |

Usage example:

```js
const malScraper = require('mal-scraper')

const name = 'Sakura Trick'

malScraper.getInfoFromName(name)
  .then((data) => console.log(data))
  .catch((err) => console.log(err))

// same as
malScraper.getInfoFromName(name, true)
  .then((data) => console.log(data))
  .catch((err) => console.log(err))

malScraper.getInfoFromName(name, false)
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
```

Returns: A [Anime data model](https://github.com/Kylart/MalScraper/blob/master/README.md#anime-data-model) object

### getInfoFromURL()

This method is faster than `getInfoFromName()` as it only make one HTTP request

| Parameter | Type | Description |
| --- | --- | --- |
| URL | string | The URL to the anime |

Usage example:

```js
const malScraper = require('mal-scraper')

const url = 'https://myanimelist.net/anime/20047/Sakura_Trick'

malScraper.getInfoFromURL(url)
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
```

Returns: A [Anime data model](https://github.com/Kylart/MalScraper/blob/master/README.md#anime-data-model) object (same as `getInfoFromName()`)

### getResultsFromSearch()

| Parameter | Type | Description |
| --- | --- | --- |
| query | string | The search query |

Usage example:

```js
const malScraper = require('mal-scraper')

const query = 'sakura'

malScraper.getResultsFromSearch(query)
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
```

Returns: An array of a maximum length of 10 containing [Search result data model](https://github.com/Kylart/MalScraper/blob/master/README.md#search-result-data-model) objects

### getSeason()

This method get the list of anime, OVAs, movies and ONAs released (or planned to be released) during the season of the specified year

| Parameter | Optional | Type | Description |
| --- | --- |--- | --- |
| year | No | number | The year |
| season | No | string | The season, must be either `spring`, `summer`, `fall` or `winter` |
| type | Yes | string | The type, must be either `TV`, `TVNew`, `TVCon`, `ONAs`, `OVAs`, `Specials` or `Movies` |

Usage example:

```javascript
const malScraper = require('mal-scraper')

const year = 2017
const season = 'fall'

malScraper.getSeason(year, season)
  // `data` is an object containing the following keys: 'TV', 'TVNew', 'TVCon', 'OVAs', 'ONAs', 'Movies' and 'Specials'
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
```

Returns: A [Seasonal release data model](https://github.com/Kylart/MalScraper/blob/master/README.md#seasonal-release-data-model) object

With type parameter:

<b>Please note:</b> 'TVNew' represents the 'New' anime for this season, whilst 'TVCon' represents the 'Continuing' anime in this season. 'TV' is simply an aggregate for both of these.
```javascript
const malScraper = require('mal-scraper')

const year = 2017
const season = 'fall'
const type = 'TV' // Optional type parameter, if not specified will default to returning an object with all of possible type keys

malScraper.getSeason(year, season, type)
  // `data` is an array containing all the 'Seasonal anime release data objects' for the given type
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
```

Returns: A [Seasonal anime release data model](https://github.com/Kylart/MalScraper/blob/master/README.md#seasonal-anime-release-data-model) object

### getWatchListFromUser()

#### From v2.11.6

| Parameter | Type | Description |
| --- | --- | --- |
| username | string | The name of the user |
| after | number | Useful to paginate. Is the number of results you want to start from. By default, MAL returns 300 entries only. |
| type | string | Optional, can be either `anime` or `manga` |
| status | number | Optional, Status in the user's watch list (completed, on-hold...) |

Usage example:

```javascript
const malScraper = require('mal-scraper')

const username = 'Kylart'
const after = 25
const type = 'anime' // can be either `anime` or `manga`
const status = 7 // All anime

// Get you an object containing all the entries with status, score... from this user's watch list
malScraper.getWatchListFromUser(username, after, type, status)
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
```

#### From v2.6.0

| Parameter | Type | Description |
| --- | --- | --- |
| username | string | The name of the user |
| after | number | Useful to paginate. Is the number of results you want to start from. By default, MAL returns 300 entries only. |
| type | string | Optional, can be either `anime` or `manga` |

Usage example:

```javascript
const malScraper = require('mal-scraper')

const username = 'Kylart'
const after = 25
const type = 'anime' // can be either `anime` or `manga`

// Get you an object containing all the entries with status, score... from this user's watch list
malScraper.getWatchListFromUser(username, after, type)
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
```

Returns: A [User watch list data model](https://github.com/Kylart/MalScraper/blob/master/README.md#user-watch-list-data-model) object

#### v2.5.2 and before
| Parameter | Type | Description |
| --- | --- | --- |
| username | string | The name of the user |
| type | string | Optional, can be either `anime` or `manga` |

Usage example:

```javascript
const malScraper = require('mal-scraper')

const username = 'Kylart'
const type = 'anime' // can be either `anime` or `manga`

// Get you an object containing all the entries with status, score... from this user's watch list
malScraper.getWatchListFromUser(username, type)
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
```

Returns: A [User watch list data model](https://github.com/Kylart/MalScraper/blob/master/README.md#user-watch-list-data-model) object

### getNewsNoDetails()

| Parameter | Type | Description |
| --- | --- | --- |
| nbNews | number | The count of news you want to get, default is 160. Note that there is 20 news per page, so if you set it to 60 for example, it will result in 3 requests. You should be aware of that, as MyAnimeList will most likely rate-limit you if more than 35-40~ requests are done in a few seconds |

Usage example:

```javascript
const malScraper = require('mal-scraper')

const nbNews = 120

malScraper.getNewsNoDetails(nbNews)
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
```

Returns: An array of [News data model](https://github.com/Kylart/MalScraper/blob/master/README.md#news-data-model) objects

### getEpisodesList()

| Parameter | Type | Description |
| --- | --- | --- |
| anime | object OR string | If an object, it must have the `name` and `id` property. If you only have the name and not the id, you may call the method with the name as a string, this will be slower but the id will be automatically fetched on the way |
| anime.name | string | The name of the anime |
| anime.id | number | The unique identifier of this anime |

Usage example:

```javascript
const malScraper = require('mal-scraper')

malScraper.getEpisodesList({
  name: 'Sakura Trick',
  id: 20047
})
  .then((data) => console.log(data))
  .catch((err) => console.log(err))

//Alternatively, if you only have the name and not the id, you can let the method fetch the id on the way at the cost of being slower

const name = "Sakura Trick"

malScraper.getEpisodesList(name)
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
```

Returns: An array of [Anime episodes data model](https://github.com/Kylart/MalScraper/blob/master/README.md#anime-episodes-data-model) objects

### getReviewsList()

| Parameter | Type | Description |
| --- | --- | --- |
| anime | object | An object that must have the `name` and `id` property or just the `name` alone. If you only have the name and not the id, you may call the method with the name as a string, this will be slower but the id will be automatically fetched on the way |
| anime.name | string | The name of the anime |
| anime.id | number | The unique identifier of this anime |
| anime.limit | number | [optionnal] The number max of reviews to fetch - can be really long if omit |
| anime.skip | number | [optionnal] The number of reviews to skip |

Usage example:

```javascript
const malScraper = require('mal-scraper')

malScraper.getReviewsList({
  name: 'Sakura Trick',
  id: 20047,
  limit: 1,
  skip: 20
})
  .then((data) => console.log(data))
  .catch((err) => console.log(err))

//Alternatively, if you only have the name and not the id, you can let the method fetch the id on the way at the cost of being slower

const name = "Sakura Trick"

malScraper.getReviewsList({
  name: 'Sakura Trick',
  limit: 1,
  skip: 20
})
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
```

Returns: An array of [Anime reviews data model](https://github.com/Kylart/MalScraper/blob/master/README.md#anime-reviews-data-model) objects

### getRecommendationsList()

| Parameter | Type | Description |
| --- | --- | --- |
| anime | object OR string | If an object, it must have the `name` and `id` property. If you only have the name and not the id, you may call the method with the name as a string, this will be slower but the id will be automatically fetched on the way |
| anime.name | string | The name of the anime |
| anime.id | number | The unique identifier of this anime |

Usage example:

```javascript
const malScraper = require('mal-scraper')

malScraper.getRecommendationsList({
  name: 'Sakura Trick',
  id: 20047
})
  .then((data) => console.log(data))
  .catch((err) => console.log(err))

//Alternatively, if you only have the name and not the id, you can let the method fetch the id on the way at the cost of being slower

const name = "Sakura Trick"

malScraper.getRecommendationsList(name)
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
```

Returns: An array of [Anime recommendations data model](https://github.com/Kylart/MalScraper/blob/master/README.md#anime-recommendations-data-model) objects

### getStats()

| Parameter | Type | Description |
| --- | --- | --- |
| anime | object OR string | If an object, it must have the `name` and `id` property. If you only have the name and not the id, you may call the method with the name as a string, this will be slower but the id will be automatically fetched on the way |
| anime.name | string | The name of the anime |
| anime.id | number | The unique identifier of this anime |

```javascript
const malScraper = require('mal-scraper')

malScraper.getStats({
  name: 'Ginga Eiyuu Densetsu',
  id: 820
})
  .then((data) => console.log(data))
  .catch((err) => console.log(err))

//Alternatively, if you only have the name and not the id, you can let the method fetch the id on the way at the cost of being slower

const name = "Ginga Eiyuu Densetsu"

malScraper.getStats(name)
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
```

Returns: An array of [Anime stats data model](https://github.com/Kylart/MalScraper/blob/master/README.md#anime-stats-data-model) objects

### getPictures()

| Parameter | Type | Description |
| --- | --- | --- |
| anime | object OR string | If an object, it must have the `name` and `id` property. If you only have the name and not the id, you may call the method with the name as a string, this will be slower but the id will be automatically fetched on the way |
| anime.name | string | The name of the anime |
| anime.id | number | The unique identifier of this anime |

```javascript
const malScraper = require('mal-scraper')

malScraper.getPictures({
  name: 'Ginga Eiyuu Densetsu',
  id: 820
})
  .then((data) => console.log(data))
  .catch((err) => console.log(err))

//Alternatively, if you only have the name and not the id, you can let the method fetch the id on the way at the cost of being slower

const name = "Ginga Eiyuu Densetsu"

malScraper.getPictures(name)
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
```

Returns: An array of [Anime pictures data model](https://github.com/Kylart/MalScraper/blob/master/README.md#anime-pictures-data-model) objects

### getUser()
| Parameter | Type | Description |
| --- | --- | --- |
| name | string | The username of the user |

``` javascript
  const malScraper = require('mal-scraper')

malScraper.getUser('Kame-nos')
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
```
Returns: A [User data model]()

### Official API constructor
> This requires a valid MyAnimeList account

_MalScraper_ also provide a full coverage of MyAnimeList's official API. The official API methods are available once you initialized the `officialApi` constructor

| Parameter | Type | Description |
| --- | --- | --- |
| credentials | object | Object of a MAL account credentials |
| credentials.username | string | The username of the account to use for the official API |
| credentials.password | string | The password of the account to use for the official API |

Usage example:

```javascript
const malScraper = require('mal-scraper')

const api = new malScraper.officialApi({
  username: 'my_super_username',
  password: 'my_super_secret_password'
})
```

#### checkCredentials()

This method allows you to check if the credentials given in the constructor are valid

Usage example:

```js
const malScraper = require('mal-scraper')

const api = new malScraper.officialApi({
  username: 'my_super_username',
  password: 'my_super_secret_password'
})

api.checkCredentials()
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
```

Returns: A string `"Invalid credentials"` if the credentials are invalid, otherwise, the raw XML document with the id and the username of the account

#### search()

| Parameter | Type | Description |
| --- | --- | --- |
| type | string | The type, can be either `manga` or `anime`. Default is `anime` |
| name | string | The name of the manga/anime to search |

```js
const malScraper = require('mal-scraper')

const api = new malScraper.officialApi({
  username: 'my_super_username',
  password: 'my_super_secret_password'
})

const name = 'Sakura Trick'
const type = 'manga'

// type can be either 'anime' or 'manga'
api.search(type, name)
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
```

Returns: An array of [anime search results data model](https://github.com/Kylart/MalScraper/blob/master/README.md#anime-search-results-data-model) or [manga search results data model](https://github.com/Kylart/MalScraper/blob/master/README.md#manga-search-results-data-model) objects

#### actOnList()

This method allows you to act on the account given in the constructor anime list

| Parameter | Type | Description |
| --- | --- | --- |
| action | object | An object which should contain the type of the manga/anime and the action to do |
| action.support | string | The type of the manga/anime to act on. Can be either `anime` or `manga` |
| action.action | string | The action to do, can be either `add`, `update` or `delete` |
| id | number | The unique identifier of the manga/anime |
| name | string | The name of the manga/anime to search |
| details | object | An object that can contain all the properties described [here](https://myanimelist.net/modules.php?go=api#animevalues) |
| details.episodes | number | Anime only - Number of episodes you watched |
| details.status | number OR string | Whether you completed, dropped... the anime/manga, see the [statuses references](https://github.com/Kylart/MalScraper/blob/master/README.md#statuses-references) |
| details.score | number | The score you would give to this anime/manga, must be a whole number between 0 and 10 |
| details.times_rewatched | number | Anime only - Number of times you re-watched the anime |
| details.date_start | string | mmddyyyy date format of when you finished the anime/manga |
| details.date_finish | string | mmddyyyy date format of when you finished the anime/manga |
| details.tags | string | Tags separated by commas that you think correspond to this anime/manga |
| details.volumes | number | Manga only - Number of volumes you read |
| details.times_reread | number | Manga only - Number of times you re-read this manga |

```js
const malScraper = require('mal-scraper')

const api = new malScraper.officialApi({
  username: 'my_super_username',
  password: 'my_super_secret_password'
})

const id = 20047

api.actOnList({
  support: 'anime',
  action: 'add'
}, id, {
  status: 1,
  score: 10
})
```

## Data models

### Anime data model

> You should treat all properties as possibly undefined/empty, the only guaranteed properties are `title`, `type` and `id`

| Property | Type | Description |
| --- | --- | --- |
| title | string | The title of the anime |
| synopsis | string | The synopsis of the anime |
| picture | string | The URL of the cover picture of the anime |
| characters | array | An array of [Character data model](https://github.com/Kylart/MalScraper/blob/master/README.md#character-data-model) objects |
| staff | array | An array of [Staff data model](https://github.com/Kylart/MalScraper/blob/master/README.md#staff-data-model) objects |
| trailer | string | URL to the embedded video |
| englishTitle | string | The english title of the anime |
| synonyms | string | A list of synonyms of the anime title (other languages names, related ovas/movies/animes) separated by commas, like "Sakura Trick, Sakura Trap" |
| type | string | The type of the anime, can be either `TV`, `OVA`, `Movie` or `Special` |
| episodes | string | The number of aired episodes |
| status | string | The status of the anime (whether it is airing, finished...) |
| aired | string | The date from which the airing started to the one from which it ended, this property will be empty if one of the two dates is unknown |
| premiered | string | The date of when the anime has been premiered |
| broadcast | string | When the anime is broadcasted |
| volumes | string | The number of volumes of the novel |
| chapters | string | The numbers of chapters of the novel |
| published | string | The dates of publications of the novel |
| authors | string | The authors of the novel |
| serialization | string | The serialization of the novel |
| producers | array | An array of the anime producers |
| studios | array | An array of the anime producers |
| source | string | On what the anime is based on (e.g: based on a manga...) |
| genres | array | An array of the anime genres (Action, Slice of Life...) |
| duration | string | Average duration of an episode (or total duration if movie...) |
| rating | string | The rating of the anime (e.g: R18+..), see the [List of possible ratings](https://github.com/Kylart/MalScraper/blob/master/README.md#list-of-possible-ratings) |
| score | string | The average score |
| scoreStats | string | By how many users this anime has been scored, like "scored by 255,693 users" |
| ranked | string | The rank of the anime |
| popularity | string | The popularity of the anime |
| members | string | How many users are members of the anime (have it on their list) |
| favorites | string | Count of how many users have this anime as favorite |
| id | number | The unique identifier of the anime |
| url | string | the URL to the page |

#### List of possible ratings

Anime ratings can be either:

* `G - All Ages`
* `PG - Children`
* `PG-13 - Teens 13 or older`
* `R - 17+ (violence & profanity)`
* `R+ - Mild Nudity`
* `Rx - Hentai`

#### Anime search model
| Property | Type | Description |
| --- | --- | --- |
| thumbnail | string | Full url for anime thumbnail |
| url | string | Full url for anime page |
| video | string | full url of anime trailer video if any |
| shortDescription | string | Short description of the anime (or manga) |
| title | string | Anime title |
| type | string | Anime type |
| nbEps | string | Anime number of episodes |
| score | string | Anime score |
| startDate | string | Anime start date |
| endDate | string | Anime end date |
| members | string | Anime number of members |
| rating | string | Anime rating |

#### Manga search model
| Property | Type | Description |
| --- | --- | --- |
| thumbnail | string | Full url for anime thumbnail |
| url | string | Full url for anime page |
| video | string | full url of anime trailer video if any |
| shortDescription | string | Short description of the anime (or manga) |
| title | string | Anime title |
| type | string | Anime type |
| score | string | Anime score |
| nbChapters | string | Number of chapters released so far |
| vols | string | Number of volumes released so far |
| startDate | string | Anime start date |
| endDate | string | Anime end date |
| members | string | Anime number of members |

#### Staff data model

| Property | Type | Description |
| --- | --- | --- |
| link | string | Link to the MAL profile of this person |
| picture | string | Link to a picture of the person at the best possible size |
| name | string | Their name and surname, like `Surname, Name` |
| role | string | The role this person has/had in this anime (Director, Sound Director...) |

#### Character data model

| Property | Type | Description |
| --- | --- | --- |
| link | string | Link to the MAL profile of this character |
| picture | string | Link to a picture of the character at the best possible size |
| name | string | Their name and surname, like `Surname, Name` |
| role | string | The role this person has/had in this anime (Main, Supporting...) |
| seiyuu | object | An object containing additional data about who dubbed this character |
| seiyuu.link | string | Link to the MAL profile of who dubbed this character |
| seiyuu.picture | string | Link to a picture of the seiyuu at the best possible size |
| seiyuu.name | string | Their name and surname, like `Surname, Name` |

### Search result data model

| Property | Type | Description |
| --- | --- | --- |
| id | number | The unique identifier of this result |
| type | string | The type of the result (e.g: anime...) |
| name | string | The title of the anime |
| url | string | The URL to the anime |
| image_url | string | URL of the image |
| thumbnail_url | string | URL of the thumbnail image |
| es_score | number | A number representing the accuracy of the result, where 1 is a perfect match and 0 a totally irrelevant one |
| payload | object | An object containing additional data about the anime |
| payload.media_type | string | The type of the anime, can be either `TV`, `Movie`, `OVA` or `Special` |
| payload.start_year | number | The year the airing of the anime started |
| payload.aired | string | The date from which the airing started to the one from which it ended |
| payload.score | string | The average score given to this anime |
| payload.status | string | The current status of the anime (whether it is still airing, finished...) |

### Seasonal release data model

**Note: If nothing is found for the given date, the current year/season releases list will be returned**

| Property | Type | Description |
| --- | --- | --- |
| TV | array | An array of [Seasonal anime release data model](https://github.com/Kylart/MalScraper/blob/master/README.md#seasonal-anime-release-data-model) objects |
| TVNew | array | An array of [Seasonal anime release data model](https://github.com/Kylart/MalScraper/blob/master/README.md#seasonal-anime-release-data-model) objects |
| TVCon | array | An array of [Seasonal anime release data model](https://github.com/Kylart/MalScraper/blob/master/README.md#seasonal-anime-release-data-model) objects |
| OVAs | array | An array of [Seasonal anime release data model](https://github.com/Kylart/MalScraper/blob/master/README.md#seasonal-anime-release-data-model) objects |
| ONAs | array | An array of [Seasonal anime release data model](https://github.com/Kylart/MalScraper/blob/master/README.md#seasonal-anime-release-data-model) objects |
| Movies | array | An array of [Seasonal anime release data model](https://github.com/Kylart/MalScraper/blob/master/README.md#seasonal-anime-release-data-model) objects |
| Specials | array | An array of [Seasonal anime release data model](https://github.com/Kylart/MalScraper/blob/master/README.md#seasonal-anime-release-data-model) objects |

#### Seasonal anime release data model

| Property | Type | Description |
| --- | --- | --- |
| picture | string | Link to the picture of the anime |
| synopsis | string | The synopsis of the anime |
| licensor | string | The licensor |
| title | string | The name of the anime |
| link | string | The direct link to the anime page |
| genres | array | An array of strings which are the genres of this anime |
| producers | array | An array of strings which are the producers of this anime |
| fromType | string | From what this anime is based on/an adaptation of (Light novel, manga...) |
| nbEp | string | The number of aired episodes this anime has |
| releaseDate | string | When this anime has been released |
| score | string | The average score users have given to this anime |

### User watch list data model

#### v2.6.0
An array of [User anime entry data model](https://github.com/Kylart/MalScraper/blob/master/README.md#user-anime-entry-data-model) objects or [User manga entry data model](https://github.com/Kylart/MalScraper/blob/master/README.md#user-manga-entry-data-model)

#### v2.5.2 and before
| Property | Type | Description |
| --- | --- | --- |
| stats | object | A [User stats data model](https://github.com/Kylart/MalScraper/blob/master/README.md#user-stats-data-model) object |
| lists | array | An array of [User anime entry data model](https://github.com/Kylart/MalScraper/blob/master/README.md#user-anime-entry-data-model) objects or [User manga entry data model](https://github.com/Kylart/MalScraper/blob/master/README.md#user-manga-entry-data-model)|

#### User stats data model

| Property | Type | Description |
| --- | --- | --- |
| TV | string | Number of TV anime this user watched |
| OVA | string | Number of OVA anime this user watched |
| Movies | string | Number of Movies anime this user watched |
| Spcl | string | Number of special anime this user watched |
| ONA | string | Number of ONA anime this user watched |
| Days | string | Number of days spent in front of anime for this user |
| Eps | string | Number of eps watched by this user |
| MeanScore | string | Mean score given by this user |
| ScoreDev | string | Score deviation for this user |

#### User anime entry data model

| Property | Type | Description |
| --- | --- | --- |
| status | integer | Status of the anime in the user's watch list (completed, on-hold...), see the [Statuses references](https://github.com/Kylart/MalScraper/blob/master/README.md#statuses-references) |
| score | integer | Score given by the user |
| tags | string | anime tags for this anime. Tags are separated by a comma |
| isRewatching | integer | Whther this user is rewatching this anime |
| numWatchedEpisodes: | integer | Number of episodes this user watched for this anime |
| animeTitle | string | The title of the anime |
| animeNumEpisodes | integer | How many episodes this anime has |
| animeAiringStatus | string | The status of the anime, see the [Series statuses references](https://github.com/Kylart/MalScraper/blob/master/README.md#series-statuses-references) |
| animeId | string | The unique identifier of this anime |
| animeStudios | string | Studios of this anime |
| animeLicensors | string | Who licensed this anime |
| animeSeason | string | ??? |
| hasEpisodeVideo | boolean | Whether episode information are available on MAL |
| hasPromotionVideo | boolean | Whether anime trailer is available on MAL |
| videoUrl | string | path to video url on MAL |
| animeUrl | string | path to anime url on MAL |
| animeImagePath | string | path to anime thumbnail url on MAL |
| isAddedToList | boolean | ??? |
| animeMediaTypeString | string | Type of this anime |
| animeMpaaRatingString | string | Rating of this anime |
| startDateString | string | When did this user start watching it |
| finishDateString | string | When did this user finish it |
| animeStartDateString | string | Start date of the anime following the format (MM-DD-YYYY) |
| animeEndDateString | string | End date of the anime following the format (MM-DD-YYYY) |
| daysString | string | ??? |
| storageString | string | Storage type for this anime (set by the user) |
| priorityString | string | Priority of this anime for the user |

#### User manga entry data model

| Property | Type | Description |
| --- | --- | --- |
| myID | string | Deprecated |
| status | string | Status of the manga in the user's watch list (completed, on-hold...), see the [Statuses references](https://github.com/Kylart/MalScraper/blob/master/README.md#statuses-references) |
| score | string | The score the user has given to this manga |
| tags | string | The tags the user has given to this manga |
| isRereading | string | Whether the user is re-reading this manga or not, where `0` means not |
| nbReadChapters | string | Count of how many chapters of this manga the user has read |
| nbReadVolumes | string | Count of how many volumes of this manga the user has read |
| mangaTitle | string | The title of the manga |
| mangaNumChapters | string | Total count of chapters this manga has |
| mangaNumVolumes | string | Count of volumes this manga has |
| mangaPublishingStatus | string | The status of the manga, see the [Series statuses references](https://github.com/Kylart/MalScraper/blob/master/README.md#series-statuses-references) |
| mangaId | string | The unique identifier of this manga |
| mangaMagazines | string | Magazines where this manga airs |
| mangaUrl | string | Path to manga page |
| mangaImagePath | string | path to manga thumbnail |
| isAddedToList | boolean | ??? |
| mangaMediaTypeString | string | The type of the manga, see the [Types references](https://github.com/Kylart/MalScraper/blob/master/README.md#types-references) |
| startDateString | string | A `mm-dd-yyyy` format date of when the user started watching this manga |
| finishDateString | string | A `mm-dd-yyyy` format date of when the user finished watching this manga |
| mangaStartDateString | string | A `mm-dd-yyyy` format date of when the manga started |
| mangaEndDateString | string | A `mm-dd-yyyy` format date of when the manga ended |
| daysString | string | ??? |
| retailString | string | ??? |
| priorityString | string | Priority of this manga for the user |

The types, statuses and series statuses aren't explicitly given by MyAnimeList, a number is given instead, here's the corresponding statuses/types according to their numbers

#### Types references

* `0`: Unknown
* `1`: TV | Manga
* `2`: OVA | Novel
* `3`: Movie | One-shot
* `4`: Special | Doujinshi
* `5`: ONA | Manhwha
* `6`: Music | Manhua

#### Statuses references

* `1`: Watching | Reading
* `2`: Completed
* `3`: On-hold
* `4`: Dropped
* `6`: Plan-to-watch | Plan-to-read

#### Series statuses references

* `1`: Currently airing | Publishing
* `2`: Finished airing | Finished
* `3`: Not yet aired | Not yet published

#### News data model

| Property | Type | Description |
| --- | --- | --- |
| title | string | The title of the news |
| link | string | The link to the article |
| image | string | URL of the cover image of the article |
| text | string | A short preview of the news description |
| newsNumber | string | The unique identifier of the news |

#### Anime reviews data model

| Property | Type | Description |
| --- | --- | --- |
| author | string | The name of the author |
| date | date | The date of the comment |
| seen | string | The number of episode seen |
| overall | number | The overall note of the anime |
| story | number | The story note of the anime |
| animation | number | The animation note of the anime|
| sound | number | The sound note of the anime |
| character | number | The character note of the anime |
| enjoyment | number | The enjoyment note of the anime |
| review | string | The complete review |

#### Anime recommendations data model

| Property | Type | Description |
| --- | --- | --- |
| pictureImage | date | The link of the picture's anime recommended |
| animeLink | string | The link of the anime recommended |
| anime | number | The name of the anime recommended |
| mainRecommendation | number | The recommendation |
| author | string | The name of the author |

#### Anime episodes data model

| Property | Type | Description |
| --- | --- | --- |
| epNumber | number | The episode number |
| aired | string | A "Jan 10, 2014" date like of when the episode has been aired |
| discussionLink | string | - |
| title | string | The title of the episode |
| japaneseTitle | string | The japanese title of the episode |

#### Anime search results data model

| Property | Type | Description |
| --- | --- | --- |
| id | string | The unique identifier of this anime |
| title | string | The title of the anime |
| english | string | The english title of the anime |
| synonyms | string | A set of synonyms of this anime |
| episodes | string | The total count of aired episodes this anime has |
| score | string | The average score given by users to this anime |
| type | string | The type of the anime (TV, OVA...) |
| status | string | The status of the anime (Airing, Finished airing...) |
| start_date | string | A yyyy-mm-dd date format of when the anime started to be aired |
| end_date | string | A yyyy-mm-dd date format of when the anime finished |
| synopsis | string | The synopsis of the anime |
| image | string | URL to the cover image of the anime |

#### Manga search results data model

| Property | Type | Description |
| --- | --- | --- |
| id | string | The unique identifier of this manga |
| title | string | The title of the manga |
| english | string | The english title of the manga |
| synonyms | string | A set of synonyms of this manga |
| chapters | string | The total count of chapters this manga has |
| volumes | string | The total count of volumes this manga has |
| score | string | The average score given by users to this manga |
| type | string | The type of the manga (Manga, Doujinshi...) |
| status | string | The status of the manga (Publishing, Finished...) |
| start_date | string | A yyyy-mm-dd date format of when the manga started publication |
| end_date | string | A yyyy-mm-dd date format of when the manga finished |
| synopsis | string | The synopsis of the manga |
| image | string | URL to the cover image of the manga |

#### Anime stats data model

| Property | Type | Description |
| --- | --- | --- |
| watching | number | The total number of person who are watching the anime |
| completed | number | The total number of person who completed the anime |
| onHold | number | The total number of person who stop watching the anime but will continue later |
| dropped | number | The total number of person who stop watching the anime |
| planToWatch | number | The total number of person who plan to watch the anime |
| total | number | Total of stats |
| score10 | number | The number of person ranking the anime with a 10/10 |
| score9 | number | The number of person ranking the anime with a 9/10 |
| score8 | number | The number of person ranking the anime with a 8/10 |
| score7 | number | The number of person ranking the anime with a 7/10 |
| score6 | number | The number of person ranking the anime with a 6/10 |
| score5 | number | The number of person ranking the anime with a 5/10 |
| score4 | number | The number of person ranking the anime with a 4/10 |
| score3 | number | The number of person ranking the anime with a 3/10 |
| score2 | number | The number of person ranking the anime with a 2/10 |
| score1 | number | The number of person ranking the anime with a 1/10 |

#### Anime pictures data model

| Property | Type | Description |
| --- | --- | --- |
| imageLink | number | The link of the image |

## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request.

## License
MIT License

Copyright (c) Kylart
