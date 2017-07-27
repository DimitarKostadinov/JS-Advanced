function gcd(x, y) {
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
        let temp = y;
        y = x % y;
        x = temp;
    }
    return x;
}
console.log(gcd(252, 105));