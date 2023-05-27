'use strict';

var expect = require('chai').expect;
var lib = require('./index.js');
var testLoop = 1000;
var arr;
var rand;
var rand1;
var rand2;
var val;
var i;
var j;

describe('random-seed', function () {
	beforeEach(function () {
		rand = lib.create();
		rand1 = lib.create();
		rand2 = lib.create();
	});
	it('should work with no arguments', function () {
		expect(rand()).to.be.nan;
	});
	it('should work when calling rand(5) by returning 0 - 4', function () {
		var iterations = 100;
		for (i = 0; i < iterations; i++) {
			val = rand(5);
			expect(val).to.be.within(0, 4).and.to.be.a.number;
			expect(val % 1).to.equal(0); // integer
		}
	});
	it('should work when calling initState()', function () {
		arr = [58, 26, 63, 93, 30];
		rand.initState();
		for (i = 0; i < arr.length; i++) {
			expect(rand(100)).to.equal(arr[i]);
		}
	});
	it('should work when calling initState() multiple times', function () {
		var iterations = 5;
		arr = [58, 26, 63, 93, 30];
		for (i = 0; i < iterations; i++) {
			rand.initState();
			for (j = 0; j < arr.length; j++) {
				expect(rand(100)).to.equal(arr[j]);
			}
		}
	});
	it('multiple rand without init should work (be different)', function () {
		expect(rand1(Number.MAX_VALUE)).to.not.equal(rand2(Number.MAX_VALUE));
	});
	it('multiple rand with init should work (equal each other)', function () {
		rand1.initState();
		rand2.initState();
		expect(rand1(Number.MAX_VALUE)).to.equal(rand2(Number.MAX_VALUE));
	});
	it('should work when calling string(n)', function () {
		var iterations = 100;
		for (i = 0; i < iterations; i++) {
			for (j = 1; j < 10; j++) {
				expect(rand.string(j)).to.have.length(j);
			}
		}
	});
	it('should work when calling cleanString(str)', function () {
		expect(rand.cleanString('  \n  hello world  \n \n')).to.equal('hello world');
	});
	it('should work when calling hashString(str)', function () {
		rand1.initState();
		rand1.hashString(' \nhello world \n \n');
		rand2.initState();
		rand2.hashString('hello world');
		for (i = 0; i < testLoop; i++) {
			expect(rand1(100)).to.equal(rand2(100));
		}
	});
	it('should work when calling seed(str)', function () {
		// same
		rand1.seed('hello world');
		rand2.seed('hello world');
		for (i = 0; i < testLoop; i++) {
			expect(rand1(Number.MAX_VALUE)).to.equal(rand2(Number.MAX_VALUE));
		}
		// same
		/*eslint-disable */
		rand1.seed({a: 1, b: [1,2]});
		rand2.seed({a:    1 , b : [1,  2]});
		/*eslint-enable */
		for (i = 0; i < testLoop; i++) {
			expect(rand1(Number.MAX_VALUE)).to.equal(rand2(Number.MAX_VALUE));
		}
		// different
		rand1.seed();
		rand2.seed();
		for (i = 0; i < testLoop; i++) {
			expect(rand1(Number.MAX_VALUE)).to.not.equal(rand2(Number.MAX_VALUE));
		}
		// different
		rand1.seed(null);
		rand2.seed(null);
		for (i = 0; i < testLoop; i++) {
			expect(rand1(Number.MAX_VALUE)).to.not.equal(rand2(Number.MAX_VALUE));
		}
	});
	it('should work when calling addEntropy(...args)', function () {
		var maxInt = 1000000;
		var expected = 588734;
		rand.initState();
		expect(rand(maxInt)).to.equal(expected);
		rand.initState();
		rand.addEntropy(1);
		expect(rand(maxInt)).to.not.equal(expected);
		rand.initState();
		expect(rand(maxInt)).to.equal(expected);
	});
	it('calling done() works', function () {
		rand.initState();
		expect(rand(10)).to.equal(5);
		rand.done();
		expect(function () {
			rand(10);
		}).to.not.throw(Error);
		expect(function () {
			rand.initState();
		}).to.throw(Error);
	});
	it('should be able to create() with a seed value', function () {
		var r1 = lib.create('hi');
		expect(r1(10)).to.equal(0);
		expect(r1(10)).to.equal(6);
		expect(r1(10)).to.equal(7);
	});
	it('random() >=0 && < 1', function () {
		for (i = 0; i < testLoop; i++) {
			expect(rand.random()).to.be.gte(0).and.to.be.lt(1);
		}
	});
	it('should work when calling range(n)', function () {
		for (i = 0; i < testLoop; i++) {
			expect(rand.range(10)).to.be.gte(0).and.to.be.lte(10);
			expect(rand.range(100)).to.be.gte(0).and.to.be.lte(100);
			expect(rand.range(100) % 1).to.equal(0);
			expect(rand.range(0)).to.equal(0);
			expect(rand.range(-100)).to.be.lte(0).and.to.be.gte(-100);
		}
	});
	it('should work when calling floatBetween(x, y)', function () {
		for (i = 0; i < testLoop; i++) {
			expect(rand.floatBetween(5, 10)).to.be.gte(5).and.to.be.lte(10);
			expect(rand.floatBetween(-5, 5)).to.be.gte(-5).and.to.be.lte(5);
			expect(rand.floatBetween(-100, 100) % 1).to.not.equal(0);
		}
	});
	it('should work when calling intBetween(x, y)', function () {
		for (i = 0; i < testLoop; i++) {
			expect(rand.intBetween(5, 10)).to.be.gte(5).and.to.be.lte(10);
			expect(rand.intBetween(-5, 5)).to.be.gte(-5).and.to.be.lte(5);
			expect(rand.intBetween(-100, 100) % 1).to.equal(0);
		}
	});
	it('should work with seed values', function () {
		var a = { b: 1 };
		a.a = a;
		expect(function () {
			lib.create();
			lib.create(null);
			lib.create(undefined);
			lib.create('wow');
			lib.create({a: 1});
			lib.create(a); // cycle
			lib.create(function () {});
			lib.create(NaN);
			lib.create(-Infinity);
		}).to.not.throw(Error);
	});
});
