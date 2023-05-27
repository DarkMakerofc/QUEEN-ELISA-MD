export const CHARS: string[];
export namespace COLORS {
    const system: string;
    const black: string;
    const red: string;
    const green: string;
    const yellow: string;
    const blue: string;
    const magenta: string;
    const cyan: string;
    const white: string;
    const gray: string;
    const redbright: string;
    const greenbright: string;
    const yellowbright: string;
    const bluebright: string;
    const magentabright: string;
    const cyanbright: string;
    const whitebright: string;
}
export namespace BGCOLORS {
    export const transparent: string;
    const black_1: string;
    export { black_1 as black };
    const red_1: string;
    export { red_1 as red };
    const green_1: string;
    export { green_1 as green };
    const yellow_1: string;
    export { yellow_1 as yellow };
    const blue_1: string;
    export { blue_1 as blue };
    const magenta_1: string;
    export { magenta_1 as magenta };
    const cyan_1: string;
    export { cyan_1 as cyan };
    const white_1: string;
    export { white_1 as white };
    export const blackbright: string;
    const redbright_1: string;
    export { redbright_1 as redbright };
    const greenbright_1: string;
    export { greenbright_1 as greenbright };
    const yellowbright_1: string;
    export { yellowbright_1 as yellowbright };
    const bluebright_1: string;
    export { bluebright_1 as bluebright };
    const magentabright_1: string;
    export { magentabright_1 as magentabright };
    const cyanbright_1: string;
    export { cyanbright_1 as cyanbright };
    const whitebright_1: string;
    export { whitebright_1 as whitebright };
}
export namespace GRADIENTCOLORS {
    const transparent_1: string;
    export { transparent_1 as transparent };
    const black_2: string;
    export { black_2 as black };
    const red_2: string;
    export { red_2 as red };
    const green_2: string;
    export { green_2 as green };
    const yellow_2: string;
    export { yellow_2 as yellow };
    const blue_2: string;
    export { blue_2 as blue };
    const magenta_2: string;
    export { magenta_2 as magenta };
    const cyan_2: string;
    export { cyan_2 as cyan };
    const white_2: string;
    export { white_2 as white };
    const gray_1: string;
    export { gray_1 as gray };
    export const grey: string;
}
export namespace GRADIENTS {
    const lgbt: string[];
    const lgbtq: string[];
    const pride: string[];
    const agender: string[];
    const aromantic: string[];
    const asexual: string[];
    const bisexual: string[];
    const genderfluid: string[];
    const genderqueer: string[];
    const intersex: string[];
    const lesbian: string[];
    const nonbinary: string[];
    const pansexual: string[];
    const polysexual: string[];
    const transgender: string[];
}
export const ALIGNMENT: string[];
export const FONTFACES: {
    console: string;
    block: string;
    simpleblock: string;
    simple: string;
    '3d': string;
    simple3d: string;
    chrome: string;
    huge: string;
    shade: string;
    slick: string;
    grid: string;
    pallet: string;
    tiny: string;
};
export const CLIOPTIONS: {
    '--version': {
        description: string;
        example: string;
        short: string;
        fallback_shortcut: string;
        default: boolean;
    };
    '--help': {
        description: string;
        example: string;
        short: string;
        fallback_shortcut: boolean;
        default: boolean;
    };
    '--font': {
        description: string;
        example: string;
        short: string;
        fallback_shortcut: boolean;
        options: any[];
        default: string;
    };
    '--colors': {
        description: string;
        example: string;
        short: string;
        fallback_shortcut: boolean;
        options: boolean;
        default: string;
    };
    '--background': {
        description: string;
        example: string;
        short: string;
        fallback_shortcut: boolean;
        options: any[];
        default: string;
    };
    '--align': {
        description: string;
        example: string;
        short: string;
        fallback_shortcut: boolean;
        options: string[];
        default: string;
    };
    '--letter-spacing': {
        description: string;
        example: string;
        short: string;
        fallback_shortcut: boolean;
        options: boolean;
        default: any;
    };
    '--line-height': {
        description: string;
        example: string;
        short: string;
        fallback_shortcut: boolean;
        options: boolean;
        default: any;
    };
    '--spaceless': {
        description: string;
        example: string;
        short: string;
        fallback_shortcut: boolean;
        default: boolean;
    };
    '--max-length': {
        description: string;
        example: string;
        short: string;
        fallback_shortcut: boolean;
        options: boolean;
        default: number;
    };
    '--gradient': {
        description: string;
        example: string;
        short: string;
        fallback_shortcut: boolean;
        options: boolean;
        default: boolean;
    };
    '--independent-gradient': {
        description: string;
        example: string;
        short: string;
        fallback_shortcut: boolean;
        default: boolean;
    };
    '--transition-gradient': {
        description: string;
        example: string;
        short: string;
        fallback_shortcut: boolean;
        default: boolean;
    };
    '--env': {
        description: string;
        example: string;
        short: string;
        fallback_shortcut: boolean;
        options: boolean;
        default: string;
    };
    '--debug': {
        description: string;
        example: string;
        short: string;
        fallback_shortcut: boolean;
        default: boolean;
    };
    '--debug-level': {
        description: string;
        example: string;
        short: string;
        fallback_shortcut: boolean;
        options: boolean;
        default: number;
    };
};
export const PACKAGE: {
    name: string;
    description: string;
    version: string;
    homepage: string;
    author: {
        name: string;
        email: string;
        url: string;
    };
    contributors: {
        name: string;
        email: string;
        url: string;
    };
    repository: {
        type: string;
        url: string;
    };
    bugs: {
        url: string;
    };
    engines: {
        node: string;
    };
    scripts: {
        test: string;
        "test:fonts": string;
        "test:watch": string;
        "test:unit": string;
        "test:types": string;
        "test:lint": string;
        "test:format": string;
        format: string;
        build: string;
        "build:bin": string;
        "build:lib": string;
        "build:fonts": string;
        "types:clean": string;
        watch: string;
        coveralls: string;
        nuke: string;
    };
    devDependencies: {
        "@babel/cli": string;
        "@babel/core": string;
        "@babel/preset-env": string;
        "@types/node": string;
        coveralls: string;
        eslint: string;
        "jest-cli": string;
        onchange: string;
        prettier: string;
        typescript: string;
    };
    peerDependencies: {};
    dependencies: {
        "supports-color": string;
        "window-size": string;
    };
    jest: {
        displayName: string;
        testEnvironment: string;
        testRegex: string;
        collectCoverageFrom: string[];
        setupFiles: string[];
        coverageThreshold: {
            global: {
                branches: number;
                functions: number;
                lines: number;
                statements: number;
            };
        };
    };
    eslintConfig: {
        env: {
            node: boolean;
            commonjs: boolean;
            es6: boolean;
        };
        extends: string;
        globals: {
            Atomics: string;
            SharedArrayBuffer: string;
        };
        parserOptions: {
            ecmaVersion: number;
        };
        rules: {
            "no-async-promise-executor": string;
            "no-console": string;
            "no-unused-vars": (string | {
                argsIgnorePattern: string;
            })[];
        };
    };
    browserslist: string[];
    keywords: string[];
    files: string[];
    main: string;
    types: string;
    bin: {
        cfonts: string;
    };
    licenses: {
        type: string;
        url: string;
    }[];
    license: string;
};
