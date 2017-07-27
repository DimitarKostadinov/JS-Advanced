let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

let listCreator = function(){
    let data = [];
    return {
        add: function(item) {
            data.push(item);
        },
        delete: function(index) {
            if (Number.isInteger(index) && index >= 0 && index < data.length) {
                return data.splice(index, 1)[0];
            } else {
                return undefined;
            }
        },
        toString: function() {
            return data.join(", ");
        }
    };
}

describe('list', function () {

    let list;
    beforeEach(function () {
        list = listCreator();
    });

    describe('Exam Tests',function () {
        describe('Test initial value of array',function () {
            it('test empty list',function () {
                expect(list.toString()).to.be.equal('')
            })
        })
        describe('addFunction tests',function () {
            it('Add items',function () {
                list.add(5);
                list.add('Pesho');
                list.add(true);
                expect(list.toString()).to.be.equal("5, Pesho, true")
            })
        })
        describe('DeleteFunction tests(index)',function () {
            it('Test index with integer',function () {
                list.add(5);
                list.add(5);
                list.add("pesho");
                list.delete(1)
                expect(list.toString()).to.be.equal('5, pesho')
            });
            it('Test index with string(undefined)',function () {
                expect(list.delete('gosho')).to.be.undefined
            })
            it('Test index with float(undefined)',function () {
                list.add(3)
                list.add(3)
                list.add(3)
                expect(list.delete(2.98)).to.be.undefined
            });
            it('Test index with negative index(undefined)',function () {
                list.add(3)
                list.add(3)
                list.add(3)
                expect(list.delete(-4)).to.be.undefined
            });
            it('Test index with index bigger than list length(undefined)',function () {
                list.add(5);
                list.add(5);
                list.add("pesho");
                expect(list.delete(5)).to.be.undefined;
            })
            it('Test if return the exact element',function () {
                list.add(3)
                list.add(2)
                list.add(1)
                list.delete(1)
                expect(list.toString()).to.be.equal('3, 1');
            })
            it('Test if return the exact element',function () {
                list.add('a')
                list.add('b')
                list.add('c')
                expect(list.delete(-1)).to.be.undefined;
            })
            it('Test if return the exact element',function () {
                list.add('a')
                list.add('b')
                list.add('c')
                list.delete(1.26);
                expect(list.toString()).to.be.equal('a, b, c');
            })
            it('Test if return the exact element',function () {
                list.add('a')
                list.add('b')
                list.add('c')
                expect(list.toString()).to.be.equal('a, b, c');
            })

        })
    })
});