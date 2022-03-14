
// DRY >> Do Not Repeat YourSelf

var x = 10;
var y = 20;

var result = x + y;
console.log(result);


var x = 100;
var y = 200;

var result = x + y;
console.log(result);

// x and y >>> parameters
// Own declr of the functions
// It is a relation ship between input and output

// function with parameter
function addTwoNumbers(x, y) {
    var result1 = x + y;
    console.log(result1);
}
// console.log(result1)
// 25, 250, 250 , 2500 >> Arruguments
// Are the actual value we pass in () while calling the function
addTwoNumbers(25, 250);
addTwoNumbers(250, 2500);

function addThreeNumbers(x, y, z) {
    console.log(x + y + z)
}

addThreeNumbers(20, 30, 50);
// function without parameter

function printName(){
    console.log('My Name is Bond, James Bond.');
}

printName();

function printNewName(name){
    console.log(name + " nam to suna hi hoga.")
}

printNewName("Rahul");

// function with return keyword

function addNewTwoNum(x,y){
    console.log('Hello JS');
    return x + y;
    console.log('Hello JS 2');
}

var getAddition = addNewTwoNum(500,250);

console.log(getAddition);
// // alert(getAddition)
// document.write(getAddition);

var getAddition1 = addNewTwoNum(1000,2500);
console.log(getAddition1);


function printName2(){
    return "My Name is Bond, James Bond.";
}

var getName = printName2();
console.log(getName);