const { parseString } = require('xml2js')
const { parse } = require('js2xmlparser')

const xml2JSON = (string) => {
  let json
  let error = null

  parseString(string, (err, res) => {
    !err
      ? json = res
      : error = err
  })

  return error || json
}

const JSON2Xml = (json) => {
  return parse('entry', json)
}

/**
 * Flatten values of arrays in an object of arrays.
 * @param {object} obj The object to flatten.
 */
const flatten = (obj) => {
  const result = []

  obj.forEach((entry) => {
    Object.keys(entry).forEach((key) => {
      entry[key] = entry[key][0]
    })

    result.push(entry)
  })

  return result
}

module.exports = {
  xml2JSON,
  JSON2Xml,
  flatten
}
