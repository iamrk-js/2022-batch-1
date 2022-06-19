"use strict";
// Inheritance
class Department {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.employees = [];
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
class AccountDepartment extends Department {
    constructor(accountId, financeReports) {
        super("Accounting", accountId);
        this.financeReports = financeReports;
    }
    addReport(report) {
        this.financeReports.push(report);
    }
    printReport() {
        console.log(this.financeReports);
    }
}
let accounting1 = new AccountDepartment("1", []); // here ID get Initilized
console.log(accounting1);
accounting1.addEmp("Ravikiran");
accounting1.addReport("All form 16");
accounting1.printReport();
accounting1.printNoOfEmp();
class ITDepartment extends Department {
    constructor(itId, serverNames) {
        super("IT", itId);
        this.itId = itId;
        this.serverNames = serverNames;
    }
    addServer(srverName) {
        this.serverNames.push(srverName);
    }
    printServer() {
        console.log(this.serverNames);
    }
}
let itDepartment = new ITDepartment('5', []);
console.log(itDepartment);
itDepartment.addServer("Server One");
itDepartment.printServer();
itDepartment.printNoOfEmp();
