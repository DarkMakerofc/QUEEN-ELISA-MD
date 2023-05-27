import got from 'got';
export let caklontongjson;
export default async function caklontong() {
    if (!caklontongjson) {
        caklontongjson = await got('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json').json();
    }
    return caklontongjson[Math.floor(Math.random() * caklontongjson.length)];
}
//# sourceMappingURL=caklontong.js.map