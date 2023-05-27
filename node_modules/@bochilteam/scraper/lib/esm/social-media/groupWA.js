import got from 'got';
import cheerio from 'cheerio';
export async function groupWA(query) {
    const html = await got(`http://ngarang.com/link-grup-wa/daftar-link-grup-wa.php?search=${encodeURIComponent(query).replace(/%20/g, '+')}&searchby=name`).text();
    const $ = cheerio.load(html);
    const results = [];
    $('div.entry > div.wa-chat').each((_, el) => {
        const $el = $(el);
        const $a = $el.find('a');
        const url = $a.find('div.wa-chat-title-container > a').attr('href') ||
            $el.find('div.wa-chat-message > a.URLMessage').attr('href');
        const subject = $el.find('div.wa-chat-title-text').text().trim();
        if (url) {
            results.push({
                url,
                subject
            });
        }
    });
    return results;
}
//# sourceMappingURL=groupWA.js.map