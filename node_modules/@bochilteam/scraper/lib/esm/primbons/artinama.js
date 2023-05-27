import got from 'got';
export default async function artinama(nama) {
    var _a, _b, _c;
    const data = await got(`https://www.primbon.com/arti_nama.php?nama1=${nama}&proses=+Submit%21+`).text();
    const results = (_c = (_b = (_a = data
        .split('<h1>ARTI NAMA</h1><br>')[1]) === null || _a === void 0 ? void 0 : _a.split('<TABLE>')[0]) === null || _b === void 0 ? void 0 : _b.replace(/<(\/)?(h1|br|i|b)>/gim, '')) === null || _c === void 0 ? void 0 : _c.trim();
    return results || '';
}
//# sourceMappingURL=artinama.js.map