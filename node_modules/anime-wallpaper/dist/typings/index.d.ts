export interface dataImageFormat1 {
    title: string;
    thumbnail: string;
    image: string;
}
export interface dataImageFormat2 {
    title: string;
    image: string;
}
export interface dataImageFormat3 {
    image: string;
}
export interface searchOpt {
    search: string;
    page: string | number;
}
export interface searchOpt2 {
    title: string;
    page: string;
    type: "sfw" | "sketchy" | "both";
}
