let cl = console.log;

let person = {
  name: "Jhon",
};
let objectBase = Object.getPrototypeOf(person);
// cl(objectBase)
let des = Object.getOwnPropertyDescriptor(objectBase, "toString");
let personNamedes = Object.getOwnPropertyDescriptor(person, "name");
cl(personNamedes);
Object.defineProperty(person, "name", {
  writable: false,
  enumerable: false,
  configurable: false,
});

personNamedes = Object.getOwnPropertyDescriptor(person, "name");
cl(personNamedes);
person.name = "July";
cl(des);
for (let key in person) {
  cl(key);
}
cl(Object.keys(person));
delete person.name;
cl(person);

// objectBase.toString = function(){
//   cl('Hello JS')
// }

// delete objectBase.toString;
