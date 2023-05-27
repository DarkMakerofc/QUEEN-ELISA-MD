import got from 'got';
export let darejson = [];
export default async function dare() {
    if (!darejson.length) {
        darejson = await got('https://raw.githubusercontent.com/BochilTeam/database/master/kata-kata/dare.json').json();
    }
    return darejson[Math.round(darejson.length * Math.random())];
}
//# sourceMappingURL=dare.js.map