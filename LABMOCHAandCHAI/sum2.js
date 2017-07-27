function sum(arr) {
    let sum = 0;
    for (num of arr)
        sum += Number(num);
    return sum;

}
let expect = require("chai").expect;

describe("Test summator", function() {
        it("should return 0", function() {
            expect(sum([])).to.be.equal(0)
        });


        it("should return 3 for [1, 2]", function() {
            expect(sum([1,2])).to.be.equal(3)
        });

        it("should return 3 if input is correct", function() {
            expect(sum(['1',2])).to.be.equal(3)
        });
        it("should return NaN", function() {
        expect(sum(['1','pesho',2])).to.be.NaN
        });
});
