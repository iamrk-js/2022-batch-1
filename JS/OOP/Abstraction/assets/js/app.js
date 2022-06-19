let cl = console.log;

function Circle(radius){
    this.radius = radius;
    this.defaultLocation = {x:0, y:0};
    this.computeOptimumLocation = function(){
        cl(this.defaultLocation)
    }
    this.draw = function(){
        cl('Draw')
    }
}
// Circle.
const c1 = new Circle(10);

c1.defaultLocation = false;


// Hide Details Show the essentials