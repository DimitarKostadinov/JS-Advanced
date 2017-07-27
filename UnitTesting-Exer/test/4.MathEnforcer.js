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
   describe('addFive',function () {
      it('with a string (undefined)',function () {
          let result=mathEnforcer.addFive('nakov');
          expect(result).to.be.undefined;
      })
       it('with positive number',function () {
           let result=mathEnforcer.addFive(4);
           expect(result).to.be.equal(9,'Add five function did not work properly');
       })
       it('with negative number',function () {
           let result=mathEnforcer.addFive(-4);
           expect(result).to.be.equal(1,'Add five function did not work properly');
       })
       it('with floating number',function () {
           let result=mathEnforcer.addFive(3.14);
           expect(result).to.be.closeTo(8.14,0.01);
       })
   });
   //subtract
    describe('subtractTen',function () {
        it('with a string (undefined)',function () {
            let result=mathEnforcer.subtractTen('nakov');
            expect(result).to.be.undefined;
        })
        it('with positive number',function () {
            let result=mathEnforcer.subtractTen(12);
            expect(result).to.be.equal(2,'subtract ten function did not work properly');
        })
        it('with negative number',function () {
            let result=mathEnforcer.subtractTen(-8);
            expect(result).to.be.equal(-18,'Add five function did not work properly');
        })
        it('with floating number',function () {
            let result=mathEnforcer.subtractTen(12.43);
            expect(result).to.be.closeTo(2.43,0.01);
        })
    });
    //sum
    describe('SumNumbers',function () {
        it('first number as string(should return undefined)',function () {
            let result=mathEnforcer.sum('p',2);
            expect(result).to.be.undefined
        })
        it('second number as string(should return undefined)',function () {
            let result=mathEnforcer.sum(2,'p');
            expect(result).to.be.undefined
        })
        it('should sum two numbers correctly',function () {
            let result=mathEnforcer.sum(5,3);
            expect(result).to.be.equal(8);
        })
        it('should sum two numbers correctly',function () {
            let result=mathEnforcer.sum(-5,-3);
            expect(result).to.be.equal(-8);
        })
        it('should sum two numbers with floating points correctly',function () {
            let result=mathEnforcer.sum(5.14,3.83);
            expect(result).to.be.closeTo(8.97,0.001);
        })
    })
});
