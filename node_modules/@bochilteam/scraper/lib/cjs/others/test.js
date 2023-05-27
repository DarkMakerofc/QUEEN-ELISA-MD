"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const index_js_1 = require("./index.js");
describe('Others', () => {
    // TODO
    describe('Minecraft', () => {
        // it('Minecraft java', done => {
        //     statusJava('moelsmp2.mcalias.com', 25566).then(res => {
        //         expect(res).to.be.an('object')
        //         expect(res.ip).to.be.a('string')
        //         expect(res.port).to.be.a('number')
        //         expect(res.description).to.be.a('string')
        //         expect(res.descriptionText).to.be.a('string')
        //         expect(res.players).to.be.an('object')
        //         expect(res.players.max).to.be.a('number')
        //         expect(res.players.online).to.be.a('number')
        //         expect(res.players.sample).to.be.an('array')
        //         expect(res.version).to.be.an('object')
        //         expect(res.version.name).to.be.a('string')
        //         expect(res.version.protocol).to.be.a('number')
        //         expect(res.favicon).to.be.a('string')
        //         return done()
        //     }).catch(done)
        // })
    });
    it('Wikipedia', (done) => {
        (0, index_js_1.wikipedia)('Minecraft', 'en').then(res => {
            (0, chai_1.expect)(res).to.be.an('object');
            (0, chai_1.expect)(res.title).to.be.a('string');
            (0, chai_1.expect)(res.img).to.be.a('string');
            (0, chai_1.expect)(res.articles).to.be.a('string');
            return done();
        }).catch(done);
    });
    describe('Jadwal TV', () => {
        it('Jadwal TV', done => {
            (0, index_js_1.jadwalTV)('RCTI').then(res => {
                (0, chai_1.expect)(res).to.be.an('object');
                (0, chai_1.expect)(res.channel).to.be.a('string');
                (0, chai_1.expect)(res.result).to.be.an('array');
                (0, chai_1.expect)(res.result).to.have.lengthOf.at.least(1);
                return done();
            }).catch(done);
        });
        it('Jadwal TV NOW', done => {
            (0, index_js_1.jadwalTVNow)().then(res => {
                (0, chai_1.expect)(res).to.be.an('object');
                Object.keys(res).forEach(key => {
                    (0, chai_1.expect)(key).to.be.a('string');
                    (0, chai_1.expect)(res[key]).to.be.an('array');
                    (0, chai_1.expect)(res[key]).to.have.lengthOf.at.least(2);
                });
                return done();
            }).catch(done);
        });
    });
    describe('Mediafire', () => {
        it('Mediafire Download', done => {
            (0, index_js_1.mediafiredl)('https://www.mediafire.com/file/gpeiucmm1xo6ln0/hello_world.mp4/file').then(res => {
                (0, chai_1.expect)(res).to.be.an('object');
                (0, chai_1.expect)(res.url).to.be.a('string');
                (0, chai_1.expect)(res.url2).to.be.a('string');
                (0, chai_1.expect)(res.filename).to.be.a('string');
                (0, chai_1.expect)(res.filetype).to.be.a('string');
                (0, chai_1.expect)(res.ext).to.be.a('string');
                (0, chai_1.expect)(res.aploud).to.be.a('string');
                (0, chai_1.expect)(res.filesizeH).to.be.a('string');
                (0, chai_1.expect)(res.filesize).to.be.a('number');
                return done();
            }).catch(done);
        });
    });
    describe('Gempa', () => {
        it('Gempa', done => {
            (0, index_js_1.gempa)().then(res => {
                (0, chai_1.expect)(res).to.be.an('array');
                res.forEach(({ date, locate, magnitude, depth, location, warning }) => {
                    (0, chai_1.expect)(date).to.be.a('string');
                    (0, chai_1.expect)(locate).to.be.a('string');
                    (0, chai_1.expect)(magnitude).to.be.a('string');
                    (0, chai_1.expect)(depth).to.be.a('string');
                    (0, chai_1.expect)(location).to.be.a('string');
                    (0, chai_1.expect)(warning).to.be.an('array');
                    warning.forEach(s => (0, chai_1.expect)(s).to.be.a('string'));
                });
                return done();
            }).catch(done);
        });
        it('Gempa Now', done => {
            (0, index_js_1.gempaNow)().then(res => {
                (0, chai_1.expect)(res).to.be.an('array');
                res.forEach(({ date, latitude, longitude, magnitude, depth, location }) => {
                    (0, chai_1.expect)(date).to.be.a('string');
                    (0, chai_1.expect)(latitude).to.be.a('string');
                    (0, chai_1.expect)(longitude).to.be.a('string');
                    (0, chai_1.expect)(magnitude).to.be.a('string');
                    (0, chai_1.expect)(depth).to.be.a('string');
                    (0, chai_1.expect)(location).to.be.a('string');
                });
                return done();
            }).catch(done);
        });
    });
    it('Tsunami', (done) => {
        (0, index_js_1.tsunami)().then(res => {
            (0, chai_1.expect)(res).to.be.an('array');
            res.forEach(({ date, locate, magnitude, depth, location }) => {
                (0, chai_1.expect)(date).to.be.a('string');
                (0, chai_1.expect)(locate).to.be.a('string');
                (0, chai_1.expect)(magnitude).to.be.a('string');
                (0, chai_1.expect)(depth).to.be.a('string');
                (0, chai_1.expect)(location).to.be.a('string');
            });
            return done();
        }).catch(done);
    });
    describe('Lyrics', () => {
        it('Lyrics', done => {
            (0, index_js_1.lyrics)('rick astley never gonna give you up').then(res => {
                (0, chai_1.expect)(res).to.be.an('object');
                (0, chai_1.expect)(res.title).to.be.a('string');
                (0, chai_1.expect)(res.author).to.be.a('string');
                (0, chai_1.expect)(res.lyrics).to.be.a('string');
                (0, chai_1.expect)(res.link).to.be.a('string');
                return done();
            }).catch(done);
        });
        // it('Lyrics V2', done => {
        //     lyricsv2('never gonna give you up').then(res => {
        //         expect(res.title).to.be.a('string')
        //         expect(res.author).to.be.a('string')
        //         expect(res.lyrics).to.be.a('string')
        //         expect(res.link).to.be.a('string')
        //         return done()
        //     }).catch(done)
        // })
    });
    it('KBBI', done => {
        (0, index_js_1.kbbi)('halo').then(res => {
            (0, chai_1.expect)(res).to.be.an('array');
            res.forEach(({ index, title, means }) => {
                (0, chai_1.expect)(index).to.be.a('number');
                (0, chai_1.expect)(title).to.be.a('string');
                (0, chai_1.expect)(means).to.be.an('array');
                means.forEach((mean) => (0, chai_1.expect)(mean).to.be.a('string'));
            });
            return done();
        }).catch(done);
    });
    it('ID Free Fire', done => {
        (0, index_js_1.nameFreeFire)('821587717').then(res => {
            (0, chai_1.expect)(res).to.be.an('object');
            (0, chai_1.expect)(res.username).to.be.a('string');
            (0, chai_1.expect)(res.id).to.be.a('string');
            return done();
        }).catch(done);
    });
    describe('Bioskop', () => {
        it('Bioskop now', done => {
            (0, index_js_1.bioskopNow)().then(res => {
                (0, chai_1.expect)(res).to.be.an('array');
                (0, chai_1.expect)(res).to.have.lengthOf.at.least(1);
                res.forEach(({ title, img, url, genre, duration, playingAt }) => {
                    (0, chai_1.expect)(title).to.be.a('string');
                    (0, chai_1.expect)(img).to.be.a('string');
                    (0, chai_1.expect)(url).to.be.a('string');
                    (0, chai_1.expect)(genre).to.be.a('string');
                    (0, chai_1.expect)(duration).to.be.a('string');
                    (0, chai_1.expect)(playingAt).to.be.a('string');
                });
                return done();
            }).catch(done);
        });
        it('Bioskop', done => {
            (0, index_js_1.bioskop)().then(res => {
                (0, chai_1.expect)(res).to.be.an('array');
                (0, chai_1.expect)(res).to.have.lengthOf.at.least(1);
                res.forEach(({ title, img, url, genre, duration, release, director, cast }) => {
                    (0, chai_1.expect)(title).to.be.a('string');
                    (0, chai_1.expect)(img).to.be.a('string');
                    (0, chai_1.expect)(url).to.be.a('string');
                    (0, chai_1.expect)(genre).to.be.a('string');
                    (0, chai_1.expect)(duration).to.be.a('string');
                    (0, chai_1.expect)(release).to.be.a('string');
                    (0, chai_1.expect)(director).to.be.a('string');
                    (0, chai_1.expect)(cast).to.be.an('string');
                });
                return done();
            }).catch(done);
        });
    });
});
//# sourceMappingURL=test.js.map