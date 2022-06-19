"use strict";
// Getters and Setters
// Array.from, Math.PI. Math.round()
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
    static getInstance() {
        if (AccountDepartment.instance) {
            return this.instance;
        }
        else {
            this.instance = new AccountDepartment("2", []);
            return this.instance;
        }
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
// let acco = new AccountDepartment("2",[])
console.log("AccountDepartment.instance 1", AccountDepartment.instance);
let accounting = AccountDepartment.getInstance(); // AcconutDepartment.instance
console.log("AccountDepartment.instance 2", AccountDepartment.instance);
let accounting1 = AccountDepartment.getInstance(); // here ID get Initilized
console.log(accounting, accounting1);
accounting.addEmp("Ravikiran");
accounting.addReport("All form 16");
accounting1.addReport("TDS");
console.log(accounting);
// console.log(accounting.getLastReport());
// accounting?.setLastReport("TDS Forms")
// console.log(accounting.getLastReport());
// console.log(accounting.accessLastReport);
// accounting.accessLastReport = "TDS Forms";
// console.log(accounting.accessLastReport);
// accounting.printReport();
// accounting.printNoOfEmp();
// accounting.describe();
// accounting.employees
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
