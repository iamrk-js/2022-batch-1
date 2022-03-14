var cl = console.log;

//1 array litral

var ages = [15, 25, 85, 45, 65, 23, 78, 56];
cl(ages);

//2 array constructor method
var newAges = new Array(25, 36, 56, 48, 78, 56);
cl(newAges, typeof newAges);

var arr = new Array(25);
// empty * 25 >> It will create 25 array holes

cl(arr);

var arr = new Array('25');
// empty * 25 >> It will create 25 array holes
cl(arr);

//1 to convert array into string
// Array.join(separator?: string): string

var skills = ['html', 'css', 'javaScript', 'Angular'];

var str1 = skills.join(', ');
cl(str1);

var str1 = skills.join(' * ');
cl(str1);

var str1 = skills.join(' | ');
cl(str1);
var str1 = skills.join(' ');
cl(str1)
var str1 = skills.join('');
cl(str1);

var str1 = skills.join();
cl(str1);
// 2 toString
//Array.toString(): string
var str1 = skills.toString();
cl(str1);

// pop, push


var skills = ['html', 'css', 'javaScript', 'Angular'];
// Removes the last element from an array and returns it.
var popValue = skills.pop();
cl(skills);
cl("popValue", popValue);

// Appends new elements to the end of an array, and returns the new length of the array.
var newLength = skills.push("Angular 13");
cl(skills);
cl(newLength);

// shift, unshift


var skills = ['html', 'css', 'javaScript', 'Angular'];
// skills.shift()
var firstSkill = skills.shift();

cl(skills)
cl(firstSkill)

// skills.unshift('HTML5');

var onUnshift = skills.unshift('HTML5');
cl(skills);
cl(onUnshift);


var skills = ['html', 'css', "SASS", 'javaScript', 'Angular'];
var firstSkill = skills[0];
cl(firstSkill);
var lastSkill = skills[skills.length - 1];
cl(lastSkill);
skills[2] = "Bootstrap3-4";
cl(skills);
skills[skills.length] = "Nodejs";
cl(skills);


// var arrLength = skills.length; //5
// for (let i = 0; i < arrLength ; i++) {
//     skills.pop()
// }
skills.length = 0;
// cl(skills);


// delete skills[2]

cl(skills)

// concat 

var skill1 = ['html', 'css', "SASS", 'javaScript', 'Angular'];
var skill2 = ['Node.js', 'Express.js', 'MongoDB'];
var skill3 = ['Soft Skills', 'Communication'];

var skill = skill1.concat(skill2, "Git", "Postman", skill3);
cl(skill);


// slice 
//Array.slice(start?: number, end?: number): []
var skill = ['html', 'css', "SASS", 'javaScript', 'Angular'];
// start >> start index number >> which is included in resultant array // 0
// end >> end index number >> which is not included in resultant array // last Index
// start and end both are non-mandetory
// slice accept -ve arrguments
// It returns a new array
var newSkills = skill.slice(2, 4);
cl(newSkills);
var newSkills = skill.slice(-4, -2);
cl(newSkills);
var newSkills = skill;
cl(newSkills)




var clonedSkills = skill.slice();

cl(clonedSkills);

clonedSkills.pop();

cl(clonedSkills);
cl(skill);


// splice 
// Is to remove array elements without leaving holes in the array.
// Array<string>.splice(start: number, deleteCount?: number): string[] ;
// start >> It is mandetory
// deletecount >> is non Mandetory

var skills = ['html', 'css', "SASS", 'javaScript', 'Angular'];
skills.splice(2, 1);
cl(skills);

var skills = ['html', 'css', "SASS", 'javaScript', 'Angular'];
skills.splice(2, 2);
cl(skills);

var skills = ['html', 'css', "SASS", 'javaScript', 'Angular'];
skills.splice(1, 2);
cl(skills);

var skills = ['html', 'css', "SASS", 'javaScript', 'Angular'];
skills.splice(1);
cl(skills);


var skills = ['html', 'css', "SASS", 'javaScript', 'Angular'];
skills.splice(2, 1, "Botstrap3", "Bootstrap4");
cl(skills);

var skills = ['html', 'css', "SASS", 'javaScript', 'Angular'];
skills.splice(3, 0, "Botstrap3", "Bootstrap4");
cl(skills);

var skills = ['html', 'css', "SASS", 'javaScript', 'Angular'];
skills.splice(3, "Botstrap3", "Bootstrap4");
cl(skills);

// reverse 
//Reverses the elements in an array in place.
// This method mutates the array and returns a reference to the same array.
var skills = ['html', 'css', "SASS", 'javaScript', 'Angular'];
var newSkills = skills.reverse();
cl(newSkills);

// sort 
var skills = ['html', 'Css', "SASS", 'javaScript', 'angular'];

var sortedSkills = skills.sort();
cl(sortedSkills);

var ages = [20,2,15,1,100,156,250,3,352];

var sortedAges = ages.sort();
cl(sortedAges);
