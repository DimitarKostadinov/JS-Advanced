function isSymmetric(arr) {
    if (!Array.isArray(arr))
        return false; // Non-arrays are non-symmetric
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}
let expect = require("chai").expect;

describe("Test Symmetric", function() {
    it("return false if it's not an array", function() {
        expect(isSymmetric({})).to.be.false
    });
    it("return false if it's not an array", function() {
        expect(isSymmetric(1,2,3)).to.be.false
    });
    it("return false if it's not an array", function() {
        expect(isSymmetric([])).to.be.true
    });
    it("return false if it's not an array", function() {
        expect(isSymmetric(['a'])).to.be.true
    });
    it("return false if it's not an array", function() {
        expect(isSymmetric(['a','b','b','a'])).to.be.true
    });
    it("return false if it's not an array", function() {
        expect(isSymmetric(['a','b','c','b','a'])).to.be.true
    });
    it("return false if it's not an array", function() {
        expect(isSymmetric(['a','b'])).to.be.false;
    });
    it("return false if it's not an array", function() {
        expect(isSymmetric(['a','a'])).to.be.true;
    });
    it("return false if it's not an array", function() {
        expect(isSymmetric(['a','b','b','a','b'])).to.be.false;
    });
    it("return false if it's not an array", function() {
        expect(isSymmetric([1,'2',3,2,1])).to.be.false;
    });
    it("return false if it's not an array", function() {
        expect(isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5])).to.be.true;
    });


});
