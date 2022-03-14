

// var fname = "Tony";
// var lname = "Stark";
// var nickName = "IronMan";
// var indu = "Stark Indu";
// var age = 50;
// Object >> Where we can store multiple ralative information/data
// in the form of key and value pairs
var person = {
    // key : value
    fname: 'Tony',
    lname: "Stark",
    nickName: "Ironman",
    indu: "Strak Indu",
    age: 55,
}
// To get any info/data from object >>> ObjectName.keyName
console.log(person);

// Get value from object
var getNickName = person.nickName;
console.log(getNickName);
console.log(person.age);
// Change value of object Key
person.age = 45;
console.log(person);


person.fname = "Peter";
person.lname = "Parkar";
person.nickName = "Spiderman";
person.age = 25;

console.log(person);
// Create/Add kay and value from outside of the object
person.country = "US";

console.log(person);
// Remove/delete key and value pair of Object
// delete person.age;
console.log(person);


// Hello There, I'm Peter Parkar owener of Stark Indu. People als 
// call me Spiderman. I'm 25 years old and from US.


var result = "Hello There, I'm " + person.fname + " " + person.lname + " Owner of "
    + person.indu + ". People also call me " + person.nickName + ". I'm "
    + person.age + " years old and from " + person.country + ".";


console.log(result);


var player = {
    fname : "Virat",
    lname :"Kohali",
    age : 33,
    profession : "Cricketer",
    team : "BCCI",
    acchivment : "Most successfull captain till date"
}

// 46 >> 60
// Hello There This is Virat Kohali. 33 years old cricketer by profession. Play for 
// BCCI Team and Most successfull captain till date in Test Cricket. 

var result2 = "Hello There This is " + player.fname 
        + " " +  player.lname + ". " + player.age  + " years old, " + player.profession
        + " by profession. play for " + player.team + " Team and " + player.acchivment
        + " in test cricket."

document.write(result2)
        
