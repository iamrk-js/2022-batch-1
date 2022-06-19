let cl = console.log;

// const para = document.getElementById('info') as HTMLInputElement;
const para = <HTMLInputElement>document.getElementById('info');

if(para){
    para.value = "Hello Typescript";
}


// interface IerrorContainer {
//     email : string;
//     password : string;
//     username : string
// }

interface IerrorContainer { //{email : string, ...}
  [prop : string] : string
}

let errorBox : IerrorContainer = {
    email : "ravi@gmail.com",
    username : '123'
}