import got from 'got';
export let family100json;
export default async function family100() {
    if (!family100json) {
        family100json = await got('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json').json();
    }
    return family100json[Math.floor(Math.random() * family100json.length)];
}
//# sourceMappingURL=family100.js.map