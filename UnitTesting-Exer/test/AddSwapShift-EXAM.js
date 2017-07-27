let expect = require('chai').expect;
function createList() {
    let data = [];
    return {
        add: function (item) {
            data.push(item)
        },
        shiftLeft: function () {
            if (data.length > 1) {
                let first = data.shift();
                data.push(first);
            }
        },
        shiftRight: function () {
            if (data.length > 1) {
                let last = data.pop();
                data.unshift(last);
            }
        },
        swap: function (index1, index2) {
            if (!Number.isInteger(index1) || index1 < 0 || index1 >= data.length ||
                !Number.isInteger(index2) || index2 < 0 || index2 >= data.length ||
                index1 === index2) {
                return false;
            }
            let temp = data[index1];
            data[index1] = data[index2];
            data[index2] = temp;
            return true;
        },
        toString: function () {
            return data.join(", ");
        }
    };
}
describe('list', function () {

    let list = {};
    beforeEach(function () {
        list = createList();
    });
    it('test initial value of list(should be empty)',function () {
        expect(list.toString()).to.equal("");
    })
    it('test add function',function () {
        list.add(1);
        list.add("two");
        list.add(3);
        expect(list.toString()).to.equal("1, two, 3")
    })
    it('test SHIFT-LEFT function with empty list',function () {
        list.shiftLeft();
        expect(list.toString()).to.equal("");
    })
    it('test SHIFT-LEFT function with one element',function () {
        list.add(3)
        list.shiftLeft();
        expect(list.toString()).to.equal("3");
    })
    it('test SHIFT-LEFT function with more elements',function () {
        list.add(1);
        list.add("two");
        list.add(3);
        list.shiftLeft();
        expect(list.toString()).to.equal("two, 3, 1");
        list.shiftLeft();
        expect(list.toString()).to.equal("3, 1, two");
    })
    it('test SHIFT-RIGHT function with empty list',function () {
        list.shiftRight();
        expect(list.toString()).to.equal("");
    })
    it('test SHIFT-LEFT function with one element',function () {
        list.add(3)
        list.shiftRight();
        expect(list.toString()).to.equal("3");
    })
    it('test SHIFT-RIGHT with more elements',function () {
        list.add("two");
        list.add(3);
        list.add(1);
        list.add('four');
        list.shiftRight();
        expect(list.toString()).to.equal("four, two, 3, 1");
    })
    it('test SHIFT-LEFT then SHIFT-RIGHT with more elements',function () {
        list.add(1);
        list.add("two");
        list.add(3);
        list.shiftLeft()
        list.add("four");
        list.shiftRight();
        expect(list.toString()).to.equal("four, two, 3, 1");
    })
    describe('Swap TESTS',function () {
        it('test Swap with Negative Index',function () {
            expect(list.swap(-1,-2)).to.equal(false)
        })
        it('test Swap with Zeros Index',function () {
            expect(list.swap(0,0)).to.equal(false)
        })
        it('test Swap with Negative and Zero Index',function () {
            expect(list.swap(-1,0)).to.equal(false)
        })
        it('test Swap with Zero and Bigger Index',function () {
            expect(list.swap(0,11)).to.equal(false)
        })
        it('test Swap with  Bigger Index and Zero ',function () {
            list.add(1);
            list.add("two");
            list.add(3);
            expect(list.swap(11,0)).to.equal(false)
        })
        it('test Swap with Bigger Index',function () {
            list.add(1);
            list.add("two");
            list.add(3);
            expect(list.swap(-3,1)).to.equal(false);
            expect(list.toString()).to.equal('1, two, 3')
        })
        it('test Swap with Bigger Index',function () {
            list.add(1);
            list.add("two");
            list.add(3);
            expect(list.swap(5,1)).to.equal(false)
        })

        it('test Swap with Float Index',function () {
            list.add(1);
            list.add("two");
            list.add(3);
            expect(list.swap(1.3,2)).to.equal(false)
        })
        it('test Swap with Float Index',function () {
            list.add(1);
            list.add("two");
            list.add(3);
            expect(list.swap(1,2.5)).to.equal(false)
        })
        it('test Swap with String Index',function () {
            list.add(1);
            list.add("two");
            expect(list.swap('first',2)).to.equal(false)
        })
        it('test Swap with String Index',function () {
            list.add(1);
            list.add("two");
            expect(list.swap(2,'first')).to.equal(false)
        })
        it('test Swap with Equal Index',function () {
            list.add(1);
            list.add("two");
            expect(list.swap(1,1)).to.equal(false)
        })
        it('test Swap with Right Index',function () {
            list.add(1);
            list.add(2);
            list.add(3);
            list.add(4);
            list.swap(0,3);
            expect(list.swap(1,2)).to.equal(true);
            expect(list.swap(1,1)).to.equal(false)
            expect(list.toString()).to.equal('4, 3, 2, 1')
        })
        it('test Swap withWrong Index',function () {
            list.add(1);
            list.add(2);
            list.add(3);
            list.add(4);
            list.swap(0,7);
            expect(list.toString()).to.equal('1, 2, 3, 4')
        })
        it('test Swap withWrong and Right Index',function () {
            list.add(1);
            list.add(2);
            list.add(3);
            list.add(4);
            list.swap(1,8);
            list.swap(0,4);
            expect(list.swap(0,3)).to.equal(true);
            expect(list.toString()).to.equal('4, 2, 3, 1')
        })
        it('test Swap withWrong and Right Index',function () {
            list.add(1);
            list.add(2);
            list.add(3);
            list.add(4);
            list.swap(0,4);
            list.swap(1,8);
            expect(list.swap(0,3)).to.equal(true);
            expect(list.toString()).to.equal('4, 2, 3, 1')
        })
        it('with a non integer first index, should not change the collection', function () {
            list.add('one');
            list.add('two');
            list.swap([4, 13], 1);
            expect(list.toString()).to.equal("one, two");
        });
        it('with equal indexes, collection should stay the same', function () {
            list.add('one');
            list.add('two');
            list.add('three');
            list.swap(1, 1);
            expect(list.toString()).to.equal("one, two, three");
        });
        it('test Swap with Bigger Index',function () {
            list.add(1);
            list.add(2);
            list.add(3);
            list.add(4);
            expect(list.swap(2,1)).to.equal(true);
        })
    })


})