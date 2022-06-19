// Static Methods and Properties >> Means that can be directly used on class
// Math.PI, MAth.round(), Math.random()
// Array.from()
class Department {
    protected employees: string[] = [];
    constructor(public name: string, private readonly id: string) {
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
    static createEmp(empName: string) {
        return { name: empName }
    }
}
class AccountDepartment extends Department {
    private lastReport: string;
    static fiscalYear:number = 2022;
    constructor(accountId: string, private financeReports: string[]) {
        super("Accounting", accountId);
        this.lastReport = financeReports[0]
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
// accounting1.employees
console.log(Department.createEmp("Ravikrian"));
console.log(AccountDepartment.fiscalYear);

class ITDepartment extends Department {

    constructor(public itId: string, private serverNames: string[]) {
        super("IT", itId)
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


// Protected Modifier >> That property will be avaible in parent class and child class as well
// It will not be available on instance/object created by class


// function Circle(rad){
//     let location = {x:0};

//     this.getLocation = function(){
//         return location
//     }
// }