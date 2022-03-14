var cl = console.log;

var skills = ["HTML5", "CSS3", "BootStrap3-4", "SASS", "javaScript", "TypeScript", "Angular", "RXJS"];

// for(var i = 0; i < skills.length; i++){
//     cl(skills[i])
// }

// forEach 
// callback function >> A function passed as arrgumenet/parameter 
skills.forEach(function (element, i) {
    cl(i + 1, element)
});


var skills = ["HTML5", "CSS3", "BootStrap3-4", "SASS", "javaScript", "TypeScript", "Angular", "RXJS"];


skills.forEach(function (skill) {
    cl("I Love " + skill)
})


var studentInfo = [
    {
        fname: 'Tony',
        lname: 'Stark',
        nickName: 'IronMan',
        contact: 9874563210
    },
    {
        fname: 'Peter',
        lname: 'Parkar',
        nickName: 'SpiderMan',
        contact: 1223698745
    },
    {
        fname: 'Brusse',
        lname: 'Wyene',
        nickName: 'BatMan',
        contact: 1234567890
    }
]




studentInfo.forEach(function (rupesh, i) {
    //    if(i == 0){
    cl(rupesh.nickName)
    //    }
})