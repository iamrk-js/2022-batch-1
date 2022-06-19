let cl = console.log;
type Admin = {
    name : string;
    privilages : string[];
}
type Employee = {
    name : string;
    startDate : Date;
}

type ElevetedEmp = Admin & Employee;
let e1 : ElevetedEmp = {
    name : "Tony Stark",
    privilages  : ["Mark3"],
    startDate : new Date(2008, 10)
}

cl(e1);

type Combinable = number | string; // Union
type Numeric = number | boolean | string; // Union

type ComNum = Combinable & Numeric;

let x : ComNum ;

x = 10;
x = "true";