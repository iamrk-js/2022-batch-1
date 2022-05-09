let cl = console.log;

// array, string, object, HTMLCollection, Nodelist

let x = [..."pizzas"];
cl(x);

let featured = ["Deep Dish", "Peporoni"];

let speciality = ["Meatazz", "Indian Tandur Cheese", "Margherita"];

let allPizzas = [...featured, "veg", ...speciality];

cl(allPizzas);

// const people = Array.from(document.querySelectorAll('.people p'));
const people = [...document.querySelectorAll(".people p")];
cl(people);
const names = people.map((p) => p.textContent);
cl(names);

function greet(fname, lname) {
  cl(`Hello ${fname} ${lname}, How are you?`);
}

let nameArray = ["Ravikiran", "Niturkar"];

// greet(nameArray[0], nameArray[1])
greet(...nameArray);

let clonedArray = [...speciality];

clonedArray.push("CheesBrust Pizza");

cl(clonedArray);
cl(speciality);
let a = 10;
let circle = {
  radius: 10,
};

let c2 = {
  a,
  ...circle,
  color: "orange",
  draw: function () {
    cl("Draw");
  },
};

cl(c2);


let c3 = {...c2};
delete c3.a;
cl(c3);
cl(c2);


let p = {
  fname : "Jhon",
}
let q = {
  lname : "Doe"
}


let r = {
  ...p,
  ...q
}
cl(r)