let cl = console.log;
interface Iname {
    name : string
}
interface Iage {
    age : number
}
function merge<T extends Iname, U extends Iage>(obj1: T, obj2: U) {
    return Object.assign(obj1, obj2)
}
let o1 = {
    name: "Ravikrian",
}
let o2 = {
    age: 37
}
let o3 = merge(o1,o2);

cl(o3);

// let obj4 = merge({name:"Jhon", hobbies : ["Cricket", "Coding"]},37);
let obj4 = merge({name:"Jhon", hobbies : ["Cricket", "Coding"]},{age : 37});

cl(obj4);

let p1 = {
    name : "Jhon",
    age : 37,
}

let p2 = Object.assign({}, p1);
cl(p2)

function printObjectKey<T extends object, U extends keyof T>(obj:T, k:U){
    return `Value of key is ${obj[k]}`
}

cl(printObjectKey({name : 'Jhon'}, 'name'));
cl(printObjectKey({profile : 'Mean Stack', skills : ['Angular', 'Node']}, 'profile'));

