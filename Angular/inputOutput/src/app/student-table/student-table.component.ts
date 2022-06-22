import { Component, Input, OnInit } from '@angular/core';
import { Istudent } from '../modal/student';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {
@Input()  studentArray: Istudent[]  =[]
  constructor() { }

  ngOnInit(): void {
  }

}
