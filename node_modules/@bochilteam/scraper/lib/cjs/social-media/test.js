"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const index_js_1 = require("./index.js");
describe('Social media', () => {
    describe('Tiktok scraper', function () {
        it('tiktokdl', function (done) {
            (0, index_js_1.tiktokdl)('https://www.tiktok.com/@omagadsus/video/7025456384175017243?is_from_webapp=1&sender_device=pc&web_id6982004129280116226').then(function (res) {
                (0, chai_1.expect)(res).to.be.an('object');
                (0, chai_1.expect)(res.author).to.be.an('object');
                (0, chai_1.expect)(res.author.nickname).to.be.a('string');
                (0, chai_1.expect)(res.description).to.be.a('string');
                (0, chai_1.expect)(res.video).to.be.an('object');
                (0, chai_1.expect)(res.video.no_watermark).to.be.a('string');
                (0, chai_1.expect)(res.video.no_watermark2).to.be.a('string');
                (0, chai_1.expect)(res.video.no_watermark_raw).to.be.a('string');
                return done();
            }).catch(done);
        });
        it('tiktokdl v2', function (done) {
            (0, index_js_1.tiktokdlv2)('https://www.tiktok.com/@omagadsus/video/7025456384175017243?is_from_webapp=1&sender_device=pc&web_id6982004129280116226').then(function (res) {
                (0, chai_1.expect)(res).to.be.an('object');
                (0, chai_1.expect)(res.author).to.be.an('object');
                (0, chai_1.expect)(res.author.unique_id).to.be.a('string');
                (0, chai_1.expect)(res.author.nickname).to.be.a('string');
                (0, chai_1.expect)(res.author.avatar).to.be.a('string');
                (0, chai_1.expect)(res.video).to.be.an('object');
                (0, chai_1.expect)(res.video.no_watermark).to.be.a('string');
                (0, chai_1.expect)(res.video.no_watermark_hd).to.be.a('string');
                return done();
            }).catch(done);
        });
        it('tiktokdl v3', function (done) {
            (0, index_js_1.tiktokdlv3)('https://www.tiktok.com/@omagadsus/video/7025456384175017243?is_from_webapp=1&sender_device=pc&web_id6982004129280116226').then(function (res) {
                (0, chai_1.expect)(res).to.be.an('object');
                (0, chai_1.expect)(res.author).to.be.an('object');
                (0, chai_1.expect)(res.author.nickname).to.be.a('string');
                (0, chai_1.expect)(res.author.avatar).to.be.a('string');
                (0, chai_1.expect)(res.description).to.be.a('string');
                (0, chai_1.expect)(res.video).to.be.an('object');
                (0, chai_1.expect)(res.video.no_watermark).to.be.a('string');
                (0, chai_1.expect)(res.video.no_watermark2).to.be.a('string');
                (0, chai_1.expect)(res.music).to.be.a('string');
                return done();
            }).catch(done);
        });
        // it('tiktokfyp', function (done) {
        //   tiktokfyp().then(function (res) {
        //     expect(res).to.be.an('array')
        //     expect(res.length).to.be.above(0)
        //     return done()
        //   }).catch(done)
        // })
        // it('tiktokstalk', function (done) {
        //     tiktokstalk('Tiktok').then(function (res) {
        //         expect(res).to.be.an('object')
        //         // expect(res.username).to.be.a('string')
        //         // expect(res.profile).to.be.a('string')
        //         // expect(res.avatar).to.be.a('string')
        //         // expect(res.verified).to.be.a('boolean')   Github action error!
        //         // expect(res.following).to.be.a('string')
        //         // expect(res.followers).to.be.a('string')
        //         // expect(res.likes).to.be.a('string')
        //         // expect(res.description).to.be.a('string')
        //         return done()
        //     }).catch(done)
        // })
    });
    describe('Instagram', () => {
        it('Instagram Downloader', done => {
            // https://www.instagram.com/p/CaHpoweBjmx/?utm_source=ig_web_copy_link
            (0, index_js_1.instagramdl)('https://www.instagram.com/reel/CXK49yFLtJ_/?utm_source=ig_web_copy_link').then(res => {
                (0, chai_1.expect)(res).to.be.an('array');
                (0, chai_1.expect)(res).to.have.lengthOf.at.least(1);
                res.forEach(({ thumbnail, url }) => {
                    (0, chai_1.expect)(thumbnail).to.be.a('string');
                    (0, chai_1.expect)(url).to.be.a('string');
                });
                return done();
            }).catch(done);
        });
        it('Instagram Downloader V2', done => {
            (0, index_js_1.instagramdlv2)('https://www.instagram.com/reel/CXK49yFLtJ_/?utm_source=ig_web_copy_link').then(res => {
                (0, chai_1.expect)(res).to.be.an('array');
                (0, chai_1.expect)(res).to.have.lengthOf.at.least(1);
                res.forEach(({ thumbnail, url }) => {
                    (0, chai_1.expect)(thumbnail).to.be.a('string');
                    (0, chai_1.expect)(url).to.be.a('string');
                });
                return done();
            }).catch(done);
        });
        it('Instagram Downloader V3', done => {
            (0, index_js_1.instagramdlv3)('https://www.instagram.com/reel/CXK49yFLtJ_/?utm_source=ig_web_copy_link').then(res => {
                (0, chai_1.expect)(res).to.be.an('array');
                (0, chai_1.expect)(res).to.have.lengthOf.at.least(1);
                res.forEach(({ thumbnail, url }) => {
                    (0, chai_1.expect)(thumbnail).to.be.a('string');
                    (0, chai_1.expect)(url).to.be.a('string');
                });
                return done();
            }).catch(done);
        });
        it('Instagram Downloader V4', done => {
            (0, index_js_1.instagramdlv4)('https://www.instagram.com/reel/CXK49yFLtJ_/?utm_source=ig_web_copy_link').then(res => {
                (0, chai_1.expect)(res).to.be.an('array');
                (0, chai_1.expect)(res).to.have.lengthOf.at.least(1);
                res.forEach(({ thumbnail, url }) => {
                    (0, chai_1.expect)(thumbnail).to.be.a('string');
                    (0, chai_1.expect)(url).to.be.a('string');
                });
                return done();
            }).catch(done);
        });
        it('Instagram Story', function (done) {
            (0, index_js_1.instagramStory)('raffinagita1717').then(res => {
                (0, chai_1.expect)(res).to.be.an('object');
                (0, chai_1.expect)(res.user).to.be.an('object');
                (0, chai_1.expect)(res.results).to.be.an('array');
                (0, chai_1.expect)(res.results).to.have.lengthOf.at.least(1);
                res.results.forEach(({ thumbnail, url, type, isVideo }) => {
                    (0, chai_1.expect)(thumbnail).to.be.a('string');
                    (0, chai_1.expect)(url).to.be.a('string');
                    (0, chai_1.expect)(type).to.be.a('string');
                    (0, chai_1.expect)(isVideo).to.be.a('boolean');
                });
                return done();
            }).catch(done);
        });
        it('Instagram Story V2', function (done) {
            (0, index_js_1.instagramStoryv2)('raffinagita1717').then(res => {
                (0, chai_1.expect)(res).to.be.an('object');
                (0, chai_1.expect)(res.user).to.be.an('object');
                (0, chai_1.expect)(res.results).to.be.an('array');
                (0, chai_1.expect)(res.results).to.have.lengthOf.at.least(1);
                res.results.forEach(({ thumbnail, isVideo, url }) => {
                    (0, chai_1.expect)(thumbnail).to.be.a('string');
                    (0, chai_1.expect)(isVideo).to.be.a('boolean');
                    (0, chai_1.expect)(url).to.be.a('string');
                });
                return done();
            }).catch(done);
        });
        it('Instagram Stalk', done => {
            (0, index_js_1.instagramStalk)('freefirebgid').then(res => {
                (0, chai_1.expect)(res).to.be.an('object');
                (0, chai_1.expect)(res.name).to.be.a('string');
                (0, chai_1.expect)(res.username).to.be.a('string');
                (0, chai_1.expect)(res.description).to.be.a('string');
                (0, chai_1.expect)(res.postsH).to.be.a('string');
                (0, chai_1.expect)(res.posts).to.be.a('number');
                (0, chai_1.expect)(res.followersH).to.be.a('string');
                (0, chai_1.expect)(res.followers).to.be.a('number');
                (0, chai_1.expect)(res.followingH).to.be.a('string');
                (0, chai_1.expect)(res.following).to.be.a('number');
                return done();
            }).catch(done);
        });
    });
    describe('Facebook (Metaverse :V)', function () {
        it('Facebook Downloader', done => {
            (0, index_js_1.facebookdl)('https://fb.watch/9WktuN9j-z/').then(res => {
                (0, chai_1.expect)(res).to.be.an('object');
                (0, chai_1.expect)(res.id).to.be.a('string');
                (0, chai_1.expect)(res.thumbnail).to.be.a('string');
                (0, chai_1.expect)(res.duration).to.be.a('number');
                (0, chai_1.expect)(res.result).to.be.an('array');
                (0, chai_1.expect)(res.result).to.have.lengthOf.at.least(1);
                res.result.forEach(({ ext, url, isVideo, isAudio }) => {
                    (0, chai_1.expect)(ext).to.be.a('string');
                    (0, chai_1.expect)(url).to.be.a('string');
                    (0, chai_1.expect)(isVideo).to.be.a('boolean');
                    (0, chai_1.expect)(isAudio).to.be.a('boolean');
                });
                return done();
            }).catch(done);
        });
        it('Facebook Downloader V2', done => {
            (0, index_js_1.facebookdlv2)('https://fb.watch/9WktuN9j-z/').then(res => {
                (0, chai_1.expect)(res).to.be.an('object');
                (0, chai_1.expect)(res.id).to.be.a('string');
                (0, chai_1.expect)(res.title).to.be.a('string');
                (0, chai_1.expect)(res.description).to.be.a('string');
                (0, chai_1.expect)(res.thumbnail).to.be.a('string');
                (0, chai_1.expect)(res.result).to.be.an('array');
                (0, chai_1.expect)(res.result).to.have.lengthOf.at.least(1);
                res.result.forEach(({ quality, url }) => {
                    (0, chai_1.expect)(quality).to.be.a('string');
                    (0, chai_1.expect)(url).to.be.a('string');
                });
                return done();
            }).catch(done);
        });
        it('Facebook Downloader V3', done => {
            (0, index_js_1.facebookdlv3)('https://fb.watch/9WktuN9j-z/').then(res => {
                (0, chai_1.expect)(res).to.be.an('object');
                (0, chai_1.expect)(res.title).to.be.a('string');
                (0, chai_1.expect)(res.thumbnail).to.be.a('string');
                (0, chai_1.expect)(res.result).to.be.an('array');
                (0, chai_1.expect)(res.result).to.have.lengthOf.at.least(1);
                res.result.forEach(({ url, quality, isAudio, isVideo }) => {
                    (0, chai_1.expect)(url).to.be.a('string');
                    (0, chai_1.expect)(quality).to.be.a('string');
                    (0, chai_1.expect)(isAudio).to.be.a('boolean');
                    (0, chai_1.expect)(isVideo).to.be.a('boolean');
                });
                return done();
            }).catch(done);
        });
    });
    describe('Twitter', () => {
        it('Twitter Downloader', done => {
            (0, index_js_1.twitterdl)('https://twitter.com/jen_degen/status/1458167531869458440?s=20').then(res => {
                (0, chai_1.expect)(res).to.be.an('array');
                res.forEach(({ quality, type, url, isVideo }) => {
                    (0, chai_1.expect)(quality).to.be.a('string');
                    (0, chai_1.expect)(type).to.be.a('string');
                    (0, chai_1.expect)(url).to.be.a('string');
                    (0, chai_1.expect)(isVideo).to.be.a('boolean');
                });
                return done();
            }).catch(done);
        });
        it('Twitter Downloader V2', done => {
            (0, index_js_1.twitterdlv2)('https://twitter.com/jen_degen/status/1458167531869458440?s=20').then(res => {
                (0, chai_1.expect)(res).to.be.an('array');
                res.forEach(({ quality, type, url }) => {
                    (0, chai_1.expect)(quality).to.be.a('string');
                    (0, chai_1.expect)(type).to.be.a('string');
                    (0, chai_1.expect)(url).to.be.a('string');
                });
                return done();
            }).catch(done);
        });
    });
    describe('Youtube', function () {
        it('Youtube Downloader', done => {
            (0, index_js_1.youtubedl)('https://youtu.be/iik25wqIuFo').then(res => {
                res.video['360p'].download().catch(done);
                (0, chai_1.expect)(res).to.be.an('object');
                (0, chai_1.expect)(res.thumbnail).to.be.a('string');
                (0, chai_1.expect)(res.title).to.be.a('string');
                (0, chai_1.expect)(res.video).to.be.an('object');
                (0, chai_1.expect)(res.audio).to.be.an('object');
                return done();
            }).catch(done);
        });
        it('Youtube Downloader v2', done => {
            (0, index_js_1.youtubedlv2)('https://youtu.be/iik25wqIuFo').then(res => {
                res.video['240p'].download().catch(done);
                (0, chai_1.expect)(res).to.be.an('object');
                (0, chai_1.expect)(res.thumbnail).to.be.a('string');
                (0, chai_1.expect)(res.title).to.be.a('string');
                (0, chai_1.expect)(res.video).to.be.an('object');
                (0, chai_1.expect)(res.audio).to.be.an('object');
                return done();
            }).catch(done);
        });
        it('Youtube Downloader v3', done => {
            (0, index_js_1.youtubedlv3)('https://youtu.be/iik25wqIuFo').then(res => {
                res.video['360'].download().catch(done);
                (0, chai_1.expect)(res).to.be.an('object');
                (0, chai_1.expect)(res.thumbnail).to.be.a('string');
                (0, chai_1.expect)(res.title).to.be.a('string');
                (0, chai_1.expect)(res.video).to.be.an('object');
                (0, chai_1.expect)(res.audio).to.be.an('object');
                return done();
            }).catch(done);
        });
        it('Youtube Search', done => {
            (0, index_js_1.youtubeSearch)('Minecraft').then(res => {
                (0, chai_1.expect)(res).to.be.an('object');
                (0, chai_1.expect)(res.video).to.be.an('array');
                (0, chai_1.expect)(res.video).to.have.lengthOf.at.least(1);
                (0, chai_1.expect)(res.channel).to.be.an('array');
                (0, chai_1.expect)(res.playlist).to.be.an('array');
                return done();
            }).catch(done);
        });
    });
    it('Google It', done => {
        (0, index_js_1.googleIt)('Minecraft').then(res => {
            (0, chai_1.expect)(res).to.be.an('object');
            (0, chai_1.expect)(res.info).to.be.an('object');
            (0, chai_1.expect)(res.articles).to.be.an('array');
            (0, chai_1.expect)(res.articles).to.have.lengthOf.at.least(1);
            return done();
        }).catch(done);
    });
    it('Group Whatsapp', done => {
        (0, index_js_1.groupWA)('A').then(res => {
            (0, chai_1.expect)(res).to.be.an('array');
            (0, chai_1.expect)(res).to.have.lengthOf.at.least(1);
            res.forEach(({ url, subject }) => {
                (0, chai_1.expect)(url).to.be.a('string');
                (0, chai_1.expect)(subject).to.be.a('string');
            });
            return done();
        }).catch(done);
    });
    describe('aiovideodl', () => {
        it('Tiktok download', done => {
            (0, index_js_1.aiovideodl)('https://www.tiktok.com/@omagadsus/video/7025456384175017243?is_from_webapp=1&sender_device=pc&web_id6982004129280116226').then(res => {
                (0, chai_1.expect)(res).to.be.an('object');
                (0, chai_1.expect)(res.medias).to.be.an('array');
                (0, chai_1.expect)(res.medias).to.have.lengthOf.at.least(1);
                (0, chai_1.expect)(res.source).to.be.eq('tiktok');
                return done();
            }).catch(done);
        });
        it('Facebook download', done => {
            (0, index_js_1.aiovideodl)('https://fb.watch/9WktuN9j-z/').then(res => {
                (0, chai_1.expect)(res).to.be.an('object');
                (0, chai_1.expect)(res.medias).to.be.an('array');
                (0, chai_1.expect)(res.medias).to.have.lengthOf.at.least(1);
                (0, chai_1.expect)(res.source).to.be.eq('facebook');
                return done();
            }).catch(done);
        });
        it('Twitter download', done => {
            (0, index_js_1.aiovideodl)('https://twitter.com/jen_degen/status/1458167531869458440?s=20').then(res => {
                (0, chai_1.expect)(res).to.be.an('object');
                (0, chai_1.expect)(res.medias).to.be.an('array');
                (0, chai_1.expect)(res.medias).to.have.lengthOf.at.least(1);
                (0, chai_1.expect)(res.source).to.be.eq('twitter');
                return done();
            }).catch(done);
        });
    });
    describe('Savefrom', () => {
        it('Tiktok download', done => {
            (0, index_js_1.savefrom)('https://www.tiktok.com/@omagadsus/video/7025456384175017243?is_from_webapp=1&sender_device=pc&web_id6982004129280116226').then(res => {
                (0, chai_1.expect)(res).to.be.an('object');
                (0, chai_1.expect)(res.url).to.be.an('array');
                (0, chai_1.expect)(res.url).to.have.lengthOf.at.least(1);
                (0, chai_1.expect)(res.hosting).to.be.eq('tiktok.com');
                return done();
            }).catch(done);
        });
        it('Facebook download', done => {
            (0, index_js_1.savefrom)('https://fb.watch/9WktuN9j-z/').then(res => {
                (0, chai_1.expect)(res).to.be.an('object');
                (0, chai_1.expect)(res.url).to.be.an('array');
                (0, chai_1.expect)(res.url).to.have.lengthOf.at.least(1);
                (0, chai_1.expect)(res.hosting).to.be.eq('facebook.com');
                return done();
            }).catch(done);
        });
        it('Twitter download', done => {
            (0, index_js_1.savefrom)('https://twitter.com/jen_degen/status/1458167531869458440?s=20').then(res => {
                (0, chai_1.expect)(res).to.be.an('object');
                (0, chai_1.expect)(res.url).to.be.an('array');
                (0, chai_1.expect)(res.url).to.have.lengthOf.at.least(1);
                (0, chai_1.expect)(res.hosting).to.be.eq('twitter.com');
                return done();
            }).catch(done);
        });
        it('Instagram download', done => {
            (0, index_js_1.savefrom)('https://www.instagram.com/reel/CXK49yFLtJ_/?utm_source=ig_web_copy_link').then(res => {
                (0, chai_1.expect)(res).to.be.an('object');
                (0, chai_1.expect)(res.url).to.be.an('array');
                (0, chai_1.expect)(res.url).to.have.lengthOf.at.least(1);
                (0, chai_1.expect)(res.hosting).to.be.eq('instagram.com');
                return done();
            }).catch(done);
        });
    });
});
//# sourceMappingURL=test.js.map