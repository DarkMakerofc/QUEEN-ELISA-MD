import { ArtistPreview } from './models';
export declare const parseArtistsSearchBody: (body: any) => ArtistPreview[];
export declare function searchArtists(query: string, options?: {
    lang?: string;
    country?: string;
}): Promise<ArtistPreview[]>;
