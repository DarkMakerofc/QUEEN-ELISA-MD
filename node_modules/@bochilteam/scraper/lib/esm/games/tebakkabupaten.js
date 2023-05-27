import got from 'got';
export let tebakkabupatenjson;
export default async function tebakkabupaten() {
    if (!tebakkabupatenjson) {
        tebakkabupatenjson = await got('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkabupaten.json').json();
    }
    return tebakkabupatenjson[Math.floor(Math.random() * tebakkabupatenjson.length)];
}
//# sourceMappingURL=tebakkabupaten.js.map