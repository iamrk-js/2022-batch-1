let cl = console.log;

function Circle(rad) {
  this.radius = rad;
}
function Square(side){
    this.side = side;
}
let circle = new Circle(10);
let circle2 = new Circle(100);
let sqr = new Square(20);
cl(circle);
// let person = new Object(); >> ObjectBase
let myObj = Object.getPrototypeOf(circle);
let myObj2 = Object.getPrototypeOf(circle2);
let sqrObj = Object.getPrototypeOf(sqr);
cl(myObj === myObj2);
cl(myObj === sqrObj);
cl(Object.getPrototypeOf(myObj) === Object.getPrototypeOf(sqrObj))
