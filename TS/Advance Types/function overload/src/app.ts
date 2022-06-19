let cl = console.log;


type Combinable = number | string;
type Numeric = number | boolean;

function add(n1:string, n2:string) : string;
function add(n1:number, n2:number) : number;
function add(n1:string, n2:number) : string;
function add(n1:number, n2:string) : string;
function add(n1 : Combinable, n2 : Combinable){
  if(typeof n1 === 'number' && typeof n2 === 'number'){
    return n1 + n2
  }else{
    return n1.toString() + n2.toString()
  }
}
let result = add(3,3);
let result2 = add("Ravikiran ", "Niturkar"); // "Ravikiran Niturkar"

cl(result2.split(" "));

let result3 = add("3",3);
cl(result3)


