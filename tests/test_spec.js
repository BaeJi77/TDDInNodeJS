const expect = require('chai').expect;

describe('test_suite1', function () {

    it('expect true', function () {
        expect(true).to.equal(true);
    });
});

describe('test_suite2', function () {
    before('setup code', function () {
        console.log("before");
    });
    
    after('teardown code', function () {
        console.log("after");
    });
    
    beforeEach('setup for each test', function () {
        console.log("Setup code for each test");
    });

    afterEach('teardown for each test', function () {
        console.log("teardown code for each test");
    });

    it('expect false', function () {
        console.log("test2");
        expect(false).to.equal(false);
    });

    it('test2', function () {
        console.log('test2');
        expect(true).to.equal(true);
    });
});

