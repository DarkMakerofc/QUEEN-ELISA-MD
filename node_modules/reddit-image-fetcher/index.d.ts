// Type definitions for Reddit Image Fetcher
// Project https://github.com/arifszn/reddit-image-fetcher
// Author: MD. Ariful Alam <arifulalamszn@gmail.com>

export type type = 'meme' | 'wallpaper' | 'custom';

export interface RedditImageFetcherOptions {
    /**
     * Image type
     * 
     * Default: 'meme'
     */
    type?: type;

    /**
     * How many images to get
     * 
     * Default: 1
     * 
     * Max: 50
     */
    total?: number;

    /**
     * Add subreddits to subreddit library
     * 
     * Default: [ ]
     */
    addSubreddit?: Array<string>;

    /**
     * Remove subreddits from subreddit library
     * 
     * Default: [ ]
     */
    removeSubreddit?: Array<string>;

    /**
     * Custom subreddit library when type is 'custom'
     * 
     * Default: [ ]
     */
    subreddit?: Array<string>;

    /**
     * Allow NSFW results
     * 
     * Default: true
     */
     allowNSFW?: boolean;
}

export interface RedditImageFetcher {
    /**
     * Fetch images
     * 
     * @param {Object} options The default options for the instance
     * @return {Array} array of images
     */
    fetch<T = any, R = Array<T>>(options?: RedditImageFetcherOptions): Promise<R>;
}

declare const RedditImageFetcher: RedditImageFetcher;

export default RedditImageFetcher;