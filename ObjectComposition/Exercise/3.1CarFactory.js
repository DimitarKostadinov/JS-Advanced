function carFactor(factoryCar) {
    let modifiedCar={}
    let engine;
    if(factoryCar.power<=90){
        engine={
            power: 90,
                volume: 1800
        }
    }else if(factoryCar.power<=120){
          engine={
              power: 120, volume: 2400
          }
        }else if(factoryCar.power<=200){
        engine={
            power: 200, volume: 3500
        }
    }
    modifiedCar.engine=engine;
        modifiedCar.carriage={
            type:factoryCar.carriage,
            color:factoryCar.color
        };

    if (factoryCar.wheelsize%2===0) {
        factoryCar.wheelsize--;
    }
    let wheelsize=factoryCar.wheelsize;
    let wheelresult=[];
    for (let i = 0; i < 4; i++) {
    wheelresult.push(wheelsize);
    }
    modifiedCar.wheels=wheelresult;

    return modifiedCar;
}
console.log(carFactor({
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    }
));