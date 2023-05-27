"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const index_js_1 = require("./index.js");
describe('News', () => {
    it('CNB indonesia', (done) => {
        (0, index_js_1.cnbindonesia)().then(data => {
            (0, chai_1.expect)(data).to.be.an('array');
            (0, chai_1.expect)(data).to.have.length.at.least(1);
            data.forEach(({ title, link, image, label, date }) => {
                (0, chai_1.expect)(title).to.be.a('string');
                (0, chai_1.expect)(link).to.be.a('string');
                (0, chai_1.expect)(image).to.be.a('string');
                (0, chai_1.expect)(label).to.be.a('string');
                (0, chai_1.expect)(date).to.be.a('string');
            });
            return done();
        }).catch(done);
    });
    it('antaranews', (done) => {
        (0, index_js_1.antaranews)().then(data => {
            (0, chai_1.expect)(data).to.be.an('array');
            (0, chai_1.expect)(data).to.have.length.at.least(1);
            data.forEach(({ title, link, image, label, date }) => {
                (0, chai_1.expect)(title).to.be.a('string');
                (0, chai_1.expect)(link).to.be.a('string');
                (0, chai_1.expect)(image).to.be.a('string');
                (0, chai_1.expect)(label).to.be.a('string');
                (0, chai_1.expect)(date).to.be.a('string');
            });
            return done();
        }).catch(done);
    });
    it('kompas', (done) => {
        (0, index_js_1.kompas)().then(data => {
            (0, chai_1.expect)(data).to.be.an('array');
            data.forEach(({ title, link, image, label, date }) => {
                (0, chai_1.expect)(title).to.be.a('string');
                (0, chai_1.expect)(link).to.be.a('string');
                (0, chai_1.expect)(image).to.be.a('string');
                (0, chai_1.expect)(label).to.be.a('string');
                (0, chai_1.expect)(date).to.be.a('string');
            });
            return done();
        }).catch(done);
    });
    it('Suara.com', (done) => {
        (0, index_js_1.suaracom)().then(data => {
            (0, chai_1.expect)(data).to.be.an('array');
            data.forEach(({ title, link, image, description, date }) => {
                (0, chai_1.expect)(title).to.be.a('string');
                (0, chai_1.expect)(link).to.be.a('string');
                (0, chai_1.expect)(image).to.be.a('string');
                (0, chai_1.expect)(description).to.be.a('string');
                (0, chai_1.expect)(date).to.be.a('string');
            });
            return done();
        }).catch(done);
    });
    it('Liputan6', (done) => {
        (0, index_js_1.liputan6)().then(data => {
            (0, chai_1.expect)(data).to.be.an('array');
            data.forEach(({ title, link, image, description, label, date }) => {
                (0, chai_1.expect)(title).to.be.a('string');
                (0, chai_1.expect)(link).to.be.a('string');
                (0, chai_1.expect)(image).to.be.a('string');
                (0, chai_1.expect)(description).to.be.a('string');
                (0, chai_1.expect)(label).to.be.a('string');
                (0, chai_1.expect)(date).to.be.a('string');
            });
            return done();
        }).catch(done);
    });
    it('Merdeka', (done) => {
        (0, index_js_1.merdeka)().then(data => {
            (0, chai_1.expect)(data).to.be.an('array');
            data.forEach(({ title, link, image, label, date }) => {
                (0, chai_1.expect)(title).to.be.a('string');
                (0, chai_1.expect)(link).to.be.a('string');
                (0, chai_1.expect)(image).to.be.a('string');
                (0, chai_1.expect)(label).to.be.a('string');
                (0, chai_1.expect)(date).to.be.a('string');
            });
            return done();
        }).catch(done);
    });
});
//# sourceMappingURL=test.js.map