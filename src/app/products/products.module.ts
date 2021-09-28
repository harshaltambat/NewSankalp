import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],exports:[
    ProductsRoutingModule,
  ]
})
export class ProductsModule { }
