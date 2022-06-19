"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let cl = console.log;
// function logMsg(target : Function){
//     cl(`Instance Created: by using class`)
// }
function logMsg(classString) {
    return function (target) {
        cl(`Instance Created: by using class ${classString}`);
    };
}
function templating(template, tempId) {
    return function (target) {
        let getTempId = document.getElementById(tempId);
        let p = new target();
        if (getTempId) {
            // getTempId.innerHTML = template; 
            getTempId.innerHTML = `<h1>${p.skill}</h1>`;
        }
    };
}
// @logMsg("PERSON")
let Person = class Person {
    constructor() {
        this.name = "Ravi";
        this.skill = "Angular 14";
    }
};
Person = __decorate([
    templating(`<h1>I love Angular</h1>`, 'info')
], Person);
let p1 = new Person();
cl(p1);
let Sport = class Sport {
    constructor() {
        this.name = "Cricket";
    }
};
Sport = __decorate([
    logMsg("SPORTS")
], Sport);
let sport1 = new Sport();
cl(sport1);
