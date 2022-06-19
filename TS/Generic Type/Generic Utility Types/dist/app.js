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
function printObjectKey(obj, k) {
    return `Value of key is ${obj[k]}`;
}
cl(printObjectKey({ name: 'Jhon' }, 'name'));
cl(printObjectKey({ profile: 'Mean Stack', skills: ['Angular', 'Node'] }, 'profile'));
function createCourseStructure(title, description, duaration) {
    let obj = {};
    obj.title = "MEAN Stack";
    obj.description = "dsvvfbff";
    obj.duaration = 6.5;
    return obj; // typecasting
}
let p = {
    title: "MEAN Stack",
    description: "",
    duaration: 7
};
let newSkills = ['Angular', 'Express', 'Node', 'MongoDB'];
// newSkills.push("react");
// newSkills.pop();
// newSkills[0] = 'Angular13'
newSkills.forEach(skill => {
    cl(skill);
});
