// Read Only Properties
class Department {
    // public name: string;
    // private id : string;
    private employees: string[] = [];
    constructor(public name: string, private readonly id: string) {
        // this.name = name;
        // this.id = id;
    };
    public describe() {
        console.log(`Department ${this.id} : ${this.name}`);
    }
    public addEmp(emp: string) {
        // this.id = "New Id 2";
        this.employees.push(emp)
    }
    public printNoOfEmp() {
        console.log(`${this.employees.length} `);
    }
}

let accounting1 = new Department("Accounting", "1"); // here ID get Initilized
console.log(accounting1);

accounting1.addEmp("Ravikiran");
accounting1.addEmp("Niturkar");
// console.log(accounting1);
// accounting1.printNoOfEmp();
// accounting1.describe();
accounting1.addEmp("ravikiran");
console.log(accounting1);


// accounting1.id = "New Account One"

// private properties are only available within the class where we can modife them
// but readonly properties we can not modify them within a class as well
// both private and readonly properties will not available on there instances/Object