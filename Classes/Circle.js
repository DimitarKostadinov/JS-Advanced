class Circle{
    constructor(radius)
    {
        this.radius=radius;
    }
    get radius(){
        return this._radius
    }
    set radius(radius){
        if(radius<=0){
            throw new Error('Radius can not be negative')
        }
        this._radius=radius;
    }
    get diameter(){ return 2*this.radius}
    set diameter(diameter){

        this.radius=diameter/2;
    }
    get area(){
        return Math.PI*this.radius**2
    }
}
let c1=new Circle(5)
console.log(c1.diameter);
console.log(c1.area)
// c1.diameter=-12;
console.log(c1.radius)
console.log(c1.diameter)
let c2=new Circle(-3)