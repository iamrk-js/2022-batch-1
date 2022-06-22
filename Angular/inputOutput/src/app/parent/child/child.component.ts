import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() msgFromParent!: string;
  @Output() childEmmiter: EventEmitter<string> = new EventEmitter<string>();
  msgFromChild: string = "Yes I'm working very Hard, Bahot Hard.";

  constructor() { }

  ngOnInit(): void {
  }
  onBtnClick() {
    this.childEmmiter.emit(this.msgFromChild)
  }
}
