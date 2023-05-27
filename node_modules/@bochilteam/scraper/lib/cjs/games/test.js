"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const index_js_1 = require("./index.js");
describe('Games', () => {
    describe('Tebakgambar', () => {
        it('tebakgambar', done => {
            (0, index_js_1.tebakgambar)().then(result => {
                (0, chai_1.expect)(result).to.an('object');
                (0, chai_1.expect)(result.index).to.a('number');
                (0, chai_1.expect)(result.img).to.a('string');
                (0, chai_1.expect)(result.jawaban).to.a('string');
                (0, chai_1.expect)(result.deskripsi).to.a('string');
                return done();
            }).catch(done);
        });
        it('tebakgambar JSON', done => {
            const res = index_js_1.tebakgambarjson;
            (0, chai_1.expect)(res).to.an('array');
            (0, chai_1.expect)(res).to.have.lengthOf.at.least(1000);
            return done();
        });
    });
    describe('Asahotak', () => {
        it('asahotak', done => {
            (0, index_js_1.asahotak)().then(result => {
                (0, chai_1.expect)(result).to.an('object');
                (0, chai_1.expect)(result.index).to.a('number');
                (0, chai_1.expect)(result.soal).to.a('string');
                (0, chai_1.expect)(result.jawaban).to.a('string');
                return done();
            }).catch(done);
        });
        it('asahotak JSON', done => {
            const res = index_js_1.asahotakjson;
            (0, chai_1.expect)(res).to.an('array');
            (0, chai_1.expect)(res).to.have.lengthOf.at.least(228);
            return done();
        });
    });
    describe('Caklontong', () => {
        it('caklontong', done => {
            (0, index_js_1.caklontong)().then(result => {
                (0, chai_1.expect)(result).to.an('object');
                (0, chai_1.expect)(result.index).to.a('number');
                (0, chai_1.expect)(result.soal).to.a('string');
                (0, chai_1.expect)(result.jawaban).to.a('string');
                (0, chai_1.expect)(result.deskripsi).to.a('string');
                return done();
            }).catch(done);
        });
        it('caklontong JSON', done => {
            const res = index_js_1.caklontongjson;
            (0, chai_1.expect)(res).to.an('array');
            (0, chai_1.expect)(res).to.have.lengthOf.at.least(414);
            return done();
        });
    });
    describe('Family 100', () => {
        it('family100', done => {
            (0, index_js_1.family100)().then(result => {
                (0, chai_1.expect)(result).to.an('object');
                (0, chai_1.expect)(result.soal).to.a('string');
                (0, chai_1.expect)(result.jawaban).to.a('array');
                return done();
            }).catch(done);
        });
        it('family100 JSON', done => {
            const res = index_js_1.family100json;
            (0, chai_1.expect)(res).to.an('array');
            (0, chai_1.expect)(res).to.have.lengthOf.at.least(7152);
            return done();
        });
    });
    describe('TebakKata', () => {
        it('tebakkata', done => {
            (0, index_js_1.tebakkata)().then(result => {
                (0, chai_1.expect)(result).to.an('object');
                (0, chai_1.expect)(result.index).to.a('number');
                (0, chai_1.expect)(result.soal).to.a('string');
                (0, chai_1.expect)(result.jawaban).to.a('string');
                return done();
            }).catch(done);
        });
        it('tebakkata JSON', done => {
            const res = index_js_1.tebakkatajson;
            (0, chai_1.expect)(res).to.an('array');
            (0, chai_1.expect)(res).to.have.lengthOf.at.least(302);
            return done();
        });
    });
    describe('TebakKimia', () => {
        it('tebakkimia', done => {
            (0, index_js_1.tebakkimia)().then(result => {
                (0, chai_1.expect)(result).to.an('object');
                (0, chai_1.expect)(result.unsur).to.a('string');
                (0, chai_1.expect)(result.lambang).to.a('string');
                return done();
            }).catch(done);
        });
        it('tebakkimia JSON', done => {
            const res = index_js_1.tebakkimiajson;
            (0, chai_1.expect)(res).to.an('array');
            (0, chai_1.expect)(res).to.have.lengthOf.at.least(125);
            return done();
        });
    });
    describe('Tekateki', () => {
        it('tekateki', done => {
            (0, index_js_1.tekateki)().then(result => {
                (0, chai_1.expect)(result).to.an('object');
                (0, chai_1.expect)(result.soal).to.a('string');
                (0, chai_1.expect)(result.jawaban).to.a('string');
                return done();
            }).catch(done);
        });
        it('tekateki JSON', done => {
            const res = index_js_1.tekatekijson;
            (0, chai_1.expect)(res).to.an('array');
            (0, chai_1.expect)(res).to.have.lengthOf.at.least(200);
            return done();
        });
    });
    describe('Siapakahaku', () => {
        it('siapakahaku', done => {
            (0, index_js_1.siapakahaku)().then(result => {
                (0, chai_1.expect)(result).to.an('object');
                (0, chai_1.expect)(result.index).to.a('number');
                (0, chai_1.expect)(result.soal).to.a('string');
                (0, chai_1.expect)(result.jawaban).to.a('string');
                return done();
            }).catch(done);
        });
        it('siapakahaku JSON', done => {
            const res = index_js_1.siapakahakujson;
            (0, chai_1.expect)(res).to.an('array');
            (0, chai_1.expect)(res).to.have.lengthOf.at.least(268);
            return done();
        });
    });
    describe('Susunkata', () => {
        it('susunkata', done => {
            (0, index_js_1.susunkata)().then(result => {
                (0, chai_1.expect)(result).to.an('object');
                (0, chai_1.expect)(result.index).to.a('number');
                (0, chai_1.expect)(result.soal).to.a('string');
                (0, chai_1.expect)(result.tipe).to.a('string');
                (0, chai_1.expect)(result.jawaban).to.a('string');
                return done();
            }).catch(done);
        });
        it('susunkata JSON', done => {
            const res = index_js_1.susunkatajson;
            (0, chai_1.expect)(res).to.an('array');
            (0, chai_1.expect)(res).to.have.lengthOf.at.least(353);
            return done();
        });
    });
    describe('Tebakbendera', () => {
        it('tebakbendera', done => {
            (0, index_js_1.tebakbendera)().then(result => {
                (0, chai_1.expect)(result).to.an('object');
                (0, chai_1.expect)(result.flag).to.a('string');
                (0, chai_1.expect)(result.img).to.a('string');
                (0, chai_1.expect)(result.name).to.a('string');
                return done();
            }).catch(done);
        });
        it('tebakbendera JSON', done => {
            const res = index_js_1.tebakbenderajson;
            (0, chai_1.expect)(res).to.an('array');
            (0, chai_1.expect)(res).to.have.lengthOf.at.least(246);
            return done();
        });
    });
    describe('Tebak Kabupaten', () => {
        it('tebakkabupaten', done => {
            (0, index_js_1.tebakkabupaten)().then(result => {
                (0, chai_1.expect)(result).to.an('object');
                (0, chai_1.expect)(result.index).to.a('number');
                (0, chai_1.expect)(result.title).to.a('string');
                (0, chai_1.expect)(result.url).to.a('string');
                return done();
            }).catch(done);
        });
        it('tebakkabupaten JSON', done => {
            const res = index_js_1.tebakkabupatenjson;
            (0, chai_1.expect)(res).to.an('array');
            (0, chai_1.expect)(res).to.have.lengthOf.at.least(514);
            return done();
        });
    });
    describe('Tebak Lirik', () => {
        it('tebaklirik', done => {
            (0, index_js_1.tebaklirik)().then(result => {
                (0, chai_1.expect)(result).to.an('object');
                (0, chai_1.expect)(result.soal).to.a('string');
                (0, chai_1.expect)(result.jawaban).to.a('string');
                return done();
            }).catch(done);
        });
        it('tebaklirik JSON', done => {
            const res = index_js_1.tebaklirikjson;
            (0, chai_1.expect)(res).to.an('array');
            (0, chai_1.expect)(res).to.have.lengthOf.at.least(38);
            return done();
        });
    });
    describe('Tebak Tebakan', () => {
        it('tebaktebakan', done => {
            (0, index_js_1.tebaktebakan)().then(result => {
                (0, chai_1.expect)(result).to.an('object');
                (0, chai_1.expect)(result.soal).to.a('string');
                (0, chai_1.expect)(result.jawaban).to.a('string');
                return done();
            }).catch(done);
        });
        it('tebaktebakan JSON', done => {
            const res = index_js_1.tebaktebakanjson;
            (0, chai_1.expect)(res).to.an('array');
            (0, chai_1.expect)(res).to.have.lengthOf.at.least(199);
            return done();
        });
    });
});
//# sourceMappingURL=test.js.map