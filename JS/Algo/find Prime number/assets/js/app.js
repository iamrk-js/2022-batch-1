let cl = console.log;

// Prime Number >> A number which can be divided by 1 or itself;
// 7 
// 7 % 1 == 7

// 7 % 2 != 0
// 7 % 3 != 0
// 7 % 4 != 0
// 7 % 5 != 0
// 7 % 6 != 0

// 7 % 7 == 0
// let x = 1
// while (x < 5) {
//     cl(x)
//     x++
// }


// 5 
function isPrime(n) {
 let divider = 2;
    while( divider < n ){
        if(n % divider == 0){
            return (`Given number ${n} is not a Prime Number`)
        }else{
            divider++;
        }
    }
    return (`The Given Number ${n} is a Prime Number`)
}

// cl(isPrime(5))
cl(isPrime(6))