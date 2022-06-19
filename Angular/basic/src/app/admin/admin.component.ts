import { Component } from "@angular/core";
import { Istudent } from "../modal/stdData";


@Component({
    selector : 'app-admin',
    templateUrl : './admin.component.html',
    styleUrls : ['./admin.component.scss']
})
export class AdminComponent  {
    skills : string[] = ["HTML5", "CSS3", "Typescript", "javaScript","Angular"];

    stdInfo:Istudent[] = [
        {
            fname: "Jhon",
            lname : "Doe",
            email : "jhon@gmail.com",
            contact : 1234567890
        },
        {
            fname: "July",
            lname : "Doe",
            email : "july@gmail.com",
            contact : 1234567890
        },
        {
            fname: "James",
            lname : "Doe",
            email : "james@gmail.com",
            contact : 1234567890
        },
        {
            fname: "May",
            lname : "Doe",
            email : "may@gmail.com",
            contact : 1234567890
        }

    ]
}