let cl = console.log;
type Admin = {
    name: string;
    privilages: string[];
}
type Employee = {
    name: string;
    startDate: Date;
}

type ElevetedEmp = Admin & Employee;
let e1: ElevetedEmp = {
    name: "Tony Stark",
    privilages: ["Mark3"],
    startDate: new Date(2008, 10)
}


type Combinable = number | string; // Union
type Numeric = number | boolean | string; // Union

type ComNum = Combinable & Numeric;

let x: ComNum;

x = 10;
x = "true";

function add(n1: Combinable, n2: Combinable) {
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        return n1 + n2
    } else {
        return n1.toString() + n2.toString()
    }
}
type NewEmpType = Admin | Employee
function printEmpInfo(emp: NewEmpType) {
    cl(emp.name);
    if ('privilages' in emp) {
        cl(emp.privilages)
    }
    if ('startDate' in emp) {
        cl(emp.startDate)
    }
}

printEmpInfo(e1);
printEmpInfo({ name: "Ravi", startDate: new Date() });


class Car {
    drive() {
        cl('Driving a Car ....')
    }
}
class Truck {
    drive() {
        cl('Driving a truck ....')
    }
    loadCargo(amount: number) {
        cl(`Loading Cargo of : ${amount}`)
    }
}
type Vehicle = Car | Truck;
let v1 = new Car();
let v2 = new Truck();

function useVehicle(v: Vehicle) {
    v.drive();
    //    if('loadCargo' in v){
    //        v.loadCargo(100);
    //    }
    if (v instanceof Truck) {
        v.loadCargo(100);
    }
}

useVehicle(v1); // v1 is instanceof Car
useVehicle(v2); // v2 is instanceof Truck