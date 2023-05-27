const fetch = require("node-fetch");

let check = 0;
updatecheck = async () => {
    if (check == 0) {
        let data = await fetch("https://cdn.g-works.eu/projects/version.json").then(
            (body) => body.json()
          );
          if (data[1].latestversion != "2.1.0") {
            // data[1] = Genshin API
            console.log(
              `A newer version of  is available. Download the new version with npm i genshin-api@${data[1].latestversion}`
            );
          }
          check = 1;
    }
};

const Artifact = (type) => {
    updatecheck();
  if (type == undefined) {
    type = "";
  }
  var promise = new Promise(async function (resolve, reject) {
    let data = await fetch(`https://api.genshin.dev/artifacts/${type}`).then(
      (body) => body.json()
    );

    resolve(data);
  });
  return promise;
};

const Characters = (type) => {
    updatecheck();
  if (type == undefined) {
    type = "";
  }
  var promise = new Promise(async function (resolve, reject) {
    let data = await fetch(`https://api.genshin.dev/characters/${type}`).then(
      (body) => body.json()
    );
    data.image = `https://api.genshin.dev/characters/${type}/portrait`;
    resolve(data);
  });
  return promise;
};

const Domains = (type) => {
    updatecheck();
  if (type == undefined) {
    type = "";
  }
  var promise = new Promise(async function (resolve, reject) {
    let data = await fetch(`https://api.genshin.dev/domains/${type}`).then(
      (body) => body.json()
    );

    resolve(data);
  });
  return promise;
};

const Elements = (type) => {
    updatecheck();
  if (type == undefined) {
    type = "";
  }
  var promise = new Promise(async function (resolve, reject) {
    let data = await fetch(`https://api.genshin.dev/elements/${type}`).then(
      (body) => body.json()
    );

    resolve(data);
  });
  return promise;
};

const Enemies = (type) => {
    updatecheck();
  if (type == undefined) {
    type = "";
  }
  var promise = new Promise(async function (resolve, reject) {
    let data = await fetch(`https://api.genshin.dev/enemies/${type}`).then(
      (body) => body.json()
    );

    resolve(data);
  });
  return promise;
};

const Nations = (type) => {
    updatecheck();
  if (type == undefined) {
    type = "";
  }
  var promise = new Promise(async function (resolve, reject) {
    let data = await fetch(`https://api.genshin.dev/nations/${type}`).then(
      (body) => body.json()
    );

    resolve(data);
  });
  return promise;
};

const Weapons = (type) => {
    updatecheck();
  if (type == undefined) {
    type = "";
  }
  var promise = new Promise(async function (resolve, reject) {
    let data = await fetch(`https://api.genshin.dev/weapons/${type}`).then(
      (body) => body.json()
    );

    resolve(data);
  });
  return promise;
};

exports.Artifact = Artifact;
exports.Characters = Characters;
exports.Domains = Domains;
exports.Elements = Elements;
exports.Enemies = Enemies;
exports.Nations = Nations;
exports.Weapons = Weapons;
