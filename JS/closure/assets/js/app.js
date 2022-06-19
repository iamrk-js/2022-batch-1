let cl = console.log;

// closure >> When we return a function inside a another function
// Inner function create a scope called as "lexical scope" and inner function
// can access all data of that scope
// "Lexical Scope" >> scope of parent

// Closure >> A function with it's Lexical scope is called as Closure.
function outterFunction() {
  let x = 10;
  return function innerFunction() {
    return x;
  };
}

// cl(x);

let fun1 = outterFunction();
cl(fun1);

let fun2 = fun1();
cl(fun2);

function mainFun() {
  let a = 20;
  return function child1() {
    let b = 20;
    return function child2() {
      let c = 30;
      return a + b + c;
    };
  };
}

let result1 = mainFun()()(); // this is called as function currying
cl(result1);

let main1 = mainFun(); // child1 def
cl(main1);

let main2 = main1(); // child2 def

cl(main2);

let main3 = main2();

cl(main3);

function mainFun1(x) {
  // let x;
  return function inner1(y) {
    // let y
    return function inner2(z) {
      // let z
      return x + y + z;
    };
  };
}

let result2 = mainFun1(25);
cl(result2);
let result3 = result2(50);
cl(result3);
let finalResult = result3(75);
cl(finalResult);

let finalResult1 = mainFun1(25)(50)(75);
cl(finalResult1);

function setX() {
  let x = 10;
  return function () {
    // x = 11
    x++;
    return x;
  };
}

let f1 = setX();
cl(f1()); // 11
cl(f1()); // 12
cl(f1()); // 13

let f2 = setX();
cl(f2()); // 11
cl(f2()); // 12
cl(f2()); // 13
