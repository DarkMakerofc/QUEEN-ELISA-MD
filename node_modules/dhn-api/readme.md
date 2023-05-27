# Installing

```bash
pkg update 
pkg upgrade
pkg install nodejs
npm i dhn-api --save
```


### De-BOTZ Example Case For dhn-api
| Link | Thank You >\/\/< |
|------|------------------|
|[HERE](https://dehan-j1ng/De-BOTZ)| De-BOTZ |
|[HERE](https://dhn-api.herokuapp.com/api)| Dhn-Api Rest |

**Bakaaa Onichann >\/\/<**


## Usages

```bash
const dhn_api = require("dhn-api");

(async() => {
   const API = await dhn_api.KomikuSearch("naruto");
   console.log(API);
}();
```


**Output:**

```bash
[
  {
    status: 200,
    creator: '@dehan_j1ng',
    manga: 'Naruto',
    manga_desc: 'Update 10 bulan lalu. Naruto adalah ninja adalah sesama penghuni desa.',
    manga_url: 'https://data3.komiku.id/manga/naruto/',
    manga_thumb: 'https://cover.komiku.id/wp-content/uploads/2020/08/Komik-Naruto.jpg?resize=450,235&quality=60',
    chapter: {
      pertama: 'https://data3.komiku.id/ch/komik-naruto-chapter-1-bahasa-indonesia/',
      terbaru: 'https://data3.komiku.id/ch/komik-naruto-chapter-711-bahasa-indonesia/'
    }
  }
]
```

### Try this to show All

```bash
const dhn_api = require("dhn-api");

( async () => {
  const API = await dhn_api;
  console.log(API);
})();
```


**Output:**

```bash
{
  BBCNews: [AsyncFunction: BBC],
  metroNews: [AsyncFunction: metroTV_],
  CNNNews: [AsyncFunction: CNN_],
  iNews: [AsyncFunction: iNewsTV_],
  KumparanNews: [AsyncFunction: Kumparan_],
  TribunNews: [AsyncFunction: Tribun_],
  DailyNews: [AsyncFunction: DailyNews_],
  DetikNews: [AsyncFunction: DetikNews_],
  OkezoneNews: [AsyncFunction: Okezone_],
  CNBCNews: [AsyncFunction: CNBC_],
  FajarNews: [AsyncFunction: KoranFajar_],
  KompasNews: [AsyncFunction: Kompas_],
  SindoNews: [AsyncFunction: KoranSindo_],
  TempoNews: [AsyncFunction: TempoNews_],
  IndozoneNews: [AsyncFunction: Indozone_],
  AntaraNews: [AsyncFunction: AntaraNews_],
  RepublikaNews: [AsyncFunction: Republika_],
  VivaNews: [AsyncFunction: VIVA_],
  KontanNews: [AsyncFunction: Kontan_],
  MerdekaNews: [AsyncFunction: Merdeka_],
  KomikuSearch: [AsyncFunction: Komiku_],
  AniPlanetSearch: [AsyncFunction: AnimePlanet_],
  KomikFoxSearch: [AsyncFunction: KomikFox_],
  KomikStationSearch: [AsyncFunction: KomikStation_],
  MangakuSearch: [AsyncFunction: Mangakus_],
  KiryuuSearch: [AsyncFunction: Kiryuus_],
  KissMangaSearch: [AsyncFunction: KissM_],
  KlikMangaSearch: [AsyncFunction: KlikS_],
  PalingMurah: [AsyncFunction: palingmurah_],
  LayarKaca21: [AsyncFunction: layarkaca_],
  AminoApps: [AsyncFunction: Amino_],
  Mangatoon: [AsyncFunction: Mangatoon],
  WAModsSearch: [AsyncFunction: WAMods],
  Emojis: [AsyncFunction: Emojing_],
  CoronaInfo: [AsyncFunction: Corona_],
  Cerpen: [Function: Cerpen_],
  Quotes: [Function: Quotes_],
  Couples: [Function: Couples],
  JalanTikusMeme: [Function: JTMimers],
  Darkjokes: [Function: Dark]
}
```

#### List Features
<br>

| List | Name |
|------|------|
| Type | Anime |
| 1 | Komiku Search |
| 2 | Anime Planet Search |
| 3 | Komik Fox Search |
| 4 | Komok Station Search |
| 5 | Mangaku Search |
| 6 | Kiryuu Search |
| 7 | Kissmanga Search |
| 8 | Klikmanga Search |
<br>

| List | Name |
|------|------|
| Type | News |
| 1 | Kompas News |
| 2 | CNN News |
| 3 | CNBC News |
| 4 | Tribun News |
| 5 | Kumparan News |
| 6 | Daily News |
| 7 | Detik News |
| 8 | BCC News |
| 9 | Metro News |
| 10 | INews News |
| 11 | Sindo News |
| 12 | Fajar News |
| 13 | Okezone News |
| 14 | Indozone News |
| 15 | Tempo News |
| 16 | Republika News |
| 17 | Antara News |
| 18 | Viva News |
| 19 | Kontan News |
| 20 | Merdeka News |
<br>

| List | Name |
|------|------|
| Type | Search |
| 1 | Paling Murah Search |
| 2 | LayarKaca21 Search |
| 3 | AminoApps Search |
| 4 | Mangatoon Search |
| 5 | Whatsapp Mods Search |
<br>

| List | Name |
|------|------|
| Type | Other |
| 1 | Emoji to Png |
| 2 | Corona Info |
<br>

| List | Name |
|------|------|
| Type | Random |
| 1 | Quotes Random |
| 2 | Cerpen Random |
| 3 | Darkjokes Random |
| 4 | Couples Wallpaper Random |
| 5 | Jalantikus Meme Random |

### Thanks you for installing this packages >\/\/\/<

baakaaaaa !1!1!1!1!!!! :3