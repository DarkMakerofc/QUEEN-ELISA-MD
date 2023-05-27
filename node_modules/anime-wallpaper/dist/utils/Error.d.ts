export default class AnimeWallError extends Error {
    msg: string;
    name: string;
    constructor(msg: string);
}
