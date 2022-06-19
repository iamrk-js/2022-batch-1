// Enums 
// 1 >> Candidate
// 2 >> Admin
// 3 >> SuperAdmin
// ADMIN >> admin
// READ ONLY USER >> candidate
// SUPER ADMIN >> super admin

enum Role {ADMIN = 100, READ_ONLY_USER, SUPER_ADMIN};
let person = {
    fname : "Ravikiran",
    lname : "Niturkar",
    email :"ravi@gmail.com",
    token : "qw",
    role : Role.ADMIN
}

if(person.role === Role.READ_ONLY_USER){
    console.log("This is a candidate");
}

if(person.role === Role.ADMIN){
    console.log(`this is admin`);
}

console.log(Role.ADMIN);
console.log(Role.READ_ONLY_USER);
console.log(Role.SUPER_ADMIN);


    