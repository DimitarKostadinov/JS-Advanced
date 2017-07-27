let expect=require('chai').expect;
let jsdom=require('jsdom-global')();
let $ = require('jquery');

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

describe('Lookup CharTests',function () {
    it('test first parameter with not a string',function () {
        expect(lookupChar(133232,3)).to.be.undefined
    })
    it('test second parameter with incorrect data',function () {
        expect(lookupChar('pesho',3.15)).to.be.undefined
    })
    it('test both parameters with incorrect data',function () {
        expect(lookupChar(5151513123,3.15)).to.be.undefined
    })
    it('test with correct parameters',function () {
        expect(lookupChar('pesho',3)).to.be.equal('h','return correct char');
    })
    it('test with incorrect index value',function () {
        expect(lookupChar('pesho',8)).to.be.equal('Incorrect index')
    })
    it('test with incorrect index value',function () {
        expect(lookupChar('pesho',-2)).to.be.equal('Incorrect index')
    })
    it('test with incorrect index value',function () {
        expect(lookupChar('pesho',0)).to.be.equal('p')
    })

})
