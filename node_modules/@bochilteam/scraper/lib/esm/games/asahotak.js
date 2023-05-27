import got from 'got';
export let asahotakjson;
export default async function asahotak() {
    if (!asahotakjson) {
        asahotakjson = await got('https://raw.githubusercontent.com/BochilTeam/database/master/games/asahotak.json').json();
    }
    return asahotakjson[Math.floor(Math.random() * asahotakjson.length)];
}
//# sourceMappingURL=asahotak.js.map