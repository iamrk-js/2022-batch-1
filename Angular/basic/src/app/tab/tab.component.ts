import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  constructor() { }
  isActive:boolean = false;
  framework : string = "angular";
  ngOnInit(): void {
  }
  boxShowHandler(){
      // if(this.isActive){
      //   this.isActive = false
      // }else{
      //   this.isActive = true
      // }
    // (this.isActive === true) ? this.isActive = false : this.isActive = true;
    // (this.isActive) ? this.isActive = false : this.isActive = true;
    this.isActive = !this.isActive;
  }
  switchFrameWork(){
    this.framework = 'react';
  }
}
