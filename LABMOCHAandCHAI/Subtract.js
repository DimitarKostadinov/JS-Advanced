function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
};
let expect = require("chai").expect;

describe("add/Sub", function() {
    let calc;
    beforeEach(function () {
        calc=createCalculator();
    });
    it("should return typeof function", function() {
        expect(typeof calc).to.be.equal('object')
    });
    it("should return typeof function", function() {
        expect(calc.get()).to.be.equal(0)
    });
    it("should return typeof function", function() {
        calc.add(5)
        calc.add(3)
        expect(calc.get()).to.be.equal(8)
    });
    it("should return typeof function", function() {
        calc.add(5)
        calc.add(3)
        calc.subtract(3)
        expect(calc.get()).to.be.equal(5)
    });
    it("should return typeof function", function() {
        calc.add(-2)
        calc.add(-5)
        calc.subtract(3)
        expect(calc.get()).to.be.equal(-10)
    });
    it("should return typeof function", function() {
        calc.add(-2)
        calc.add(-5)
        calc.subtract(-3)
        expect(calc.get()).to.be.equal(-4)
    });
    it("fractions", function() {
        calc.add(3.14)
        calc.subtract(1.13)
        expect(calc.get()).to.be.closeTo(2.01,0.00000001)
    });
    it("junkData", function() {
        calc.add('hello')
        expect(calc.get()).to.be.NaN
    });
    it("junkData", function() {
        calc.subtract('hello')
        expect(calc.get()).to.be.NaN
    });
    it("should return typeof function", function() {
        calc.add('2')
        calc.add(5)
        calc.subtract(3)
        expect(calc.get()).to.be.equal(4)
    });
    it("should return typeof function", function() {
        calc.add('2')
        calc.subtract('3')
        expect(calc.get()).to.be.equal(-1)
    });


});

// let calc=createCalculator();
// calc.add(5);
// console.log(calc.get());
// calc.add(-30);
// calc.subtract(-18)
// console.log(calc.get());
// let calc2=createCalculator();
// calc2.add('ivan');
// console.log(calc2.get());
// let calc3=createCalculator();
// calc3.add(-5);
// console.log(calc.get());
// calc3.subtract(-30);
// console.log(calc3.get());


