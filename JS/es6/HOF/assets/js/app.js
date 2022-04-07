
let cl = console.log;

// Higher Order Functions || Array Helping Methods

// higherOrderFunction(callbackFunction){

// }


// function callbackFunction(){

// }

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

//1 map >> To map the data  
// It returns a new Array
// no of elements of array on which we applied Map Method are
// always equal to new array return by map method

ages = [23, 34, 45, 67, 45, 78];

// let newDoubleAges = ages.map((age) => {
//     return age * 2
// })

let newDoubleAges = ages.map(age => age * 2);
cl(newDoubleAges)

let sqrtAges = [];

ages.forEach((age) => {
    sqrtAges.push(Math.sqrt(age))
})
cl(sqrtAges);

// let newSqrtAges = ages.map((age) => {
//     return Math.sqrt(age)
// })

let newSqrtAges = ages.map(age => Math.sqrt(age));

cl(newSqrtAges)
let companies = [
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
// ' Company One' , 'Company Two ' 

companies.forEach((comp) => {
    companynames.push(comp.name)
})
cl(companynames)

// let newCompNames = companies.map((comp) => {
//     return comp.name
// })

let newCompNames = companies.map(comp => comp.name)
cl(newCompNames)
// {
//     companyname : "name",
//     duration : 10
// }
let compDuration = [];

companies.forEach(comp => {
    // let obj = {
    //     companyName : comp.name,
    //     duration : comp.end - comp.start
    // }
    compDuration.push({
        companyName: comp.name,
        duration: comp.end - comp.start
    })
})

cl(compDuration)

// let newCompDuration = companies.map((comp) => {
//     let obj =  {
//         companyName: comp.name,
//         duration: comp.end - comp.start
//     }
//     return obj;
// })

// let newCompDuration = companies.map((comp) => {
//     return {
//         companyName: comp.name,
//         duration: comp.end - comp.start
//     }
// })

let newCompDuration = companies.map(comp => ({
    companyName: comp.name,
    duration: comp.end - comp.start
}))


cl(newCompDuration);


// {
//     companyname : "name",
//     category : "Retail"
// }

let compCategory = [];

companies.forEach(comp => {
    compCategory.push({
        companyName: comp.name,
        category: comp.category
    })
})

cl(compCategory)


// let newCompcategory = companies.map((comp) => {
//     return {
//         companyName : comp.name,
//         category : comp.category
//     }
// })

let newCompcategory = companies.map(comp => ({
    companyName: comp.name,
    category: comp.category
}))
cl(newCompcategory);





//forEach

// filter Method
// It returns new array
// length of the new array return by filter method is may or may not
// be equal to length of original array(A array on which we apply filter method)

ages = [23, 15, 16, 34, 45, 67, 45, 8, 78];

let comp10Years = [];
companies.forEach(comp => {
    if ((comp.end - comp.start) >= 10) {
        comp10Years.push(comp);
    }
})

// let newcomp10Years = companies.filter((comp) => {
//     if(comp.end - comp.start >= 10){
//         return true;
//     }else{
//         return false;
//     }
// })

// let newcomp10Years = companies.filter((comp) => {
//     return comp.end - comp.start >= 10
// })


let newcomp10Years = companies.filter(comp => comp.end - comp.start >= 10)

cl(newcomp10Years)



let compStart80s = [];
// 1980 to 1989

companies.forEach((comp) => {
    if (comp.start >= 1980 && comp.start <= 1989) {
        compStart80s.push(comp)
    }
})

cl(compStart80s)


// let newcompStart80s = companies.filter((comp) => {
//     return (comp.start >= 1980 && comp.start <= 1989)
// })

let newcompStart80s = companies.filter(comp => (comp.start >= 1980 && comp.start <= 1989))
cl(newcompStart80s)



// start in 90's and run at least for 5 years
let comp90sFor5 = [];

companies.forEach((comp) => {
    if (comp.start >= 1990 && comp.start <= 1999 && (comp.end - comp.start) >= 5) {
        comp90sFor5.push(comp)
    }
})
cl(comp90sFor5);


let newcomp90sFor5 = companies.filter(comp => comp.start >= 1990 && comp.start <= 1999 && (comp.end - comp.start) >= 5)


cl(newcomp90sFor5)

let compRetailsfor5 = [];
companies.forEach((comp) => {
    if (comp.category === "Retail" && comp.end - comp.start >= 5) {
        compRetailsfor5.push(comp)
    }
})
cl(compRetailsfor5);

// let newcompRetailsfor5 = companies.filter((comp) => {
//     return comp.category === "Retail" && (comp.end - comp.start) >= 5
// })

let newcompRetailsfor5 = companies.filter(comp => comp.category === "Retail" && (comp.end - comp.start) >= 5)
cl(newcompRetailsfor5)


// start in 1980 to 1985 Or 1990 to 1995

let comp80to85and90to95 = [];

companies.forEach((comp) => {
    if ((comp.start >= 1980 && comp.start <= 1985) || (comp.start >= 1990 && comp.start <= 1995)) {
        comp80to85and90to95.push(comp)
    }
})

cl(comp80to85and90to95);



let newcomp80to85and90to95 = companies.filter((comp) => ((comp.start >= 1980 && comp.start <= 1985) || (comp.start >= 1990 && comp.start <= 1995)))


cl(newcomp80to85and90to95);

// MEAN >> 

// MongoDb
// Express
// Angular
// Node.js

// API >> Application Programing Intrface


// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => response.json())
//   .then(json => console.log(json))

// sort method
let skills = ["HTML", "CSS", "javaScript", "Angular", "angular", "css"]

let soretedSkills = skills.sort();
cl(soretedSkills);


ages = [23, 15, 100, 12, 2, 3, 5, 7, 16, 34, 45, 67, 45, 8, 78];
// 15, 23, 100, 12, 2, 3, 5, 7, 16, 34, 45, 67, 45, 8, 78
// 15, 23, 100, 12, 2, 3, 5, 7, 16, 34, 45, 67, 45, 8, 78
// 15, 23, 12, 100, 2, 3, 5, 7, 16, 34, 45, 67, 45, 8, 78
// 15, 23, 12, 2, 100, 3, 5, 7, 16, 34, 45, 67, 45, 8, 78
// let sortdAges = ages.sort((n1, n2) => {
//     if (n1 > n2) {
//         return 1
//     } else {
//         return -1
//     }
// });

// assending >> greater than
let sortdAges = ages.sort((n1, n2) => (n1 > n2) ? 1 : -1);

cl(sortdAges);

// desending >> less than
let dSortedArray = ages.sort((n1, n2) => (n1 < n2) ? 1 : -1);

cl(dSortedArray)


// reduce
ages = [23, 15, 16, 34, 45, 67, 45, 8, 78];

let agesTotal = 0;
ages.forEach(age => {
    agesTotal += age
})
cl(agesTotal);

// debugger
let newAgesTotal = ages.reduce((total, num) => {
    return total += num;
}, 0)

cl(newAgesTotal)


let randomNum = [2, 8, 4, 5, 6];

let multi = 1;
randomNum.forEach(num => {
    multi *= num
})

cl(multi);


// let newMulti = randomNum.reduce((total, num) => {
//   return  total *= num;
// }, 1)
let newMulti = randomNum.reduce((total, num) => total *= num, 1)
cl(newMulti);

companies = [
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



let addOfCompDuration = 0;

companies.forEach(comp => {
    addOfCompDuration += (comp.end - comp.start)
})

cl(addOfCompDuration)


// let newaddOfCompDuration = companies.reduce((total,comp) => {
//     return total += (comp.end - comp.start)
// },0)

let newaddOfCompDuration = companies.reduce((total, comp) => total += (comp.end - comp.start), 0)
cl(newaddOfCompDuration);


companies = [
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
let financeAdd = 0;
companies.forEach(comp => {
    if (comp.category === 'Finance') {
        financeAdd += (comp.end - comp.start)
    }
})
cl(financeAdd);



// let newfinanceAdd = companies.filter(comp => {
//     return comp.category === "Finance"
// }).reduce((total, comp) => {
//     return total += (comp.end - comp.start)
// },0)

let newfinanceAdd = companies.filter(comp => comp.category === "Finance")
    .reduce((sum, comp) => sum += (comp.end - comp.start), 0)

cl(newfinanceAdd);

companies = [
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

let addAtleast10 = 0;


companies.forEach(comp => {
    let duration = comp.end - comp.start;
    if (duration >= 10) {
        addAtleast10 += duration
    }
})

cl(addAtleast10);

// let newAddAtleast10 = companies.filter(comp => {
//   return  (comp.end - comp.start) >= 10
// }).reduce((total, comp) => {
//     return total += (comp.end - comp.start)
// },0)


let newAddAtleast10 = companies.filter(comp => (comp.end - comp.start) >= 10)
    .reduce((total, comp) => total += (comp.end - comp.start), 0)

cl(newAddAtleast10);