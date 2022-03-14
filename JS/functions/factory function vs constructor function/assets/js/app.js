var cl = console.log;

var demo = document.getElementById('demo')
var person = {
    fname: "Jhon",
    lname: "Doe",
}
person.age = 33;
// cl(person);
// var person1 = person;
// cl(person1);

// person1.lname = "Bond";

// cl(person1);
// cl(person);

// factory function

function createStudent(firstName, lastName, email, contact) {
    var obj = {};
    obj.fname = firstName;
    obj.lname = lastName;
    obj.email = email;
    obj.contact = contact;
    return obj;
}

var firstStudent = createStudent("Peter", "Parkar", "peter@gmail.com", "1234567890");
cl(firstStudent);


var secondStudent = createStudent("Tony", "Stark", "tony@gmail.com", "1234567890");
cl(secondStudent);

secondStudent.email = "tony@stark.com";

cl(firstStudent);
cl(secondStudent);


// constructor function


function CreateStudentConstru(firstName, lastName, email, contact) {
    // var this = {};
    this.fname = firstName;
    this.lname = lastName;
    this.email = email;
    this.contact = contact;
    // cl(CreateStudentConstru("abc", "xyz", "sdnfjsd",1234567890));
    // return this;
}

var thirdStudent = new CreateStudentConstru("Brusse", "Wyene", "brusse@gmail.com", 1234567890)

cl(thirdStudent);

var fourthStudent = new CreateStudentConstru("Gangadhar", "Shastri", "ganga@gmail.com", 1234567890);

cl(fourthStudent);


for(var i = 1; i >= 1; i++){
    cl(i)
}