import { NgModule, CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { HeaderComponent } from './home-page/Linked/header/header.component';
import { FooterComponent } from './home-page/Linked/footer/footer.component';
import { NavComponent } from './home-page/Linked/nav/nav.component';
import { FiltersComponent } from './ui/filters/filters.component';
import { CartItemComponent } from './ui/cart-item/cart-item.component';
import { PageNotFoundComponent } from './home-page/Linked/page-not-found/page-not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserModule } from './user/user.module';
import { ShoppingCartComponent } from './shopping-products/shopping-cart/shopping-cart.component';
import { CartComponent } from './ui/cart/cart.component';
import { ProductItemComponent } from './shopping-products/product-list/product-item/product-item.component';
import { ProductListComponent } from './shopping-products/product-list/product-list.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    FiltersComponent,
    CartItemComponent,
    PageNotFoundComponent,
    ShoppingCartComponent,
    CartComponent,
    ProductItemComponent,
    ProductListComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    UserModule
    
    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
