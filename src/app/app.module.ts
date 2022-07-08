import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './main-portal/cart/cart.component';
import { HeaderComponent } from './main-portal/header/header.component';
import { ProductComponent } from './main-portal/product/product.component';
import { SigninFormComponent } from './forms/signin-form/signin-form.component';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { AdminDefaultModule } from './AdminPortal/admin-default/admin-default.module';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    CartComponent,
    SigninFormComponent,
    LoginFormComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminDefaultModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
