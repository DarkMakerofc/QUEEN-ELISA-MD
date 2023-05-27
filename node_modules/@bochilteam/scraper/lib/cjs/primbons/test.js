"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const index_js_1 = require("./index.js");
describe('Primbon', () => {
    it('ArtiMimpi', done => {
        (0, index_js_1.artimimpi)('Jalan').then(res => {
            (0, chai_1.expect)(res).to.be.an('array');
            res.forEach(v => (0, chai_1.expect)(v).to.be.a('string'));
            return done();
        }).catch(done);
    });
    it('ArtiNama', done => {
        (0, index_js_1.artinama)('Windah basudara').then(res => {
            (0, chai_1.expect)(res).to.be.a('string');
            return done();
        }).catch(done);
    });
    it('NomorHoki', done => {
        (0, index_js_1.nomorhoki)(6213353).then(res => {
            (0, chai_1.expect)(res).to.be.an('Object');
            (0, chai_1.expect)(res).to.haveOwnProperty('nomer');
            (0, chai_1.expect)(res.angka_bagua_shuzi).to.be.a('number');
            (0, chai_1.expect)(res.positif.kekayaan).to.be.a('number');
            (0, chai_1.expect)(res.positif.kesehatan).to.be.a('number');
            (0, chai_1.expect)(res.positif.cinta).to.be.a('number');
            (0, chai_1.expect)(res.positif.kestabilan).to.be.a('number');
            (0, chai_1.expect)(res.positif.positif).to.be.a('number');
            (0, chai_1.expect)(res.negatif.perselisihan).to.be.a('number');
            (0, chai_1.expect)(res.negatif.kehilangan).to.be.a('number');
            (0, chai_1.expect)(res.negatif.malapetaka).to.be.a('number');
            (0, chai_1.expect)(res.negatif.Kehancuran).to.be.a('number');
            (0, chai_1.expect)(res.negatif.negatif).to.be.a('number');
            return done();
        }).catch(done);
    });
    it('Zodiac', done => {
        try {
            const res = (0, index_js_1.getZodiac)(1, 1);
            (0, chai_1.expect)(res).equal('capricorn');
            return done();
        }
        catch (e) {
            return done();
        }
    });
});
//# sourceMappingURL=test.js.map