"use strict";
let cl = console.log;
let e1 = {
    name: "Tony Stark",
    privilages: ["Mark3"],
    startDate: new Date(2008, 10)
};
let x;
x = 10;
x = "true";
function add(n1, n2) {
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        return n1 + n2;
    }
    else {
        return n1.toString() + n2.toString();
    }
}
function printEmpInfo(emp) {
    cl(emp.name);
    if ('privilages' in emp) {
        cl(emp.privilages);
    }
    if ('startDate' in emp) {
        cl(emp.startDate);
    }
}
printEmpInfo(e1);
printEmpInfo({ name: "Ravi", startDate: new Date() });
class Car {
    drive() {
        cl('Driving a Car ....');
    }
}
class Truck {
    drive() {
        cl('Driving a truck ....');
    }
    loadCargo(amount) {
        cl(`Loading Cargo of : ${amount}`);
    }
}
let v1 = new Car();
let v2 = new Truck();
function useVehicle(v) {
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
// function moveAnimal(animal : Animal){
//     if('flyingSpeed' in animal){
//         cl(`Flying with a speed of ${animal.flyingSpeed}`)
//     }
//     if('runningSpeed' in animal){
//         cl(`Flying with a speed of ${animal.runningSpeed}`)
//     }
// }
// function moveAnimal(animal : Animal){
//     if(animal.type === "bird"){
//         cl(`Flying with a speed of ${animal.flyingSpeed}`)
//     }
//     if(animal.type === 'horse'){
//         cl(`Running with a speed of ${animal.runningSpeed}`)
//     }
// }
function moveAnimal(animal) {
    let speed;
    switch (animal.catg) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    cl(`Moving with Speed : ${speed}`);
}
moveAnimal({ catg: 'bird', flyingSpeed: 100 });
moveAnimal({ catg: 'horse', runningSpeed: 1000 });
