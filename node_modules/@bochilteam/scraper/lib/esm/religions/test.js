import { expect } from 'chai';
import { asmaulhusna, asmaulhusnajson, alquran, jadwalsholat, listJadwalSholat } from './index.js';
describe('Religions', () => {
    describe('Asmaul Husna', () => {
        it('AsmaulHusna', done => {
            asmaulhusna().then(res => {
                expect(res).to.be.an('object');
                expect(res.index).to.be.a('number');
                expect(res.latin).to.be.a('string');
                expect(res.arabic).to.be.a('string');
                expect(res.translation_id).to.be.a('string');
                expect(res.translation_en).to.be.a('string');
                return done();
            }).catch(done);
        });
        it('AsmaulHusna JSON', done => {
            const res = asmaulhusnajson;
            expect(res).to.be.an('array');
            expect(res).to.have.length(99);
            return done();
        });
    });
    describe('Al quran', () => {
        it('Alquran', done => {
            alquran().then(res => {
                expect(res).to.have.length(114);
                return done();
            }).catch(done);
        });
    });
    describe('Jadwal Sholat', () => {
        it('jadwalSholat', done => {
            jadwalsholat('Semarang').then(res => {
                expect(res).to.be.an('object');
                expect(res.today).to.be.an('object');
                expect(res.list).to.be.an('array');
                expect(res.list).to.have.lengthOf.at.least(27);
                return done();
            }).catch(done);
        });
        it('List jadwal sholat', done => {
            Promise.resolve(listJadwalSholat).then(res => {
                expect(res).to.be.an('array');
                expect(res).to.have.lengthOf.at.least(316);
                return done();
            }).catch(done);
        });
    });
});
//# sourceMappingURL=test.js.map