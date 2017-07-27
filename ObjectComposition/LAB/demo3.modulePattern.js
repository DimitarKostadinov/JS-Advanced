let moduleObj={
    count:0,//public
    increase:function(num){ return this.count+=num},
    decrease:function(num){return this.count-=num},
    value:function () {return this.count}
};
moduleObj.count=1000;
moduleObj.decrease(500);
console.log(moduleObj.value());

let iifiObj=(function () {
    let counter=0;
    return{
        increase:(num)=>counter+=num,
        decrease:(num)=>counter-=num,
        value:()=>counter
    }
})();
iifiObj.increase(123);
console.log(iifiObj.value());