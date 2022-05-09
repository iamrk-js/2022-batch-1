let cl = console.log;


// Object Create
// Literal , new Object(), factory and constructor

let obj1  = {
    property1 : 'value1'
}

let obj2 = new Object();

function person(fname, lname, email){
        let obj = {
            fname : fname,
            lname : lname,
            email  : email,
        };
        return obj;
}

let p = person('JHON', "DOE", "jhon@gmail.com");
cl(p);

function CreatePerson(fn, ln, email){
    this.fname = fn;
    this.lname = ln;
    this.email = email
}

let p2 = new CreatePerson('July', 'Doe', 'july@gmail.com');
cl(p2);

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        cl('Draw')
    }
}
// Circle.
const c1 = new Circle(10);