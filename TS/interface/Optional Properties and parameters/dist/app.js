"use strict";
let cl = console.log;
let add;
add = (n1, n2) => n1 + n2;
cl(add(20, 20));
class Person {
    constructor(n) {
        this.age = 35;
        this.nickName = "RK";
        n ? this.name = n : this.name = "RAvi";
    }
    greet(phrase) {
        cl(`${phrase} ${this.name}`);
        this.name = "RK";
    }
}
let person;
person = new Person("Ravikiran");
cl(person);
let p1 = new Person();
cl(p1);
