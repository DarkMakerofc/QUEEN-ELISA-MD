/// <reference types="node" />
import { AxiosRequestConfig } from 'axios';
import { IgCookie, IChangedProfilePicture } from './types';
import { IGUserMetadata, UserGraphQL } from './types/UserMetadata';
import { IGStoriesMetadata } from './types/StoriesMetadata';
import { ReelsIds } from './types/HighlightMetadata';
import { IHighlightsMetadata, ReelsMediaData } from './types/HighlightMediaMetadata';
import { IPostModels } from './types/PostModels';
import { PostFeedResult } from './types/PostFeedResult';
import { PostStoryResult } from './types/PostStoryResult';
import { MediaConfigureOptions } from './types/MediaConfigureOptions';
import { GraphqlUser } from './types/UserGraphQlV2';
import { IPaginatedPosts } from './types/PaginatedPosts';
export * from './utils';
export * as InstagramMetadata from './types';
export * from './helper/Session';
export declare class igApi {
    private IgCookie;
    storeCookie: boolean;
    AxiosOpts: AxiosRequestConfig;
    /**
     * Recommended to set cookie for most all IG Request
     * @param IgCookie cookie you can get it by using getSessionId function, see README.md or example file
     * @param storeCookie
     * @param AxiosOpts
     */
    constructor(IgCookie?: IgCookie, storeCookie?: boolean, AxiosOpts?: AxiosRequestConfig);
    private cookie;
    private accountUserId;
    private buildHeaders;
    /**
     * Make request to IG API
     * @param baseURL
     * @param url
     * @param agent
     * @param AxiosOptions
     */
    private FetchIGAPI;
    /**
     * Set cookie for most all IG Request
     * @param {IgCookie} IgCookie
     */
    private setCookie;
    /**
     * get user id by username
     * @param {username} username
     * @returns
     */
    getIdByUsername: (username: string) => Promise<string>;
    private _formatSidecar;
    fetchPost: (url: string) => Promise<IPostModels>;
    fetchPostByMediaId: (mediaId: string | number) => Promise<any>;
    /**
     * fetch client account profile
     */
    accountInfo: (userID?: string) => Promise<UserGraphQL>;
    /**
     * fetch profile by username. including email, phone number
     * @param {username} username
     * @param {boolean} simplifiedMetadata if set to false, it will return full of json result from api request. default is set to true
     * @returns {Promise<IGUserMetadata>}
     */
    fetchUser: (username: string, simplifiedMetadata?: boolean) => Promise<UserGraphQL | IGUserMetadata>;
    /**
     * this do request same as /?__a=1
     * @param username
     * @returns
     */
    fetchUserV2: (username: string) => Promise<GraphqlUser>;
    /**
     * simple method to check is user follow me
     * @param username
     * @returns true if user is follow me
     */
    isFollowMe: (username: string) => Promise<boolean>;
    /**
     *
     * @param {StoriesGraphQL} metadata
     * @returns {ItemStories[]}
     */
    private _parseStories;
    /**
     * fetches stories metadata
     * @param {string} username username target to fetch the stories, also work with private profile if you use cookie \w your account that follows target account
     * @returns
     */
    fetchStories: (username: string) => Promise<IGStoriesMetadata>;
    /**
     * Fetch all reels/highlight id
     * @param {username} username
     * @returns
     */
    _getReelsIds: (username: string) => Promise<ReelsIds[]>;
    /**
     * get media urls from highlight id
     * @param {ids} ids of highlight
     * @returns
     */
    _getReels: (ids: string) => Promise<ReelsMediaData[]>;
    /**
     * fetches highlight metadata
     * @param {string} username username target to fetch the highlights, also work with private profile if you use cookie \w your account that follows target account
     * @returns
     */
    fetchHighlights: (username: string) => Promise<IHighlightsMetadata>;
    /**
     * fetches user posts, with pagination
     * @deprecated Does not return all information about a post, use fetchUserPostsV2()
     * @param username
     * @param end_cursor get end_cursor by fetch user posts first
     * @returns
     */
    fetchUserPosts: (username: string, end_cursor?: string) => Promise<IPaginatedPosts>;
    /**
     * fetches user posts, with pagination
     * @param username
     * @param end_cursor get end_cursor by fetchUserPostsV2 first
     * @returns
     */
    fetchUserPostsV2: (username: string, end_cursor?: string) => Promise<IPaginatedPosts>;
    private uploadPhoto;
    /**
     * Post a photo to instagram
     * @param photo file path or Buffer
     * @param type post type
     * @param options
     * @returns
     */
    addPost: (photo: string | Buffer, type: "feed" | "story" | undefined, options: MediaConfigureOptions) => Promise<PostFeedResult | PostStoryResult>;
    /**
     *
     * @param photo input must be filepath or buffer
     */
    changeProfilePicture: (photo: string | Buffer) => Promise<IChangedProfilePicture>;
}
