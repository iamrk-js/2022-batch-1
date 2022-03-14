var cl = console.log;


// 1 To get Current Date-Object
var d = new Date();

cl(d);

// 2 To get past/future date-Object

// new Date(year,month,date,hr,min,sec)
// new (year: number, month: number, date?: number, hours?: number, minutes?: number,
// seconds?: number, ms?: number) => Date
var arr = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
var wordCup = new Date(1983, 5, 25, 17, 10, 10);

cl(wordCup);
var wordCup = new Date(1983, 5);
cl(wordCup);

var futureDate = new Date(2050, 7, 5);
cl(futureDate);

// 3 Third type by passing milliseconds

// that value will be considered as number of milliseconds from 1 jan 1970(5:30 am)

var d = new Date(0);
cl(d);

var d = new Date(2022);
cl(d);

var d = new Date(86400000);
cl(d);

var d = new Date(-86400000);
cl(d);

//4 to create date Object  by using string values
var arr = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

var d = new Date("October 15, 1931, 11:11:11"); // APJ abdul Kalam
cl(d);
// get methods methods in Date Object
var dyear = d.getFullYear();
cl(dyear, typeof dyear);
// Date.getMonth(): number
var dMonth = d.getMonth();
cl(dMonth);
cl(arr[dMonth]);

// Date.getDate(): number
var dDate = d.getDate();
cl(dDate);

var dHours = d.getHours();
cl(dHours);

var dMins = d.getMinutes();
cl(dMins);

var dSecs = d.getSeconds();
cl(dSecs);

var dMillis = d.getMilliseconds();

cl(dMillis);

var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var dDay = d.getDay();
cl(dDay)

cl(weekdays[dDay]);


// getTime
// it retuns no of milliseconds from 1 jan 1970 to datevalue in Date object
var dTime = d.getTime();

cl(dTime);

// DateConstructor.now()  >> It will returns no of milliseconds from 1jan 1970 to present/current time
// The methods which are directly call on Constructor are called static methods
// Static Methods does not need instances or Object to call
var currentMilli = Date.now();
cl(currentMilli);


// set Methods

var d = new Date();

cl(d);
cl(d);

// setDate

d.setDate(26);
cl(d);

//setFull Year
// Date.setFullYear(year: number, month?: number, date?: number): number
d.setFullYear(2017);
cl(d);
//set Month
// Date.setMonth(month: number, date?: number): number
d.setMonth(7, 5);
cl(d)
// set Hours 
//  Date.setHours(hours: number, min?: number, sec?: number, ms?: number): number
d.setHours(19);
cl(d);

// set Min
// Date.setMinutes(min: number, sec?: number, ms?: number): number
d.setMinutes(45);
cl(d);
// Date.setSeconds(sec: number, ms?: number): number
// set seconds

d.setSeconds(45);
cl(d);

// set Milliseconds
d.setMilliseconds(45);
cl(d);





