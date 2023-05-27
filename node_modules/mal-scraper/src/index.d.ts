declare module 'mal-scraper' {
  //=/ ----- VARIABLES ----- /=//

  let search: Search;

  //=/ ----- FUNCTIONS ----- /=//

  /**
   * Get infos about an anime from the given name.
   * @param name The name of the anime to search, the best match corresponding to that name will be returned.
   * @param getBestMatch Whether you want to use [`match-sorter`](https://github.com/kentcdodds/match-sorter) to find the best result or not. (Default to `true`)
   * @returns A promise that resolves to an object containing the infos about the anime.
   */
  export function getInfoFromName<B extends boolean = true>(
    name: string,
    getBestMatch?: B
  ): Promise<AnimeDataModel>;

  /**
   * Get infos about an anime from the given URL.
   * @param url The URL of the anime to search.
   * @returns Same as {@link getInfoFromName `getInfoFromName()`}.
   */
  export function getInfoFromURL(url: string): Promise<AnimeDataModel>;

  /**
   * Return an array of a maximum length of 10 containing {@link SearchResultsDataModel Search result data model} objects.
   * @param query The query to search.
   */
  export function getResultsFromSearch(
    query: string
  ): Promise<SearchResultsDataModel[]>;

  /**
   * Get the list of animes, OVAs, movies and ONAs released (or planned to be released) during the season of the given year.
   * @param year The year of the anime to search.
   * @param season The season of the anime to search.
   * @param type The type of the anime to search.
   */
  export function getSeason(
    year: number,
    season: Seasons,
    type?: Types
  ): Promise<SeasonDataModel>;


  /**
   * Get the watchlist of the given user.
   * @param username The username of the user to search.
   * @param after Useful to paginate. Is the number of results you want to start from. By default, MAL returns 300 entries only.
   * @param type Optional, can be either `anime` or `manga`.
   * @param status Optional, Status in the user's watch list (completed, on-hold...)
   * @note From v2.11.6.
   */
  export function getWatchListFromUser<T extends AllowedTypes = 'anime'>(
    username: string,
    after?: number,
    type?: T,
    status?: number
  ): Promise<
    T extends 'anime'
      ? UserAnimeEntryDataModel[]
      : T extends 'manga'
      ? UserMangaEntryDataModel[]
      : never
  >;

  /**
   * Get the watchlist of the given user.
   * @param username The username of the user to search.
   * @param after Useful to paginate. Is the number of results you want to start from. By default, MAL returns 300 entries only.
   * @param type Optional, can be either `anime` or `manga`.
   * @note From v2.6.0.
   */
  export function getWatchListFromUser<T extends AllowedTypes = 'anime'>(
    username: string,
    after?: number,
    type?: T
  ): Promise<
    T extends 'anime'
      ? UserAnimeEntryDataModel[]
      : T extends 'manga'
      ? UserMangaEntryDataModel[]
      : never
  >;

  /**
   * Get the watchlist of the given user.
   * @param username The username of the user to search.
   * @param type Optional, can be either `anime` or `manga`.
   * @note From v2.5.2 and before.
   */
  export function getWatchListFromUser<T extends AllowedTypes = 'anime'>(
    username: string,
    type?: T
  ): Promise<
    T extends 'anime'
      ? UserAnimeEntryDataModel[]
      : T extends 'manga'
      ? UserMangaEntryDataModel[]
      : never
  >;

  /**
   * Get news from MyAnimeList.
   * @param nbNews The count of news you want to get, default is 160. Note that there is a 20 news per page, so if you set if to 60 for example, it will result in 3 requests.
   * You should be aware of that, as MyAnimeList will most likely rate-limit you if more than 35-40~ requests are done in a few seconds.
   */
  export function getNewsNoDetails(nbNews?: number): Promise<NewsDataModel[]>;

  /**
   * Get an episode list
   * @param anime If an object is passed, it must have the `name`and `id` property. If you only have the name and not the id, you may call the method with the name as string,
   * this will be slower but the id will be automatically fetched on the first way.
   */
  export function getEpisodesList(
    anime: AnimeOptions | string
  ): Promise<AnimeEpisodesDataModel[]>;

  /**
   * Returns an array of reviews for the given anime.
   * @param anime An object that must have the `name` and `id` property or just the `name` alone. If you only have the name and not the id,
   * you may call the method with the name as string, this will be slower but the id will be automatically fetched on the first way.
   */
  export function getReviewsList(
    anime: ReviewsListAnimeOptions
  ): Promise<AnimeReviewsDataModel[]>;

  /**
   * Get a list of the recommendations for the given anime.
   * @param anime If an object is passed, it must have the `name`and `id` property. If you only have the name and not the id,
   * you may call the method with the name as string, this will be slower but the id will be automatically fetched on the first way.
   */
  export function getRecommendationsList(
    anime: AnimeOptions | string
  ): Promise<AnimeRecommendationsDataModel[]>;

  /**
   * Get the stats of the given anime.
   * @param anime If an object is passed, it must have the `name`and `id` property. If you only have the name and not the id,
   * you may call the method with the name as string, this will be slower but the id will be automatically fetched on the first way.
   */
  export function getStats(
    anime: AnimeOptions | string
  ): Promise<AnimeStatsDataModel[]>;

  /**
   * Get the pictures of the given anime.
   * @param anime If an object is passed, it must have the `name`and `id` property. If you only have the name and not the id,
   */
  export function getPictures(
    anime: AnimeOptions | string
  ): Promise<AnimePicturesDataModel[]>;

  //=/ ----- CLASSES ----- /=//

  class officialApi {
    public constructor(options: OfficialApiOptions);

    /**
     * Check if the credentials given in the constructor are valid.
     * @returns A string `"Invalid Credentials"` if the credentials are invalid, otherwise, the raw XML document with the id & the username of the account.
     */
    public checkCredentials(): Promise<string>;

    /**
     * Search an anime/manga from the official MyAnimeList API.
     * @param type The type, can be either `anime` or `manga`. Defaults to `anime`.
     * @param name The name of the anime/manga to search.
     */
    public search<T extends AllowedTypes = 'anime'>(
      type: T,
      name: string
    ): Promise<
      T extends 'anime'
        ? AnimeDataModel[]
        : T extends 'manga'
        ? MangaDataModel[]
        : never
    >;

    /**
     * Act on the account given in the constructor MAL.
     * @param action An object wich should contain the type of the manga/anime and the action to do.
     * @param id The unique identifier of the anime/manga.
     * @param name The name of the anime/manga.
     * @param details An object that contains all the properties described [here](https://myanimelist.net/modules.php?go=api#animevalues).
     */
    public actOnList<T extends AllowedTypes = 'anime'>(
      action: ActionActOnList<T>,
      id: number,
      name: string,
      details: ActionActOnListOptionsDetails
    ): Promise<void | string>;

    private _credentials: OfficialApiOptions;
  }

  //=/ ---- TYPES ---- /=//

  type AllowedTypes = 'anime' | 'manga';

  type Search = {
    /**
     * Search an anime/manga from the given informations
     * @param type Type of search (manga or anime)
     * @param options Options for the search, all keys are optional
     */
    search<A extends AllowedTypes>(
      type: A,
      options?: SearchOptions
    ): Promise<
      A extends 'anime'
        ? AnimeSearchModel[]
        : A extends 'manga'
        ? MangaSearchModel[]
        : never
    >;

    /**
     * Helpers for types, genres and list you might need for your research
     */
    helpers: Helpers;
  };

  type GenreValues =
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12'
    | '13'
    | '14'
    | '15'
    | '16'
    | '17'
    | '18'
    | '19'
    | '20'
    | '21'
    | '22'
    | '23'
    | '24'
    | '25'
    | '26'
    | '27'
    | '28'
    | '29'
    | '30'
    | '31'
    | '32'
    | '33'
    | '34'
    | '35'
    | '36'
    | '37'
    | '38'
    | '39'
    | '40'
    | '41'
    | '42'
    | '43';

  type GenreName =
    | 'Action'
    | 'Adventure'
    | 'Cars'
    | 'Comedy'
    | 'Dementia'
    | 'Demons'
    | 'Mystery'
    | 'Drama'
    | 'Ecchi'
    | 'Fantasy'
    | 'Game'
    | 'Hentai'
    | 'Historical'
    | 'Horror'
    | 'Kids'
    | 'Magic'
    | 'Martial Arts'
    | 'Mecha'
    | 'Music'
    | 'Parody'
    | 'Samurai'
    | 'Romance'
    | 'School'
    | 'Sci-Fi'
    | 'Shoujo'
    | 'Shoujo Ai'
    | 'Shounen'
    | 'Shounen Ai'
    | 'Space'
    | 'Sports'
    | 'Super Power'
    | 'Vampire'
    | 'Yaoi'
    | 'Yuri'
    | 'Harem'
    | 'Slice of Life'
    | 'Supernatural'
    | 'Military'
    | 'Police'
    | 'Psychological'
    | 'Thriller'
    | 'Seinen'
    | 'Josei';

  type RatingValue = 0 | 1 | 2 | 3 | 4 | 5 | 6;

  type RatingName = 'none' | 'G' | 'PG' | 'PG-13' | 'R' | 'R+' | 'Rx';

  type TypeValue = 0 | 1 | 2 | 3 | 4 | 5 | 6;

  type TypeName = 'none' | 'tv' | 'movie' | 'special' | 'ova' | 'ona' | 'music';

  type StatusValue = 0 | 1 | 2 | 3;

  type StatusName = 'none' | 'finished' | 'currently' | 'not-aired';

  type Score = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  type OrderTypes = [
    'startDate',
    'score',
    'eps',
    'endDate',
    'type',
    'members',
    'rated'
  ];

  type Types =
    | 'TV'
    | 'TVNew'
    | 'TVCon'
    | 'Movies'
    | 'OVAs'
    | 'ONAs'
    | 'Specials';

  type Seasons = 'spring' | 'summer' | 'fall' | 'winter';

  type FullRatings =
    | 'G - All ages'
    | 'PG - Children'
    | 'PG-13 - Teens 13 or older'
    | 'R - 17+'
    | 'R+ - Mild Nudity'
    | 'Rx - Hentai';

  /**
   * `0` - Unknown
   * `1` - TV | Manga
   * `2` - OVA | Novel
   * `3` - Movie | One-Shot
   * `4` - Special | Doujinshi
   * `5` - ONA | Manhwha
   * `6` - Music | Manhua
   */
  type TypesReferences = 0 | 1 | 2 | 3 | 4 | 5 | 6;

  /**
   * `1` - Watching | Reading\
   * `2` - Completed\
   * `3` - On-Hold\
   * `4` - Dropped\
   * `6` - Plan-to-Watch | Plan-to-Read
   */
  type StatusReference = 1 | 2 | 3 | 4 | 6;

  /**
   * `1` - Watching | Reading\
   * `2` - Completed\
   * `3` - On-Hold\
   * `4` - Dropped\
   * `6` - Plan-to-Watch | Plan-to-Read\
   * `7` - All status above
   */
    type SearchStatusReference = StatusReference | 7

  /**
   * `1` - Currently airing | Publishing\
   * `2` - Finished airing | Finished\
   * `3` - Not yet aired | Not yet published
   */
  type SeriesStatusReference = 1 | 2 | 3;

  //=/ ---- INTERFACES ---- /=//

  /**
   * All of this properties are optional
   */
  interface SearchOptions {
    maxResults?: number;
    has?: number;
    term: string;
    type?: number;
    status?: number;
    producer?: number;
    rating?: number;
    startDate?: {
      day?: number;
      month?: number;
      year?: number;
    };
    endDate?: {
      day?: number;
      month?: number;
      year?: number;
    };
    genreType?: number;
    genre?: [number];
  }

  interface Helpers {
    availableValues: {
      genre: {
        anime: Genres[];
        manga: Genres[];
      };
      p: {
        anime: {
          name: string;
          value: string;
        }[];
        manga: {
          name: string;
          value: string;
        }[];
      };

      r: Rating[];

      score: Score[];

      status: Status[];

      type: Type[];
    };

    genresList: {
      anime: Genres[];
      manga: Genres[];
    };

    orderTypes: OrderTypes;

    producerList: {
      anime: {
        name: string;
        value: string;
      }[];
      manga: {
        name: string;
        value: string;
      }[];
    };
  }

  interface AnimeOptions {
    /**
     * The name of the anime
     */
    name: string;

    /**
     * The unique id of the anime
     */
    id: number;
  }

  interface SearchResultsDataModel {
    /**
     * The unique identifier of the anime/manga
     */
    id: string;

    /**
     * The type of the anime/manga (e.g: anime, manga, special, ova, ona, music..)
     */
    type: string;

    /**
     * The title of the anime/manga
     */
    name: string;

    /**
     * The image URL of the anime/manga
     */
    image_url?: string;

    /**
     * The thumbnail URL of the anime/manga
     */
    thumbnail_url?: string;

    /**
     * A number representing the accuracy of the result,
     * where 1 is a perfect match and 0 a totally irrelevent result
     */
    es_score?: number;

    /**
     * An object containing additional data about this anime
     */
    payload?: Payload;
  }

  /**
   * Additionnal data for {@link SearchResultsDataModel}
   */
  interface Payload {
    /**
     * The type of the anime, can be either `TV`, `Movie`, `OVA` or `Special`
     */
    media_type?: string;

    /**
     * The year the airing of the anime started
     */
    start_year?: number;

    /**
     * The date from wich the airing started to the one from wich ended
     */
    aired?: string;

    /**
     * The average score given to this anime
     */
    score?: string;

    /**
     * The current status of the anime (e.g: currently airing, finished airing, not yet aired)
     */
    status?: StatusName;
  }

  interface Genres {
    value: GenreValues;
    name: GenreName;
  }

  interface Rating {
    value: RatingValue;
    name: RatingName;
  }

  interface Type {
    value: TypeValue;
    name: TypeName;
  }

  interface Status {
    value: StatusValue;
    name: StatusName;
  }

  interface AnimeSearchModel {
    /**
     * Full url for anime thumbnail.
     */
    thumbnail: string;

    /**
     * Full url of the anime page.
     */
    url: string;

    /**
     * Full url of anime trailer, if any.
     */
    video?: string;

    /**
     * Short description of the anime.
     */
    shortDescription: string;

    /**
     * The anime's title.
     */
    title: string;

    /**
     * The anime's type.
     */
    type: string;

    /**
     * The number of episodes.
     */
    nbEps: string;

    /**
     * The anime score.
     */
    score: string;

    /**
     * The anime start date.
     */
    startDate: string;

    /**
     * The anime end date.
     */
    endDate: string;

    /**
     * The anime number of members.
     */
    members: string;

    /**
     * The anime rating.
     */
    rating: string;
  }

  interface MangaSearchModel {
    /**
     * Full url for manga thumbnail.
     */
    thumbnail: string;

    /**
     * Full url of the manga page.
     */
    url: string;

    /**
     * Full url of manga trailer, if any.
     */
    video?: string;

    /**
     * Short description of the manga.
     */
    shortDescription: string;
    /**
     * The manga's title.
     */
    title: string;

    /**
     * The manga's type.
     */
    type: TypeName;

    /**
     * The number of chapters released so far.
     */
    nbChapters: number;

    /**
     * The manga score.
     */
    score: Score;

    /**
     * The manga start date.
     */
    startDate: string;

    /**
     * The manga end date.
     */
    endDate: string;

    /**
     * The manga number of members.
     */
    members: string;

    /**
     * The number of volumes released so far.
     */
    vols: string;
  }

  interface AnimeDataModel {
    /**
     * The title of the anime.
     */
    title: string;

    /**
     * The synopsis of the anime.
     */
    synopsis?: string;

    /**
     * The URL to the cover picture of the anime.
     */
    picture?: string;

    /**
     * An array of {@link CharacterDataModel Character data model} objects.
     */
    characters?: CharacterDataModel[];

    /**
     * An array of {@link StaffDataModel Staff data model} objects.
     */
    staff?: StaffDataModel[];

    /**
     * A trailer to the embedded video of the anime.
     */
    trailer?: string;

    /**
     * The english title of the anime.
     */
    englishTitle?: string;

    /**
     * An array of synonyms of the anime title. (other languages names, related ovas/movies/animes) (e.g: One Piece -> OP)
     */
    synonyms: string[];

    /**
     * The type of the anime (e.g: `TV`, `Movie`, `OVA` or `Special`)
     */
    type?: 'TV' | 'Movie' | 'OVA' | 'Special';

    /**
     * The number of aired episodes.
     */
    episodes?: string;

    /**
     * The status of the anime (e.g: `Finished Airing`, `Currently Airing`, `Not yet aired`)
     */
    status?: StatusName;

    /**
     * The date from which the airing started to the one from which it ended,
     * this property will be empty if one of the two dates is unknown
     */
    aired?: string;

    /**
     * The date when the anime has been premiered.
     */
    premiered?: string;

    /**
     * When the anime is broadcasted.
     */
    broadcast?: string;

    /**
     * The number of volumes of the novel
     */
    volumes?: string;

    /**
     * The number of chapters of the novel
     */
    chapters?: string;

    /**
     * The dates of publication of the novel
     */
    published?: string;

    /**
     * The authors of the novel
     */
    authors?: string;

    /**
     * The serialization of the novel
     */
    serialization?: string;

    /**
     * An array of producer(s) of the anime
     */
    producers?: string[];

    /**
     * An array of the studio(s) of the anime
     */
    studios?: string[];

    /**
     * On what the anime is based on (e.g: based on a manga, Light Novel, etc.)
     */
    source?: string;

    /**
     * An array of genres of the anime (Action, Slice of Life, Drama, etc.)
     */
    genres?: GenreName[];

    /**
     * Average duration of an episode of the anime (or total duration if it's a movie)
     */
    duration?: string;

    /**
     * The rating of the anime (e.g: `Rx`, `R`, `R+`, `PG-13`, `PG`, `G`, `PG-13+`, `Rx+`)
     */
    rating?: FullRatings;

    /**
     * The average score of the anime
     */
    score?: string;

    /**
     * By how many users this anime has been rated, like `"scored by 255,693 users"`
     */
    scoreStats?: string;

    /**
     * The rank of the anime
     */
    ranked?: string;

    /**
     * The popularity of the anime
     */
    popularity?: string;

    /**
     * How many users are members of the anime (have it on their list)
     */
    members?: string;

    /**
     * The count of how many users marked this anime as favorite
     */
    favorites?: string;

    /**
     * The unique identifier of the anime
     */
    id: number;

    /**
     * The URL of the anime page
     */
    url: string;
  }

  interface MangaDataModel {
    /**
     * The unique identifier of this manga
     */
    id: string;

    /**
     * The title of the manga
     */
    title: string;

    /**
     * The english title of the manga
     */
    english?: string;

    /**
     * A set of synonyms for the manga
     */
    synonyms?: string[];

    /**
     * Total count of chapters this manga has
     */
    chapters?: string;

    /**
     * Total count of volumes this manga has
     */
    volumes?: string;

    /**
     * The average score given by users to this manga
     */
    score?: string;

    /**
     * The type of the manga (Manga, Doujinshi...)
     */
    type: string;

    /**
     * The status of the manga (Publishing, Finished...)
     */
    status?: string;

    /**
     * A `YYYY-MM-DD` date format of when the manga started publishing
     */
    start_date?: string;

    /**
     * A `YYYY-MM-DD` date format of when the manga finished publishing
     */
    end_date?: string;

    /**
     * The synopsis of the manga
     */
    synopsis?: string;

    /**
     * An URL to the manga's cover image
     */
    image?: string;
  }

  interface CharacterDataModel {
    /**
     * Link to the character's page on MyAnimeList
     */
    link: string;

    /**
     * Link to a picture of the character at the best possible resolution
     */
    picture: string;

    /**
     * Their name and surname, like `"Kazuma Takahashi"`
     */
    name: string;

    /**
     * The role of this person has/had in this anime (Main, Supporting, etc...)
     */
    role: string;

    /**
     * An object containing additional data about who dubbed this character
     */
    seiyuu: SeiyuuDataModel;
  }

  /**
   * An object containing additional data about who dubbed this character
   */
  interface SeiyuuDataModel {
    /**
     * Link to the MyAnimeList profile of who dubbed this character
     */
    link?: string;

    /**
     * Link to a picture of the seiyuu at the best possible resolution
     */
    picture?: string;

    /**
     * Their name and surname, like `"John Doe"`
     */
    name?: string;
  }

  /**
   * An object containing additional data about the staff of this anime
   */
  interface StaffDataModel {
    /**
     * Link to the MAL profile of this person
     */
    link?: string;

    /**
     * A link to a picture of this person at the best possible resolution
     */
    picture?: string;

    /**
     * Their name and surname, like `"John Doe"`
     */
    name?: string;

    /**
     * The role of this person has/had in this anime (Director, Sound Director, etc...)
     */
    role?: string;
  }

  /**
   * An object containing the season data model
   */
  interface SeasonDataModel {
    /**
     * An array of {@link SeasonDataModel Seasonal anime release data model} objects
     */
    TV?: SeasonalDataModel[];

    /**
     * An array of {@link SeasonDataModel Seasonal anime release data model} objects
     */
    TVNew?: SeasonalDataModel[];

    /**
     * An array of {@link SeasonDataModel Seasonal anime release data model} objects
     */
    TVCon?: SeasonalDataModel[];

    /**
     * An array of {@link SeasonDataModel Seasonal anime release data model} objects
     */
    OVAs?: SeasonalDataModel[];

    /**
     * An array of {@link SeasonDataModel Seasonal anime release data model} objects
     */
    ONAs?: SeasonalDataModel[];

    /**
     * An array of {@link SeasonDataModel Seasonal anime release data model} objects
     */
    Movies?: SeasonalDataModel[];

    /**
     * An array of {@link SeasonDataModel Seasonal anime release data model} objects
     */
    Specials?: SeasonalDataModel[];
  }

  interface SeasonalDataModel {
    /**
     * Link to the picture of the anime
     */
    picture?: string;

    /**
     * The synopsis of the anime
     */
    synopsis?: string;

    /**
     * The licensor of the anime
     */
    licensor?: string;

    /**
     * The name of the anime
     */
    title: string;

    /**
     * The direct link to the anime page on MyAnimeList
     */
    link?: string;

    /**
     * An array of strings containing the names of the genres of the anime
     */
    genres?: GenreName[];

    /**
     * An array of strings containing the producers of the anime
     */
    producers?: string[];

    /**
     * From what this anime is based on/an adaptation of (Light Novel, Manga, etc...)
     */
    fromType?: string;

    /**
     * The number of the aired episodes this anime has
     */
    nbEps?: string;

    /**
     * When this anime has been released
     */
    releaseDate?: string;

    /**
     * The average users have given to this anime
     */
    score?: string;
  }

  interface UserAnimeEntryDataModel {
    /**
     * Status of the anime in the user's watch list (completed, on-hold...), see the {@link StatusReference Status Reference} for more information
     */
    status?: StatusReference;

    /**
     * Score given to the anime by the user
     */
    score?: number;

    /**
     * Anime tags for this anime. Tags are separated by a comma.
     */
    tags?: string;

    /**
     * Whether this user is rewatching this anime
     */
    isRewatching?: number;

    /**
     * Number of episodes this user has watched
     */
    numWatchedEpisodes?: number;

    /**
     * The title of anime
     */
    animeTitle: string;

    /**
     * How many episodes this anime has
     */
    animeNumEpisodes?: number;

    /**
     * The status of the anime, see {@link SeriesStatusReference Series statuses references} for more information
     */
    animeAiringStatus?: string;

    /**
     * The unique identifier of this anime
     */
    animeId: string;

    /**
     * The studios of this anime
     */
    animeStudios?: string;

    /**
     * Who licensed this anime
     */
    animeLicensors?: string;

    /**
     * ???
     */
    animeSeason?: string;

    /**
     * Whether episode information are available on MyAnimeList
     */
    hasEpisodeVideo?: boolean;

    /**
     * Whether anime trailer is available on MAL
     */
    hasPromotionVideo?: boolean;

    /**
     * The path to the video url on MAL
     */
    videoURL?: string;

    /**
     * The path to the anime URL on MAL
     */
    animeURL?: string;

    /**
     * The path to the anime poster on MAL
     */
    animeImagePath?: string;

    /**
     * ???
     */
    isAddedToList?: boolean;

    /**
     * Type of this anime
     */
    animeMediaTypeString?: string;

    /**
     * The rating of this anime
     */
    animeMpaaRatingString?: string;

    /**
     * When did this user started watching this anime
     */
    startDateString?: string;

    /**
     * When did this user finished watching this anime
     */
    finishDateString?: string;

    /**
     * The start date of the anime following the format `MM-DD-YYYY`
     */
    animeStartDateString?: string;

    /**
     * The end date of the anime following the format `MM-DD-YYYY`
     */
    animeEndDateString?: string;

    /**
     * ???
     */
    daysString?: string;

    /**
     * The storage type of this anime (setted by the user)
     */
    storageString?: string;

    /**
     * The priorityof this anime for the user
     */
    priorityString?: string;
  }

  interface UserMangaEntryDataModel {
    /**
     * @deprecated
     */
    myID: string;

    /**
     * Status of the manga in the user's manga list (completed, on-hold...), see the {@link StatusReference Status Reference} for more informations
     */
    status?: StatusReference;

    /**
     * The score the user gave to the manga
     */
    score?: number;

    /**
     * The tags the user gave to the manga
     */
    tags?: string;

    /**
     * Whether the user is re-reading the manga, where `0` means not re-reading and `1` means re-reading
     */
    isRereading?: number;

    /**
     * The number of chapters the user has read
     */
    nbReadChapters?: number;

    /**
     * The number of volumes the user has read
     */
    nbReadVolumes?: number;

    /**
     * The title of the manga
     */
    mangaTitle: string;

    /**
     * Total count of volumes this manga has
     */
    mangaNumChapters?: number;

    /**
     * Count of volumes this manga has
     */
    mangaNumVolumes?: number;

    /**
     * The status of the manga, see {@link SeriesStatusReference Series statuses references} for more information
     */
    mangaPublishingStatus?: SeriesStatusReference;

    /**
     * The unique identifier of this manga
     */
    mangaId: number;

    /**
     * Magazines where this manga airs
     */
    mangaMagazines?: string;

    /**
     * The path to the manga page on MAL
     */
    mangaURL?: string;

    /**
     * The url of the manga poster on MAL
     */
    mangaImagePath?: string;

    /**
     * ???
     */
    isAddedToList?: boolean;

    /**
     * The type of the manga, see {@link TypesReferences Types References} for more information
     */
    mangaMediaTypeString?: string;

    /**
     * A `MM-DD-YYYY` format date of when the user started reading this manga
     */
    startDateString?: string;

    /**
     * A `MM-DD-YYYY` format date of when the user finished reading this manga
     */
    finishDateString?: string;

    /**
     * A `MM-DD-YYYY` format date of when the manga started publishing
     */
    mangaStartDateString?: string;

    /**
     * A `MM-DD-YYYY` format date of when the manga finished publishing
     */
    mangaEndDateString?: string;

    /**
     * ???
     */
    daysString?: string;

    /**
     * ???
     */
    retailString?: string;

    /**
     * Priority of this manga for the user
     */
    priorityString?: string;
  }

  /**
   * News data model
   */
  interface NewsDataModel {
    /**
     * The title of the news
     */
    title: string;

    /**
     * The link to the article
     */
    link?: string;

    /**
     * The URL of the cover image of the article
     */
    image?: string;

    /**
     * A short preview of the news description
     */
    text?: string;

    /**
     * The unique identifier of the news
     */
    newsNumber: string;
  }

  /**
   * Anime episodes data model
   */
  interface AnimeEpisodesDataModel {
    /**
     * The episode number
     */
    epNumber?: number;

    /**
     * A "Jan 10, 2014" date like of when the episode has been aired
     */
    aired?: string;

    /**
     * -
     */
    discussionLink?: string;

    /**
     * The episode title
     */
    title: string;

    /**
     * The japanese title of the episode
     */
    japaneseTitle?: string;
  }

  interface ReviewsListAnimeOptions {
    /**
     * The name of the anime
     */
    name: string;

    /**
     * The unique identifier of this anime
     */
    id?: number;

    /**
     * The number max of reviews to fetch - can be really long if omit
     */
    limit?: number;

    /**
     * The number of reviews to skip
     */
    skip?: number;
  }

  interface AnimeReviewsDataModel {
    /**
     * The name of the author
     */
    author?: string;

    /**
     * The date of the comment
     */
    date?: Date;

    /**
     * The number of episode seen
     */
    seen?: string;

    /**
     * The overall note of the anime
     */
    overall?: number;

    /**
     * The story note of the anime
     */
    story?: number;

    /**
     * The animation note of the anime
     */
    animation?: number;

    /**
     * The sound note of the anime
     */
    sound?: number;

    /**
     * The character note of the anime
     */
    character?: number;

    /**
     * The enjoyment note of the anime
     */
    enjoyment?: number;

    /**
     * The complete review
     */
    review?: string;
  }

  interface AnimeRecommendationsDataModel {
    /**
     * The link of the picture's anime recommended
     */
    pictureImage?: string;

    /**
     * The link of the anime recommended
     */
    animeLink?: string;

    /**
     * The name of the anime recommended
     */
    anime: string;

    /**
     * The recommendation
     */
    mainRecommendation?: string;

    /**
     * The name of the author
     */
    author?: string;
  }

  interface AnimeStatsDataModel {
    /**
     * The total number of person who are watching the anime
     */
    watching?: number;

    /**
     * The total number of person who completed the anime
     */
    completed?: number;

    /**
     * The total number of person who stop watching the anime but will continue later
     */
    onHold?: number;

    /**
     * The total number of person who stop watching the anime
     */
    dropped?: number;

    /**
     * The total number of person who are planning to watch the anime
     */
    planToWatch?: number;

    /**
     * The total stats
     */
    total?: number;

    /**
     * The number of person ranking the anime with a 10/10
     */
    score10?: number;

    /**
     * The number of person ranking the anime with a 9/10
     */
    score9?: number;

    /**
     * The number of person ranking the anime with a 8/10
     */
    score8?: number;

    /**
     * The number of person ranking the anime with a 7/10
     */
    score7?: number;

    /**
     * The number of person ranking the anime with a 6/10
     */
    score6?: number;

    /**
     * The number of person ranking the anime with a 5/10
     */
    score5?: number;

    /**
     * The number of person ranking the anime with a 4/10
     */
    score4?: number;

    /**
     * The number of person ranking the anime with a 3/10
     */
    score3?: number;

    /**
     * The number of person ranking the anime with a 2/10
     */
    score2?: number;

    /**
     * The number of person ranking the anime with a 1/10
     */
    score1?: number;
  }

  interface AnimePicturesDataModel {
    /**
     * The link of the image
     */
    imageLink?: string;
  }

  interface OfficialApiOptions {
    /**
     * Your MAL username
     */
    username: string;

    /**
     * Your MAL password
     */
    password: string;
  }

  interface ActionActOnList<T extends AllowedTypes = 'anime'> {
    /**
     * The type of the manga/anime to act on. Can be either `anime` or `manga`
     * @default 'anime'
     */
    support: T;

    /**
     * The action to perform on the list. Can be either `add`, `update` or `remove`
     */
    action: 'add' | 'update' | 'delete';
  }

  interface ActionActOnListOptionsDetails {
    /**
     * Whether you completed, dropped... the anime/manga, see the {@link StatusReference statuses references}
     */
    status:
      | 'watching'
      | 'reading'
      | 'completed'
      | 'on-hold'
      | 'dropped'
      | 'plan-to-watch'
      | 'plan-to-read'
      | StatusReference;

    /**
     * The score you would give to the anime/manga, must be a whole number between 0 and 10
     */
    score: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

    /**
     * Number of times you rewatched the anime
     * @note Anime Only
     */
    times_rewatched?: number;

    /**
     * `MMDDYYYY` - The date format when you started watching the anime | reading the manga
     */
    date_start: string;

    /**
     * `MMDDYYYY` - The date format when you finished watching the anime | reading the manga
     */
    date_finish: string;

    /**
     * Tags separated by commas that you think correspond to this anime/manga
     */
    tags: string;

    /**
     * The number of volumes you read
     * @note Manga Only
     */
    volumes?: number;

    /**
     * The number of times you re-read this manga
     * @note Manga Only
     */
    times_reread?: number;
  }
}
