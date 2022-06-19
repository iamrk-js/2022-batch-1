let cl = console.log;
// function add(n1: number, n2: number, showResult:boolean) {
//   if(showResult === true){
//       cl(n1 + n2)
//   }else{
//     return n1 + n2;
//   }
// }

// let num1 = 20;
// let num2 = 500;
// let printResult = true;

// let result = add(num1, num2, !printResult);
// cl("Value returned by Function",result);

// add(num1, num2, printResult);


function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    if (showResult === true) {
        let result = n1 + n2;
        cl(`${phrase} ${result}`)
    } else {
        return n1 + n2;
    }
}

let num1 = 20;
let num2 = 500;
let printResult = true;

let text = "The result is";

add(500, 20, true, "The result is");  // The result is 520
add(num1, num2, printResult, text);  // The result is 520

// Type Inference 
// If we dclr a property and assign a value to it, Typescript will assign datatype to 
// That property and this is called as Type Inference
let x = 20;

let y: number;

y = 20;
// y = "Hello";
// y = true;
