let cl = console.log;

function add(x, y = 12) {
  // var x; undefined
  // var y = 12;
  // var z = 20
  return x + y;
}

cl(add(3, 5)); // x == 3, y == 5;
cl(add(3, 2)); // x == 3, y == 2;
cl(add(100)); // x == 100 , y == 12

// function calcuateBill(total, tax, tip) {
//   if (!tax) {
//     tax = 0.05;
//   }
//   if (!tip) {
//     tip = 0.1;
//   }
//   return total + total * tax + total * tip;
// }
function calcuateBill(total = 100, tax = .05, tip = .1){
    return total + (total * tax) + (total * tip)
}
cl(calcuateBill(6000, 0.1, 0.2));
cl(calcuateBill(6000));
cl(calcuateBill());
