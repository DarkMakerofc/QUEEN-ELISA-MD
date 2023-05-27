const fetch = require("node-fetch");
const cheerio = require("cheerio");
const FormData = require("form-data");
const exec = require('child_process').exec;
const os = require("os");

/**
 * Photooxy Scraper
 * @function
 * @param {String} url - Your phootoxy url, example https://photooxy.com/logo-and-text-effects/make-tik-tok-text-effect-375.html.
 * @param {String[]} text - Text (required). example ["text", "text 2 if any"]
 */

async function photooxy(url, text) {
  if (!/^https:\/\/photooxy\.com\/.+\.html$/.test(url)) {
    throw new Error("Enter a Valid URL");
  }
  let num = 0;
  const form = new FormData();
  if (typeof text === "string") text = [text];
  for (let texts of text) {
    num += 1;
    form.append(`text_${num}`, texts);
  }
  form.append("login", "OK");
  var procc = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "/",
      "Accept-Language": "en-US,en;q=0.9",
      "User-Agent": "GoogleBot",
      ...form.getHeaders(),
    },
    body: form.getBuffer(),
  });
  let html = await procc.text();
  let $ = cheerio.load(html);
  const img = $('a[class="btn btn-primary"]').attr("href");
  return img;
}

module.exports = photooxy;
