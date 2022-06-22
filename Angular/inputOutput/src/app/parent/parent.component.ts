import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  msgForChild = "work hard party hard !!!";
  msgFromChild!:string;
  constructor() { }

  ngOnInit(): void {
  }
  getMsgFromChild(e:string){
    this.msgFromChild = e;
  }
}
