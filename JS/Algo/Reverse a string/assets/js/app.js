var cl = console.log;

var str1 = 'I love javaScript';
// tpircSavaj evoL I
var newStr = '';
for(var i = str1.length - 1; i >= 0; i--){
    newStr += str1.charAt(i)
}
cl(newStr);

var str2 = 'I love javaScript';

// var arr = str2.split('');
// cl(arr)
// var reverArr = arr.reverse();
// cl(reverArr);

// var revStr = reverArr.join('');
// cl(revStr)

// var revStr = str.split('').reverse().join('');
// cl(revStr)

function reverseString(str){
    return str.split('').reverse().join('')
}

var result = reverseString(str2);
cl(result);


