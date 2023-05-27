import { MusicVideo } from './models';
export declare const parseGetSuggestionsBody: (body: {
    contents: {
        singleColumnMusicWatchNextResultsRenderer: {
            tabbedRenderer: {
                watchNextTabbedResultsRenderer: {
                    tabs: {
                        tabRenderer: {
                            content: {
                                musicQueueRenderer: {
                                    content: {
                                        playlistPanelRenderer: {
                                            contents: [];
                                        };
                                    };
                                };
                            };
                        };
                    }[];
                };
            };
        };
    };
}) => MusicVideo[];
export declare function getSuggestions(videoId: string): Promise<MusicVideo[]>;
