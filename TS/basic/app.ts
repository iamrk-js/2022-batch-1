//  the unknown type 

let userInput: unknown;
// let userInput : any;

userInput = "Hello Typescript";
userInput = 123;
userInput = true;
let userName: string;

if (typeof userInput === 'string') {
    userName = userInput;
}


