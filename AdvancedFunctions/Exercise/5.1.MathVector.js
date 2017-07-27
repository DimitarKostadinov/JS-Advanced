let solution=(function () {
    return{
        add:(a,b)=>{
            result=[a[0]+b[0],a[1]+b[1]];
            return result;
        },
        multiply:(a,b)=>{
            result=[Number(a[0]*b),Number(a[1]*b)];
            return result;
        },
        length:(a)=>{
            result=Math.sqrt(a[0]*a[0]+a[1]*a[1]);
            return result
        },
        dot:(a,b)=>{
            result=(a[0]*a[1]+b[0]*b[1]);
            return result;
        },
        cross:(a,b)=>{
            result=(a[0]*b[1]-a[1]*b[0]);
            return result
    }
    }
})()

console.log(solution.add([1, 1], [1, 0]));;
console.log(solution.multiply([3.5, -2], 2));;
console.log(solution.dot([1, 0], [0, -1]));;
console.log(solution.cross([3, 7], [1, 0]));;