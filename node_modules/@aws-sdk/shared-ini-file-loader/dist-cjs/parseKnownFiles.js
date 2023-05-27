"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseKnownFiles = void 0;
const loadSharedConfigFiles_1 = require("./loadSharedConfigFiles");
const mergeConfigFiles_1 = require("./mergeConfigFiles");
const parseKnownFiles = async (init) => {
    const parsedFiles = await (0, loadSharedConfigFiles_1.loadSharedConfigFiles)(init);
    return (0, mergeConfigFiles_1.mergeConfigFiles)(parsedFiles.configFile, parsedFiles.credentialsFile);
};
exports.parseKnownFiles = parseKnownFiles;
