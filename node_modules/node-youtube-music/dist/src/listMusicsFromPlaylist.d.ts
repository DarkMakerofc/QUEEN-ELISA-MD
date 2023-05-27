import { MusicVideo } from './models';
export declare const parseListMusicsFromPlaylistBody: (body: {
    contents: {
        singleColumnBrowseResultsRenderer: {
            tabs: {
                tabRenderer: {
                    content: {
                        sectionListRenderer: {
                            contents: {
                                musicPlaylistShelfRenderer: {
                                    contents: [];
                                };
                            }[];
                        };
                    };
                };
            }[];
        };
    };
}) => MusicVideo[];
export declare function listMusicsFromPlaylist(playlistId: string): Promise<MusicVideo[]>;
