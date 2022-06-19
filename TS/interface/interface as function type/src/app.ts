let cl = console.log;

interface IaddFun {
    (a:number, b:number) : number
}

let add : IaddFun;

add = (n1:number, n2:number) => n1 + n2;

cl(add(20,20));