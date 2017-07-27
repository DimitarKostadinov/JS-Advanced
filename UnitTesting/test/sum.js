function sum(arr) {
    let sum = 0;
    for (num of arr)
        sum += Number(num);
    return sum;
}
describe('Test summator',function () {
    it('Should return 3 for[1,2]'), function () {
        let expected=3;
        let actual=sum([1,2]);
        if(expected!==actual) throw new Error('3!=1+2');
    }
})