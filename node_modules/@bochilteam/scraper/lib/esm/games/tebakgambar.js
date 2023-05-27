import got from 'got';
export let tebakgambarjson;
export default async function tebakgambar() {
    if (!tebakgambarjson) {
        tebakgambarjson = await got('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json').json();
    }
    return tebakgambarjson[Math.floor(Math.random() * tebakgambarjson.length)];
}
//# sourceMappingURL=tebakgambar.js.map