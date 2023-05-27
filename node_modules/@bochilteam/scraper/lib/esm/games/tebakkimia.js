import got from 'got';
export let tebakkimiajson;
export default async function tebakkimia() {
    if (!tebakkimiajson) {
        tebakkimiajson = await got('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json').json();
    }
    return tebakkimiajson[Math.floor(Math.random() * tebakkimiajson.length)];
}
//# sourceMappingURL=tebakkimia.js.map