"use strict";
let cl = console.log;
function merge(obj1, obj2) {
    return Object.assign(obj1, obj2);
}
let o1 = {
    name: "Ravikrian",
};
let o2 = {
    age: 37
};
let o3 = merge(o1, o2);
cl(o3);
// let obj4 = merge({name:"Jhon", hobbies : ["Cricket", "Coding"]},37);
let obj4 = merge({ name: "Jhon", hobbies: ["Cricket", "Coding"] }, { age: 37 });
cl(obj4);
let p1 = {
    name: "Jhon",
    age: 37,
};
let p2 = Object.assign({}, p1);
cl(p2);
