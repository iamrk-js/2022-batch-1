// Inheritance
class Department {
    private employees: string[] = [];
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
}
class AccountDepartment extends Department {
    constructor(accountId: string, private financeReports : string[]) {
        super("Accounting", accountId);
    }

    public addReport(report:string){
        this.financeReports.push(report)
    }

    public printReport(){
        console.log(this.financeReports)
    }
}

let accounting1 = new AccountDepartment("1", []); // here ID get Initilized

console.log(accounting1);

accounting1.addEmp("Ravikiran");
accounting1.addReport("All form 16");
accounting1.printReport();
accounting1.printNoOfEmp();

class ITDepartment extends Department{
   
    constructor(public itId:string, private serverNames:string[]){
        super("IT",itId )
    }
    public addServer(srverName:string){
        this.serverNames.push(srverName)
    }

    public printServer(){
        console.log(this.serverNames)
    }
}

let itDepartment = new ITDepartment('5', []);
console.log(itDepartment);
itDepartment.addServer("Server One");
itDepartment.printServer();
itDepartment.printNoOfEmp()
