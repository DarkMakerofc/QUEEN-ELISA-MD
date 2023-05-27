const axios = require("axios");
const cheerio = require("cheerio");

const loghandler = {
  noinput: "No Querry Input! Baakaa >\/\/<",
  er: "=> Error:"
};

/*
 * @Emojipedia
 */
 
const Emojing_ = async (emoji) => {
  _regex = /[a-z|0-9]/gi;
  if (!emoji) {
    return loghandler.noinput;
  }
  if (emoji.match(_regex)) {
    return "Jangan huruf/angkah pack :v";
  }
  try {
  const hasil = {};
  const res = await axios.get("https://emojipedia.org/" + encodeURI(emoji) + "/", {
    method: "GET",
    headers: {
      "User-Agent": "Mozilla/5.0 (Linux; Android 9; Redmi 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36"
    }
  });
  const $ = cheerio.load(res.data);
  hasil.status = res.status;
  hasil.creator = "@dehan_j1ng";
  hasil.unicode_name = $("section").eq(3).find("p").text().trim();
  hasil.unicode_alias = $(".aliases").find("ul > li").text().trim().split(emoji).join(" - " + emoji);
  hasil.unicode_desc = $(".description").find("p").text().trim();
  hasil.unicode_pack = [];
  $(".vendor-list > ul > li").each(function (a, b) {
    let vendor_thumb = $(b).find("div.vendor-image > img").attr('data-cfsrc');
    let vendor_name = $(b).find("div.vendor-info > h2").text();
    const result = {
      vendor_name,
      vendor_thumb
    };
    hasil.unicode_pack.push(result);
  });
  hasil.vendor_pack = [];
  $("ul.vendor-rollout > li").each(function(c, d) {
    vendor_version = $(d).find("div.vendor-info > p").text();
    vendor_url = "https://emojipedia.org" + $(d).find("div.vendor-image > a").attr("href");
    vendor_thumb = $(d).find("div.vendor-image").find("img.vendor-rollout-lazy").attr("data-src");
    const result = {
      vendor_version,
      vendor_url,
      vendor_thumb
    };
    hasil.vendor_pack.push(result);
  });
return hasil;
} catch (error404) {
  return loghandler.er + error404;
}
};

/*
 * @Info Corona
 */

const Corona_ = async (country) => {
  if (!country) return loghandler.noinput;
  try {
   const res = await axios.request(`https://www.worldometers.info/coronavirus/country/` + country, {
    method: "GET",
    headers: {
      "User-Agent": "Mozilla/5.0 (Linux; Android 9; Redmi 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36"
    }
  });
  let result = {};
  const $ = cheerio.load(res.data);
  result.negara = $("div").find("h1").text().slice(3).split(/ /g)[0];
  result.total_kasus = $("div#maincounter-wrap").find("div.maincounter-number > span").eq(0).text() + " total";
  result.total_kematian = $("div#maincounter-wrap").find("div.maincounter-number > span").eq(1).text() + " total";
  result.total_sembuh = $("div#maincounter-wrap").find("div.maincounter-number > span").eq(2).text() + " total";
  result.informasi = $("div.content-inner > div").eq(1).text();
  result.informasi_lengkap = "https://www.worldometers.info/coronavirus/country/" + country;
  return result;
  } catch (error404) {
    return "=> Error => " + error404;
  }
};

module.exports = {
  Emojing_,
  Corona_
};

/*
 *
 * @dehan_j1ng
 * An Example Api for De-BOTZ
 *
 */