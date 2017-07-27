function carFactory(wanterCar) {

    let engine=[{power:90,volume:1800},{power: 120, volume: 2400},{power: 200, volume: 3500}];
    let carriage=[{type:'hatchback',color:wanterCar.color},{type:'coupe',color:wanterCar.color}]
    let wheelsize=wanterCar.wheelsize%2===1 ? wanterCar.wheelsize : wanterCar.wheelsize-1;
    return{
    model: wanterCar.model ,

        engine: engine.filter(e => e.power >= wanterCar.power)[0],
        carriage: carriage.filter(c => c.type == wanterCar.carriage)[0],
        wheels: [wheelsize,wheelsize,wheelsize,wheelsize]

    }
}
console.log(carFactory({
    model: "VW Golf II",
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));