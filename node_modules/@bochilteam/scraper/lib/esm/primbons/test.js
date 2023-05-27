import { expect } from 'chai';
import { artimimpi, artinama, nomorhoki, getZodiac } from './index.js';
describe('Primbon', () => {
    it('ArtiMimpi', done => {
        artimimpi('Jalan').then(res => {
            expect(res).to.be.an('array');
            res.forEach(v => expect(v).to.be.a('string'));
            return done();
        }).catch(done);
    });
    it('ArtiNama', done => {
        artinama('Windah basudara').then(res => {
            expect(res).to.be.a('string');
            return done();
        }).catch(done);
    });
    it('NomorHoki', done => {
        nomorhoki(6213353).then(res => {
            expect(res).to.be.an('Object');
            expect(res).to.haveOwnProperty('nomer');
            expect(res.angka_bagua_shuzi).to.be.a('number');
            expect(res.positif.kekayaan).to.be.a('number');
            expect(res.positif.kesehatan).to.be.a('number');
            expect(res.positif.cinta).to.be.a('number');
            expect(res.positif.kestabilan).to.be.a('number');
            expect(res.positif.positif).to.be.a('number');
            expect(res.negatif.perselisihan).to.be.a('number');
            expect(res.negatif.kehilangan).to.be.a('number');
            expect(res.negatif.malapetaka).to.be.a('number');
            expect(res.negatif.Kehancuran).to.be.a('number');
            expect(res.negatif.negatif).to.be.a('number');
            return done();
        }).catch(done);
    });
    it('Zodiac', done => {
        try {
            const res = getZodiac(1, 1);
            expect(res).equal('capricorn');
            return done();
        }
        catch (e) {
            return done();
        }
    });
});
//# sourceMappingURL=test.js.map