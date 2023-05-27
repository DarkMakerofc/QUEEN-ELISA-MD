var lib = require('random-seed'); // create a generator
var rand1 = lib.create();
var rand2 = lib.create('Hello World Seed');
console.log(rand1(100), rand2(100));
