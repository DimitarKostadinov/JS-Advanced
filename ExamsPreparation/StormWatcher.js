(function () {
let id=0;
return class Record{
    constructor(temperature,humidity,pressure,windSpeed){
        this.id=id++;
        this.temperature=temperature;
        this.humidity=humidity;
        this.pressure=pressure;
        this.windSpeed=windSpeed;
    }
    toString(){
        let status='Not stormy' ;
        if(this.temperature < 20 && (this.pressure<700 || this.pressure>900) && this.windSpeed > 25){
            status='Stormy'
        }
        let output=`Reading ID: ${this.id}
Temperature: ${this.temperature}*C
Relative Humidity: ${this.humidity}%
Pressure: ${this.pressure}hpa
Wind Speed: ${this.windSpeed}m/s
Weather: ${status}`
        return output;
    }
}
}())



