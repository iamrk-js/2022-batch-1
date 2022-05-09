let cl = console.log;

function Shapes() {
    // this.draw = function(){
    //     cl('Draw')
    // }
}
Shapes.prototype.duplicate = function () {
  cl("Duplicate");
};
Shapes.prototype.draw = function(){
    cl('Draw')
}
function Circle(radius) {
  this.radius = radius;  // Instance Member
}
// Circle.prototype.draw = function () {   Prototype Member
//   cl("Draw");    
// };
// Circle.prototype.duplicate = function () {
//   cl("Duplicate");
// };
// Circle.prototype = Object.create(Object.prototype);
function Sqaure(side) {
  this.side = side;
}
Circle.prototype = Object.create(Shapes.prototype);
Circle.prototype.constructor = Circle;
Sqaure.prototype = Object.create(Shapes.prototype);

// Sqaure.prototype.duplicate = function () {
//   cl("Duplicate");
// };
let c = new Circle(10);
cl(c);
let s = new Sqaure(10);
cl(s);

// new Object() >> objectBase
