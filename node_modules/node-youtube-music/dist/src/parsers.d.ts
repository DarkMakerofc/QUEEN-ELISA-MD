import { MusicVideo, PlaylistPreview, AlbumPreview, Artist, ArtistPreview } from './models';
export declare const listArtists: (data: any[]) => {
    name: string;
    id?: string;
}[];
export declare const parseMusicItem: (content: {
    musicResponsiveListItemRenderer: {
        flexColumns: {
            musicResponsiveListItemFlexColumnRenderer: {
                text: {
                    runs: {
                        text: string;
                        navigationEndpoint: {
                            watchEndpoint: {
                                videoId: string;
                            };
                            browseId: string;
                        };
                    }[];
                };
            };
        }[];
        thumbnail: {
            musicThumbnailRenderer: {
                thumbnail: {
                    thumbnails: {
                        url: string;
                    }[];
                };
            };
        };
        badges: {
            musicInlineBadgeRenderer: {
                icon: {
                    iconType: string;
                };
            };
        }[];
    };
}) => MusicVideo | null;
export declare const parseSuggestionItem: (content: {
    playlistPanelVideoRenderer: {
        navigationEndpoint: {
            watchEndpoint: {
                videoId: string;
            };
        };
        title: {
            runs: {
                text: string;
            }[];
        };
        longBylineText: {
            runs: {
                text: string;
            }[];
        };
        thumbnail: {
            thumbnails: {
                url: string;
            }[];
        };
        lengthText: {
            runs: {
                text: string;
            }[];
        };
        badges: {
            musicInlineBadgeRenderer: {
                icon: {
                    iconType: string;
                };
            };
        }[];
    };
}) => MusicVideo | null;
export declare const parsePlaylistItem: (content: {
    musicResponsiveListItemRenderer: {
        flexColumns: {
            musicResponsiveListItemFlexColumnRenderer: {
                text: {
                    runs: {
                        text: string;
                    }[];
                };
            };
        }[];
        thumbnail: {
            musicThumbnailRenderer: {
                thumbnail: {
                    thumbnails: {
                        url: string | undefined;
                    }[];
                };
            };
        };
        navigationEndpoint: {
            browseEndpoint: {
                browseId: string;
            };
        };
    };
}, onlyOfficialPlaylists: boolean) => PlaylistPreview | null;
export declare const parseMusicInPlaylistItem: (content: {
    musicResponsiveListItemRenderer: {
        thumbnail: {
            musicThumbnailRenderer: {
                thumbnail: {
                    thumbnails: {
                        url: string;
                    }[];
                };
            };
        };
        fixedColumns: {
            musicResponsiveListItemFixedColumnRenderer: {
                text: {
                    runs: {
                        text: string;
                    }[];
                };
            };
        }[];
        flexColumns: {
            musicResponsiveListItemFlexColumnRenderer: {
                text: {
                    runs: {
                        navigationEndpoint: {
                            watchEndpoint: {
                                videoId: string;
                            };
                        };
                        text: string;
                    }[];
                };
            };
        }[];
        badges: {
            musicInlineBadgeRenderer: {
                icon: {
                    iconType: string;
                };
            };
        }[];
    };
}) => MusicVideo | null;
export declare const parseAlbumItem: (content: {
    musicResponsiveListItemRenderer: {
        thumbnail: {
            musicThumbnailRenderer: {
                thumbnail: {
                    thumbnails: {
                        url: string;
                    }[];
                };
            };
        };
        flexColumns: {
            musicResponsiveListItemFlexColumnRenderer: {
                text: {
                    runs: {
                        text: string;
                        navigationEndpoint?: {
                            browseEndpoint: {
                                browseId: string;
                            };
                        };
                    }[];
                };
            };
        }[];
        navigationEndpoint: {
            browseEndpoint: {
                browseId: string;
                browseEndpointContextSupportedConfigs: {
                    browseEndpointContextMusicConfig: {
                        pageType: string;
                    };
                };
            };
        };
        badges: {
            musicInlineBadgeRenderer: {
                icon: {
                    iconType: string;
                };
            };
        }[];
    };
}) => AlbumPreview | null;
export declare const parseAlbumHeader: (content: {
    musicDetailHeaderRenderer: {
        title: {
            runs: {
                text: string;
            }[];
        };
        subtitle: {
            runs: {
                text: string;
            }[];
        };
        thumbnail: {
            croppedSquareThumbnailRenderer: {
                thumbnail: {
                    thumbnails: {
                        url: string;
                    }[];
                };
            };
        };
    };
}) => any;
export declare const parseMusicInAlbumItem: (content: {
    musicResponsiveListItemRenderer: {
        fixedColumns: {
            musicResponsiveListItemFixedColumnRenderer: {
                text: {
                    runs: {
                        text: string;
                    }[];
                };
            };
        }[];
        flexColumns: {
            musicResponsiveListItemFlexColumnRenderer: {
                text: {
                    runs: {
                        text: string;
                        navigationEndpoint: {
                            watchEndpoint: {
                                videoId: string;
                            };
                        };
                    }[];
                };
            };
        }[];
        badges: {
            musicInlineBadgeRenderer: {
                icon: {
                    iconType: string;
                };
            };
        }[];
    };
}) => MusicVideo;
export declare const parseArtistsAlbumItem: (item: {
    musicTwoRowItemRenderer: {
        title: {
            runs: {
                text: string;
                navigationEndpoint: {
                    browseEndpoint: {
                        browseId: string;
                        browseEndpointContextSupportedConfigs: {
                            browseEndpointContextMusicConfig: {
                                pageType: string;
                            };
                        };
                    };
                };
            }[];
        };
        subtitle: {
            runs: {
                text: string;
            }[];
        };
        thumbnailRenderer: {
            musicThumbnailRenderer: {
                thumbnail: {
                    thumbnails: {
                        url: string;
                    }[];
                };
            };
        };
        subtitleBadges: {
            musicInlineBadgeRenderer: {
                icon: {
                    iconType: string;
                };
            };
        }[];
    };
}) => AlbumPreview;
export declare const parseArtistData: (body: {
    header: {
        musicImmersiveHeaderRenderer: {
            title: {
                runs: {
                    text: string;
                }[];
            };
            description: {
                runs: {
                    text: string;
                }[];
            };
            thumbnail: {
                musicThumbnailRenderer: {
                    thumbnail: {
                        thumbnails: any[];
                    };
                };
            };
            subscriptionButton: {
                subscribeButtonRenderer: {
                    subscriberCountWithSubscribeText: {
                        runs: {
                            text: string;
                        }[];
                    };
                };
            };
        };
    };
    contents: {
        singleColumnBrowseResultsRenderer: {
            tabs: {
                tabRenderer: {
                    content: {
                        sectionListRenderer: {
                            contents: {
                                musicShelfRenderer: {
                                    title: {
                                        runs: {
                                            text: string;
                                            navigationEndpoint: {
                                                browseEndpoint: {
                                                    browseId: string;
                                                    browseEndpointContextSupportedConfigs: {
                                                        browseEndpointContextMusicConfig: {
                                                            pageType: string;
                                                        };
                                                    };
                                                };
                                            };
                                        }[];
                                    };
                                };
                                musicCarouselShelfRenderer: {
                                    header: {
                                        musicCarouselShelfBasicHeaderRenderer: {
                                            moreContentButton: {
                                                buttonRenderer: {
                                                    navigationEndpoint: {
                                                        browseEndpoint: {
                                                            browseId: string;
                                                            params: string;
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                    contents: {
                                        musicTwoRowItemRenderer: {
                                            title: {
                                                runs: {
                                                    text: string;
                                                    navigationEndpoint: {
                                                        browseEndpoint: {
                                                            browseId: string;
                                                            browseEndpointContextSupportedConfigs: {
                                                                browseEndpointContextMusicConfig: {
                                                                    pageType: string;
                                                                };
                                                            };
                                                        };
                                                    };
                                                }[];
                                            };
                                            subtitle: {
                                                runs: {
                                                    text: string;
                                                }[];
                                            };
                                            thumbnailRenderer: {
                                                musicThumbnailRenderer: {
                                                    thumbnail: {
                                                        thumbnails: {
                                                            url: string;
                                                        }[];
                                                    };
                                                };
                                            };
                                            subtitleBadges: {
                                                musicInlineBadgeRenderer: {
                                                    icon: {
                                                        iconType: string;
                                                    };
                                                };
                                            }[];
                                        };
                                    }[];
                                };
                            }[];
                        };
                    };
                };
            }[];
        };
    };
}, artistId: string) => Artist;
export declare const parseArtistSearchResult: (content: {
    musicResponsiveListItemRenderer: {
        thumbnail: {
            musicThumbnailRenderer: {
                thumbnail: {
                    thumbnails: {
                        url: string;
                    }[];
                };
            };
        };
        flexColumns: {
            musicResponsiveListItemFlexColumnRenderer: {
                text: {
                    runs: {
                        text: string;
                    }[];
                };
            };
        }[];
        navigationEndpoint: {
            browseEndpoint: {
                browseId: string;
            };
        };
    };
}) => ArtistPreview | null;
