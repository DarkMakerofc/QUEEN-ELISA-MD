/*
 * random-useragent
 * https://github.com/skratchdot/random-useragent
 *
 * Copyright (c) 2014 skratchdot
 * Licensed under the MIT license.
 */
'use strict';

const useragents = require('./useragent-data.json');
const rand = require('random-seed').create();

// cloning is slow, but it's only done when returning parsed user agent
// objects (so the data can't be changed by the end user).
// this can be a performance hit when in a loop, so use with caution.
const cloneData = function (data) {
	return JSON.parse(JSON.stringify(data));
};

const getData = function (filter) {
	return typeof filter === 'function' ? useragents.filter(filter) : useragents;
};

exports.getRandom = function (filter) {
	const data = getData(filter);
	return data.length ? data[rand.intBetween(0, data.length - 1)].userAgent : null;
};

exports.getRandomData = function (filter) {
	const data = getData(filter);
	return data.length ? cloneData(data[rand.intBetween(0, data.length - 1)]) : null;
};

exports.getAll = function (filter) {
	return getData(filter).map(function (item) {
		return item.userAgent;
	});
};

exports.getAllData = function (filter) {
	return cloneData(getData(filter));
};
