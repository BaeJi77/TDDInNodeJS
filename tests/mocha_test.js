const expect = require('chai').expect;

describe('test_suite1', function () {

    it('expect true', function () {
        expect(true).to.equal(false);
    });
});

describe('test_suite2', function () {
    it('expect false', function () {
        expect(false).to.equal(false);
    })
});

