// alert("Hello");


// let isPrime = (num) => {
//     let divider = 2;
//     while (divider < (num / 2) + 1) {
//         if (num % divider === 0) {
//             return false;
//         } else {
//             divider++
//         }
//     }
//     return true;
// }



// let primesinRange = (a,b) => {
//     let result = [];
//     for(let i = Math.min(a,b); i <= Math.max(a,b); i++){
//         if(isPrime(i)){
//             result.push(i)
//         }
//     }
//     return result;
// }

// console.log(primesinRange(20, 30));


let primesinRange = (a, b) => {
    let result = [];
    let isPrime = true;
    for (let i = a; i <= b; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            } else {
                isPrime = true;
            }
        }
        if (isPrime) {
            result.push(i)
        }
    }
    return result
}
console.log(primesinRange(20, 30))