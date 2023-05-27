# shuffle-array

[![NPM version][npm-image]][npm-link] [![License][lic-image]][npm-link] [![Build status][travis-image]][travis-link] [![Coverage Status][coverage-image]][coverage-link] [![devDependency status][devdeps-image]][devdeps-link] [![downloads][dt-image]][npm-link]

> Randomize the order of the elements in a given array using the [Fisher-Yates algorithm](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle).

## Installation

    $ npm install shuffle-array

    $ bower install shuffle-array

    $ component install pazguille/shuffle-array

## Usage
```js
var shuffle = require('shuffle-array'),
    collection = [1,2,3,4,5];

shuffle(collection);

console.log(collection); // returns [4, 3, 1, 5, 2]
```

## API

### shuffle(arr, [options])
Randomizes the order of the elements in a given `array`.
- `arr` - The given array.
- [`options`] {Object} - Optional configuration options.
- [`options.copy`] {Boolean} - Sets if should return a shuffled copy of the given array. By default it's a falsy value.
- [`options.rng`] {Function} - Specifies a custom random number generator.

```js
shuffle([1,2,3,4,5]); // returns [4, 3, 1, 5, 2]

// Return a copy of the given array
shuffle([1,2,3,4,5], { 'copy': true }); // returns [4, 3, 1, 5, 2] (copied)
```

### shuffle.pick(arr, [options])
Pick one or more `random` elements from the given `array`.
- `arr` - The given array.
- [`options`] {Object} - Optional configuration options.
- [`options.picks`] {Number} - Specifies how many random elements you want to pick. By default it picks 1.
- [`options.rng`] {Function} - Specifies a custom random number generator.

```js
shuffle.pick([1,2,3,4,5]); // returns 5

// Return a random collection with 2 elements
shuffle.pick([1,2,3,4,5], { 'picks': 2 })); // returns [4, 3]
```

## Build

    npm run dist

## Test

    npm test

## With :heart: by
- Guille Paz (Front-end developer | Web standards lover)
- E-mail: [guille87paz@gmail.com](mailto:guille87paz@gmail.com)
- Twitter: [@pazguille](http://twitter.com/pazguille)
- Web: [http://pazguille.me](http://pazguille.me)

## License
MIT license. Copyright © 2014.

[npm-image]: https://img.shields.io/npm/v/shuffle-array.svg
[lic-image]: https://img.shields.io/npm/l/shuffle-array.svg
[npm-link]: https://npmjs.org/package/shuffle-array
[travis-image]: https://img.shields.io/travis/pazguille/shuffle-array.svg
[travis-link]: https://travis-ci.org/pazguille/shuffle-array
[devdeps-image]: https://img.shields.io/david/dev/pazguille/shuffle-array.svg
[devdeps-link]: https://david-dm.org/pazguille/shuffle-array#info=devDependencies
[dt-image]: https://img.shields.io/npm/dt/shuffle-array.svg
[coverage-image]: https://img.shields.io/coveralls/pazguille/shuffle-array.svg
[coverage-link]: https://coveralls.io/github/pazguille/shuffle-array
