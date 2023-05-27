import got from 'got';
export let susunkatajson;
export default async function susunkata() {
    if (!susunkatajson) {
        susunkatajson = await got('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json').json();
    }
    return susunkatajson[Math.floor(Math.random() * susunkatajson.length)];
}
//# sourceMappingURL=susunkata.js.map