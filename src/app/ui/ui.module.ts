import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { FiltersComponent } from './filters/filters.component';



@NgModule({
  declarations: [
    CartComponent,
    CartItemComponent,
    FiltersComponent
  ],
  imports: [
    CommonModule,
    CartComponent,
    CartItemComponent,
    FiltersComponent
  ]
})
export class UIModule { }
