let cl = console.log;

// interface describe the structure of Object
// we can not use interface as a blueprint to create instance/object 
// where as we can use class as a blueprint to create instance/object 

// type Person = {
//     name : string,
//     age : number
// }
interface Iname {
    name: string;
}
interface Igreetable {
    greet(phrase: string): void;
}

class Person implements Igreetable, Iname {
    public name: string;
    public age: number = 35;
    constructor(n: string) {
        this.name = n;
    }
    public greet(phrase: string): void {
        cl(`${phrase} ${this.name}`)
    }
}

let person: Igreetable;

person = new Person("Ravikiran");
cl(person);

// let p1: Igreetable = {
//     name: "RAvi",
//     greet(phrase: string) {
//         cl(phrase)
//     },
//     age: 15
// }