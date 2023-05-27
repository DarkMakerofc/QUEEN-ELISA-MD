const randomUseragent = require('random-useragent');
const ua = randomUseragent.getRandom(); // gets a random user agent string
const data = randomUseragent.getRandomData(); // gets random user agent data
console.log('Random useragent:', ua);
console.log('Random useragent data:', data);
