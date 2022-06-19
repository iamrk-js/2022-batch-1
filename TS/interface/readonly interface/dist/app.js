"use strict";
let cl = console.log;
class Person {
    constructor(n) {
        this.age = 35;
        this.name = n;
    }
    greet(phrase) {
        cl(`${phrase} ${this.name}`);
        this.name = "RK";
    }
}
let person;
person = new Person("Ravikiran");
cl(person);
person.greet("Hello There I'm ");
cl(person);
// person.name = "RK"
// person.name = 
// let p1: Igreetable = {
//     name: "RAvi",
//     greet(phrase: string) {
//         cl(phrase)
//     },
//     age: 15
// }
