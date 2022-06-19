import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {ProductComponent} from './product/product.component'
import {AdminComponent} from './admin/admin.component';
import { ProductsComponent } from './products/products.component'
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    AdminComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
