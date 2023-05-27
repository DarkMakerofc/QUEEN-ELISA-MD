'use strict';
/* globals describe, it */
const expect = require('chai').expect;
const lib = require('./index.js');
const iterations = 100;

describe('random-useragent', function () {
	it('don\'t change data', function () {
		const key = 'someNewKey';
		const d1 = lib.getAllData();
		d1[0][key] = 'foo';
		const d2 = lib.getAllData();
		expect(Object.prototype.hasOwnProperty.call(d1[0], key)).to.equal(true);
		expect(Object.prototype.hasOwnProperty.call(d2[0], key)).to.equal(false);
	});
	it('return values', function () {
		expect(lib.getRandom()).to.be.a('string');
		expect(lib.getRandomData()).to.be.an('object');
		expect(lib.getAll()).to.be.an('array');
		expect(lib.getAllData()).to.be.an('array');
	});
	it('randomization works', function (done) {
		for (let i = 0; i < iterations; i++) {
			expect(lib.getRandom()).to.be.a('string');
			expect(lib.getRandomData()).to.be.an('object');
		}
		done();
	});
	it('valid filters work', function () {
		const filter = function (item) {
			return item.browserName === 'Chrome';
		};
		expect(lib.getRandom(filter)).to.be.a('string');
		expect(lib.getRandomData(filter)).to.be.an('object');
		expect(lib.getAll(filter)).to.be.an('array');
		expect(lib.getAllData(filter)).to.be.an('array');
		expect(lib.getAll(filter)).to.have.length.gt(0);
		expect(lib.getAllData(filter)).to.have.length.gt(0);
	});
	it('invalid filters work', function () {
		const filter = function (item) {
			return item.browserName === 'Some Fake Browser';
		};
		expect(lib.getRandom(filter)).to.be.null;
		expect(lib.getRandomData(filter)).to.be.null;
		expect(lib.getAll(filter)).to.be.an('array');
		expect(lib.getAllData(filter)).to.be.an('array');
		expect(lib.getAll(filter)).to.have.length(0);
		expect(lib.getAllData(filter)).to.have.length(0);
	});
});
