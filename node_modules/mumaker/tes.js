const mintake = require("./src/index");

// zrapi.pastegg("Z", )
mintake.photooxy("https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html", ['Dika Ardnt.'])
.then(data => console.log(data))
.catch(e => console.log(e))
