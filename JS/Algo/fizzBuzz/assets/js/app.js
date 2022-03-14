let cl = console.log;

// print 1  to 15 numbers
// If num % 3 == 0 >> "Fizz"
// If num % 5 == 0 > "Buzz"
// If num % 3 && num % 5 == 0 "FizzBuzz"
// num


for(let i = 1; i <= 15; i++){
    if(i % 3 == 0 && i % 5 == 0){
        cl('FizzBuzz');
    }else if(i % 5 == 0){
        cl('Buzz');
    }else if(i % 3 == 0){
        cl('Fizz');
    }else {
        cl(i)
    }
}

