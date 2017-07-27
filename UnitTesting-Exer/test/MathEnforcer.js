let expect=require('chai').expect;
let jsdom=require('jsdom-global')();
let $ = require('jquery');

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};
describe('Math Enforcer Unit Tests',function () {
   describe('addFive function tests',function () {
       it('test with a string value',function () {
           expect(mathEnforcer.addFive('pesho')).to.be.undefined
       });
       it('test with a floating value',function () {
           expect(mathEnforcer.addFive(3.14)).to.be.closeTo(8.14,0.01,'floating not work properly')
       });
       it('test with a positive value',function () {
           expect(mathEnforcer.addFive(5)).to.be.equal(10)
       });
       it('test with a negative value',function () {
           expect(mathEnforcer.addFive(-5)).to.be.equal(0);
       });
   })
    describe('subtractTen function tests',function () {
        it('test with a string value',function () {
            expect(mathEnforcer.subtractTen('pesho')).to.be.undefined
        });
        it('test with a floating value',function () {
            expect(mathEnforcer.subtractTen(3.14)).to.be.closeTo(-6.86,0.01,'floating not work properly')
        });
        it('test with a positive value',function () {
            expect(mathEnforcer.subtractTen(5)).to.be.equal(-5)
        });
        it('test with a negative value',function () {
            expect(mathEnforcer.subtractTen(-5)).to.be.equal(-15);
        });
    })
    describe('sum Function tests',function () {
        it('test if both parameters are numbers',function () {
            expect(mathEnforcer.sum('5',5)).to.be.undefined
        })
        it('test if both parameters are numbers',function () {
            expect(mathEnforcer.sum(5,'4')).to.be.undefined
        })
        it('test if both parameters are numbers',function () {
            expect(mathEnforcer.sum('5','5')).to.be.undefined
        })
        it('test if both parameters are numbers',function () {
            expect(mathEnforcer.sum(5,5)).to.be.equal(10)
        })
        it('test if both parameters are numbers',function () {
            expect(mathEnforcer.sum(5,-3)).to.be.equal(2)
        })
        it('test if both parameters are numbers',function () {
            expect(mathEnforcer.sum(-5,-5)).to.be.equal(-10)
        })
        it('test if both parameters are numbers',function () {
            expect(mathEnforcer.sum(5.13,5.17)).to.be.closeTo(10.30,0.01);
        })
        it('test if both parameters are numbers',function () {
            expect(mathEnforcer.sum(-5.13,-5.16)).to.be.closeTo(-10.29,0.01);
        })
        it('test if both parameters are numbers',function () {
            expect(mathEnforcer.sum(5)).to.be.undefined
        })

    })
});
