import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-products',
  // selector: '[app-products]',
  // templateUrl: './products.component.html',
  template: `
            <app-product></app-product>
            <app-product></app-product>
  `,
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
