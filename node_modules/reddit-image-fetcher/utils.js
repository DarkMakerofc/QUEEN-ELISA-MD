const axios = require('axios');

/**
 * Get random number from min and max range. Min is inclusive, Max is exclusive
 * 
 * @param {Number} min 
 * @param {Number} max
 * @return {Number} random number
 */
const randomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Check if url is image url
 * 
 * @param {String} url
 * @param {boolean} includeGif | should include gif
 * @return {Boolean}
 */
const isImageUrl = (url, includeGif = true) => {
    if (includeGif) {
        return !(url.includes('.gifv')) && (url.includes('.jpg') || url.includes('.png') || url.includes('.gif') || url.includes('.jpeg'));
    } else {
        return !(url.includes('.gifv')) && (url.includes('.jpg') || url.includes('.png') || url.includes('.jpeg'));
    }
}

/**
 * Make a get request
 * 
 * @param {String} url
 * @return Axios response object
 */
const getRequest = async (url) => {
    try {
        return axios.get(url);
    } catch (error) {
        throw Error(error);
    }
}

/**
 * Format the raw post
 * 
 * @param {Object} post
 * @param {string} type
 * @return {Object} formatted posts
 */
const formatPost = (post, type) => {
    return {
        id: typeof post.id !== 'undefined' ? post.id : null,
        type: type,
        title: typeof post.title !== 'undefined' ? post.title : null,
        postLink: typeof post.id !== 'undefined' ?  'https://redd.it/' + post.id : null,
        image: typeof post.url !== 'undefined' ? post.url : null,
        thumbnail: typeof post.thumbnail !== 'undefined' ? post.thumbnail : null,
        subreddit: typeof post.subreddit !== 'undefined' ? post.subreddit : null,
        NSFW: typeof post.over_18 !== 'undefined' ? post.over_18 : null,
        spoiler: typeof post.spoiler !== 'undefined' ? post.spoiler : null,
        createdUtc: typeof post.created_utc !== 'undefined' ? post.created_utc : null,
        upvotes: typeof post.ups !== 'undefined' ? post.ups : null,
        upvoteRatio: typeof post.upvote_ratio !== 'undefined' ? post.upvote_ratio : null,
    };
}

module.exports.randomNumber = randomNumber;
module.exports.isImageUrl = isImageUrl;
module.exports.getRequest = getRequest;
module.exports.formatPost = formatPost;