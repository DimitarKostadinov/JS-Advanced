let expect=require('chai').expect;
class Sumator {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    sumNums() {
        let sum = 0;
        for (let item of this.data)
            if (typeof (item) === 'number')
                sum += item;
        return sum;
    }
    removeByFilter(filterFunc) {
        this.data = this.data.filter(x => !filterFunc(x));
    }
    toString() {
        if (this.data.length > 0)
            return this.data.join(", ");
        else
            return '(empty)';
    }
}

describe('Sumator Testing',function () {
    let myList={};
    beforeEach(function () {
        myList=new Sumator();
    })
    it('should return function',function () {
        expect(typeof Sumator).to.be.equal('function')
        expect(Sumator.prototype.hasOwnProperty('add')).to.be.equal(true);
        expect(Sumator.prototype.hasOwnProperty('sumNums')).to.be.equal(true);
        expect(Sumator.prototype.hasOwnProperty('removeByFilter')).to.be.equal(true);
    })
    it('check if list is empty',function () {
        expect(myList.toString()).to.equal('(empty)')
    })
    it('Add function test',function () {
        myList.add(5);
        myList.add('pesho');
        expect(myList.toString()).to.equal('5, pesho')
    })
    it('Add function test2',function () {
        myList.add();
        myList.add('pesho');
        expect(myList.toString()).to.equal(', pesho')
    })
    it('Add function test3',function () {
        myList.add();
        expect(myList.toString()).to.equal('')
    })

    //sumNums

    it('sumNums functionality initial value should be 0',function () {
        expect(myList.sumNums()).to.equal(0)
    })
    it('sumNums functionality with empty string',function () {
        myList.add()
        expect(myList.sumNums()).to.equal(0)
    })
    it('sumNums functionality with string',function () {
        myList.add('gosho')
        expect(myList.sumNums()).to.equal(0)
        expect(myList.toString()).to.equal('gosho')
    })
    it('sumNums functionality with string Number',function () {
        myList.add('5')
        myList.add('7')
        expect(myList.sumNums()).to.equal(0)
    })
    it('sumNums functionality with string and number',function () {
        myList.add(1);
        myList.add('5');
        expect(myList.sumNums()).to.equal(1)
    })
    it('sumNums functionality with string and string',function () {
        myList.add('a[]');
        myList.add('5,18');
        expect(myList.sumNums()).to.equal(0)
    })

    //correct sumNums
    it('sumNums functionality with two digits',function () {
        myList.add(1);
        myList.add(9);
        expect(myList.sumNums()).to.equal(10);
        expect(myList.toString()).to.equal('1, 9')
    })
    it('sumNums functionality with two digits(float)',function () {
        myList.add(1.55);
        myList.add(8.45);
        expect(myList.sumNums()).to.equal(10);
        expect(myList.toString()).to.equal('1.55, 8.45')
    })
    it('sumNums functionality with two zeros',function () {
        myList.add(0);
        myList.add(0);
        expect(myList.sumNums()).to.equal(0);
        expect(myList.toString()).to.equal('0, 0')
    })
    it('sumNums functionality with many digits',function () {
        myList.add(5);
        myList.add(8);
        myList.add(2);

        expect(myList.sumNums()).to.equal(15);
        expect(myList.toString()).to.equal('5, 8, 2')
    })

    //removeByFilter

    it('removeByFilter functionality with many digits',function () {
        myList.add(1);
        myList.add(2);
        myList.add('three');
        myList.add(4);
        myList.add('5.5');
        myList.add(7.7);
        myList.removeByFilter(x => typeof (x)=== 'number');
        expect(myList.toString()).to.equal('three, 5.5')
    })
    it('removeByFilter functionality with many digits',function () {
        myList.add(1);
        myList.add(2);
        myList.add('three');
        myList.add(4);
        myList.add('5.5');
        myList.add(7.7);
        myList.removeByFilter(x => x % 2 === 0);
        expect(myList.toString()).to.equal('1, three, 5.5, 7.7')
    })

})