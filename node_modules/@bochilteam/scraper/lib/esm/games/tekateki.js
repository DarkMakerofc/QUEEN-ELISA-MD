import got from 'got';
export let tekatekijson;
export default async function tekateki() {
    if (!tekatekijson) {
        tekatekijson = await got('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json').json();
    }
    return tekatekijson[Math.floor(Math.random() * tekatekijson.length)];
}
//# sourceMappingURL=tekateki.js.map