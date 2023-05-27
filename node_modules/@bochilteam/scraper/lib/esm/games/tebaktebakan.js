import got from 'got';
export let tebaktebakanjson;
export default async function tebaktebakan() {
    if (!tebaktebakanjson) {
        tebaktebakanjson = await got('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json').json();
    }
    return tebaktebakanjson[Math.floor(Math.random() * tebaktebakanjson.length)];
}
//# sourceMappingURL=tebaktebakan.js.map