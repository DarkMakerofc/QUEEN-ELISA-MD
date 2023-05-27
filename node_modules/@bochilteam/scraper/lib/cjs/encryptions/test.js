"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const index_js_1 = require("./index.js");
describe('Encryptions', () => {
    describe('Base64', () => {
        it('From string to base64', done => {
            try {
                const res = (0, index_js_1.toBase64)('Hello World!!');
                (0, chai_1.expect)(res).to.be.a('string');
                (0, chai_1.expect)(res).to.be.equal('SGVsbG8gV29ybGQhIQ==');
                return done();
            }
            catch (e) {
                return done(e);
            }
        });
        it('from base64 to string', done => {
            try {
                const res = (0, index_js_1.fromBase64ToString)('SGVsbG8gV29ybGQhIQ==');
                (0, chai_1.expect)(res).to.be.a('string');
                (0, chai_1.expect)(res).to.be.equal('Hello World!!');
                return done();
            }
            catch (e) {
                return done(e);
            }
        });
    });
    describe('Crypto', () => {
        it('randomUUID', done => {
            try {
                const res = (0, index_js_1.randomUUID)();
                (0, chai_1.expect)(res).to.be.a('string');
                return done();
            }
            catch (e) {
                return done(e);
            }
        });
        it('randomBytes', done => {
            try {
                const res = (0, index_js_1.randomBytes)(16);
                (0, chai_1.expect)(res).to.be.a('string');
                return done();
            }
            catch (e) {
                return done(e);
            }
        });
        it('createHash', done => {
            try {
                const res = (0, index_js_1.createHash)('sha256', 'Hello world!!');
                (0, chai_1.expect)(res).to.be.a('string');
                (0, chai_1.expect)(res).to.have.length(64);
                return done();
            }
            catch (e) {
                return done(e);
            }
        });
    });
});
//# sourceMappingURL=test.js.map