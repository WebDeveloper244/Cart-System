import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDefaultComponent } from './admin-default.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from '../AdminComponent/dashboard/dashboard.component';
import { UserListComponent } from '../AdminComponent/user-list/user-list.component';
import { ProductAnalyticsComponent } from '../AdminComponent/product-analytics/product-analytics.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateProductComponent } from '../AdminComponent/create-product/create-product.component';



@NgModule({
  declarations: [
    AdminDefaultComponent,
    DashboardComponent,
    UserListComponent,
    ProductAnalyticsComponent,
    CreateProductComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminDefaultModule { }
