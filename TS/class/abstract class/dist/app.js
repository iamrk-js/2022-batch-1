"use strict";
// Getters and Setters
class Department {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.employees = [];
    }
    ;
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
        this.lastReport = financeReports[0];
    }
    get accessLastReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        else {
            throw new Error("No report Available");
        }
    }
    set accessLastReport(val) {
        this.lastReport = val;
    }
    describe() {
        console.log(`Account Department - ID : ${this.id}`);
    }
    addEmp(emp) {
        if (emp === "Ravi") {
            return;
        }
        else {
            this.employees.push(emp);
        }
    }
    addReport(report) {
        this.financeReports.push(report);
        this.lastReport = report;
    }
    printReport() {
        console.log(this.financeReports);
    }
}
let accounting1 = new AccountDepartment("1", []); // here ID get Initilized
console.log(accounting1);
accounting1.addEmp("Ravi");
accounting1.addEmp("Ravikiran");
accounting1.addReport("All form 16");
console.log(accounting1);
// console.log(accounting1.getLastReport());
// accounting1.setLastReport("TDS Forms")
// console.log(accounting1.getLastReport());
console.log(accounting1.accessLastReport);
accounting1.accessLastReport = "TDS Forms";
console.log(accounting1.accessLastReport);
accounting1.printReport();
accounting1.printNoOfEmp();
accounting1.describe();
// accounting1.employees
class ITDepartment extends Department {
    constructor(itId, serverNames) {
        super("IT", itId);
        this.itId = itId;
        this.serverNames = serverNames;
    }
    describe() {
        console.log(`IT Deapratment ID: ${this.id}`);
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
itDepartment.describe();
// Protected Modifier >> That property will be avaible in parent class and child class as well
// It will not be available on instance/object created by class
// function Circle(rad){
//     let location = {x:0};
//     this.getLocation = function(){
//         return location
//     }
// }
