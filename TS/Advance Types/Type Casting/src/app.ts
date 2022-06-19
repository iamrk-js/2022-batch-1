let cl = console.log;

// const para = document.getElementById('info') as HTMLInputElement;
const para = <HTMLInputElement>document.getElementById('info');

if(para){
    para.value = "Hello Typescript";
}