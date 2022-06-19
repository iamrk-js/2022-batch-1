"use strict";
let cl = console.log;
function shortenArray(arr, removeCount) {
    return arr.splice(arr.length - removeCount);
}
let skills = ["Angular", "Node", "Typescript", "React", "jQuery"];
let s1 = shortenArray(skills, 2);
let ages = [30, 50, 20, 60, 80, 90, 100];
let newAges = shortenArray(ages, 3);
// 10 >> 0 to 3 >> 4 remove 
// 10 >> 4 > 0 to 5 > 6 to 9 removed >> 10 - 4 >> 6
console.log(skills);
console.log(ages);
let info = [
    {
        name: 'Jhon',
        age: 35,
        profile: "Angular developer"
    },
    {
        name: 'Jen',
        age: 25,
        profile: "MEAN developer"
    },
    {
        name: 'July',
        age: 30,
        profile: "React developer"
    },
    {
        name: 'Mark',
        age: 30,
        profile: "MERN developer"
    },
];
let newInfo = shortenArray(info, 2);
console.log(info);
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve([
                {
                    name: 'Jhon',
                    age: 35,
                    profile: "Angular developer"
                }
            ]);
        }
        else {
            reject("Something went wrong.");
        }
    }, 2000);
});
promise.then(res => {
    console.log(res);
});
// T >> Book , Magezine 
// U >> Student, Staff, teachers
function checkOut(item, role) {
    // availabelItem : T = getItemFormDataBase(item) >> true or false
    // availabelForRole : U = getUserFromDB(item, role) >> true or false
    // if(availabelItem && availabelForRole){
    //     // return item
    // }
}
