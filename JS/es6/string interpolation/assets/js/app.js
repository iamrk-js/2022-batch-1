var cl = console.log;


var fname = "Ravikiran";

var info = document.getElementById('info');

// var result = "I am " + fname;

var result = `I am ${fname}`

info.innerHTML = result;

var person = {
    fname: "Ravikiran",
    lname: "Niturkar",
    profile: "MEAN stack Developer"
}

// Hello there I'm Ravikiran Niturkar and im mean stack dev

// var result = "Hello There I'm " + person.fname + " " + person.lname
//     + " and I'm " + person.profile;

var result = `Hello There I'm ${person.fname} ${person.lname} and I'm ${person.profile}`
info.innerHTML = result;

