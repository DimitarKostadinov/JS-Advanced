function fibonaci() {
    let f1=0;
    let f2=1;
     return function fib () {
        let f3=f1+f2;
        f1=f2;
        f2=f3;
        return f1;
    };
}
let fib=fibonaci();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
