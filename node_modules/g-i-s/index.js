var request = require('request');
var cheerio = require('cheerio');
var queryString = require('querystring');
var flatten = require('lodash.flatten');

var baseURL = 'http://images.google.com/search?';

var imageFileExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg'];

function gis(opts, done) {
  var searchTerm;
  var queryStringAddition;
  var filterOutDomains = ['gstatic.com'];

  if (typeof opts === 'string') {
    searchTerm = opts;
  } else {
    searchTerm = opts.searchTerm;
    queryStringAddition = opts.queryStringAddition;
    filterOutDomains = filterOutDomains.concat(opts.filterOutDomains);
  }

  var url =
    baseURL +
    queryString.stringify({
      tbm: 'isch',
      q: searchTerm
    });

  if (filterOutDomains) {
    url += encodeURIComponent(
      ' ' + filterOutDomains.map(addSiteExcludePrefix).join(' ')
    );
  }

  if (queryStringAddition) {
    url += queryStringAddition;
  }
  var reqOpts = {
    url: url,
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36'
    }
  };

  // console.log(reqOpts.url);
  request(reqOpts, parseGISResponse);

  function parseGISResponse(error, response, body) {
    if (error) {
      done(error);
      return;
    }
    var $ = cheerio.load(body);
    var scripts = $('script');
    var scriptContents = [];
    for (var i = 0; i < scripts.length; ++i) {
      if (scripts[i].children.length > 0) {
        const content = scripts[i].children[0].data;
        if (containsAnyImageFileExtension(content)) {
          scriptContents.push(content);
        }
      }
    }

    done(error, flatten(scriptContents.map(collectImageRefs)));

    function collectImageRefs(content) {
      var refs = [];
      var re = /\["(http.+?)",(\d+),(\d+)\]/g;
      var result;
      while ((result = re.exec(content)) !== null) {
        if (result.length > 3) {
          let ref = {
            url: result[1],
            width: +result[3],
            height: +result[2]
          };
          if (domainIsOK(ref.url)) {
            refs.push(ref);
          }
        }
      }
      return refs;
    }

    function domainIsOK(url) {
      if (!filterOutDomains) {
        return true;
      } else {
        return filterOutDomains.every(skipDomainIsNotInURL);
      }

      function skipDomainIsNotInURL(skipDomain) {
        return url.indexOf(skipDomain) === -1;
      }
    }
  }
}

function addSiteExcludePrefix(s) {
  return '-site:' + s;
}

function containsAnyImageFileExtension(s) {
  var lowercase = s.toLowerCase();
  return imageFileExtensions.some(containsImageFileExtension);

  function containsImageFileExtension(ext) {
    return lowercase.includes(ext);
  }
}

module.exports = gis;
