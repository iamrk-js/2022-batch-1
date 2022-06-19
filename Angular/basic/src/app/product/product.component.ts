import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    // styleUrls: ['./product.component.scss']
    styles: [`
            p{
                font-size:24px
            }
    `]
})
export class ProductComponent implements OnInit {
    productName: string = "Mobile";
    productId: number = 10;
    isProductAvailable!: boolean;
    ngOnInit(): void {
        // let randomValue = Math.random();
        // if (randomValue > .5) {
        //     this.isProductAvailable = true;
        // } else {
        //     this.isProductAvailable = false;
        // }
        this.isProductAvailable = (Math.random() > 0.5) ? true : false;
    }
    getProductId() {
        return this.productId;
    }
    getBgColor() {
        // return 'orange'
        return (this.isProductAvailable === true) ? 'orange' : '#ccc'
    }

    //getBgColor() orange
}