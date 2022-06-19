"use strict";
let cl = console.log;
class Person {
    constructor(n) {
        this.age = 35;
        this.name = n;
    }
    greet(phrase) {
        cl(`${phrase} ${this.name}`);
    }
}
let person;
person = new Person("Ravikiran");
cl(person);
// let p1: Igreetable = {
//     name: "RAvi",
//     greet(phrase: string) {
//         cl(phrase)
//     },
//     age: 15
// }
