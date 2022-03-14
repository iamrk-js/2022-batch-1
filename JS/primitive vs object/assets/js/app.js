// Primitive/non-Reference Data Types 
// number, string, boolean, undefine and null 
// Non Primitive/Object/Reference
// Object

// Primitive data types Holds Values;
// Non-prmitive data types holds Reference
var x = 10;

var y = x;

console.log("Value of Y", y);
console.log("Value of X", x);

y = 20;

console.log("Value of Y", y);
console.log("Value of X", x);


var person = {
    fname: "Akshay",
    account: "SBI",
    age: 23
}
var person2 = person;
console.log(person);
console.log(person2);

person2.fname = "Aaliya";

console.log("value of person2", person2)
console.log("value of person", person)

