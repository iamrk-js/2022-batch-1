"use strict";
let cl = console.log;
let person;
// person = {
//     name : "Ravikiran",
//     age : 35,
//     greet : function(phrase:string){
//         cl(`${phrase} ${this.name}`)
//     }
// } 
person = {
    name: "Ravikiran",
    age: 35,
    greet(phrase) {
        cl(`${phrase} ${this.name}`);
    }
};
person.greet("Hello There, I'm");
