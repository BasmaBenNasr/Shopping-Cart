import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './Linked/footer/footer.component';
import { NavComponent } from './Linked/nav/nav.component';
import { HeaderComponent } from './Linked/header/header.component';
import { PageNotFoundComponent } from './Linked/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavComponent,
    HeaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent
  ]
})
export class HomePageModule { }
