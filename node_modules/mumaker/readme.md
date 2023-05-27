 ## Installation

```
npm i mumaker
```

 ## Example TextMaker

 ```
const mumaker = require("mumaker");



//TextPro

mumaker
  .textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    "teks",
  ])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));



//TextPro with 2 text

mumaker
  .textpro(
    "https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html",
    ["teks", "teks 2"]
  )
  .then((data) => console.log(data))
  .catch((err) => console.log(err));



//Photooxy

mumaker
  .photooxy(
    "https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html",
    ["teks"]
  )
  .then((data) => console.log(data))
  .catch((err) => console.log(err));



//Photooxy with 2 text

mumaker
  .photooxy(
    "https://photooxy.com/logo-and-text-effects/make-tik-tok-text-effect-375.html",
    ["teks", "Teks 2"]
  )
  .then((data) => console.log(data))
  .catch((err) => console.log(err));



//Ephoto with radio https://ephoto360.com

let radio = "e0723d60-fc0d-421f-bf8f-a9b9b61e4be6" //
mumaker
  .ephoto("https://ephoto360.com/tao-hieu-ung-mui-ten-dinh-kem-chu-ky-nhieu-mau-846.html",["text"], radio)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));



//Ephoto with radio 2text https://ephoto360.com

let radio = "f26629d6-5b3d-4702-beba-542a2d9f7439" 
mumaker
  .ephoto("https://ephoto360.com/hieu-ung-chu/tao-logo-avatar-theo-phong-cach-mascot-364.html",["text","text2"], radio)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));



//Ephoto no Radio https://ephoto360.com

mumaker
  .ephoto2("https://ephoto360.com/hieu-ung-chu-tren-nen-cat-trang-tuyet-dep-663.html", ["text"])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));



//Ephoto No radio with 2text https://ephoto360.com

mumaker
  .ephoto2("https://ephoto360.com/tinh-yeu/viet-chu-len-bong-bay-tinh-yeu-189.html", ["text","text2"])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));



//Ephoto No radio https://en.ephoto360.com

mumaker
  .ephoto3("https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html", ["text"])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));



//Ephoto No radio with 2text https://en.ephoto360.com

mumaker
  .ephoto3("https://en.ephoto360.com/write-letters-on-the-balloons-love-189.html", ["text","text2"])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));



//Ephoto with radio https://en.ephoto360.com

let radio = "984dd03e-220d-4335-a6ba-7ac56b092240"
mumaker
  .ephoto4("https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html", ["text"], radio)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));



//Ephoto with radio 2text https://en.ephoto360.com

let radio = "1ad3c6ed-ba1e-4582-95cf-b5e2d7d1a125"
mumaker
  .ephoto4("https://en.ephoto360.com/free-glitter-text-effect-maker-online-656.html", ["text","text2"], radio)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```


 ## Example IgStalk
 

 ```
const mumaker = require("mumaker");



mumaker
  .igstalk("jokowi")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```


 ## Example Downloader
 
 

 ```
const mumaker = require("mumaker");



// Ttdownloader

mumaker
  .tiktok("https://vm.tiktok.com/ZSJb2Ly6t")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));



// Igstory

mumaker
  .igstory("infinixid")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));



//Igdownloader

mumaker
  .instagram("https://www.instagram.com/p/CSnz415reLK/?utm_source=ig_web_copy_link")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));



//mediafire

mumaker
  .mediafire("https://www.mediafire.com/file/atxgngm36m0ytnn/example.txt/file")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```