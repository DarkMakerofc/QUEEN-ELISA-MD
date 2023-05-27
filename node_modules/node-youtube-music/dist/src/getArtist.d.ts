import { Artist } from './models';
export declare function getArtist(artistId: string, options?: {
    lang: string;
    country: string;
}): Promise<Artist>;
