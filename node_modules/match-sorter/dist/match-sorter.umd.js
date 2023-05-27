(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.matchSorter = {}));
}(this, (function (exports) { 'use strict';

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  var characterMap = {
    "À": "A",
    "Á": "A",
    "Â": "A",
    "Ã": "A",
    "Ä": "A",
    "Å": "A",
    "Ấ": "A",
    "Ắ": "A",
    "Ẳ": "A",
    "Ẵ": "A",
    "Ặ": "A",
    "Æ": "AE",
    "Ầ": "A",
    "Ằ": "A",
    "Ȃ": "A",
    "Ç": "C",
    "Ḉ": "C",
    "È": "E",
    "É": "E",
    "Ê": "E",
    "Ë": "E",
    "Ế": "E",
    "Ḗ": "E",
    "Ề": "E",
    "Ḕ": "E",
    "Ḝ": "E",
    "Ȇ": "E",
    "Ì": "I",
    "Í": "I",
    "Î": "I",
    "Ï": "I",
    "Ḯ": "I",
    "Ȋ": "I",
    "Ð": "D",
    "Ñ": "N",
    "Ò": "O",
    "Ó": "O",
    "Ô": "O",
    "Õ": "O",
    "Ö": "O",
    "Ø": "O",
    "Ố": "O",
    "Ṍ": "O",
    "Ṓ": "O",
    "Ȏ": "O",
    "Ù": "U",
    "Ú": "U",
    "Û": "U",
    "Ü": "U",
    "Ý": "Y",
    "à": "a",
    "á": "a",
    "â": "a",
    "ã": "a",
    "ä": "a",
    "å": "a",
    "ấ": "a",
    "ắ": "a",
    "ẳ": "a",
    "ẵ": "a",
    "ặ": "a",
    "æ": "ae",
    "ầ": "a",
    "ằ": "a",
    "ȃ": "a",
    "ç": "c",
    "ḉ": "c",
    "è": "e",
    "é": "e",
    "ê": "e",
    "ë": "e",
    "ế": "e",
    "ḗ": "e",
    "ề": "e",
    "ḕ": "e",
    "ḝ": "e",
    "ȇ": "e",
    "ì": "i",
    "í": "i",
    "î": "i",
    "ï": "i",
    "ḯ": "i",
    "ȋ": "i",
    "ð": "d",
    "ñ": "n",
    "ò": "o",
    "ó": "o",
    "ô": "o",
    "õ": "o",
    "ö": "o",
    "ø": "o",
    "ố": "o",
    "ṍ": "o",
    "ṓ": "o",
    "ȏ": "o",
    "ù": "u",
    "ú": "u",
    "û": "u",
    "ü": "u",
    "ý": "y",
    "ÿ": "y",
    "Ā": "A",
    "ā": "a",
    "Ă": "A",
    "ă": "a",
    "Ą": "A",
    "ą": "a",
    "Ć": "C",
    "ć": "c",
    "Ĉ": "C",
    "ĉ": "c",
    "Ċ": "C",
    "ċ": "c",
    "Č": "C",
    "č": "c",
    "C̆": "C",
    "c̆": "c",
    "Ď": "D",
    "ď": "d",
    "Đ": "D",
    "đ": "d",
    "Ē": "E",
    "ē": "e",
    "Ĕ": "E",
    "ĕ": "e",
    "Ė": "E",
    "ė": "e",
    "Ę": "E",
    "ę": "e",
    "Ě": "E",
    "ě": "e",
    "Ĝ": "G",
    "Ǵ": "G",
    "ĝ": "g",
    "ǵ": "g",
    "Ğ": "G",
    "ğ": "g",
    "Ġ": "G",
    "ġ": "g",
    "Ģ": "G",
    "ģ": "g",
    "Ĥ": "H",
    "ĥ": "h",
    "Ħ": "H",
    "ħ": "h",
    "Ḫ": "H",
    "ḫ": "h",
    "Ĩ": "I",
    "ĩ": "i",
    "Ī": "I",
    "ī": "i",
    "Ĭ": "I",
    "ĭ": "i",
    "Į": "I",
    "į": "i",
    "İ": "I",
    "ı": "i",
    "Ĳ": "IJ",
    "ĳ": "ij",
    "Ĵ": "J",
    "ĵ": "j",
    "Ķ": "K",
    "ķ": "k",
    "Ḱ": "K",
    "ḱ": "k",
    "K̆": "K",
    "k̆": "k",
    "Ĺ": "L",
    "ĺ": "l",
    "Ļ": "L",
    "ļ": "l",
    "Ľ": "L",
    "ľ": "l",
    "Ŀ": "L",
    "ŀ": "l",
    "Ł": "l",
    "ł": "l",
    "Ḿ": "M",
    "ḿ": "m",
    "M̆": "M",
    "m̆": "m",
    "Ń": "N",
    "ń": "n",
    "Ņ": "N",
    "ņ": "n",
    "Ň": "N",
    "ň": "n",
    "ŉ": "n",
    "N̆": "N",
    "n̆": "n",
    "Ō": "O",
    "ō": "o",
    "Ŏ": "O",
    "ŏ": "o",
    "Ő": "O",
    "ő": "o",
    "Œ": "OE",
    "œ": "oe",
    "P̆": "P",
    "p̆": "p",
    "Ŕ": "R",
    "ŕ": "r",
    "Ŗ": "R",
    "ŗ": "r",
    "Ř": "R",
    "ř": "r",
    "R̆": "R",
    "r̆": "r",
    "Ȓ": "R",
    "ȓ": "r",
    "Ś": "S",
    "ś": "s",
    "Ŝ": "S",
    "ŝ": "s",
    "Ş": "S",
    "Ș": "S",
    "ș": "s",
    "ş": "s",
    "Š": "S",
    "š": "s",
    "Ţ": "T",
    "ţ": "t",
    "ț": "t",
    "Ț": "T",
    "Ť": "T",
    "ť": "t",
    "Ŧ": "T",
    "ŧ": "t",
    "T̆": "T",
    "t̆": "t",
    "Ũ": "U",
    "ũ": "u",
    "Ū": "U",
    "ū": "u",
    "Ŭ": "U",
    "ŭ": "u",
    "Ů": "U",
    "ů": "u",
    "Ű": "U",
    "ű": "u",
    "Ų": "U",
    "ų": "u",
    "Ȗ": "U",
    "ȗ": "u",
    "V̆": "V",
    "v̆": "v",
    "Ŵ": "W",
    "ŵ": "w",
    "Ẃ": "W",
    "ẃ": "w",
    "X̆": "X",
    "x̆": "x",
    "Ŷ": "Y",
    "ŷ": "y",
    "Ÿ": "Y",
    "Y̆": "Y",
    "y̆": "y",
    "Ź": "Z",
    "ź": "z",
    "Ż": "Z",
    "ż": "z",
    "Ž": "Z",
    "ž": "z",
    "ſ": "s",
    "ƒ": "f",
    "Ơ": "O",
    "ơ": "o",
    "Ư": "U",
    "ư": "u",
    "Ǎ": "A",
    "ǎ": "a",
    "Ǐ": "I",
    "ǐ": "i",
    "Ǒ": "O",
    "ǒ": "o",
    "Ǔ": "U",
    "ǔ": "u",
    "Ǖ": "U",
    "ǖ": "u",
    "Ǘ": "U",
    "ǘ": "u",
    "Ǚ": "U",
    "ǚ": "u",
    "Ǜ": "U",
    "ǜ": "u",
    "Ứ": "U",
    "ứ": "u",
    "Ṹ": "U",
    "ṹ": "u",
    "Ǻ": "A",
    "ǻ": "a",
    "Ǽ": "AE",
    "ǽ": "ae",
    "Ǿ": "O",
    "ǿ": "o",
    "Þ": "TH",
    "þ": "th",
    "Ṕ": "P",
    "ṕ": "p",
    "Ṥ": "S",
    "ṥ": "s",
    "X́": "X",
    "x́": "x",
    "Ѓ": "Г",
    "ѓ": "г",
    "Ќ": "К",
    "ќ": "к",
    "A̋": "A",
    "a̋": "a",
    "E̋": "E",
    "e̋": "e",
    "I̋": "I",
    "i̋": "i",
    "Ǹ": "N",
    "ǹ": "n",
    "Ồ": "O",
    "ồ": "o",
    "Ṑ": "O",
    "ṑ": "o",
    "Ừ": "U",
    "ừ": "u",
    "Ẁ": "W",
    "ẁ": "w",
    "Ỳ": "Y",
    "ỳ": "y",
    "Ȁ": "A",
    "ȁ": "a",
    "Ȅ": "E",
    "ȅ": "e",
    "Ȉ": "I",
    "ȉ": "i",
    "Ȍ": "O",
    "ȍ": "o",
    "Ȑ": "R",
    "ȑ": "r",
    "Ȕ": "U",
    "ȕ": "u",
    "B̌": "B",
    "b̌": "b",
    "Č̣": "C",
    "č̣": "c",
    "Ê̌": "E",
    "ê̌": "e",
    "F̌": "F",
    "f̌": "f",
    "Ǧ": "G",
    "ǧ": "g",
    "Ȟ": "H",
    "ȟ": "h",
    "J̌": "J",
    "ǰ": "j",
    "Ǩ": "K",
    "ǩ": "k",
    "M̌": "M",
    "m̌": "m",
    "P̌": "P",
    "p̌": "p",
    "Q̌": "Q",
    "q̌": "q",
    "Ř̩": "R",
    "ř̩": "r",
    "Ṧ": "S",
    "ṧ": "s",
    "V̌": "V",
    "v̌": "v",
    "W̌": "W",
    "w̌": "w",
    "X̌": "X",
    "x̌": "x",
    "Y̌": "Y",
    "y̌": "y",
    "A̧": "A",
    "a̧": "a",
    "B̧": "B",
    "b̧": "b",
    "Ḑ": "D",
    "ḑ": "d",
    "Ȩ": "E",
    "ȩ": "e",
    "Ɛ̧": "E",
    "ɛ̧": "e",
    "Ḩ": "H",
    "ḩ": "h",
    "I̧": "I",
    "i̧": "i",
    "Ɨ̧": "I",
    "ɨ̧": "i",
    "M̧": "M",
    "m̧": "m",
    "O̧": "O",
    "o̧": "o",
    "Q̧": "Q",
    "q̧": "q",
    "U̧": "U",
    "u̧": "u",
    "X̧": "X",
    "x̧": "x",
    "Z̧": "Z",
    "z̧": "z"
  };
  var chars = Object.keys(characterMap).join('|');
  var allAccents = new RegExp(chars, 'g');
  var firstAccent = new RegExp(chars, '');

  var removeAccents = function (string) {
    return string.replace(allAccents, function (match) {
      return characterMap[match];
    });
  };

  var hasAccents = function (string) {
    return !!string.match(firstAccent);
  };

  var removeAccents_1 = removeAccents;
  var has = hasAccents;
  var remove = removeAccents;
  removeAccents_1.has = has;
  removeAccents_1.remove = remove;

  var rankings = {
    CASE_SENSITIVE_EQUAL: 9,
    EQUAL: 8,
    STARTS_WITH: 7,
    WORD_STARTS_WITH: 6,
    STRING_CASE: 5,
    STRING_CASE_ACRONYM: 4,
    CONTAINS: 3,
    ACRONYM: 2,
    MATCHES: 1,
    NO_MATCH: 0
  };
  var caseRankings = {
    CAMEL: 0.8,
    PASCAL: 0.6,
    KEBAB: 0.4,
    SNAKE: 0.2,
    NO_CASE: 0
  };
  matchSorter.rankings = rankings;
  matchSorter.caseRankings = caseRankings;

  var defaultBaseSortFn = function (a, b) {
    return String(a.rankedItem).localeCompare(b.rankedItem);
  };
  /**
   * Takes an array of items and a value and returns a new array with the items that match the given value
   * @param {Array} items - the items to sort
   * @param {String} value - the value to use for ranking
   * @param {Object} options - Some options to configure the sorter
   * @return {Array} - the new sorted array
   */


  function matchSorter(items, value, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        keys = _options.keys,
        _options$threshold = _options.threshold,
        threshold = _options$threshold === void 0 ? rankings.MATCHES : _options$threshold,
        _options$baseSort = _options.baseSort,
        baseSort = _options$baseSort === void 0 ? defaultBaseSortFn : _options$baseSort;
    var matchedItems = items.reduce(reduceItemsToRanked, []);
    return matchedItems.sort(function (a, b) {
      return sortRankedItems(a, b, baseSort);
    }).map(function (_ref) {
      var item = _ref.item;
      return item;
    });

    function reduceItemsToRanked(matches, item, index) {
      var _getHighestRanking = getHighestRanking(item, keys, value, options),
          rankedItem = _getHighestRanking.rankedItem,
          rank = _getHighestRanking.rank,
          keyIndex = _getHighestRanking.keyIndex,
          _getHighestRanking$ke = _getHighestRanking.keyThreshold,
          keyThreshold = _getHighestRanking$ke === void 0 ? threshold : _getHighestRanking$ke;

      if (rank >= keyThreshold) {
        matches.push({
          rankedItem: rankedItem,
          item: item,
          rank: rank,
          index: index,
          keyIndex: keyIndex
        });
      }

      return matches;
    }
  }
  /**
   * Gets the highest ranking for value for the given item based on its values for the given keys
   * @param {*} item - the item to rank
   * @param {Array} keys - the keys to get values from the item for the ranking
   * @param {String} value - the value to rank against
   * @param {Object} options - options to control the ranking
   * @return {{rank: Number, keyIndex: Number, keyThreshold: Number}} - the highest ranking
   */


  function getHighestRanking(item, keys, value, options) {
    if (!keys) {
      return {
        // ends up being duplicate of 'item' in matches but consistent
        rankedItem: item,
        rank: getMatchRanking(item, value, options),
        keyIndex: -1,
        keyThreshold: options.threshold
      };
    }

    var valuesToRank = getAllValuesToRank(item, keys);
    return valuesToRank.reduce(function (_ref2, _ref3, i) {
      var rank = _ref2.rank,
          rankedItem = _ref2.rankedItem,
          keyIndex = _ref2.keyIndex,
          keyThreshold = _ref2.keyThreshold;
      var itemValue = _ref3.itemValue,
          attributes = _ref3.attributes;
      var newRank = getMatchRanking(itemValue, value, options);
      var newRankedItem = rankedItem;
      var minRanking = attributes.minRanking,
          maxRanking = attributes.maxRanking,
          threshold = attributes.threshold;

      if (newRank < minRanking && newRank >= rankings.MATCHES) {
        newRank = minRanking;
      } else if (newRank > maxRanking) {
        newRank = maxRanking;
      }

      if (newRank > rank) {
        rank = newRank;
        keyIndex = i;
        keyThreshold = threshold;
        newRankedItem = itemValue;
      }

      return {
        rankedItem: newRankedItem,
        rank: rank,
        keyIndex: keyIndex,
        keyThreshold: keyThreshold
      };
    }, {
      rank: rankings.NO_MATCH,
      keyIndex: -1,
      keyThreshold: options.threshold
    });
  }
  /**
   * Gives a rankings score based on how well the two strings match.
   * @param {String} testString - the string to test against
   * @param {String} stringToRank - the string to rank
   * @param {Object} options - options for the match (like keepDiacritics for comparison)
   * @returns {Number} the ranking for how well stringToRank matches testString
   */


  function getMatchRanking(testString, stringToRank, options) {
    /* eslint complexity:[2, 12] */
    testString = prepareValueForComparison(testString, options);
    stringToRank = prepareValueForComparison(stringToRank, options); // too long

    if (stringToRank.length > testString.length) {
      return rankings.NO_MATCH;
    } // case sensitive equals


    if (testString === stringToRank) {
      return rankings.CASE_SENSITIVE_EQUAL;
    }

    var caseRank = getCaseRanking(testString);
    var isPartial = isPartialOfCase(testString, stringToRank, caseRank);
    var isCasedAcronym = isCaseAcronym(testString, stringToRank, caseRank); // Lower casing before further comparison

    testString = testString.toLowerCase();
    stringToRank = stringToRank.toLowerCase(); // case insensitive equals

    if (testString === stringToRank) {
      return rankings.EQUAL + caseRank;
    } // starts with


    if (testString.indexOf(stringToRank) === 0) {
      return rankings.STARTS_WITH + caseRank;
    } // word starts with


    if (testString.indexOf(" " + stringToRank) !== -1) {
      return rankings.WORD_STARTS_WITH + caseRank;
    } // is a part inside a cased string


    if (isPartial) {
      return rankings.STRING_CASE + caseRank;
    } // is acronym for a cased string


    if (caseRank > 0 && isCasedAcronym) {
      return rankings.STRING_CASE_ACRONYM + caseRank;
    } // contains


    if (testString.indexOf(stringToRank) !== -1) {
      return rankings.CONTAINS + caseRank;
    } else if (stringToRank.length === 1) {
      // If the only character in the given stringToRank
      //   isn't even contained in the testString, then
      //   it's definitely not a match.
      return rankings.NO_MATCH;
    } // acronym


    if (getAcronym(testString).indexOf(stringToRank) !== -1) {
      return rankings.ACRONYM + caseRank;
    } // will return a number between rankings.MATCHES and
    // rankings.MATCHES + 1 depending  on how close of a match it is.


    return getClosenessRanking(testString, stringToRank);
  }
  /**
   * Generates an acronym for a string.
   *
   * @param {String} string the string for which to produce the acronym
   * @returns {String} the acronym
   */


  function getAcronym(string) {
    var acronym = '';
    var wordsInString = string.split(' ');
    wordsInString.forEach(function (wordInString) {
      var splitByHyphenWords = wordInString.split('-');
      splitByHyphenWords.forEach(function (splitByHyphenWord) {
        acronym += splitByHyphenWord.substr(0, 1);
      });
    });
    return acronym;
  }
  /**
   * Returns a score base on the case of the testString
   * @param {String} testString - the string to test against
   * @returns {Number} the number of the ranking,
   * based on the case between 0 and 1 for how the testString matches the case
   */


  function getCaseRanking(testString) {
    var containsUpperCase = testString.toLowerCase() !== testString;
    var containsDash = testString.indexOf('-') >= 0;
    var containsUnderscore = testString.indexOf('_') >= 0;

    if (!containsUpperCase && !containsUnderscore && containsDash) {
      return caseRankings.KEBAB;
    }

    if (!containsUpperCase && containsUnderscore && !containsDash) {
      return caseRankings.SNAKE;
    }

    if (containsUpperCase && !containsDash && !containsUnderscore) {
      var startsWithUpperCase = testString[0].toUpperCase() === testString[0];

      if (startsWithUpperCase) {
        return caseRankings.PASCAL;
      }

      return caseRankings.CAMEL;
    }

    return caseRankings.NO_CASE;
  }
  /**
   * Returns whether the stringToRank is one of the case parts in the testString (works with any string case)
   * @example
   * // returns true
   * isPartialOfCase('helloWorld', 'world', caseRankings.CAMEL)
   * @example
   * // returns false
   * isPartialOfCase('helloWorld', 'oworl', caseRankings.CAMEL)
   * @param {String} testString - the string to test against
   * @param {String} stringToRank - the string to rank
   * @param {Number} caseRanking - the ranking score based on case of testString
   * @returns {Boolean} whether the stringToRank is one of the case parts in the testString
   */


  function isPartialOfCase(testString, stringToRank, caseRanking) {
    var testIndex = testString.toLowerCase().indexOf(stringToRank.toLowerCase());

    switch (caseRanking) {
      case caseRankings.SNAKE:
        return testString[testIndex - 1] === '_';

      case caseRankings.KEBAB:
        return testString[testIndex - 1] === '-';

      case caseRankings.PASCAL:
      case caseRankings.CAMEL:
        return testIndex !== -1 && testString[testIndex] === testString[testIndex].toUpperCase();

      default:
        return false;
    }
  }
  /**
   * Check if stringToRank is an acronym for a partial case
   * @example
   * // returns true
   * isCaseAcronym('super_duper_file', 'sdf', caseRankings.SNAKE)
   * @param {String} testString - the string to test against
   * @param {String} stringToRank - the acronym to test
   * @param {Number} caseRank - the ranking of the case
   * @returns {Boolean} whether the stringToRank is an acronym for the testString
   */


  function isCaseAcronym(testString, stringToRank, caseRank) {
    var splitValue = null;

    switch (caseRank) {
      case caseRankings.SNAKE:
        splitValue = '_';
        break;

      case caseRankings.KEBAB:
        splitValue = '-';
        break;

      case caseRankings.PASCAL:
      case caseRankings.CAMEL:
        splitValue = /(?=[A-Z])/;
        break;

      default:
        splitValue = null;
    }

    var splitTestString = testString.split(splitValue);
    return stringToRank.toLowerCase().split('').reduce(function (correct, char, charIndex) {
      var splitItem = splitTestString[charIndex];
      return correct && splitItem && splitItem[0].toLowerCase() === char;
    }, true);
  }
  /**
   * Returns a score based on how spread apart the
   * characters from the stringToRank are within the testString.
   * A number close to rankings.MATCHES represents a loose match. A number close
   * to rankings.MATCHES + 1 represents a tighter match.
   * @param {String} testString - the string to test against
   * @param {String} stringToRank - the string to rank
   * @returns {Number} the number between rankings.MATCHES and
   * rankings.MATCHES + 1 for how well stringToRank matches testString
   */


  function getClosenessRanking(testString, stringToRank) {
    var matchingInOrderCharCount = 0;
    var charNumber = 0;

    function findMatchingCharacter(matchChar, string, index) {
      for (var j = index; j < string.length; j++) {
        var stringChar = string[j];

        if (stringChar === matchChar) {
          matchingInOrderCharCount += 1;
          return j + 1;
        }
      }

      return -1;
    }

    function getRanking(spread) {
      var inOrderPercentage = matchingInOrderCharCount / stringToRank.length;
      var ranking = rankings.MATCHES + inOrderPercentage * (1 / spread);
      return ranking;
    }

    var firstIndex = findMatchingCharacter(stringToRank[0], testString, 0);

    if (firstIndex < 0) {
      return rankings.NO_MATCH;
    }

    charNumber = firstIndex;

    for (var i = 1; i < stringToRank.length; i++) {
      var matchChar = stringToRank[i];
      charNumber = findMatchingCharacter(matchChar, testString, charNumber);
      var found = charNumber > -1;

      if (!found) {
        return rankings.NO_MATCH;
      }
    }

    var spread = charNumber - firstIndex;
    return getRanking(spread);
  }
  /**
   * Sorts items that have a rank, index, and keyIndex
   * @param {Object} a - the first item to sort
   * @param {Object} b - the second item to sort
   * @return {Number} -1 if a should come first, 1 if b should come first, 0 if equal
   */


  function sortRankedItems(a, b, baseSort) {
    var aFirst = -1;
    var bFirst = 1;
    var aRank = a.rank,
        aKeyIndex = a.keyIndex;
    var bRank = b.rank,
        bKeyIndex = b.keyIndex;

    if (aRank === bRank) {
      if (aKeyIndex === bKeyIndex) {
        // use the base sort function as a tie-breaker
        return baseSort(a, b);
      } else {
        return aKeyIndex < bKeyIndex ? aFirst : bFirst;
      }
    } else {
      return aRank > bRank ? aFirst : bFirst;
    }
  }
  /**
   * Prepares value for comparison by stringifying it, removing diacritics (if specified)
   * @param {String} value - the value to clean
   * @param {Object} options - {keepDiacritics: whether to remove diacritics}
   * @return {String} the prepared value
   */


  function prepareValueForComparison(value, _ref4) {
    var keepDiacritics = _ref4.keepDiacritics;
    value = "" + value; // toString

    if (!keepDiacritics) {
      value = removeAccents_1(value);
    }

    return value;
  }
  /**
   * Gets value for key in item at arbitrarily nested keypath
   * @param {Object} item - the item
   * @param {Object|Function} key - the potentially nested keypath or property callback
   * @return {Array} - an array containing the value(s) at the nested keypath
   */


  function getItemValues(item, key) {
    if (typeof key === 'object') {
      key = key.key;
    }

    var value;

    if (typeof key === 'function') {
      value = key(item); // eslint-disable-next-line no-negated-condition
    } else if (key.indexOf('.') !== -1) {
      // handle nested keys
      value = key.split('.').reduce(function (itemObj, nestedKey) {
        return itemObj ? itemObj[nestedKey] : null;
      }, item);
    } else {
      value = item[key];
    } // concat because `value` can be a string or an array
    // eslint-disable-next-line


    return value != null ? [].concat(value) : null;
  }
  /**
   * Gets all the values for the given keys in the given item and returns an array of those values
   * @param {Object} item - the item from which the values will be retrieved
   * @param {Array} keys - the keys to use to retrieve the values
   * @return {Array} objects with {itemValue, attributes}
   */


  function getAllValuesToRank(item, keys) {
    return keys.reduce(function (allVals, key) {
      var values = getItemValues(item, key);

      if (values) {
        values.forEach(function (itemValue) {
          allVals.push({
            itemValue: itemValue,
            attributes: getKeyAttributes(key)
          });
        });
      }

      return allVals;
    }, []);
  }
  /**
   * Gets all the attributes for the given key
   * @param {Object|String} key - the key from which the attributes will be retrieved
   * @return {Object} object containing the key's attributes
   */


  function getKeyAttributes(key) {
    if (typeof key === 'string') {
      key = {
        key: key
      };
    }

    return _extends({
      maxRanking: Infinity,
      minRanking: -Infinity
    }, key);
  }

  exports.default = matchSorter;
  exports.rankings = rankings;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=match-sorter.umd.js.map
