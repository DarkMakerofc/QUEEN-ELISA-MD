import got from 'got';
export let tebakkatajson;
export default async function tebakkata() {
    if (!tebakkatajson) {
        tebakkatajson = await got('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json').json();
    }
    return tebakkatajson[Math.floor(Math.random() * tebakkatajson.length)];
}
//# sourceMappingURL=tebakkata.js.map