let cl = console.log;
// Inheritance in Interface
interface Iname {
  readonly  name: string;
}
interface Igreetable extends Iname {
    // name : string
    greet(phrase: string): void;
}

class Person implements Igreetable {
    public name: string;
    public age: number = 35;
    constructor(n: string) {
        this.name = n;
    }
    public greet(phrase: string): void {
        cl(`${phrase} ${this.name}`);
        this.name = "RK";
    }
}

let person: Igreetable;

person = new Person("Ravikiran");
cl(person);
person.greet("Hello There I'm ")
cl(person)
// person.name = "RK"
// person.name = 
// let p1: Igreetable = {
//     name: "RAvi",
//     greet(phrase: string) {
//         cl(phrase)
//     },
//     age: 15
// }