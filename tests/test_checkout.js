var expect = require('chai').expect;
const Checkout = require('../checkout');

var checkout;

beforeEach(function () {
    checkout = new Checkout();
    checkout.addItemPrice('a',1 );
    checkout.addItemPrice('b',2 );
});

// 바로 밑에 있는 test로 인해 모든 것이 테스트 가능하기 때문에 생략 가능
//
// it('Can instantiate checkout', function () {
//     // var checkout = new Checkout();
//     checkout.addItemPrice('a', 1);
// });
//
// it('Can add item price', function () {
//     // var checkout = new Checkout();
//     checkout.addItemPrice('a', 1);
//     checkout.addItem('a');
// })

it('Can calculate te current total', function () {
    checkout.addItem('a');
    expect(checkout.calculateTotal()).to.equal(1);
});

it('Can add amultiple items and get correct total', function () {
    checkout.addItem('a');
    checkout.addItem('b');
    expect(checkout.calculateTotal()).to.equal(3);
});

it('Can add discount rule', function () {
    checkout.addDiscount('a',3 ,2);
});

it('Can apply discount rules to the total', function () {
    checkout.addDiscount('a', 3, 2);
    checkout.addItem('a');
    checkout.addItem('a');
    checkout.addItem('a');
    expect(checkout.calculateTotal()).to.equal(2);
})

it('Throws when item added with no price', function () {
    expect(function () {
        checkout.addItem('c')
    }).to.throw();
})