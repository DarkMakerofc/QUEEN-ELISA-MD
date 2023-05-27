import got from 'got';
export let tebaklirikjson;
export default async function tebaklirik() {
    if (!tebaklirikjson) {
        tebaklirikjson = await got('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json').json();
    }
    return tebaklirikjson[Math.floor(Math.random() * tebaklirikjson.length)];
}
//# sourceMappingURL=tebaklirik.js.map