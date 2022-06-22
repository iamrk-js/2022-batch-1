import { Component, Input, OnInit } from '@angular/core';
import { Istudent } from './modal/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Input Output Decorators';
  
  updatedStudentArray: Istudent[] = [
    {
      "firstName": "Jhon",
      "lastName": "Doe",
      "email": "jhon@gmail.com",
      "contact": "1234567890"
    }
  ];

  constructor() {

  }
  ngOnInit(): void {

  }

  getStudentData(e:Istudent){
    console.log(e);
    this.updatedStudentArray.push(e)
  }

}
