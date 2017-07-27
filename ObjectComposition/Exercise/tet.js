function solve(testString,n) {
    let result=[]
    // for (let i = n; i < testString.length; i++) {
    //     result.push(testString[i]);
    // }
    let str=testString.slice(n)
    result.push(str);
    console.log(result)
}
solve('12345',1)