var cl = console.log;


var str = "I love javascript, to study new things in javascript I daily visits, https://www.w3schools.com/ https://medium.com/ and https://www.freecodecamp.org/ and https://javascript.info/ these are vary imp websites for javaScript developer";

var str2 = "I love javascript, to study new things in javascript I daily visits, https://www.w3schools.com/ https://medium.com/ and https://www.freecodecamp.org/ and https://javascript.info/ these are vary imp websites for javaScript developer";

var info = document.getElementById('info');
var info2 = document.getElementById('info2');

// info.innerHTML = str;
// var arr = str.split(' ');
// // cl(arr);
// var result = '';
// arr.forEach(function(newStr){
//     // cl(newStr, newStr.indexOf('http'));
//     if(newStr.indexOf('http') > -1){
//         cl('Link is available', newStr)
//         result += " <a href='"+newStr+"'  target='_blank'>"+newStr+"</a> "
//     }else{
//         cl('Link is not available', newStr)
//         result += newStr + ' '
//     }
// })

// info.innerHTML = result;

function wrappLink(myString){
    var arr = myString.split(' ');
    var result = '';
    arr.forEach(function(ele){
        if(ele.indexOf('http') > -1){
            result += " <a href='"+ele+"'  target='_blank'>"+ele+"</a> ";
        }else{
            result += ele + ' '
        }
    })
    // info.innerHTML = result;
    return result;
}

info.innerHTML = wrappLink(str)
info2.innerHTML = wrappLink(str2)