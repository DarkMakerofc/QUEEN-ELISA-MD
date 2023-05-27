import got from 'got';
export let siapakahakujson;
export default async function siapakahaku() {
    if (!siapakahakujson) {
        siapakahakujson = await got('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json').json();
    }
    return siapakahakujson[Math.floor(Math.random() * siapakahakujson.length)];
}
//# sourceMappingURL=siapakahaku.js.map