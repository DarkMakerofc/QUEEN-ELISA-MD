import { PlaylistPreview } from './models';
export declare const parseSearchPlaylistsBody: (body: any, onlyOfficialPlaylists: boolean) => PlaylistPreview[];
export declare function searchPlaylists(query: string, options?: {
    onlyOfficialPlaylists?: boolean;
}): Promise<PlaylistPreview[]>;
