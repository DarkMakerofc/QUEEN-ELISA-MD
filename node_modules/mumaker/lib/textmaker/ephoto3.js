const fetch = require("node-fetch");
const cheerio = require("cheerio");
const cookie = require("cookie");
const axios = require("axios");
const FormData = require("form-data");


function gaspost(url, form1, headers = {}) {
  let e = encodeURIComponent
  const formdata = JSON.parse(form1)
  let body = Object.keys(formdata).map(key => {
    let vals = formdata[key]
    let isArray = Array.isArray(vals)
    let keyq = e(key + (isArray ? '[]' : ''))
    if (!isArray) vals = [vals]
    let out = []
    for (let valq of vals) out.push(keyq + '=' + e(valq))
    return out.join('&')
  }).join('&')
  //console.log(formdata)
  return axios(url, {
    method: 'POST',
    headers: {
      accept: '/',
      'accept-language': "en-US,en;q=0.9",
      'content-type': "application/x-www-form-urlencoded; charset=UTF-8",
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36',
      ...headers
    },
    data: body
  })
}
async function ephoto3(url, texts = ['text']) {
  if (!/^https:\/\/en.ephoto360\.com\/.+\.html$/.test(url)) throw new Error('Invalid URL')
  let res = await axios.get(url,{
    method: 'GET',
    headers: {
      accept: '/',
      'accept-language': "en-US,en;q=0.9",
      'content-type': "application/x-www-form-urlencoded; charset=UTF-8",
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36'
    }})
  let html = res.data
  //console.log(res.headers)
  const cfuid = res.headers['set-cookie'][0].split(',').map(v => cookie.parse(v)).reduce((a, c) => { return {...a, ...c} }, {})
  //console.log('ini cfuid == ' + cfuid)
  const phpses = res.headers['set-cookie'][0].split(',').map(v => cookie.parse(v)).reduce((a, c) => { return {...a, ...c} }, {})
  cookies = {
    _cfduid: cfuid._cfduid,
    PHPSESSID: phpses.PHPSESSID,
  }
  let forms = {
    submit: 'Create a photo',
    token: /name="token".*value="(.+?)"/.exec(html)[1],
    build_server: 'https://s1.ephoto360.com/',
    build_server_id: 1
  }
  let form = new FormData
  if (typeof texts === 'string') texts = [texts]
  for (let text of texts) form.append('text[]', text)
  for (let key in forms) form.append(key, forms[key])

  cookies = Object.entries(cookies).map(([ name, value ]) => cookie.serialize(name, value)).join('; ')
  //console.log(cookies)
  let res2 = await axios(url, {
    method: 'POST',
    headers: {
      accept: '/',
      'accept-language': "en-US,en;q=0.9",
      ...form.getHeaders(),
      cookie: cookies,
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36'
    },
    data: form.getBuffer()
  })
  let html2 = res2.data
   let form_value = /name="form_value_input".*value="(.+?)"/.exec(html2)
  if (!form_value) throw new Error('Token invalid? ' + /No token/i.test(html2))
   let tokenval = form_value[1].split('&quot;').join('"')
  let res3 = await gaspost('https://en.ephoto360.com/effect/create-image', tokenval, {
    cookie: cookies
  })
  return await res3.data
}

module.exports = ephoto3;