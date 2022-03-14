var cl = console.log;

var str = "I love javaScript";

// length >> Property >> which gives us no of char in given string
var strLength = str.length;
cl(strLength);

// replace 

var str1 = "I love Reactjs, becoz reactJs is not sutaible for large Application and reactjs is not framework";
cl("str1 value :", str1)
var str2 = str1.replace('Reactjs', 'Angular');

cl("str2 value :", str2);
// Regax
var str4 = str1.replace(/reactjs/i, 'Angular');
cl('str4 value :', str4);
// String.replace(searchValue: string, replaceValue: string): string

var str5 = str1.replace(/reactjs/ig, 'Angular');

cl(str5);

// toUpperCase, toLowerCase

var str = 'I love javaScript';
// String.toUpperCase(): string
cl(str.toUpperCase());
// String.toLowerCase(): string
cl(str.toLowerCase())

var str1 = str.replace('javaScript', 'javascript'.toUpperCase());
cl(str1);

// String.trim(): string
var str = "    javascript  ";
cl(str.length)
str = str.trim();
cl(str.length)

if (str.length == 10) {
    cl(str)
}

// concat

var greet1 = "Hello ";
var greet2 = "javaScript";
var msg = "I love you vary much."
// var greet = greet1 + greet2;
var greet = greet1.concat(greet2, ". How Are you? ", msg)
cl(greet);
// charAt

var str = "Hello javaScript";

cl(str.charAt(0));
cl(str.charAt(6));


// var str = "I love javaScript, becoz javaScript is feature of Web and javaScript having lot of frameworks like Angular";
var str = "I love love love javaScript, becoz javaScript is feature of Web and javaScript having lot of frameworks like Angular";
var indexOfjavaScript = str.indexOf('javaScript');
cl(indexOfjavaScript);

var indexOfReact = str.indexOf('ReactJs');

cl(indexOfReact);

var indexOf2ndJavaScript = str.indexOf('javaScript', indexOfjavaScript + 1);
cl(indexOf2ndJavaScript);

var indexOf3rdJavaScript = str.indexOf('javaScript', indexOf2ndJavaScript + 1);
cl(indexOf3rdJavaScript);

var lastIndexOFJavaScript = str.lastIndexOf('javaScript');
cl(lastIndexOFJavaScript);

// Extracting subString(words) from String(given string);
// slice, subString, subStr // IMP for Interview


//1 slice(start?: number, end?: number): string
// start >> non-mandatory >> Start index number from which we are going to exctract string
//end >> non-mandetory >> end index number upto which we are exctract string
// start index is included in exctracted part
// end index is not included
// We Can Pass -ve arrguments as well
// slice
var str = 'Apple, Banana, Kiwi';
var f1 = str.slice(7, 13);
cl(f1);
cl(str)
// cl(str.replace(' Banana,',''))
var f2 = str.slice(7);
cl(f2);
var f3 = str.slice();
cl(f3);
var str = 'Apple, Banana, Kiwi';
var f4 = str.slice(-12, -6);
cl(f4);

// 2 substring

var str = 'Apple, Banana, Kiwi';
// String.substring(start: number, end?: number): string
// start >> Is mandetory >> Is included in resultant string
// end >> Non mandetory >> Not included in resultant string 
// It returns string
// It does not accepts -ve arrguments

var f5 = str.substring(7, 13);
cl("subString : ", f5)

var f6 = str.substring(7);
cl("subString : ", f6);

// If we does not pass start index as 1st arrgument to subString, It will consider as 0;
var f7 = str.substring();
cl("subString : ", f7);
var str = 'Apple, Banana, Kiwi';
// 3 substr
// String.substr(from: number, length?: number): string
// from(1st Arrgument) >> Index number from which we are going to exctract substring
// length(2nd arrgument) >> It defines no of chart 
// It does not accepts -ve arrguments
// If we does not pass from as 1st arrgument to subString, It will consider as 0;
var f8 = str.substr(7,6);
cl(f8);
var f8 = str.substr(7);
cl(f8);

var f8 = str.substr();
cl(f8);


// TO convert string into array

var skills = "HTML5 CSS3 SASS Bootstrap javaScript es6 TypeScript Angular";

var arr = skills.split(' ');
cl(arr)

var str = 'Apple, Banana, Kiwi';

var newArr = str.split(' ');
cl(newArr);

var newArr = str.split('');
cl(newArr);

var newArr = str.split();
cl(newArr);







