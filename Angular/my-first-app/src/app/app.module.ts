import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewHeaderComponent } from './new-header/new-header.component';
import {ProductClass} from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
@NgModule({
  declarations: [
    AppComponent,
    NewHeaderComponent,
    HeaderComponent,
    ProductClass,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
