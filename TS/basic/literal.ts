// Literal Types 
// resultConversion === 'as-number' | 'as-string'

function combine(num1: number | string , num2: number | string, resultConversion: 'as-number' | 'as-string') {
    let result
    if ((typeof num1 === 'number' && typeof num2 === 'number') || resultConversion === 'as-number') {
        result = +num1 + +num2;
    } else {
        result = num1.toString() + num2.toString()
    }
    // if (resultConversion === 'as-number') {
    //     return +result;
    // } else {
    //     return result.toString()
    // }
    return result;
}


let com1 = combine(10, 20, 'as-number');
console.log(com1, typeof com1);

let com2 = combine('10', '20', 'as-number');
console.log(com2, typeof com2);

let com3 = combine("Ravikiran", " Niturkar", 'as-string');
console.log(com3, typeof com3);


const x = 5;
const greet = "Hello There";