# node-superfetch
[![Downloads](https://img.shields.io/npm/dt/node-superfetch.svg?maxAge=3600)](https://www.npmjs.com/package/node-superfetch)
[![Version](https://img.shields.io/npm/v/node-superfetch.svg?maxAge=3600)](https://www.npmjs.com/package/node-superfetch)
[![Travis](https://api.travis-ci.org/dragonfire535/node-superfetch.svg?branch=master)](https://travis-ci.org/dragonfire535/node-superfetch)

node-superfetch is a tiny little wrapper for
[node-fetch](https://www.npmjs.com/package/node-fetch) that makes it look like
you are using [superagent](https://www.npmjs.com/package/superagent). It arose
after I decided I disliked the node-fetch API and loved the superagent API, but
node-fetch is smaller than superagent and snekfetch is buggy
(~~and this probably is too~~).

## Basic Usage
```js
const request = require('node-superfetch');

try {
	const { body } = await request.get('https://registry.npmjs.com/node-fetch');
	console.log(body);
} catch (err) {
	console.error(err);
}
```
Usage is basically that of superagent or snekfetch, and implements the same HTTP
methods, as well as functions like `query` (sets query parameters), `set` (sets
headers), `send` (for adding POST data and such), `attach` (for sending
FormData), `redirects` (for setting the allowed number of redirects), and
`agent` (for setting the HTTP agent). `end` is also supported for callbacks.
