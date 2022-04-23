let cl = console.log;

// Pure Function

// 1 It must give same output for same Input(arguments)
// 2 It must return something
// 3 It should not depends upon external factor

function add(x, y) {
  let result = x + y;
  cl(result);
}

add(10, 10);
add(10, 10);
add(10, 10);
add(10, 10);

// MAth.random() >> 0 to .9999
// MAth.floor(0 to .999 * 10 ) >> 0 to 9
function addRandom(x, y) {
  return x + y + Math.floor(Math.random() * 10);
}

cl(addRandom(10, 10)); // 21
cl(addRandom(10, 10)); // 26
cl(addRandom(10, 10)); // 27
cl(addRandom(10, 10)); // 29

let z = 10;
function add2(x, y) {
  return x + y + z;
}

cl(add2(20, 20)); // 50
cl(add2(20, 20)); //50
cl(add2(20, 20)); //50
cl(add2(20, 20)); // 50

// Pure Function
function pureFun(x, y) {
  return x + y;
}

cl(pureFun(50, 50)); // 100
cl(pureFun(50, 50)); // 100
cl(pureFun(50, 50)); // 100
cl(pureFun(50, 50)); // 100
