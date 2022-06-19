// Getters and Setters
// Array.from, Math.PI. Math.round()
abstract class Department {
    protected employees: string[] = [];
    constructor(public name: string, protected readonly id: string) {
    };
    // public describe() {
    //     console.log(`Department ${this.id} : ${this.name}`);
    // }
    abstract describe(this: Department): void;
    public addEmp(emp: string) {
        this.employees.push(emp)
    }
    public printNoOfEmp() {
        console.log(`${this.employees.length} `);
    }
}
class AccountDepartment extends Department {
    private lastReport: string;
    static instance: AccountDepartment;
    private constructor(accountId: string, private financeReports: string[]) {
        super("Accounting", accountId);
        this.lastReport = financeReports[0]
    }
    static getInstance() {
        if (AccountDepartment.instance) {
            return this.instance;
        } else {
            this.instance = new AccountDepartment("2", [])
            return this.instance;
        }
    }
    get accessLastReport() {
        if (this.lastReport) {
            return this.lastReport;
        } else {
            throw new Error("No report Available")
        }
    }
    set accessLastReport(val: string) {
        this.lastReport = val;
    }
    public describe(): void {
        console.log(`Account Department - ID : ${this.id}`)
    }
    public addEmp(emp: string): void {
        if (emp === "Ravi") {
            return
        } else {
            this.employees.push(emp)
        }
    }
    public addReport(report: string) {
        this.financeReports.push(report);
        this.lastReport = report;
    }

    public printReport() {
        console.log(this.financeReports)
    }
}
// let acco = new AccountDepartment("2",[])
console.log("AccountDepartment.instance 1", AccountDepartment.instance)
let accounting = AccountDepartment.getInstance(); // AcconutDepartment.instance
console.log("AccountDepartment.instance 2", AccountDepartment.instance)
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

    constructor(public itId: string, private serverNames: string[]) {
        super("IT", itId)
    }
    public describe(): void {
        console.log(`IT Deapratment ID: ${this.id}`)
    }
    public addServer(srverName: string) {
        this.serverNames.push(srverName)
    }

    public printServer() {
        console.log(this.serverNames)
    }
}

let itDepartment = new ITDepartment('5', []);
console.log(itDepartment);
itDepartment.addServer("Server One");
itDepartment.printServer();
itDepartment.printNoOfEmp()
itDepartment.describe()


// Protected Modifier >> That property will be avaible in parent class and child class as well
// It will not be available on instance/object created by class


// function Circle(rad){
//     let location = {x:0};

//     this.getLocation = function(){
//         return location
//     }
// }