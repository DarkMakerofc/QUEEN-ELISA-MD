#!/usr/bin/env node
/*
 * random-useragent
 * https://github.com/skratchdot/random-useragent
 *
 * Copyright (c) 2014 skratchdot
 * Licensed under the MIT license.
 */
/*eslint prefer-template:0, no-console:0 */
'use strict';

// config
const xmlUrl = 'http://techpatterns.com/downloads/firefox/useragentswitcher.xml';
const file = __dirname + '/../useragent-data.json';

// requires
const fs = require('fs');
const request = require('request');
const xml2js = require('xml2js');
const UAParser = require('ua-parser-js');

// instance
const useragents = [];
const xmlParser = new xml2js.Parser();
const uaParser = new UAParser();

// functions
const parseUseragents = function (folderName, folderItem) {
	if (Object.prototype.hasOwnProperty.call(folderItem, 'useragent')) {
		folderItem.useragent.forEach(function (useragent) {
			useragent = useragent.$;
			uaParser.setUA(useragent.useragent);
			const parsed = uaParser.getResult();
			if (typeof useragent.useragent === 'string' && useragent.useragent.length > 0) {
				useragents.push({
					folder: folderName,
					description: useragent.description,
					userAgent: useragent.useragent,
					appCodename: useragent.appcodename,
					appName: useragent.appname,
					appVersion: useragent.appversion,
					platform: useragent.platform,
					vendor: useragent.vendor,
					vendorSub: useragent.vendorsub,
					browserName: parsed.browser.name || '',
					browserMajor: parsed.browser.major || '',
					browserVersion: parsed.browser.version || '',
					deviceModel: parsed.device.model || '',
					deviceType: parsed.device.type || '',
					deviceVendor: parsed.device.vendor || '',
					engineName: parsed.engine.name || '',
					engineVersion: parsed.engine.version || '',
					osName: parsed.os.name || '',
					osVersion: parsed.os.version || '',
					cpuArchitecture: parsed.cpu.architecture || ''
				});
			}
		});
	}
};

const parseFolder = function (folderName, folder) {
	folder.forEach(function (folderItem) {
		const subFolderName = folderName + '/' + folderItem.$.description;
		// continue parsing folders
		if (Object.prototype.hasOwnProperty.call(folderItem, 'folder')) {
			parseFolder(subFolderName, folderItem.folder);
		}
		// parse any useragents
		parseUseragents(subFolderName, folderItem);
	});
};

// create file
request(xmlUrl, function (error, response, body) {
	xmlParser.parseString(body, function (err, result) {
		parseFolder('', result.useragentswitcher.folder);
		fs.writeFile(
			file,
			JSON.stringify(useragents, null, '\t'),
			function () {
				console.log('Done Writing File.');
			}
		);
	});
});
