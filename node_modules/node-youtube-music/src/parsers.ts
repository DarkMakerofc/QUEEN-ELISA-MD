import { MusicVideo, PlaylistPreview, AlbumPreview, Artist, ArtistPreview, PageType, AlbumType } from './models';

const explicitBadgeText = 'MUSIC_EXPLICIT_BADGE';

const parseDuration = (durationLabel: string): number => {
  const durationList = durationLabel.split(':');
  return durationList.length === 3
    ? parseInt(durationList[0], 10) * 3600 +
        parseInt(durationList[1], 10) * 60 +
        parseInt(durationList[2], 10)
    : parseInt(durationList[0], 10) * 60 + parseInt(durationList[1], 10);
};

const getAlbumType = (typeText:string):AlbumType =>{
  switch(typeText){
    case AlbumType.album:
      return AlbumType.album;
    case AlbumType.ep:
      return AlbumType.ep;
    default:
      return AlbumType.single;
  }
}
// Detects multiple artists of the MusicVideo
export const listArtists = (data: any[]): {name:string; id?:string}[] => {
  const artists:{name:string; id?:string}[] = [];
  data.forEach(item =>{
    if(item.navigationEndpoint && item.navigationEndpoint.browseEndpoint.browseEndpointContextSupportedConfigs.browseEndpointContextMusicConfig.pageType === PageType.artist) {
      artists.push({name:item.text, id: item.navigationEndpoint.browseEndpoint.browseId})
    }
  })
  if(artists.length === 0){
    const delimiterIndex = data.findIndex(item => item.text === ' • ');
    if(delimiterIndex !== -1){
      data.filter((item, index) => index < delimiterIndex && item.name !== ' & ')
          .forEach(item => artists.push({name:item.text}))
    }
  }
  return artists;
}

export const parseMusicItem = (content: {
  musicResponsiveListItemRenderer: {
    flexColumns: {
      musicResponsiveListItemFlexColumnRenderer: {
        text: {
          runs: {
            text: string;
            navigationEndpoint: { watchEndpoint: { videoId: string }, browseId:string; };
          }[];
        };
      };
    }[];
    thumbnail: {
      musicThumbnailRenderer: {
        thumbnail: { thumbnails: { url: string }[] };
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
}): MusicVideo | null => {
  let youtubeId;
  try {
    youtubeId =
      content.musicResponsiveListItemRenderer.flexColumns[0]
        .musicResponsiveListItemFlexColumnRenderer.text.runs[0]
        .navigationEndpoint.watchEndpoint.videoId;
  } catch (err) {
    console.log("Couldn't parse youtube id", err);
  }

  let title;
  try {
    title =
      content.musicResponsiveListItemRenderer.flexColumns[0]
        .musicResponsiveListItemFlexColumnRenderer.text.runs[0].text;
  } catch (err) {
    console.log("Couldn't parse title", err);
  }

  let artists;
  try {
    artists = listArtists(content.musicResponsiveListItemRenderer.flexColumns[1]
      .musicResponsiveListItemFlexColumnRenderer.text.runs)
  } catch (err) {
    console.log("Couldn't parse artist", err);
  }

  let album;
  try {
    const { length } = content.musicResponsiveListItemRenderer.flexColumns[1]
    .musicResponsiveListItemFlexColumnRenderer.text.runs
    album =
      content.musicResponsiveListItemRenderer.flexColumns[1]
        .musicResponsiveListItemFlexColumnRenderer.text.runs[length-3].text;
  } catch (err) {
    console.log("Couldn't parse album", err);
  }

  let thumbnailUrl;
  try {
    thumbnailUrl = content.musicResponsiveListItemRenderer.thumbnail.musicThumbnailRenderer.thumbnail.thumbnails.pop()
      ?.url;
  } catch (err) {
    console.log("Couldn't parse thumbnailUrl", err);
  }

  let duration;
  try {
    const label = content.musicResponsiveListItemRenderer.flexColumns[1]
    .musicResponsiveListItemFlexColumnRenderer.text.runs[content.musicResponsiveListItemRenderer.flexColumns[1]
    .musicResponsiveListItemFlexColumnRenderer.text.runs.length-1].text
    duration = {
      label,
      totalSeconds: parseDuration(label),
    };
  } catch (err) {
    console.log("Couldn't parse duration", err);
  }
  let isExplicit;
  try {
    isExplicit =
      content.musicResponsiveListItemRenderer.badges[0].musicInlineBadgeRenderer
        .icon.iconType === explicitBadgeText;
  } catch (err) {
    isExplicit = false;
  }
  return {
    youtubeId,
    title,
    artists,
    album,
    thumbnailUrl,
    duration,
    isExplicit,
  };
};

export const parseSuggestionItem = (content: {
  playlistPanelVideoRenderer: {
    navigationEndpoint: { watchEndpoint: { videoId: string } };
    title: { runs: { text: string }[] };
    longBylineText: { runs: { text: string }[] };
    thumbnail: { thumbnails: { url: string }[] };
    lengthText: { runs: { text: string }[] };
    badges:{ musicInlineBadgeRenderer: { icon: { iconType: string; } } }[];
  };
}): MusicVideo | null => {
  let youtubeId;
  try {
    youtubeId =
      content.playlistPanelVideoRenderer.navigationEndpoint.watchEndpoint
        .videoId;
  } catch (err) {
    console.log("Couldn't parse youtube id", err);
  }

  let title;
  try {
    title = content.playlistPanelVideoRenderer.title.runs[0].text;
  } catch (err) {
    console.log("Couldn't parse title", err);
  }

  let artists;
  try {
    artists = listArtists(content.playlistPanelVideoRenderer.longBylineText.runs);
  } catch (err) {
    console.log("Couldn't parse artist", err);
  }

  let album;
  try {
    album = content.playlistPanelVideoRenderer.longBylineText.runs[2].text;
  } catch (err) {
    console.log("Couldn't parse album", err);
  }

  let isExplicit;
  try {
    isExplicit = content.playlistPanelVideoRenderer.badges[0].musicInlineBadgeRenderer.icon.iconType === "MUSIC_EXPLICIT_BADGE"
  } catch (err) {
    isExplicit = false
  }

  let thumbnailUrl;
  try {
    thumbnailUrl = content.playlistPanelVideoRenderer.thumbnail.thumbnails.pop()
      ?.url;
  } catch (err) {
    console.log("Couldn't parse thumbnailUrl", err);
  }

  let duration;
  try {
    duration = {
      label: content.playlistPanelVideoRenderer.lengthText.runs[0].text,
      totalSeconds: parseDuration(
        content.playlistPanelVideoRenderer.lengthText.runs[0].text
      ),
    };
  } catch (err) {
    console.log("Couldn't parse duration", err);
  }
  return {
    youtubeId,
    title,
    artists,
    isExplicit,
    album,
    thumbnailUrl,
    duration,
  };
};

export const parsePlaylistItem = (
  content: {
    musicResponsiveListItemRenderer: {
      flexColumns: {
        musicResponsiveListItemFlexColumnRenderer: {
          text: { runs: { text: string }[] };
        };
      }[];
      thumbnail: {
        musicThumbnailRenderer: {
          thumbnail: { thumbnails: { url: string | undefined }[] };
        };
      };
      navigationEndpoint: { browseEndpoint: { browseId: string } };
    };
  },
  onlyOfficialPlaylists: boolean
): PlaylistPreview | null => {
  let playlistId;
  try {
    playlistId =
      content.musicResponsiveListItemRenderer.navigationEndpoint.browseEndpoint
        .browseId;
  } catch (err) {
    console.log("Couldn't parse youtube id", err);
  }
  if (
    onlyOfficialPlaylists &&
    content.musicResponsiveListItemRenderer.flexColumns[1]
      .musicResponsiveListItemFlexColumnRenderer.text.runs[0].text !==
      'YouTube Music'
  ) {
    return null;
  }

  let title;
  try {
    title =
      content.musicResponsiveListItemRenderer.flexColumns[0]
        .musicResponsiveListItemFlexColumnRenderer.text.runs[0].text;
  } catch (err) {
    console.log("Couldn't parse title", err);
  }

  let totalSongs;
  try {
    totalSongs = parseInt(
      content.musicResponsiveListItemRenderer.flexColumns[1].musicResponsiveListItemFlexColumnRenderer.text.runs[2].text.split(
        ' '
      )[0],
      10
    );
  } catch (err) {
    console.log("Couldn't parse artist", err);
  }

  let thumbnailUrl;
  try {
    thumbnailUrl = content.musicResponsiveListItemRenderer.thumbnail.musicThumbnailRenderer.thumbnail.thumbnails.pop()
      ?.url;
  } catch (err) {
    console.log("Couldn't parse thumbnailUrl", err);
  }

  return {
    playlistId,
    title,
    totalSongs,
    thumbnailUrl,
  };
};

export const parseMusicInPlaylistItem = (content: {
  musicResponsiveListItemRenderer: {
    thumbnail: {
      musicThumbnailRenderer: {
        thumbnail: {
          thumbnails: { url: string }[];
        };
      };
    };
    fixedColumns: {
      musicResponsiveListItemFixedColumnRenderer: {
        text: { runs: { text: string }[] };
      };
    }[];
    flexColumns: {
      musicResponsiveListItemFlexColumnRenderer: {
        text: {
          runs: {
            navigationEndpoint: { watchEndpoint: { videoId: string } };
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
}): MusicVideo | null => {
  let youtubeId;
  try {
    youtubeId =
      content.musicResponsiveListItemRenderer.flexColumns[0]
        .musicResponsiveListItemFlexColumnRenderer.text.runs[0]
        .navigationEndpoint.watchEndpoint.videoId;
  } catch (err) {
    console.log("Couldn't parse youtube id", err);
  }

  let title;
  try {
    title =
      content.musicResponsiveListItemRenderer.flexColumns[0]
        .musicResponsiveListItemFlexColumnRenderer.text.runs[0].text;
  } catch (err) {
    console.log("Couldn't parse title", err);
  }

  let artists;
  try {
    artists = listArtists(content.musicResponsiveListItemRenderer.flexColumns[1]
      .musicResponsiveListItemFlexColumnRenderer.text.runs);
  } catch (err) {
    console.log("Couldn't parse artist", err);
  }

  let album;
  try {
    album =
      content.musicResponsiveListItemRenderer.flexColumns[2]
        .musicResponsiveListItemFlexColumnRenderer.text.runs[0].text;
  } catch (err) {
    console.log("Couldn't parse album", err);
  }

  let thumbnailUrl;
  try {
    thumbnailUrl = content.musicResponsiveListItemRenderer.thumbnail.musicThumbnailRenderer.thumbnail.thumbnails.pop()
      ?.url;
  } catch (err) {
    console.log("Couldn't parse thumbnailUrl", err);
  }

  let duration;
  try {
    duration = {
      label:
        content.musicResponsiveListItemRenderer.fixedColumns[0]
          .musicResponsiveListItemFixedColumnRenderer.text.runs[0].text,
      totalSeconds: parseDuration(
        content.musicResponsiveListItemRenderer.fixedColumns[0]
          .musicResponsiveListItemFixedColumnRenderer.text.runs[0].text
      ),
    };
  } catch (err) {
    console.log("Couldn't parse duration", err);
  }

  let isExplicit;
  try {
    isExplicit =
      content.musicResponsiveListItemRenderer?.badges[0]
        .musicInlineBadgeRenderer.icon.iconType === explicitBadgeText;
  } catch (err) {
    isExplicit = false;
  }
  return {
    youtubeId,
    title,
    artists,
    album,
    thumbnailUrl,
    duration,
    isExplicit,
  };
};

export const parseAlbumItem = (content: {
  musicResponsiveListItemRenderer: {
    thumbnail: {
      musicThumbnailRenderer: {
        thumbnail: {
          thumbnails: { url: string }[];
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
          }
        }
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
}): AlbumPreview | null => {
  let albumId;
  try {
    albumId =
      content.musicResponsiveListItemRenderer.navigationEndpoint.browseEndpoint
        .browseId;
  } catch (err) {
    console.error("Couldn't parse albumId", err);
  }

  let title;
  try {
    title =
      content.musicResponsiveListItemRenderer.flexColumns[0]
        .musicResponsiveListItemFlexColumnRenderer.text.runs[0].text;
  } catch (err) {
    console.error("Couldn't parse title", err);
  }

  let type;
  try {
    type = getAlbumType(content.musicResponsiveListItemRenderer.flexColumns[1].musicResponsiveListItemFlexColumnRenderer.text.runs[0].text)
  } catch (err) {
    console.error("Couldn't parse album type", err);
  }

  let thumbnailUrl;
  try {
    thumbnailUrl = content.musicResponsiveListItemRenderer.thumbnail.musicThumbnailRenderer.thumbnail.thumbnails.pop()
      ?.url;
  } catch (err) {
    console.error("Couldn't parse thumbnailUrl", err);
  }

  let artist;
  try {
    artist =
      content.musicResponsiveListItemRenderer.flexColumns[1]
        .musicResponsiveListItemFlexColumnRenderer.text.runs[2].text;
  } catch (err) {
    console.error("Couldn't parse artist", err);
  }

  let artistId;
  try {
    artistId =
      content.musicResponsiveListItemRenderer.flexColumns[1]
        .musicResponsiveListItemFlexColumnRenderer.text.runs[2]
        .navigationEndpoint?.browseEndpoint.browseId;
  } catch (err) {
    console.error("Couldn't parse artistId", err);
  }

  let year;
  try {
    year =
      content.musicResponsiveListItemRenderer.flexColumns[1]
        .musicResponsiveListItemFlexColumnRenderer.text.runs[4].text;
  } catch (err) {
    console.error("Couldn't parse year", err);
  }

  let isExplicit;
  try {
    isExplicit =
      content.musicResponsiveListItemRenderer?.badges[0]
        .musicInlineBadgeRenderer.icon.iconType === explicitBadgeText;
  } catch (err) {
    isExplicit = false;
  }
  return {
    albumId,
    title,
    type,
    thumbnailUrl,
    artist,
    artistId,
    year,
    isExplicit,
  };
};

export const parseAlbumHeader = (content: {
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}): any => {
  let artist;
  try {
    artist = content.musicDetailHeaderRenderer.subtitle.runs[2].text;
  } catch (err) {
    console.error("Couldn't parse artist from album header", err);
  }
  let album;
  try {
    album = content.musicDetailHeaderRenderer.title.runs[0].text;
  } catch (err) {
    console.error("Couldn't parse title from album header", err);
  }
  let thumbnailUrl;
  try {
    thumbnailUrl = content.musicDetailHeaderRenderer.thumbnail.croppedSquareThumbnailRenderer.thumbnail.thumbnails.pop()
      ?.url;
  } catch (err) {
    console.error("Couldn't parse thumbnailUrl from album header", err);
  }
  return {
    artist,
    album,
    thumbnailUrl,
  };
};

export const parseMusicInAlbumItem = (content: {
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
}): MusicVideo => {
  let youtubeId;
  try {
    youtubeId =
      content.musicResponsiveListItemRenderer.flexColumns[0]
        .musicResponsiveListItemFlexColumnRenderer.text.runs[0]
        .navigationEndpoint.watchEndpoint.videoId;
  } catch (err) {
    console.log("Couldn't parse youtube id", err);
  }

  let title;
  try {
    title =
      content.musicResponsiveListItemRenderer.flexColumns[0]
        .musicResponsiveListItemFlexColumnRenderer.text.runs[0].text;
  } catch (err) {
    console.log("Couldn't parse title", err);
  }

  const artists:{name:string;id?:string}[] = [];
  try {
    if(content.musicResponsiveListItemRenderer.flexColumns[1]?.musicResponsiveListItemFlexColumnRenderer.text.runs)
    for(let i=0; i<content.musicResponsiveListItemRenderer.flexColumns[1].musicResponsiveListItemFlexColumnRenderer.text.runs.length; i+=2){
      artists.push({name:content.musicResponsiveListItemRenderer.flexColumns[1].musicResponsiveListItemFlexColumnRenderer.text.runs[i].text})
    }
  } catch (err) {
    console.log("Couldn't parse artists", err);
  }

  let duration;
  try {
    duration = {
      label:
        content.musicResponsiveListItemRenderer.fixedColumns[0]
          .musicResponsiveListItemFixedColumnRenderer.text.runs[0].text,
      totalSeconds: parseDuration(
        content.musicResponsiveListItemRenderer.fixedColumns[0]
          .musicResponsiveListItemFixedColumnRenderer.text.runs[0].text
      ),
    };
  } catch (err) {
    console.log("Couldn't parse duration", err);
  }
  let isExplicit;
  try {
    isExplicit =
      content.musicResponsiveListItemRenderer?.badges[0]
        .musicInlineBadgeRenderer.icon.iconType === explicitBadgeText;
  } catch (err) {
    isExplicit = false;
  }

  return {
    youtubeId,
    artists,
    title,
    duration,
    isExplicit
  }
}

export const parseArtistsAlbumItem = (item:{
  musicTwoRowItemRenderer:{
    title:{
      runs:{
        text:string;
        navigationEndpoint:{
          browseEndpoint:{
            browseId:string;
            browseEndpointContextSupportedConfigs: {
              browseEndpointContextMusicConfig: {
                pageType: string;
              }
            }
          }
        };
      }[]
    };
    subtitle:{
      runs:{
        text:string;
      }[]
    };
    thumbnailRenderer:{
      musicThumbnailRenderer:{
        thumbnail:{
          thumbnails:{
            url:string;
          }[]
        }
      }
    };
    subtitleBadges:{
      musicInlineBadgeRenderer:{
        icon:{
          iconType:string;
          }
      }
    }[]
  };
}):AlbumPreview => {
  let title;
  try {
    title = item.musicTwoRowItemRenderer.title.runs[0].text
  } catch (e) {
    console.error("Couldn't get title", e)
  }

  let type;
  try {
    type = getAlbumType(item.musicTwoRowItemRenderer.subtitle.runs[0].text)
  } catch (e) {
    console.error("Couldn't get album type", e)
  }

  let albumId;
  try {
    albumId = item.musicTwoRowItemRenderer.title.runs[0].navigationEndpoint.browseEndpoint.browseId
  } catch (e) {
    console.error("Couldn't get albumId", e)
  }

  let year;
  try {
    year = item.musicTwoRowItemRenderer.subtitle.runs.pop()?.text
  } catch (e) {
    console.error("Couldn't get year", e)
  }

  let isExplicit;
  try {
    isExplicit = item.musicTwoRowItemRenderer.subtitleBadges[0].musicInlineBadgeRenderer.icon.iconType === explicitBadgeText;
  } catch (e) {
    isExplicit = false
  }
  let thumbnailUrl;
  try {
    thumbnailUrl = item.musicTwoRowItemRenderer.thumbnailRenderer.musicThumbnailRenderer.thumbnail.thumbnails.shift()?.url
  } catch (e) {
    console.error("Couldn't get thumbnailUrl", e)
  }
  return {
    title,
    type,
    albumId,
    year,
    thumbnailUrl,
    isExplicit
  }
}

const parseArtistsSuggestionsItem = (item: {
  musicTwoRowItemRenderer:{
    thumbnailRenderer:{
      musicThumbnailRenderer:{
        thumbnail:{
          thumbnails:{
            url:string;
          }[];
        };
      };
    };
    title:{
      runs:{
        text:string;
        navigationEndpoint:{
          browseEndpoint:{
            browseId:string;
          }
        }
      }[];
    };
    subtitle:{
      runs:{
        text:string;
      }[]
    };
}}):ArtistPreview => {
  let artistId;
  try {
    artistId = item.musicTwoRowItemRenderer.title.runs[0].navigationEndpoint.browseEndpoint.browseId;
  } catch (e) {
    console.error("Couldn't get artistId",e)
  }

  let name;
  try {
    name = item.musicTwoRowItemRenderer.title.runs[0].text;
  } catch (e) {
    console.error("Couldn't get name", e)
  }

  let subscribers;
  try {
    subscribers = item.musicTwoRowItemRenderer.subtitle.runs[0].text;
    const subscribersArray = subscribers.split(" ")
    subscribersArray.pop();
    subscribers = subscribersArray.join(" ")
  } catch (e) {
    console.error("Couldn't get subscribers", e);
  }

  let thumbnailUrl;
  try {
    thumbnailUrl = item.musicTwoRowItemRenderer.thumbnailRenderer.musicThumbnailRenderer.thumbnail.thumbnails.pop()?.url;
  } catch (e) {
    console.error("Couldn't get thumbnailUrl", e);

  }
  return {
    artistId,
    name,
    subscribers,
    thumbnailUrl,
  };
}


export const parseArtistData = (body:{
  header:{
    musicImmersiveHeaderRenderer:{
      title:{
        runs:{
          text:string;
        }[];
      };
      description:{
        runs:{
          text:string;
        }[];
      };
      thumbnail:{
        musicThumbnailRenderer:{
          thumbnail:{
            thumbnails:any[];
          };
        };
      };
      subscriptionButton:{
        subscribeButtonRenderer:{
          subscriberCountWithSubscribeText:{
            runs:{
              text:string;
            }[]
          }
        }
      }
    }
  };
  contents:{
    singleColumnBrowseResultsRenderer:{
      tabs:{
        tabRenderer: {
          content: {
            sectionListRenderer: {
              contents:{
                musicShelfRenderer:{
                  title:{
                    runs:{
                      text:string;
                      navigationEndpoint:{
                        browseEndpoint:{
                          browseId:string;
                          browseEndpointContextSupportedConfigs: {
                            browseEndpointContextMusicConfig: {
                              pageType: string;
                            }
                          }
                        }
                      }
                    }[]
                  }
                };
                musicCarouselShelfRenderer:{
                  header:{
                    musicCarouselShelfBasicHeaderRenderer:{
                      moreContentButton: {
                        buttonRenderer: {
                          navigationEndpoint: {
                            browseEndpoint: {
                              browseId: string;
                              params: string;
                            }
                          },
                        }
                      },
                    }
                  }
                  contents:{
                    musicTwoRowItemRenderer:{
                      title:{
                        runs:{
                          text:string;
                          navigationEndpoint:{
                            browseEndpoint:{
                              browseId:string;
                              browseEndpointContextSupportedConfigs: {
                                browseEndpointContextMusicConfig: {
                                  pageType: string;
                                }
                              }
                            }
                          };
                        }[];
                      };
                      subtitle:{
                        runs:{
                          text:string;
                        }[]
                      };
                      thumbnailRenderer:{
                        musicThumbnailRenderer:{
                          thumbnail:{
                            thumbnails:{
                              url:string;
                            }[]
                          }
                        }
                      };
                      subtitleBadges:{
                        musicInlineBadgeRenderer:{
                          icon:{
                            iconType:string;
                          }
                        }
                      }[]
                    };
                  }[]
                };
              }[]
            }
          }
        }
      }[]
    }
  }
},
artistId:string):Artist =>{
  let name;
  try {
    name = body.header.musicImmersiveHeaderRenderer.title.runs[0].text
  } catch (e) {
    console.error("Couldn't get artist name", e)
  }

  let description;
  try {
    description = body.header.musicImmersiveHeaderRenderer.description.runs[0].text
  } catch (e) {
    console.error("Couldn't get artist description", e)
  }

  const thumbnails:any[] = [];
  try {
    const thumbnailArray = body.header.musicImmersiveHeaderRenderer.thumbnail.musicThumbnailRenderer.thumbnail.thumbnails
    thumbnailArray.forEach((e:any)=>{
      thumbnails.push(e)
    })
  } catch (e) {
    console.error("Couldn't get artist thumbnails", e)
  }

  let songsPlaylistId;
  try {
    songsPlaylistId = body.contents.singleColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents[0].musicShelfRenderer.title.runs[0].navigationEndpoint.browseEndpoint.browseId
  } catch (e) {
    console.error("Couldn't get artist songPlaylistId", e)
  }


  const albums:AlbumPreview[] = [];
  const singles:AlbumPreview[] = [];
  try {
    const {contents} = body.contents.singleColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer;
    // eslint-disable-next-line  no-restricted-syntax
    for(const shelf of contents){
      if(shelf.musicCarouselShelfRenderer?.contents){
        if(shelf.musicCarouselShelfRenderer.contents[0].musicTwoRowItemRenderer.title.runs[0].navigationEndpoint?.browseEndpoint.browseEndpointContextSupportedConfigs.browseEndpointContextMusicConfig.pageType === PageType.album)
          shelf.musicCarouselShelfRenderer.contents.forEach(item=>{
            const parsedItem = parseArtistsAlbumItem(item)
            if(parsedItem.type === AlbumType.single)
              singles.push(parsedItem);
            else
              albums.push(parsedItem);
          })
      }
    }
  } catch (e) {
    console.error("Couldn't get albums", e)
  }

  const suggestedArtists:ArtistPreview[] = [];
  try {
    const {contents} = body.contents.singleColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer;
    // eslint-disable-next-line  no-restricted-syntax
    for(let i=contents.length-1; i>=0; i-=1){
      if(contents[i].musicCarouselShelfRenderer) {
        if(contents[i].musicCarouselShelfRenderer.contents[0].musicTwoRowItemRenderer.title.runs[0].navigationEndpoint.browseEndpoint.browseEndpointContextSupportedConfigs.browseEndpointContextMusicConfig.pageType === PageType.artist)
          contents[i].musicCarouselShelfRenderer.contents.forEach(v=>{
            suggestedArtists.push(parseArtistsSuggestionsItem(v));
          })
        break;
      }
    }
  } catch (e) {
    console.error("Couldn't get suggestedArtists", e);
  }

  let subscribers;
  try {
    subscribers = body.header.musicImmersiveHeaderRenderer.subscriptionButton.subscribeButtonRenderer.subscriberCountWithSubscribeText.runs[0].text
  } catch (e) {
    console.error("Couldn't get subscribers", e)
  }
  return {
    artistId,
    name,
    description,
    albums,
    singles,
    thumbnails,
    songsPlaylistId,
    suggestedArtists,
    subscribers
  }
}

export const parseArtistSearchResult = (content: {
  musicResponsiveListItemRenderer:{
    thumbnail:{
      musicThumbnailRenderer:{
        thumbnail:{
          thumbnails:{
            url:string;
          }[]
        }
      }
    };
    flexColumns:{
      musicResponsiveListItemFlexColumnRenderer:{
        text:{
          runs:{
            text:string
          }[]
        }
      }
    }[];
    navigationEndpoint:{
      browseEndpoint:{
        browseId:string;
      }
    }
  }
}):ArtistPreview | null => {
  let name;
  try {
    name = content.musicResponsiveListItemRenderer.flexColumns[0].musicResponsiveListItemFlexColumnRenderer.text.runs[0].text
  } catch (e) {
    console.error("Couldn't get name",e)
  }

  let artistId;
  try {
    artistId = content.musicResponsiveListItemRenderer.navigationEndpoint.browseEndpoint.browseId
  } catch (e) {
    console.error("Couldn't get artistId",e)
  }

  let thumbnailUrl;
  try {
    thumbnailUrl = content.musicResponsiveListItemRenderer.thumbnail.musicThumbnailRenderer.thumbnail.thumbnails.pop()?.url
  } catch (e) {
    console.error("Couldn't get thumbnailUrl",e)
  }

  let subscribers;
  try {
    subscribers = content.musicResponsiveListItemRenderer.flexColumns[1].musicResponsiveListItemFlexColumnRenderer.text.runs[2].text
  } catch (e) {
    console.error("Couldn't get subscribers",e)
  }
  return {
    name,
    artistId,
    thumbnailUrl,
    subscribers
  }
}
