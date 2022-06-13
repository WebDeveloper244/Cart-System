import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninFormComponent } from './forms/signin-form/signin-form.component';
import { CartComponent } from './main-portal/cart/cart.component'; 
import { ProductComponent } from './main-portal/product/product.component';


const routes: Routes = [
 {  
  path:'',
  component:ProductComponent
},
{
  path:'product',
  component:ProductComponent
},
{
  path:'cart',
  component:CartComponent
},
{
  path:'sign-in',
  component:SigninFormComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
