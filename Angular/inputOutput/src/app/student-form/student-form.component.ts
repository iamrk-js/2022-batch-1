import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Istudent } from '../modal/student';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
  @Output() emittStudentInfo: EventEmitter<Istudent> = new EventEmitter<Istudent>()
  constructor() { }
  firstNameValue!: string;
  lastNameValue!: string;
  emailValue!: string;
  contactValue!: string;
  ngOnInit(): void {
  }
  onStudentAddHandler() {
    let obj = {
      firstName: this.firstNameValue,
      lastName: this.lastNameValue,
      email: this.emailValue,
      contact: this.contactValue,
    }
    this.emittStudentInfo.emit(obj)

    this.firstNameValue = '';
    this.lastNameValue = '';
    this.emailValue = '';
    this.contactValue = '';

  }
}
