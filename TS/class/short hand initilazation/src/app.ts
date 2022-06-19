// short hand Initialazation
class Department {
    // public name: string;
    // private id : string;
    private employees: string[] = [];
    constructor(public name: string, private id: string) {
        // this.name = name;
        // this.id = id;
    };
    public describe() {
        console.log(`Department ${this.id} : ${this.name}`);
    }
    public addEmp(emp: string) {
        this.employees.push(emp)
    }
    public printNoOfEmp() {
        console.log(`${this.employees.length} `);
    }
}

let accounting1 = new Department("Accounting", "1");
console.log(accounting1);

accounting1.addEmp("Ravikiran");
accounting1.addEmp("Niturkar");
console.log(accounting1);
accounting1.printNoOfEmp();
accounting1.describe();
// accounting1.employees[2] = "IamRk";
// Private properties are only available within the Class
console.log(accounting1);
// 23 % Web Development
// SSR >> Server Side Rendring
// CSR >> Client Side Rendring