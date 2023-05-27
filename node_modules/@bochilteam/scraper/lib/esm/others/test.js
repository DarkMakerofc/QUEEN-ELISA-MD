import { expect } from 'chai';
import { wikipedia, jadwalTV, jadwalTVNow, mediafiredl, gempa, gempaNow, tsunami, lyrics, kbbi, nameFreeFire, bioskopNow, bioskop } from './index.js';
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
        wikipedia('Minecraft', 'en').then(res => {
            expect(res).to.be.an('object');
            expect(res.title).to.be.a('string');
            expect(res.img).to.be.a('string');
            expect(res.articles).to.be.a('string');
            return done();
        }).catch(done);
    });
    describe('Jadwal TV', () => {
        it('Jadwal TV', done => {
            jadwalTV('RCTI').then(res => {
                expect(res).to.be.an('object');
                expect(res.channel).to.be.a('string');
                expect(res.result).to.be.an('array');
                expect(res.result).to.have.lengthOf.at.least(1);
                return done();
            }).catch(done);
        });
        it('Jadwal TV NOW', done => {
            jadwalTVNow().then(res => {
                expect(res).to.be.an('object');
                Object.keys(res).forEach(key => {
                    expect(key).to.be.a('string');
                    expect(res[key]).to.be.an('array');
                    expect(res[key]).to.have.lengthOf.at.least(2);
                });
                return done();
            }).catch(done);
        });
    });
    describe('Mediafire', () => {
        it('Mediafire Download', done => {
            mediafiredl('https://www.mediafire.com/file/gpeiucmm1xo6ln0/hello_world.mp4/file').then(res => {
                expect(res).to.be.an('object');
                expect(res.url).to.be.a('string');
                expect(res.url2).to.be.a('string');
                expect(res.filename).to.be.a('string');
                expect(res.filetype).to.be.a('string');
                expect(res.ext).to.be.a('string');
                expect(res.aploud).to.be.a('string');
                expect(res.filesizeH).to.be.a('string');
                expect(res.filesize).to.be.a('number');
                return done();
            }).catch(done);
        });
    });
    describe('Gempa', () => {
        it('Gempa', done => {
            gempa().then(res => {
                expect(res).to.be.an('array');
                res.forEach(({ date, locate, magnitude, depth, location, warning }) => {
                    expect(date).to.be.a('string');
                    expect(locate).to.be.a('string');
                    expect(magnitude).to.be.a('string');
                    expect(depth).to.be.a('string');
                    expect(location).to.be.a('string');
                    expect(warning).to.be.an('array');
                    warning.forEach(s => expect(s).to.be.a('string'));
                });
                return done();
            }).catch(done);
        });
        it('Gempa Now', done => {
            gempaNow().then(res => {
                expect(res).to.be.an('array');
                res.forEach(({ date, latitude, longitude, magnitude, depth, location }) => {
                    expect(date).to.be.a('string');
                    expect(latitude).to.be.a('string');
                    expect(longitude).to.be.a('string');
                    expect(magnitude).to.be.a('string');
                    expect(depth).to.be.a('string');
                    expect(location).to.be.a('string');
                });
                return done();
            }).catch(done);
        });
    });
    it('Tsunami', (done) => {
        tsunami().then(res => {
            expect(res).to.be.an('array');
            res.forEach(({ date, locate, magnitude, depth, location }) => {
                expect(date).to.be.a('string');
                expect(locate).to.be.a('string');
                expect(magnitude).to.be.a('string');
                expect(depth).to.be.a('string');
                expect(location).to.be.a('string');
            });
            return done();
        }).catch(done);
    });
    describe('Lyrics', () => {
        it('Lyrics', done => {
            lyrics('rick astley never gonna give you up').then(res => {
                expect(res).to.be.an('object');
                expect(res.title).to.be.a('string');
                expect(res.author).to.be.a('string');
                expect(res.lyrics).to.be.a('string');
                expect(res.link).to.be.a('string');
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
        kbbi('halo').then(res => {
            expect(res).to.be.an('array');
            res.forEach(({ index, title, means }) => {
                expect(index).to.be.a('number');
                expect(title).to.be.a('string');
                expect(means).to.be.an('array');
                means.forEach((mean) => expect(mean).to.be.a('string'));
            });
            return done();
        }).catch(done);
    });
    it('ID Free Fire', done => {
        nameFreeFire('821587717').then(res => {
            expect(res).to.be.an('object');
            expect(res.username).to.be.a('string');
            expect(res.id).to.be.a('string');
            return done();
        }).catch(done);
    });
    describe('Bioskop', () => {
        it('Bioskop now', done => {
            bioskopNow().then(res => {
                expect(res).to.be.an('array');
                expect(res).to.have.lengthOf.at.least(1);
                res.forEach(({ title, img, url, genre, duration, playingAt }) => {
                    expect(title).to.be.a('string');
                    expect(img).to.be.a('string');
                    expect(url).to.be.a('string');
                    expect(genre).to.be.a('string');
                    expect(duration).to.be.a('string');
                    expect(playingAt).to.be.a('string');
                });
                return done();
            }).catch(done);
        });
        it('Bioskop', done => {
            bioskop().then(res => {
                expect(res).to.be.an('array');
                expect(res).to.have.lengthOf.at.least(1);
                res.forEach(({ title, img, url, genre, duration, release, director, cast }) => {
                    expect(title).to.be.a('string');
                    expect(img).to.be.a('string');
                    expect(url).to.be.a('string');
                    expect(genre).to.be.a('string');
                    expect(duration).to.be.a('string');
                    expect(release).to.be.a('string');
                    expect(director).to.be.a('string');
                    expect(cast).to.be.an('string');
                });
                return done();
            }).catch(done);
        });
    });
});
//# sourceMappingURL=test.js.map