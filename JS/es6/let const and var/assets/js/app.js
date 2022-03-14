var cl = console.log;



// 1 Scope
// var >> not able to create local/block scope
// let and const >> can create local/block scope

for (var x = 1; x <= 10; x++) {
    cl(x)
}
cl("Break");
cl(x);

// function demo (){
//     var y = 20;
// }

// cl(y)

for (let j = 1; j <= 10; j++) {
    cl(j)
}

// cl(j)

// 2 redclr and reassignment
//  var  >> we can redclr and reassign
//let >> we can not redclr but reassign
//const >>we can not redclr and can not reassign
// const >> We must initialise property as soon as it is declr by const, otherwise it will throw error
var a = 15;
cl(a);
var a = "Ten";
cl(a);
a = 25;
cl(a);

let b = 45;

cl(b);
// let b = 85;
b = 85

cl(b)

const myNewInvantion = 753951.78962;

const w = 15;
let n;
// const myNewInvantion = "Hello"

// 3 Hoisting
// var >> Hoisting is possible and the property get 'undefined' value
// let >> Hoisting is possible but we can not access before initialization of it
//const >> Hoisting is possible but Cannot access  before initialization
cl(abc);
var abc = 10;

// cl(xyz);
let xyz = 20;
cl(xyz);

cl(pqr)
const pqr = 30;
