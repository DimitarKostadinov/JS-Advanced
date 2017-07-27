let expect = require('chai').expect;
function makeList() {
    let data = [];
    return {
        addLeft: function(item) {
            data.unshift(item);
        },
        addRight: function(item) {
            data.push(item);
        },
        clear: function() {
            data = [];
        },
        toString: function() {
            return data.join(", ");
        }
    };
}
describe('list', function () {

    let myList={};
    beforeEach(function () {
        myList = makeList();
    });
        it('test empty list',function () {
                expect(myList.toString()).to.be.equal('')
            })
        it('check if  add items (addLeft)',function () {
            myList.addLeft('one');
            myList.addLeft(2);
            myList.addLeft(3);
            expect(myList.toString()).to.equal("3, 2, one")
        })
        it('check if  add items (addRight)',function () {
            myList.addRight('one');
            myList.addRight(2);
            myList.addRight(3);
            expect(myList.toString()).to.equal("one, 2, 3")
        })
        it('check if add items left and right correctly)',function () {
            myList.addRight(1);
            myList.addRight("two");
            myList.addLeft(0);
            expect(myList.toString()).to.equal("0, 1, two")
        })
        it('check if add items left and right correctly)',function () {
            myList.addLeft('beer');
            myList.addRight(3.14);
            myList.addRight(-5.123);
            expect(myList.toString()).to.equal("beer, 3.14, -5.123")
        })
        it('check if clear correctly)',function () {
            myList.addLeft('beer');
            myList.addRight(3.14);
            myList.clear();
            expect(myList.toString()).to.equal("")
        })
       it('Check clear() with empty string',function () {
           myList.clear();
           expect(myList.toString()).to.equal("")
       })



})

