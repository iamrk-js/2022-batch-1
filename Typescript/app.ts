let cl = console.log;

const btn = document.getElementById('btn');
const num1 = document.getElementById('num1')! as HTMLInputElement;
const num2 = document.getElementById('num2')! as HTMLInputElement;

function add(n1: number, n2: number) {
    return n1 + n2
}

btn.addEventListener('click', () => {
    cl(add(parseInt(num1.value), Number(num2.value)))
})

let x:number = 10;
cl(typeof x)
// x = "Hello TypeScript"

let canDrive:boolean = false;
// canDrive = 20;
let anyValue : any = 500;
cl(typeof anyValue);
anyValue = true;
cl(typeof anyValue);
anyValue = {
    fname : "Jhon",
    lname : "Doe"
}
cl(typeof anyValue)

anyValue = () => {
    cl('any')
}

anyValue()
