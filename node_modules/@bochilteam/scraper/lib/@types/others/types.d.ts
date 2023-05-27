export interface Wikipedia {
    title: string;
    img: string;
    articles: string;
}
interface ResultsJadwalTV {
    date: string;
    event: string;
}
export interface JadwalTV {
    channel: string;
    result: ResultsJadwalTV[];
}
export interface JadwalTVNOW {
    [Key: string]: ResultsJadwalTV[];
}
export interface Mediafire {
    url: string;
    url2: string;
    filename: string;
    filetype: string;
    ext: string;
    aploud: string;
    filesizeH: string;
    filesize: number;
}
export interface Gempa {
    date: string;
    locate: string;
    magnitude: string;
    depth: string;
    location: string;
    warning: string[];
}
export interface GempaNow {
    date: string;
    latitude: string;
    longitude: string;
    magnitude: string;
    depth: string;
    location: string;
}
export interface Tsunami {
    date: string;
    locate: string;
    magnitude: string;
    depth: string;
    location: string;
}
export interface Lyrics {
    title: string;
    author: string;
    lyrics: string;
    link: string;
}
export interface Kbbi {
    index: number;
    title: string;
    means: string[];
}
interface Iresponse {
    description: {
        extra: {
            color: string;
            text: string;
            bold?: boolean;
        }[];
        text: string;
    };
    players: {
        max: number;
        online: number;
        sample: {
            id: string;
            name: string;
        }[];
    };
    version: {
        name: string;
        protocol: number;
    };
    favicon: string;
}
export interface MinecraftJava {
    ip: string;
    port: number;
    description: string;
    descriptionText: string;
    players: {
        max: number;
        online: number;
        sample: string[];
    };
    version: {
        name: string;
        protocol: number;
    };
    favicon?: string;
    ping: number;
    originalResponse: Iresponse;
}
export interface NameFreeFire {
    id: string;
    username: string;
}
export interface BioskopNow {
    title: string;
    img: string;
    url: string;
    genre: string;
    duration: string;
    playingAt: string;
}
export interface Bioskop {
    title: string;
    img: string;
    url: string;
    genre: string;
    duration: string;
    release: string;
    director: string;
    cast: string;
}
export {};
//# sourceMappingURL=types.d.ts.map