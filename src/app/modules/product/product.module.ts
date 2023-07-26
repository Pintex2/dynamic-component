import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { CreateProductComponent } from './create-product/create-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [CreateProductComponent,ViewProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule
  ],
})
export class ProductModule { }
