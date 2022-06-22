var cl = console.log;

// First Class Functions >> A function which is stored as value 

cl("Hello javaScript !!!");

var ages = [25,45,58,65,25,12,36,78];
// Array >> Where we can store multiple data/info on the basis of index number
cl(ages)
// Index Starts from 0
var getSecondAge = ages[1];
cl(getSecondAge);

var cs = ages[3];
cl(cs);


ages[3] = 25;
cl(ages);

var arrayMembers = ages.length;

cl(arrayMembers)

// In javaScript Everything is Object except primitive data types
let btn = document.getElementById('btn');
btn.addEventListener('click', function(e){
    cl(e)
})