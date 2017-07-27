let fatherCar={
    brand:'BMW',
    model:'X5',
    color:'blue',
    toString:function () {return `[brand:${this.brand},model:${this.model},color:${this.color}]`}
};

let myCar=Object.create(fatherCar);
myCar.maxspeed=300;
let workCar=Object.create(myCar);
workCar.brand='Mercedes';
workCar.maxspeed=250;
workCar.model='c500';
workCar.toString=function () {
    return `[brand:${this.brand},model:${this.model},color:${this.color},topSpeed:${this.maxspeed}]`
};
console.log(workCar.toString());