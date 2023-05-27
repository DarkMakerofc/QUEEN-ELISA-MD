# random-useragent

[![NPM version](https://badge.fury.io/js/random-useragent.svg)](http://badge.fury.io/js/random-useragent)
[![Build Status](https://travis-ci.org/skratchdot/random-useragent.png?branch=master)](https://travis-ci.org/skratchdot/random-useragent)
[![Code Climate](https://codeclimate.com/github/skratchdot/random-useragent.png)](https://codeclimate.com/github/skratchdot/random-useragent)
[![Coverage Status](https://coveralls.io/repos/skratchdot/random-useragent/badge.svg?branch=master&service=github)](https://coveralls.io/github/skratchdot/random-useragent?branch=master)
[![Dependency Status](https://david-dm.org/skratchdot/random-useragent.svg)](https://david-dm.org/skratchdot/random-useragent)
[![devDependency Status](https://david-dm.org/skratchdot/random-useragent/dev-status.svg)](https://david-dm.org/skratchdot/random-useragent#info=devDependencies)

[![NPM](https://nodei.co/npm/random-useragent.png)](https://npmjs.org/package/random-useragent)


## Description

Get a random user agent (with an optional filter to select from a specific set of user agents).


## Getting Started

Install the module with: `npm install random-useragent`

```javascript
const randomUseragent = require('random-useragent');
randomUseragent.getRandom(); // gets a random user agent string
```

- [Live example on Tonic](https://tonicdev.com/npm/random-useragent)


## Documentation

#### .getRandom(filter)

Get a random user agent string (optionally using a filter).

Example Result:
```javascript
'Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0'
```

#### .getRandomData(filter)

Get a random user agent's parsed data (optionally using a filter).

Example Result:
```javascript
{
	"folder": "/Browsers - Windows/Legacy Browsers",
	"description": "Firefox 20.0 (Win 8 32)",
	"userAgent": "Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0",
	"appCodename": "",
	"appName": "",
	"appVersion": "",
	"platform": "",
	"vendor": "",
	"vendorSub": "",
	"browserName": "Firefox",
	"browserMajor": "20",
	"browserVersion": "20.0",
	"deviceModel": "",
	"deviceType": "",
	"deviceVendor": "",
	"engineName": "Gecko",
	"engineVersion": "20.0",
	"osName": "Windows",
	"osVersion": "8",
	"cpuArchitecture": ""
}
```

#### .getAll(filter)

Get an array of all the user agent strings (optionally using a filter).

#### .getAllData(filter)

Get an array of all the parsed user agent data (optionally using a filter).

## Examples

Get a random user agent string:
```javascript
randomUseragent.getRandom();
```

Get a random Firefox user agent string:
```javascript
randomUseragent.getRandom(function (ua) {
	return ua.browserName === 'Firefox';
});
```

Get a random user agent with a version >= 20:
```javascript
randomUseragent.getRandom(function (ua) {
	return parseFloat(ua.browserVersion) >= 20;
});
```


## Source Of User Agents

The collection of user agents is pulled from the large, regularly updated xml file
provided by the author of [User Agent Switcher](http://chrispederick.com/work/user-agent-switcher/),
which is located here:

- [Forum Post](http://techpatterns.com/forums/about304.html)
- [Direct Link](http://techpatterns.com/downloads/firefox/useragentswitcher.xml)


## Links

- [Source Code](https://github.com/skratchdot/random-useragent)
- [Changelog](https://github.com/skratchdot/random-useragent/blob/master/CHANGELOG.md)
- [Live example on Tonic](https://tonicdev.com/npm/random-useragent)


## License

Copyright (c) 2014 skratchdot  
Licensed under the MIT license.
