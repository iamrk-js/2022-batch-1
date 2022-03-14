
console.log(x);

var x = 10;


// avialability and accessibility of any dclr is called as scope


console.log(x);




function printX() {
    console.log(x)
}

printX();

// console.log(y);
// var y = 10;
function printY() {
    console.log(y);
    console.log("Print X in Y function:", x);
    var y = 20;  // block scope/functional scope/local scope
    console.log(y);
    return y;
}

var getYFormFunction = printY();
// console.log(y);
console.log(getYFormFunction);

































































console.log(x);