module.exports = class Checkout{
    constructor() {
        this.prices = new Object();
        this.items = new Object();
        this.discounts = new Object();
    }

    addItemPrice (item, price) {
        this.prices[item] = price;
    }

    addItem (item) {
        if(this.prices[item] == undefined) {
            throw('No price defined for item' + item);
        }
        if(this.items[item] == undefined) {
            this.items[item] = 1;
        } else {
            this.items[item]++;
        }
    }

    calculateTotal() {
        var total = 0;
        for(var item in this.items) {
            total += this.calculateItemTotalItem(item);
        }
        return total;
    }

    calculateItemTotalItem(item) {
        var total = 0;
        var discount = this.discounts[item];
        if (discount != undefined) {
            total += this.calculateContitionDiscountItem(item, this.items[item], discount);
        } else {
            total += (this.prices[item] * this.items[item]);
        }
        return total;
    }

    calculateContitionDiscountItem (item, itemCnt, discount) {
        var total = 0;
        var numberOfDiscounts = itemCnt / discount.cnt;
        total += numberOfDiscounts * discount.price;
        var remainder = itemCnt % discount.cnt;
        total += remainder * this.prices[item];
        return total;
    }

    addDiscount(item, itemCnt, discountPrice) {
        this.discounts[item] = {cnt : itemCnt, price: discountPrice};
    }
}