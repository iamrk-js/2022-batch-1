var person = {
    // key : value
    fname: 'Tony',
    lname: "Stark",
    nickName: "Ironman",
    indu: "Strak Indu",
    age: 55,
    fullName: function () {
        return person.fname + " " + person.lname
    }
}

console.log(person.fname);
var getName = person.fullName();
console.log(getName);


// function test(){
//     console.log("Test")
// }

// test()



var person = {
    // key : value
    fname: 'Tony',
    lname: "Stark",
    nickName: "Ironman",
    indu: "Strak Indu",
    age: 75,
    fullName: function () {
        return person.fname + " " + person.lname;
    },
    child: {
        fname: "Tina",
        lname: "Stark",
        age: 25,
        indu: "Stark Indu",
        nickName: "IronWomen",
        fullName: function () {
            return person.child.fname + " " + person.child.lname;
        },
        grandChild: {
            fname: "qaz",
            lname: "Stark",
            age: 3,
            indu: "Stark Indu",
            nickName: "Dont No",
            fullName: function () {
                return person.child.grandChild.fname + " " + person.child.grandChild.lname
            }
        }
    }
}

console.log(person.child.fullName());
console.log(person.child.fname);

console.log(person.child.grandChild.fname);
console.log(person.child.grandChild.fullName());

// functions witin the object are called as Methods
// In Above ex fullname is a method