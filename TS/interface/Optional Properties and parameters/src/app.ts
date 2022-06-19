let cl = console.log;

interface IaddFun {
    (a: number, b: number): number
}

let add: IaddFun;

add = (n1: number, n2: number) => n1 + n2;

cl(add(20, 20));
interface Iname {
    readonly name?: string;
    nickName ?: string;
}
interface Igreetable extends Iname {
    // name : string
    greet(phrase: string): void;
    newGreet?(phrase:string) : void
}

class Person implements Igreetable {
    public name?: string;
    public age: number = 35;
    public nickName?: string  = "RK";
    constructor(n?: string) {
       n ?  this.name = n : this.name = "RAvi"
    }
    public greet(phrase: string): void {
        cl(`${phrase} ${this.name}`);
        this.name = "RK";
    }
}

let person: Igreetable;

person = new Person("Ravikiran");
cl(person);
let p1 = new Person();
cl(p1)