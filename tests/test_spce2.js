const expect = require('chai').expect;

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


describe('test_suite2', function () {

    it('expect false', function () {
        console.log("test2");
        expect(false).to.equal(false);
    });

    it('test2', function () {
        console.log('test2');
        expect(true).to.equal(true);
    });
});

