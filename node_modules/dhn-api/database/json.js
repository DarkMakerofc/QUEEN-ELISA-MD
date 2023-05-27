const fs = require('fs');
const path = require('path');

const cerpen = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'cerpen.json')));
const couple = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'couple.json')));
const quotes = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'quotes.json')));
const darkjoke = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'darkjoke.json')));
const JTmeme = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'JTmeme.json')));

randomJson = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const Cerpen_ = () => {
  return randomJson(cerpen);
};

const Quotes_ = () => {
  return randomJson(quotes);
};

const Couples = () => {
  return randomJson(couple);
};

const JTMimers = () => {
  return randomJson(JTmeme);
};

const Dark = () => {
  return randomJson(darkjoke);
};

module.exports = {
  Cerpen_,
  Quotes_,
  Couples,
  JTMimers,
  Dark
};

/*
 *
 * @dehan_j1ng
 * An Example Api for De-BOTZ
 *
 */