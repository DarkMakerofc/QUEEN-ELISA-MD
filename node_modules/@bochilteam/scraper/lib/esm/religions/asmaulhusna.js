import got from 'got';
export let asmaulhusnajson;
export default async function asmaulhusna() {
    if (!asmaulhusnajson) {
        asmaulhusnajson = await got('https://raw.githubusercontent.com/BochilTeam/database/master/religi/asmaulhusna.json').json();
    }
    return asmaulhusnajson[Math.floor(Math.random() * asmaulhusnajson.length)];
}
//# sourceMappingURL=asmaulhusna.js.map