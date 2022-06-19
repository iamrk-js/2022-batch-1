let cl = console.log;

// interface describe the structure of Object
// we can not use interface as a blueprint to create instance/object 
// where as we can use class as a blueprint to create instance/object 


interface Iperson {
    name : string;
    age : number;
    greet(phrase:string) : void;
}

let person : Iperson;


// person = {
//     name : "Ravikiran",
//     age : 35,
//     greet : function(phrase:string){
//         cl(`${phrase} ${this.name}`)
//     }
// } 

person = {
    name : "Ravikiran",
    age : 35,
    greet(phrase:string){
        cl(`${phrase} ${this.name}`)
    }
}

person.greet("Hello There, I'm")