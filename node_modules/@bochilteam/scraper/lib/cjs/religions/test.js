"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const index_js_1 = require("./index.js");
describe('Religions', () => {
    describe('Asmaul Husna', () => {
        it('AsmaulHusna', done => {
            (0, index_js_1.asmaulhusna)().then(res => {
                (0, chai_1.expect)(res).to.be.an('object');
                (0, chai_1.expect)(res.index).to.be.a('number');
                (0, chai_1.expect)(res.latin).to.be.a('string');
                (0, chai_1.expect)(res.arabic).to.be.a('string');
                (0, chai_1.expect)(res.translation_id).to.be.a('string');
                (0, chai_1.expect)(res.translation_en).to.be.a('string');
                return done();
            }).catch(done);
        });
        it('AsmaulHusna JSON', done => {
            const res = index_js_1.asmaulhusnajson;
            (0, chai_1.expect)(res).to.be.an('array');
            (0, chai_1.expect)(res).to.have.length(99);
            return done();
        });
    });
    describe('Al quran', () => {
        it('Alquran', done => {
            (0, index_js_1.alquran)().then(res => {
                (0, chai_1.expect)(res).to.have.length(114);
                return done();
            }).catch(done);
        });
    });
    describe('Jadwal Sholat', () => {
        it('jadwalSholat', done => {
            (0, index_js_1.jadwalsholat)('Semarang').then(res => {
                (0, chai_1.expect)(res).to.be.an('object');
                (0, chai_1.expect)(res.today).to.be.an('object');
                (0, chai_1.expect)(res.list).to.be.an('array');
                (0, chai_1.expect)(res.list).to.have.lengthOf.at.least(27);
                return done();
            }).catch(done);
        });
        it('List jadwal sholat', done => {
            Promise.resolve(index_js_1.listJadwalSholat).then(res => {
                (0, chai_1.expect)(res).to.be.an('array');
                (0, chai_1.expect)(res).to.have.lengthOf.at.least(316);
                return done();
            }).catch(done);
        });
    });
});
//# sourceMappingURL=test.js.map