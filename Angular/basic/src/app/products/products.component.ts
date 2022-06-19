import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  // selector: '[app-products]',
  // selector: '.app-products',
  templateUrl: './products.component.html',
  // template : `
  //       <app-product></app-product>
  //       <app-product></app-product>
  // `,
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  isDisabled:boolean = true;
  productStatus : string = "No product Added Yet.";
  productName : string = '';
  isProductAdded:boolean = false;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isDisabled = false;
    }, 5000);
  }

  getNewProductStatus(){
    this.productStatus = `New Product is added and product name is ${this.productName}`;
    this.isProductAdded = true;
  }

  onProductUpdate(event:Event){
      // let targetEle = event.target
      // console.log(targetEle);
      let targetValue = (<HTMLInputElement>(event.target))?.value;
      console.log(targetValue);
      this.productName = targetValue;
  }
}
