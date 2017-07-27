let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

class SortedList {
    constructor() {
        this.list = [];
    }

    add(element) {
        this.list.push(element);
        this.sort();
    }

    remove(index) {
        this.vrfyRange(index);
        this.list.splice(index, 1);
    }

    get(index) {
        this.vrfyRange(index);
        return this.list[index];
    }

    vrfyRange(index) {
        if (this.list.length == 0) throw new Error("Collection is empty.");
        if (index < 0 || index >= this.list.length) throw new Error("Index was outside the bounds of the collection.");
    }

    sort() {
        this.list.sort((a, b) => a - b);
    }

    get size() {
        return this.list.length;
    }
}


describe('list', function () {
    let myList={};
    beforeEach(function () {
        myList = new SortedList();
    });
    describe('SortedList Tests',function () {
        it('should return function',function () {
            expect(typeof SortedList).to.equal('function');
            expect(SortedList.prototype.hasOwnProperty('add')).to.equal(true);
            expect(SortedList.prototype.hasOwnProperty('remove')).to.equal(true);
            expect(SortedList.prototype.hasOwnProperty('get')).to.equal(true);
            expect(SortedList.prototype.hasOwnProperty('size')).to.equal(true)
        });
        it('test initial value of array',function () {
            expect(myList.size).to.equal(0);
        });
        it('Check if add element correct and order',function () {
            myList.add(1);
            myList.add(2);
            myList.add(8);
            expect(myList.size).to.equal(3);
            expect(myList.get(0)).to.equal(1);
        });
        it('Check if remove element correct',function () {
            myList.add(1);
            myList.add(2);
            myList.add(2);
            myList.add(8);
            myList.remove(0);
            expect(myList.size).to.equal(3);
            expect(myList.get(0)).to.equal(2)

        });
        it('check if remove items and check order',function () {
            myList.add(3);
            myList.add(2);
            myList.add(1);
            myList.add(8);
            myList.remove(3);
            expect(myList.get(0)).to.equal(1);
            expect(myList.get(1)).to.equal(2);
            expect(myList.get(2)).to.equal(3);
            expect(myList.size).to.equal(3);

        });
        it('Shouldnt work with negative  index',function () {
            myList.add(1);
            myList.add(8);
            expect(()=>myList.remove(-1)).to.throw(Error);
            expect(()=>myList.get(-1)).to.throw(Error);
        });
        it('Shouldnt work with greater  index',function () {
            myList.add(1);
            myList.add(8);
            expect(()=>myList.remove(10)).to.throw(Error);
            expect(()=>myList.get(10)).to.throw(Error);
        });
        it('Shouldnt work with empty list',function () {
            expect(()=>myList.remove(0)).to.throw(Error);
            expect(()=>myList.get(0)).to.throw(Error)
        })


    })
});
