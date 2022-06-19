let cl = console.log;

function Circle(radius) {
  this.radius = radius;
  let defaultLocation = { x: 0, y: 0 };
  let computeOptimumLocation = function () {
    cl(defaultLocation);
  };
  this.draw = function () {
    cl("Draw");
    computeOptimumLocation();
  };
}
// Circle.
const c1 = new Circle(10);
// c1.defaultLocation = false;
// cl(c1.defaultLocation);
cl(c1);
c1.draw();

// Hide Details Show the essentials

// let x = 10;

// cl(x);

// function printTen(){
//     cl(x);
//     let y = 20;
//     cl(y);
// }

// printTen();
// cl(y)
