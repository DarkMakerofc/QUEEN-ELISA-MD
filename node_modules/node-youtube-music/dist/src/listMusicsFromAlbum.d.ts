import { MusicVideo } from './models';
export declare const parseListMusicsFromAlbumBody: (body: any) => MusicVideo[];
export declare function listMusicsFromAlbum(albumId: string): Promise<MusicVideo[]>;
