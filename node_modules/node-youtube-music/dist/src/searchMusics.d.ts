import { MusicVideo } from './models';
export declare const parseSearchMusicsBody: (body: {
    contents: any;
}) => MusicVideo[];
export declare function searchMusics(query: string): Promise<MusicVideo[]>;
