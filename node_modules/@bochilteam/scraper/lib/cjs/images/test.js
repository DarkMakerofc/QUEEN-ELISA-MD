"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const index_js_1 = require("./index.js");
describe('Images', () => {
    it('google-image', done => {
        (0, index_js_1.googleImage)('Minecraft').then(res => {
            (0, chai_1.expect)(res).to.be.an('array');
            res.forEach(v => (0, chai_1.expect)(v).to.be.a('string'));
            return done();
        }).catch(done);
    });
    it('pinterest', done => {
        (0, index_js_1.pinterest)('Minecraft').then(res => {
            (0, chai_1.expect)(res).to.be.an('array');
            res.forEach(v => (0, chai_1.expect)(v).to.be.a('string'));
            return done();
        }).catch(done);
    });
    describe('Wallpaper', () => {
        it('wallpaper', done => {
            (0, index_js_1.wallpaper)('Minecraft').then(res => {
                (0, chai_1.expect)(res).to.be.an('array');
                res.forEach(v => (0, chai_1.expect)(v).to.be.a('string'));
                return done();
            }).catch(done);
        });
        it('wallpaper V2', done => {
            (0, index_js_1.wallpaperv2)('Wallpaper Anime').then(res => {
                (0, chai_1.expect)(res).to.be.an('array');
                res.forEach(v => (0, chai_1.expect)(v).to.be.a('string'));
                return done();
            }).catch(done);
        });
        // it ('Wallpaper V3', done => {
        //     wallpaperv3('Wallpaper HD').then(res => {
        //         expect(res).to.be.an('array')
        //         res.forEach(v => expect(v).to.be.a('string'))
        //         return done()
        //     }).catch(done)
        // })
    });
    it('Sticker Telegram', done => {
        (0, index_js_1.stickerTelegram)('Minecraft').then(res => {
            (0, chai_1.expect)(res).to.be.an('array');
            res.forEach(v => (0, chai_1.expect)(v).to.be.an('object'));
            return done();
        }).catch(done);
    });
    it('Sticker Line', done => {
        (0, index_js_1.stickerLine)('Anime').then(res => {
            (0, chai_1.expect)(res).to.be.an('array');
            res.forEach(v => (0, chai_1.expect)(v).to.be.an('object'));
            return done();
        }).catch(done);
    });
});
//# sourceMappingURL=test.js.map