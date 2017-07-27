
function Rectangle(width,height,color) {
    this.width=width;
    this.height=height;
    this.color=color;
    Rectangle.prototype.calcArea=function () {
        return this.width*this.height;
    }
}

let rect=new Rectangle(5,7,'purple')
