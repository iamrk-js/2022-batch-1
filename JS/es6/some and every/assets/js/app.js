let cl = console.log;

let oldies = [25, 35, 45, 29, 75];
let ages = [5, 15, 25, 45, 63, 25];
let youngins = [2, 15, 16, 17, 14];

// is there at least adult in a group ? >> age > 18

// let isAdultPrasent = youngins.some((age) => {
//   if (age > 18) {
//     return true;
//   } else {
//     return false;
//   }
// });

// let isAdultPrasent = youngins.some((age) => {
//  return age > 18
// });
let isAdultPrasent = youngins.some((age) => age > 18);
cl(isAdultPrasent);

// let isAdultPrasent1 = ages.some((age) => {
//   if(age > 18){
//     return true;
//   }else{
//     return false
//   }
// })

// let isAdultPrasent1 = ages.some((age) => {
//  return age > 18
// })
let isAdultPrasent1 = ages.some((age) =>  age > 18)
cl(isAdultPrasent1)


// Is everyone old enough to Drive a car ? >> age > 18

let canEveryOneDrive = youngins.every((age) => age > 18);

cl(canEveryOneDrive);

let canEveryOneDrive1 = ages.every(age => age > 18);
cl(canEveryOneDrive1);

let canEveryOneDrive2 = oldies.every(age => age > 18);
cl(canEveryOneDrive2);


// is at least one angular developer is there

let devs  = [
  {
    fname : "Akshay",
    profile : "MEAN Stack"
  },
  {
    fname : "Deepak",
    profile : "javaScript Developer"
  },
  {
    fname : "HariBhau",
    profile : "Angular Developer"
  },
  {
    fname : "Datta",
    profile : "Angular 13 Dev"
  }
]

let isAtleastOneAngularDev = devs.some(dev => {
 return dev.profile.toLowerCase().includes('angular') || dev.profile.toLowerCase().includes('mean')
})

cl(isAtleastOneAngularDev);

let isAtleastOneReactDev = devs.some(dev => {
  return dev.profile.toLowerCase().includes('react') || dev.profile.toLowerCase().includes('mern')
})

cl(isAtleastOneReactDev);

let isEveryOneIsJsDev = devs.every(dev => {
  return dev.profile.toLowerCase().includes('angular') || dev.profile.toLowerCase().includes('mean') || dev.profile.toLowerCase().includes('javascript')
})

cl(isEveryOneIsJsDev)