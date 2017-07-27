let expect=require('chai').expect;
let jsdom=require('jsdom-global')();
let $ = require('jquery');

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

describe('EvenOdd Unit Tests',function () {
    it('test with not a string',function () {
        expect(isOddOrEven(53)).to.be.undefined
    })
    it('test with object',function () {
        expect(isOddOrEven({name:'pesho'})).to.be.undefined
    })
    it('test with empty',function () {
        expect(isOddOrEven('')).to.be.equal('even')
    })
    it('test with empty',function () {
        expect(isOddOrEven('abc')).to.be.equal('odd')
    })

})