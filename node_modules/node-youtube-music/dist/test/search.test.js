"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
test('Search human readable queries should return a list of results', () => __awaiter(void 0, void 0, void 0, function* () {
    const queries = [
        'never gonna give you up',
        'liem if only',
        'madonna',
        'david guetta',
    ];
    const results = yield Promise.all(queries.map((query) => src_1.searchMusics(query)));
    results.forEach((result) => {
        expect(result.length).toBeGreaterThan(1);
    });
}));
test('Search unreadable queries should return an empty list', () => __awaiter(void 0, void 0, void 0, function* () {
    const queries = ['o347tvnq9784tnaowitn'];
    const results = yield Promise.all(queries.map((query) => src_1.searchMusics(query)));
    results.forEach((result) => {
        expect(result.length).toBe(0);
    });
}));
