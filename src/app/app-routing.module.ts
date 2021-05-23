 import {NgModule} from '@angular/core'
 import {Routes, RouterModule} from '@angular/router';
import { PageNotFoundComponent } from './Components/Linked/page-not-found/page-not-found.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';

 const routes: Routes = [
     { path:'', redirectTo:'/shop', pathMatch:'full'},
     { path: 'login', component:LoginComponent},
     { path: 'register', component:RegisterComponent},
     { path: 'shop', component:ShoppingCartComponent},
     { path: '**', component: PageNotFoundComponent}
 ]

 @NgModule({
     imports: [
         RouterModule.forRoot(routes)
     ],
     exports: [
         RouterModule
     ]
 })
 export class AppRoutingModule {

}