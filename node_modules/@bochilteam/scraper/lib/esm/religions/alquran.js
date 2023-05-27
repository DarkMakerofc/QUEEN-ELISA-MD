import got from 'got';
export async function alquran() {
    const data = await got('https://raw.githubusercontent.com/rzkytmgr/quran-api/master/data/quran.json').json();
    return data;
}
//# sourceMappingURL=alquran.js.map