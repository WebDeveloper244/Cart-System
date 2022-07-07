import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDefaultComponent } from './admin-default.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from '../AdminComponent/dashboard/dashboard.component';
import { UserListComponent } from '../AdminComponent/user-list/user-list.component';
import { ProductAnalyticsComponent } from '../AdminComponent/product-analytics/product-analytics.component';



@NgModule({
  declarations: [
    AdminDefaultComponent,
    DashboardComponent,
    UserListComponent,
    ProductAnalyticsComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
  ]
})
export class AdminDefaultModule { }
