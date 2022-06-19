var cl = console.log;
var btn = document.getElementById('btn');
var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
function add(n1, n2) {
    return n1 + n2;
}
btn.addEventListener('click', function () {
    cl(add(parseInt(num1.value), Number(num2.value)));
});
var x = 10;
cl(typeof x);
// x = "Hello TypeScript"
var canDrive = false;
// canDrive = 20;
var anyValue = 500;
cl(typeof anyValue);
anyValue = true;
cl(typeof anyValue);
anyValue = {
    fname: "Jhon",
    lname: "Doe"
};
cl(typeof anyValue);
anyValue = function () {
    cl('any');
};
anyValue();
