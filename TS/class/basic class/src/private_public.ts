// private and public access modifier
class Department1 {
    public name: string;
    private employees: string[] = [];
    constructor(n: string) {
        this.name = n;
    };
    public describe(this: Department) {
        console.log(`Department is ${this.name}`);
    }
    public addEmp(emp: string) {
        // validations for adding emp
        this.employees.push(emp)
    }
    printNoOfEmp() {
        console.log(`${this.employees.length} `);
    }
}

let accounting1 = new Department1("Accounting");
console.log(accounting1);

accounting1.addEmp("Ravikiran");
accounting1.addEmp("Niturkar");
console.log(accounting1);
accounting1.printNoOfEmp();
// accounting1.employees[2] = "IamRk";
// Private properties are only available within the Class
console.log(accounting1);
// 23 % Web Development
// SSR >> Server Side Rendring
// CSR >> Client Side Rendring