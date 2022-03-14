

// var person = {
//     fname: "Varsha",
//     lname: "Patil",
//     country: "India",
//     age: 25,
//     fullName: function() {
//         return person.fname + " " + person.lname
//     },
//     link: {
//         social: {
//             facebook: "www.facebook.com/varsha",
//             insta: "www.instagram.com/varsha",
//         },
//         websites : {
//             medium : "www.medium.com/varsha",
//             webLink : "www.varshapatil.com"
//         }
//     },
// }


// var getWebLink = person.link.websites.webLink;

// console.log(getWebLink);

// This Within The Object Method >> It always point to closet parent Object


var person = {
    fname: "Varsha",
    lname: "Patil",
    country: "India",
    age: 25,
    fullName: function() {
        // console.log(this) // It prints Person
        return this.fname + " " + this.lname;
    },
    child : {
        fname : "abc",
        lname : "patil" ,
        country : "India",
        fullName : function(){
            // console.log(this) // It prints Child
            return this.fname + " " + this.lname;
        },
        grandChild : {
            fname : "xyz",
            lname : "Patil",
            country : "India",
            fullName : function(){
                // console.log(this) // It Prints GrandChild
                return this.fname + " " + this.lname;
            }
        }
    }
}

console.log(person.fullName());
console.log(person.child.fullName());
console.log(person.child.grandChild.fullName());


