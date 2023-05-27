import got from 'got';
import cheerio from 'cheerio';
export async function gempa() {
    const html = await got('https://www.bmkg.go.id/gempabumi/gempabumi-dirasakan.bmkg').text();
    const $ = cheerio.load(html);
    const results = [];
    $('div.table-responsive > table.table > tbody > tr').each(function () {
        const el = $(this).find('td');
        const date = el.eq(1).text().trim();
        const locate = el.eq(2).text().trim();
        const magnitude = el.eq(3).text().trim();
        const depth = el.eq(4).text().trim();
        const location = el.eq(5).find('a').text().trim();
        const warning = el.eq(5).find('span.label').map(function () {
            return $(this).text().trim();
        }).toArray();
        results.push({
            date,
            locate,
            magnitude,
            depth,
            location,
            warning
        });
    });
    return results;
}
export async function gempaNow() {
    const html = await got('https://www.bmkg.go.id/gempabumi/gempabumi-terkini.bmkg').text();
    const $ = cheerio.load(html);
    const results = [];
    $('div.table-responsive > table.table > tbody > tr').each(function () {
        const el = $(this).find('td');
        const date = el.eq(1).text().trim();
        const latitude = el.eq(2).text().trim();
        const longitude = el.eq(3).text().trim();
        const magnitude = el.eq(4).text().trim();
        const depth = el.eq(5).text().trim();
        const location = el.eq(6).text().trim();
        results.push({
            date,
            latitude,
            longitude,
            magnitude,
            depth,
            location
        });
    });
    return results;
}
export async function tsunami() {
    const html = await got('https://www.bmkg.go.id/tsunami/').text();
    const $ = cheerio.load(html);
    const results = [];
    $('div.row > div > table.table > tbody > tr').each(function () {
        const el = $(this).find('td');
        const date = el.eq(0).text().trim();
        const locate = el.eq(1).text().trim();
        const magnitude = el.eq(2).text().trim();
        const depth = el.eq(3).text().trim();
        const location = el.eq(4).text().trim();
        results.push({
            date,
            locate,
            magnitude,
            depth,
            location
        });
    });
    return results;
}
//# sourceMappingURL=BMKG.js.map