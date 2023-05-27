import { dataImageFormat1, dataImageFormat2, dataImageFormat3, searchOpt, searchOpt2 } from "./typings";
export declare class AnimeWallpaper {
    constructor();
    /**
     * Scraping images wallpaper from AlphaCoders
     *
     * @param {Object}
     * @param {string} title.search the title of anime you want to search.
     * @param {string|number} title.page the page for image you want to search.
     * @returns {dataImageFormat1}
     */
    getAnimeWall1(title: searchOpt): Promise<dataImageFormat1[]>;
    /**
     * Scraping images wallpaper from WallpaperCave
     *
     * @param title the title of anime that you want to search.
     * @returns {dataImageFormat2}
     */
    private getAnimeWall2;
    /**
     * Scraping images wallpaper from free4kWallpaper
     *
     * this function will be return random anime wallpaper
     *
     * @returns {dataImageFormat2}
     */
    getAnimeWall3(): Promise<dataImageFormat2[]>;
    /**
     * Scraping images wallpaper from WallHaven
     *
     * @param search.title the title of the anime you want to search.
     * @param search.type the type or purity of image sfw or sketchy image or even both.
     * @param search.page the page for image you want to search, default is 1
     * @returns {dataImageFormat3}
     */
    getAnimeWall4(search: searchOpt2): Promise<dataImageFormat3[]>;
    /**
 * Scraping images wallpaper from zerochan
 *
 * @param title the title of anime that you want to search.
 * @returns {dataImageFormat2}
 */
    getAnimeWall5(title: string): Promise<dataImageFormat1[]>;
    private _request;
}
