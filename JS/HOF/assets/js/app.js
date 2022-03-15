
let cl = console.log;

// Higher Order Functions || Array Helping Methods

// higherOrderFunction(callbackFunction){

// }


// function callbackFunction(){

// }

// function add(a,b){
//     return a + b;
// }

let add = (a, b) => {
    return a + b;
}
add(2, 3)

let ages = [23, 34, 45, 67, 45, 78];

let doubleAges = [];
cl(doubleAges, typeof doubleAges)
// for(let i = 0; i < ages.length; i++){
//     // cl(ages[i] * 2);
//     doubleAges.push(ages[i] * 2)
// }

// ages.forEach(function(age){
//     cl(age)
// })

// ages.forEach((age) => {
//     cl(age)
// })

ages.forEach(age => doubleAges.push(age * 2))
cl(doubleAges);

// map >> To map the data  
// It returns a new Array
ages = [23, 34, 45, 67, 45, 78];

// let newDoubleAges = ages.map(function (age) {
//     return age * 2
// })

// let newDoubleAges = ages.map( (age) => {
//     return age * 2
// })

let newDoubleAges = ages.map(age => age * 2)

cl(newDoubleAges);


// let sqrtAges  = ages.map(function(age){
//     return Math.sqrt(age)
// })

// let sqrtAges = ages.map((age) => {
//     return Math.sqrt(age)
// })


let sqrtAges = ages.map(age => Math.sqrt(age))

cl(sqrtAges);

const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

let companynames = [];

// companies.forEach(comp => {
//     // cl(comp.name);
//     companynames.push(comp.name)
// })
companies.forEach(comp => companynames.push(comp.name))
cl(companynames);


// let newCompanyNames = companies.map(comp => {
//     return comp.name;
// });

let newCompanyNames = companies.map(comp => comp.name);
cl(newCompanyNames);


// {
//     companyname : "name",
//     duration : 10
// }


let compDuration = [];

// companies.forEach(comp => {
//     let obj = {
//         companyname : comp.name,
//         duration : comp.end - comp.start
//     }
//     // cl(obj)
//     compDuration.push(obj)
// });

companies.forEach(comp => compDuration.push({
    companyname: comp.name,
    duration: comp.end - comp.start
}));

cl(compDuration);


let newCompDuration = companies.map(comp => {
    return {
        companyname: comp.name,
        duration: comp.end - comp.start
    }
})

cl(newCompDuration);
// {
//     companyname : "name",
//     category : "Retail"
// }

let compCategory = [];

// companies.forEach(comp => {
//     let obj = {
//         companyname : comp.name,
//         category : comp.category
//     };
//     // cl(obj)
//     compCategory.push(obj)
// })

companies.forEach(comp => compCategory.push({
    companyname: comp.name,
    category: comp.category
}))
cl(compCategory);


// let newCompCategory = companies.map(comp => {
//     return {
//         companyname : comp.name,
//         category : comp.category
//     }
// })

let newCompCategory = companies.map(comp => ({
    companyname: comp.name,
    category: comp.category
}))

cl(newCompCategory);

ages = [23, 15, 16, 34, 45, 67, 45, 8, 78];


let canDrive = [];


ages.forEach(function(age){
    if(age >= 18){
        cl(age);
        canDrive.push(age)
    }
})

cl(canDrive)

let canMarry = [];

ages.forEach(age => {
    if(age >= 21){
        canMarry.push(age)
    }
})

cl(canMarry)