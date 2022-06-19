// roleNumberAccordingTORole, ROLE_NAME, CAN_SEE_OTHER_CANDIDATE, CAN_SEE_OTHER_COMPANY_JOB, CAN_SEE_BOTH

// Candidate >> 1 , CANDIDATE, false, true, false
// Admin >> 2 , ADMIN, true, false, false
// SuperAdmin >> 3, SUPERADMIN, true, true, true

let person : {name : string, age : number, hobbies : string[], role: [number, string, boolean, boolean, boolean]} = {
    name : "Ravikiran",
    age: 37,
    hobbies : ["Codeing","Cooking", "Cricket"],
    role : [1, "READ_ONLY", false, true, false]
}

console.log(person.name)
console.log(person.age) 
// console.log(person.nickName)

let favr8Activities: string[] = ["Codeing","Cooking", "Cricket"];

favr8Activities.push("100")

for (let activity of favr8Activities){
    console.log(activity.toUpperCase())
}

for (let hobby of person.hobbies){
    console.log(hobby.toLowerCase())
}
// person.role.push(1);
// console.log(person);

// person.role.push("SuperAdmin");
// console.log(person);

// Tuples

// person.role[0] = "SuperAdmin";
// person.role[1] = 10;

person.role = [10, "Admin",false, true, false];

person.role.push("Fault");

console.log(person.role);