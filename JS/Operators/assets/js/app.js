
// declr
var x;
// assignment opr
x = 10;
var y = 20;
var q = "20";
// addition 

var z = x + y;
console.log(z);
z = x + q;
console.log(z)
// sub 

var z = x - y;
console.log(z);

z = x - q;
console.log(z);

// multi

z = x * y;
console.log(z);
z = x * q;
console.log(z);

// divide

z = y / x;
console.log(z);
z = q / x;
console.log(z);

// modulus >> It returns reminder

z = y % x;
console.log(z);
z = 24 % 10;
console.log(z);


var x = 10

// x = x + 1;

x += 1;
console.log(x);

var y = 20;

y += 5;
console.log(y); // 25

y -= 5;
console.log(y); // 20

y *= 5;
console.log(y); // 100

y /= 5;
console.log(y); // 20

// y += 1;
y++;
console.log(y);

y--;
console.log(y);

// equality opr // IMP
// double equalto (==) >> only checks values not there data types.
var x = 10;
var y = 10;
var z = "10";
var q = 20;
var p = "20";

var result = (x == y);
console.log(result);

result = (x == z);
console.log(result);

result = (x == q);
console.log(result);

result = (x == p);
console.log(result);

var x = 10;
var y = 10;
var z = "10";
var q = 20;
var p = "20";
// triple equalto (strictaly equal to) ( === ) >> It checks value and datatype as well

var result = (x === y);
console.log(result);
var result = (x === z);
console.log(result);

var result = (x === q);
console.log(result);

var result = (x === p);
console.log(result);


var x = 10;
var y = 10;
var z = "10";
var q = 20;
var p = "20";


// Not Equal To >> It only checks Values
result = (x != y);
console.log(result);

result = (x != z);
console.log(result);

result = (x != q);
console.log(result);

result = (x != p);
console.log(result);

// Strictaly Not Equal To >> It checks value and datatype both
var x = 10;
var y = 10;
var z = "10";
var q = 20;
var p = "20";

result = (x !== y);
console.log(result);

result = (x !== z);
console.log(result);

result = (x !== q);
console.log(result);


result = (x !== p);
console.log(result);

// 

var x = 10;
var y = 10;
var z = "10";
var q = 20;
var p = "20";

result = (x > y);
console.log(result)

result = (x < y);
console.log(result);

result = (x >= y);
console.log(result);

result = (x <= y);
console.log(result);

result = (x >= q);
console.log(result);



result = (x <= q);
console.log(result);

result = (x <= p);
console.log(result);

// var y = "nanded"; // 6 >> N
// var x = "udgir"; // 5 >> U

// console.log(y > x) // blob >> atob and btoa




var flag = true;

var antiFlag = !flag;

console.log(antiFlag);
console.log(!antiFlag);


var x = 10;
var y = 10;
var z = "10";
var q = 20;
var p = "20";


// and (&&)

result = (x >= y) && (x >= z);
console.log(result);

result = (x > y) && (x >= z);
console.log(result);

result = (x >= y) && (x > z);
console.log(result);

result = (x >= y) && (x >= z) && (x > p);
console.log(result);

// true && true == true
// flase && true == false
// true && false == false
// false && false == false

// OR (||)
var x = 10;
var y = 10;
var z = "10";
var q = 20;
var p = "20";
result = (x > y) || (x >= p);
console.log(result);

result = (x > y) || (x <= p);
console.log(result);

result = (x >= y) || (x <= p);
console.log(result);

// true || true >> true
// false || true >> true
// true || false >> true
// false || false >> false