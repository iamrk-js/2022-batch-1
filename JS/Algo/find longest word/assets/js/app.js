var cl = console.log;
const email = document.getElementById("email");
const confirmEmail = document.getElementById("confirmEmail");

let demoString = "I love javascript$, typescript, angular13, bootstrap4";

// function findLargestWord(str) {
//   let arr = str.toLowerCase().match(/[a-z0-9]+/g);
//   cl(arr)
//   let sortedArr = arr.sort((s1, s2) => {
//     return s2.length - s1.length;
//   });
//   let result = sortedArr.filter((str1) => {
//     return str1.length === sortedArr[0].length;
//   });
//   return result;
// }



function findLargestWord(str) {
    let arr = str.toLowerCase()
                            .match(/[a-z0-9]+/g)
                            .sort((s1,s2) =>  s2.length > s1.length ? 1 : -1);
   
    let result = arr.filter((str1) =>  str1.length === arr[0].length);
    return result;
  }



let result = findLargestWord(demoString);
cl(result)
// function bindvalueTOEMail(val){
//     email.value = val
// }

// bindvalueTOEMail('nravikiran@gmail.com')

function bindvalueTOEMail(val) {
  return val;
}

// email.value = bindvalueTOEMail("nravikiran5@gmail.com");
// confirmEmail.value = bindvalueTOEMail("nravikiran5@gmail.com");
