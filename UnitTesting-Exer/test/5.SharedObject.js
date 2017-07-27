let expect=require('chai').expect;
let jsdom=require('jsdom-global')();
let $ = require('jquery');
let sharedObject = {
    name: null,
    income: null,
    changeName: function (name) {
        if (name.length === 0) {
            return;
        }
        this.name = name;
        let newName = $('#name');
        newName.val(this.name);
    },
    changeIncome: function (income) {
        if (!Number.isInteger(income) || income <= 0) {
            return;
        }
        this.income = income;
        let newIncome = $('#income');
        newIncome.val(this.income);
    },
    updateName: function () {
        let newName = $('#name').val();
        if (newName.length === 0) {
            return;
        }
        this.name = newName;
    },
    updateIncome: function () {
        let newIncome = $('#income').val();
        if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
            return;
        }
        this.income = Number(newIncome);
    }
};


document.body.innerHTML=`<body>
    <div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
    </div>
</body>`;

describe('SharedObject Unit Tests',function () {
    describe('Initial Value',function () {
        it('test name with initial value',function () {
            expect(sharedObject.name).to.be.null
        })
        it('test income with initial value',function () {
            expect(sharedObject.income).to.be.null
        })
    });
    describe('ChangeName tests',function () {
        it('with empty string(name should be null)',function () {
            sharedObject.changeName('');
            expect(sharedObject.name).to.be.null
        })
        it('with not-empty string(name should not be null)',function () {
            sharedObject.changeName('test');
            expect(sharedObject.name).to.be.equal('test','name did not change correctly');
        })
        describe('Name input tests',function () {

            it('with empty string(name should be null)',function () {
                sharedObject.changeName('Nakov');//за да тестваме дали е минало
                sharedObject.changeName('');//ТОВА
                let nameTxtVal=$('#name')
                expect(nameTxtVal.val()).to.be.equal('Nakov');
            })
            it('with not-empty string(name should not be null)',function () {
                sharedObject.changeName('Pesho');
                let nameTxtVal=$('#name')
                expect(nameTxtVal.val()).to.be.equal('Pesho','name did not change correctly');
            })
        })
    })
    describe('ChangeIncome tests',function () {
        it('with a string(should stay null',function () {
            sharedObject.changeIncome('dd');
            expect(sharedObject.income).to.be.null
        })
        it('with a floating(should stay null',function () {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(4.11);
            expect(sharedObject.income).to.be.equal(5);
        })
        it('with a negative number(should stay null',function () {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(-6);
            expect(sharedObject.income).to.be.equal(5);
        })
        it('with a zero(should stay null',function () {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(0);
            expect(sharedObject.income).to.be.equal(5);
        })
        it('with a possitive',function () {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(4);
            expect(sharedObject.income).to.be.equal(4);
        })
        
        describe('ChangeIncome for html',function () {
            it('with a string(should  not change correctly',function () {
                sharedObject.changeIncome(5);
                sharedObject.changeIncome('d');
                let newIncomeTxt=$('#income');
                expect(newIncomeTxt.val()).to.be.equal('5')
            })
            it('with a positive number',function () {
                sharedObject.changeIncome(5);
                let newIncomeTxt=$('#income');
                expect(newIncomeTxt.val()).to.be.equal('5')
            })
            it('with a positive number',function () {
                sharedObject.changeIncome(5);
                sharedObject.changeIncome(2.11);
                let newIncomeTxt=$('#income');
                expect(newIncomeTxt.val()).to.be.equal('5')
            })
            it('with a positive number',function () {
                sharedObject.changeIncome(5);
                sharedObject.changeIncome(-4);
                let newIncomeTxt=$('#income');
                expect(newIncomeTxt.val()).to.be.equal('5')
            })
            it('with a positive number',function () {
                sharedObject.changeIncome(5);
                sharedObject.changeIncome(0);
                let newIncomeTxt=$('#income');
                expect(newIncomeTxt.val()).to.be.equal('5')
            })
        })
    })
    describe('updateName tests',function () {
        it('with empty string(shound not change)',function () {
            sharedObject.changeName('gosho')
            let newName=$('#name');
            newName.val('');
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal('gosho')
        })
        it('with non-empty string(shound change)',function () {
            sharedObject.changeName('gosho')
            let newName=$('#name');
            newName.val('vanka');
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal('vanka')
        })
    })
    describe('updateIncome Test',function () {
        it('should not work with string',function () {
            sharedObject.changeIncome(3);
            let newIncome=$('#income');
            newIncome.val('p');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(3);

        })
        it('should not work with floating',function () {
            sharedObject.changeIncome(3);
            let newIncome=$('#income');
            newIncome.val('-5.14');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(3);

        })
        it('should not work with negative',function () {
            sharedObject.changeIncome(3);
            let newIncome=$('#income');
            newIncome.val('-5');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(3);

        })
        it('should not work with zero',function () {
            sharedObject.changeIncome(3);
            let newIncome=$('#income');
            newIncome.val('0');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(3);
        })
        it('should  work with positive',function () {
            sharedObject.changeIncome(5);
            let newIncome=$('#income');
            newIncome.val('3');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(3);

        })
    })
})
