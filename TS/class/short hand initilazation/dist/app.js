"use strict";
// short hand Initialazation
class Department {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        // public name: string;
        // private id : string;
        this.employees = [];
        // this.name = name;
        // this.id = id;
    }
    ;
    describe() {
        console.log(`Department ${this.id} : ${this.name}`);
    }
    addEmp(emp) {
        this.employees.push(emp);
    }
    printNoOfEmp() {
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
