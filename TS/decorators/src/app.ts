

let cl = console.log;
// function logMsg(target : Function){
//     cl(`Instance Created: by using class`)
// }

function logMsg(classString : string){
  return function(target : Function){
    cl(`Instance Created: by using class ${classString}`)
  }
}

function templating(template : string, tempId : string){
    return function(target : any){
        let getTempId = document.getElementById(tempId)! as HTMLElement;
        let p = new target();
        if(getTempId){
            // getTempId.innerHTML = template; 
            getTempId.innerHTML = `<h1>${p.skill}</h1>`;
        }
    }
}
// @logMsg("PERSON")
@templating(`<h1>I love Angular</h1>`, 'info')
class Person {
    name : string = "Ravi";
    skill : string = "Angular 14"
    constructor(){
      
    }
}

let p1 = new Person();
cl(p1)


@logMsg("SPORTS")
class Sport {
    name : string = "Cricket";
    constructor(){
      
    }
}

let sport1 = new Sport();
cl(sport1)

