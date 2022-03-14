var cl = console.log;

// Arrow functions >> Fatty arrow fun >> lambda functions

// function addTwoNum(x, y) {
//     return x + y
// }

// var addTwoNum = (x,y) => {
//     return x + y
// }


var addTwoNum = (x, y) => x + y;
cl(addTwoNum(3, 5));


// var makeDouble = (x) => {
//     return x * 2
// }
// If you have only one parameter, then there is no need to use "()"

// var makeDouble = x => {
//     return x * 2
// }
// If our function having only one statement with return key-word
//then we can omit {} and return key-word

var makeDouble = x => x * 2;

cl(makeDouble(50))


function multiply3num(x, y, z) {
    return x * y * z
}

// cl(multiply3num(2,3,4));


// print even numbers in bet 1 to 20

// for(var i = 1 ; i < 21; i++){
//     if(i % 2 == 0){
//         cl(i)
//     }
// }


// function printEvenNum(min, max) {
//     for (var i = min; i <= max; i++) {
//         if (i % 2 === 0) {
//             //    return i
//             cl(i)
//         }
//     }
// }

// cl(printEvenNum(1, 20));
cl(printEvenNum); // undefined
// function expression 
var printEvenNum = (min, max) => {
    for (var i = min; i <= max; i++) {
        if (i % 2 === 0) {
            cl(i)
        }
    }
}
cl(printEvenNum(1, 20));
demo();


// function dclr 
function demo() {
    cl('Hello')
}


// where to not use arrow functions

// var person = {
//     fname : "Tony",
//     lname : 'Stark',
//     fullName : function(){
//         return `${this.fname } ${this.lname}`
//     }
// }

//  We can not use arrow function inside a method in Object
// becoz in arrow function 'this' key-word always pointer to Window Object
var person = {
    fname : "Tony",
    lname : 'Stark',
    fullName : () => {
        cl(this)
        return `${this.fname } ${this.lname}`
    }
}

cl(person.fullName())

var skills = ['HTMl', 'CSS3', 'javaScript', 'Angular'];

// skills.forEach(function(skill){
//     cl(`I love ${skill}`)
// })

skills.forEach(skill =>  cl(`I love ${skill}`));