var cl = console.log;



var person = {
    fname: 'Jon',
    lname: 'Doe',
    fullName: function () {
        return `${this.fname} ${this.lname}`
    },
    hobbies: ['Cricket', 'Chess', 'Cooking'],
    child: {
        fname: 'Jen',
        lname: 'Doe',
        fullName: function () {
            return `${this.fname} ${this.lname}`
        },
        hobbies: ['AI', 'ML', 'DS'],
    }
}

cl(person.fname);
cl(person.fullName());

// Object Property >> A key whose value is any thing apart from Function
// Object Method >> A key whose value is Function

// Every Method is Function


// Math Object

var pi = Math.PI;
cl(pi);

var eulers = Math.E;
cl(eulers);

cl(Math.LN10);
cl(Math.LN2);
cl(Math.SQRT1_2);
cl(Math.SQRT2);

// round

var x = 9.4;

cl(Math.round(x));

var x = 9.6;

cl(Math.round(x));

var x = 9.5;

cl(Math.round(x));

// Math.floor
var x = 9.9;
cl(Math.floor(x));
var x = 9.1;
cl(Math.floor(x));

// Math.ceil
var x = 9.1;
cl(Math.ceil(x));
var x = 9.9;
cl(Math.ceil(x));

// Math.sign

var x = -34567

var y = Math.sign(x);

cl(y);

var x = 8.9;
var y = Math.sign(x);
cl(y);

var x = '-8.9';
var y = Math.sign(x);
cl(y);

var x = 'Ravikiran';
var y = Math.sign(x);
cl(y);

var x = 0;
var y = Math.sign(x);
cl(y)

// Math.pow()

var z = Math.pow(2, 4) // 2^4

cl(z);

var z = Math.pow(4, 4) // 4^4

cl(z);

// Math.sqrt()

cl(Math.sqrt(64));
cl(Math.sqrt(84));

// Math.abs()
// Returns the absolute value of a number(the value without regard to whether it is positive or negative).For example, the absolute value of - 5 is the same as the absolute value of 5.

cl(Math.abs(-9.9));
cl(Math.abs(9.9));

cl(Math.abs(-5));
cl(Math.abs(5));

cl(Math.min(0,58,45,6908,-789,-7863));
cl(Math.max(0,58,45,6908,-789,-7863));


// Math.random()
// It Returns random number between 0 and 1
// 0 is included
// 1 is excluded
var x = Math.random();

cl(x)