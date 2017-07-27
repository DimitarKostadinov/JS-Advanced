function counterClosure() {
    let count=0;
    function countIncrease() {
        console.log(++count)
    }
    return countIncrease;
}


let b=(function () {
    let num=0;
    return function () {
        console.log(++num);
    }
})();

function counter() {
    let counter=0;
    function increaseCount() {
        console.log(++counter);
    }
    return increaseCount;
}
let c=counter();
c();
c();



let iife=(function () {
    let counter=0;
    return function () {
        console.log(++counter);
    }
})();
iife();
iife();
iife();
iife();