var test = require('tape');
var gis = require('../index');

var searchTopics = [
  'cats',
  'oh no',
  'ківі',
  {
    searchTerm: 'sleep',
    queryStringAddition: '&tbs=ic:trans'
  },
  {
    searchTerm: 'pony',
    queryStringAddition: '&tbs=ic:trans',
    filterOutDomains: ['deviantart.net', 'deviantart.com']
  }
];

searchTopics.forEach(runTest);

function runTest(topic) {
  test('Basic test', function basicTest(t) {
    gis(topic, checkResults);

    function checkResults(error, results) {
      t.ok(!error, 'No error.');
      t.ok(results.length > 0, 'There is at least one result.');
      results.forEach(checkResult);
      //console.log(JSON.stringify(results, null, '  '));
      t.end();
    }

    function checkResult(result) {
      t.equal(typeof result, 'object', 'Result is an object.');
      t.equal(typeof result.url, 'string', 'Result url is a string.');
      t.ok(
        result.url.indexOf('http://') !== -1 ||
          result.url.indexOf('https://') !== -1,
        'Result url looks like a URL.'
      );
      t.ok(
        result.url.indexOf('imgrefurl') === -1,
        'Result url does not have imgrefurl in it.'
      );
      t.ok(!isNaN(result.width), 'Result has a width.');
      t.ok(!isNaN(result.height), 'Result has a height.');

      if (topic.filterOutDomains) {
        t.equal(
          result.url.indexOf('deviantart.net'),
          -1,
          'Result is not from a filtered domain.'
        );
        t.equal(
          result.url.indexOf('deviantart.com'),
          -1,
          'Result is not from a filtered domain.'
        );
      }
      // if (result.url.indexOf('deviantart.net') !== -1) {
      //   console.log(result.url);
      // }
    }
  });
}
