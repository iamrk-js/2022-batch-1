var cl = console.log;

var skills = ["Html", "Css", "css3", "sass", "es6", "javaScript", "Angular", "Node.js"];

// last Index number of array = array.length - 1

// var skillLength = skills.length;
// cl(skillLength);
// cl(skills[skills.length - 1]);
skills[skills.length] = "MongoDB";
skills[skills.length] = "Express.js";
// for(var i = 0; i < skills.length; i++ ){
//     cl(skills[i])
// }

// for(var i = 0; i < skills.length; i++){
//     cl("I love " + skills[i])
// }

var sset = document.getElementById('skillSet');
// cl(sset)
var result = '';
for (var i = 0; i < skills.length; i++) {
    result = result + "<li class='list-group-item'> I love " + skills[i] + "</li>";
    // cl(result)
}

sset.innerHTML = result;
var x = 10;
var x = "Ten";
// Relational database
// Non relational database
var skillSet2 = ["Node.js", "Express.js", "MongoDB", "Angular Universal"];
var skillSetUL2 = document.getElementById('skillSet2');

var result1 = '';
for (var i = 0; i < skillSet2.length; i++) {
    result1 = result1 + "<li class='list-group-item'> I love " + skillSet2[i] + "</li>";
}

skillSetUL2.innerHTML = result1;


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
var info = document.getElementById('info');

var newResult = '';
for (var i = 0; i < studentInfo.length; i++) {
    newResult = newResult + "<tr><td>" + (i + 1) + "</td><td>" + studentInfo[i].fname + "</td><td>" + studentInfo[i].lname + "</td><td>" + studentInfo[i].nickName + "</td><td>" + studentInfo[i].contact + "</td></tr>"
}

info.innerHTML = newResult;
