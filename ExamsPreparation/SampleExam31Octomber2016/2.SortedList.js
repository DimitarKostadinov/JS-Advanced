let expect=require('chai').expect;

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
        if (this.list.length === 0) throw new Error("Collection is empty.");
        if (index < 0 || index >= this.list.length) throw new Error("Index was outside the bounds of the collection.");
    }

    sort() {
        this.list.sort((a, b) => a - b);
    }

    get size() {
        return this.list.length;
    }
}




describe('Sort List Testing',function () {
    let myList={};
    beforeEach(function () {
        myList=new SortedList();
    });
        it("should return function", function() {
            expect(typeof SortedList).to.be.equal('function')

            expect(SortedList.prototype.hasOwnProperty('add')).to.be.equal(true);
            expect(SortedList.prototype.hasOwnProperty('remove')).to.equal(true);
            expect(SortedList.prototype.hasOwnProperty('get')).to.equal(true);
            expect(SortedList.prototype.hasOwnProperty('size')).to.equal(true);

        });

        it('check if list is empty',function () {
            expect(myList.size).to.equal(0)
        })
        it('should ADD items and keep in ascending Order',function () {
            myList.add(3);
            myList.add(2);
            myList.add(1);
            myList.add(8);
            expect(myList.size).to.equal(4)
            expect(myList.get(0)).to.equal(1);
        })
    it('should Remove items',function () {
        myList.add(3);
        myList.add(3);
        myList.add(8);
        myList.remove(0)
        expect(myList.size).to.equal(2)
        expect(myList.get(0)).to.equal(3)
    })
    it('should Remove items and keep in ascending Order',function () {
        myList.add(3);
        myList.add(2);
        myList.add(1);
        myList.add(8);
        myList.remove(3);
        expect(myList.get(0)).to.equal(1);
        expect(myList.get(1)).to.equal(2);
        expect(myList.get(2)).to.equal(3);
        expect(myList.size).to.equal(3);
    })

    it('should keep  items in ascending Order',function () {
        myList.add(3);
        myList.add(2);
        myList.add(1);
        myList.add(8);
        myList.remove(0);
        expect(myList.get(0)).to.equal(2);
        expect(myList.get(1)).to.equal(3);
        expect(myList.get(2)).to.equal(8);
        expect(myList.size).to.equal(3)

    })
    it('should throw and error with incorrect index',function () {
        myList.add(3);
        myList.add(2);
        myList.add(1);
        expect(()=>myList.get(-1)).to.throw(Error);
        expect(()=>myList.remove(-1)).to.throw(Error)
    })
    it('should throw and error with incorrect index',function () {
        myList.add(3);
        myList.add(2);
        myList.add(1);
        expect(()=>myList.get(5)).to.throw(Error);
        expect(()=>myList.remove(5)).to.throw(Error)
    })
    it('should throw and error with incorrect index',function () {
        expect(()=>myList.get(0)).to.throw(Error);
        expect(()=>myList.remove(0)).to.throw(Error)
    })
})
