import got from 'got';
export let tebakbenderajson;
export default async function tebakbendera() {
    if (!tebakbenderajson) {
        tebakbenderajson = await got('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera.json').json();
    }
    return tebakbenderajson[Math.floor(Math.random() * tebakbenderajson.length)];
}
//# sourceMappingURL=tebakbendera.js.map