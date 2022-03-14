let cl = console.log;

// find fact 4 >>  4 * 3 * 2 * 1
// -4  >> Facto of -ve no does not exist
// 0 >> facto of 0 is 1

function findFactorial(n) {
    // If given Number is -ve
    if (n < 0) {
        return (`Factorial of -ve number does not exist`)
    }
    // If given number is 0
    else if (n === 0) {
        return (`Factorial of ${n} is 1`)
    }
    // If given number is +ve
    else {
        let factNo = 1;
        for (let i = 1; i <= n; i++) {
            factNo *= i;
        }
        return (`Factorial of ${n} is ${factNo}`)
    }
}

cl(findFactorial(4))
cl(findFactorial(5))

// Recursive function 
// A function who call himself is called as recursive function
// 4
function findFactoWithOutLoop(n) {
    // If given Number is -ve
    if (n < 0) {
        return (`Factorial of -ve number does not exist`);
    }
    // If given number is 0
    else if (n === 0) {
        return (`Factorial of ${n} is 1`);
    }else if(n === 1){
        return 1;
    }else {
        return n * findFactoWithOutLoop(n - 1);
    }
}
// n === 4
// 4 * findFactoWithOutLoop(4 - 1) >> 4 * findFactoWithOutLoop(3)
// 4 * 3 * findFactoWithOutLoop(2)
// 4 * 3 * 2 * findFactoWithOutLoop(1)
// 4 * 3 * 2 * 1 >> 24

cl(findFactoWithOutLoop(4))