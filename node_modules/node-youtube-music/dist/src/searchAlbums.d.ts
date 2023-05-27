import { AlbumPreview } from './models';
export declare const parseSearchAlbumsBody: (body: any) => AlbumPreview[];
export declare function searchAlbums(query: string): Promise<AlbumPreview[]>;
