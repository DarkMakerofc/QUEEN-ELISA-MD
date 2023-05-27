import { expect } from 'chai';
import { tebakgambar, tebakgambarjson, asahotak, asahotakjson, caklontong, caklontongjson, family100, family100json, tebakkata, tebakkatajson, tebakkimia, tebakkimiajson, tekateki, tekatekijson, siapakahaku, siapakahakujson, susunkata, susunkatajson, tebakbendera, tebakbenderajson, tebaklirik, tebaklirikjson, tebakkabupaten, tebakkabupatenjson, tebaktebakan, tebaktebakanjson } from './index.js';
describe('Games', () => {
    describe('Tebakgambar', () => {
        it('tebakgambar', done => {
            tebakgambar().then(result => {
                expect(result).to.an('object');
                expect(result.index).to.a('number');
                expect(result.img).to.a('string');
                expect(result.jawaban).to.a('string');
                expect(result.deskripsi).to.a('string');
                return done();
            }).catch(done);
        });
        it('tebakgambar JSON', done => {
            const res = tebakgambarjson;
            expect(res).to.an('array');
            expect(res).to.have.lengthOf.at.least(1000);
            return done();
        });
    });
    describe('Asahotak', () => {
        it('asahotak', done => {
            asahotak().then(result => {
                expect(result).to.an('object');
                expect(result.index).to.a('number');
                expect(result.soal).to.a('string');
                expect(result.jawaban).to.a('string');
                return done();
            }).catch(done);
        });
        it('asahotak JSON', done => {
            const res = asahotakjson;
            expect(res).to.an('array');
            expect(res).to.have.lengthOf.at.least(228);
            return done();
        });
    });
    describe('Caklontong', () => {
        it('caklontong', done => {
            caklontong().then(result => {
                expect(result).to.an('object');
                expect(result.index).to.a('number');
                expect(result.soal).to.a('string');
                expect(result.jawaban).to.a('string');
                expect(result.deskripsi).to.a('string');
                return done();
            }).catch(done);
        });
        it('caklontong JSON', done => {
            const res = caklontongjson;
            expect(res).to.an('array');
            expect(res).to.have.lengthOf.at.least(414);
            return done();
        });
    });
    describe('Family 100', () => {
        it('family100', done => {
            family100().then(result => {
                expect(result).to.an('object');
                expect(result.soal).to.a('string');
                expect(result.jawaban).to.a('array');
                return done();
            }).catch(done);
        });
        it('family100 JSON', done => {
            const res = family100json;
            expect(res).to.an('array');
            expect(res).to.have.lengthOf.at.least(7152);
            return done();
        });
    });
    describe('TebakKata', () => {
        it('tebakkata', done => {
            tebakkata().then(result => {
                expect(result).to.an('object');
                expect(result.index).to.a('number');
                expect(result.soal).to.a('string');
                expect(result.jawaban).to.a('string');
                return done();
            }).catch(done);
        });
        it('tebakkata JSON', done => {
            const res = tebakkatajson;
            expect(res).to.an('array');
            expect(res).to.have.lengthOf.at.least(302);
            return done();
        });
    });
    describe('TebakKimia', () => {
        it('tebakkimia', done => {
            tebakkimia().then(result => {
                expect(result).to.an('object');
                expect(result.unsur).to.a('string');
                expect(result.lambang).to.a('string');
                return done();
            }).catch(done);
        });
        it('tebakkimia JSON', done => {
            const res = tebakkimiajson;
            expect(res).to.an('array');
            expect(res).to.have.lengthOf.at.least(125);
            return done();
        });
    });
    describe('Tekateki', () => {
        it('tekateki', done => {
            tekateki().then(result => {
                expect(result).to.an('object');
                expect(result.soal).to.a('string');
                expect(result.jawaban).to.a('string');
                return done();
            }).catch(done);
        });
        it('tekateki JSON', done => {
            const res = tekatekijson;
            expect(res).to.an('array');
            expect(res).to.have.lengthOf.at.least(200);
            return done();
        });
    });
    describe('Siapakahaku', () => {
        it('siapakahaku', done => {
            siapakahaku().then(result => {
                expect(result).to.an('object');
                expect(result.index).to.a('number');
                expect(result.soal).to.a('string');
                expect(result.jawaban).to.a('string');
                return done();
            }).catch(done);
        });
        it('siapakahaku JSON', done => {
            const res = siapakahakujson;
            expect(res).to.an('array');
            expect(res).to.have.lengthOf.at.least(268);
            return done();
        });
    });
    describe('Susunkata', () => {
        it('susunkata', done => {
            susunkata().then(result => {
                expect(result).to.an('object');
                expect(result.index).to.a('number');
                expect(result.soal).to.a('string');
                expect(result.tipe).to.a('string');
                expect(result.jawaban).to.a('string');
                return done();
            }).catch(done);
        });
        it('susunkata JSON', done => {
            const res = susunkatajson;
            expect(res).to.an('array');
            expect(res).to.have.lengthOf.at.least(353);
            return done();
        });
    });
    describe('Tebakbendera', () => {
        it('tebakbendera', done => {
            tebakbendera().then(result => {
                expect(result).to.an('object');
                expect(result.flag).to.a('string');
                expect(result.img).to.a('string');
                expect(result.name).to.a('string');
                return done();
            }).catch(done);
        });
        it('tebakbendera JSON', done => {
            const res = tebakbenderajson;
            expect(res).to.an('array');
            expect(res).to.have.lengthOf.at.least(246);
            return done();
        });
    });
    describe('Tebak Kabupaten', () => {
        it('tebakkabupaten', done => {
            tebakkabupaten().then(result => {
                expect(result).to.an('object');
                expect(result.index).to.a('number');
                expect(result.title).to.a('string');
                expect(result.url).to.a('string');
                return done();
            }).catch(done);
        });
        it('tebakkabupaten JSON', done => {
            const res = tebakkabupatenjson;
            expect(res).to.an('array');
            expect(res).to.have.lengthOf.at.least(514);
            return done();
        });
    });
    describe('Tebak Lirik', () => {
        it('tebaklirik', done => {
            tebaklirik().then(result => {
                expect(result).to.an('object');
                expect(result.soal).to.a('string');
                expect(result.jawaban).to.a('string');
                return done();
            }).catch(done);
        });
        it('tebaklirik JSON', done => {
            const res = tebaklirikjson;
            expect(res).to.an('array');
            expect(res).to.have.lengthOf.at.least(38);
            return done();
        });
    });
    describe('Tebak Tebakan', () => {
        it('tebaktebakan', done => {
            tebaktebakan().then(result => {
                expect(result).to.an('object');
                expect(result.soal).to.a('string');
                expect(result.jawaban).to.a('string');
                return done();
            }).catch(done);
        });
        it('tebaktebakan JSON', done => {
            const res = tebaktebakanjson;
            expect(res).to.an('array');
            expect(res).to.have.lengthOf.at.least(199);
            return done();
        });
    });
});
//# sourceMappingURL=test.js.map