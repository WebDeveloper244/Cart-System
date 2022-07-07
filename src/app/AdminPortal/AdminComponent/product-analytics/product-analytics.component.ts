import { Component, OnInit } from '@angular/core';
import { Service11Service } from 'src/app/shared-portal/service11.service';

@Component({
  selector: 'app-product-analytics',
  templateUrl: './product-analytics.component.html',
  styleUrls: ['./product-analytics.component.css']
})
export class ProductAnalyticsComponent implements OnInit {

  AllProduct:any=[];

  constructor(
    private JsonData:Service11Service
  ) {
    this.products()
   }

  ngOnInit(): void {
  }

  products(){
    this.AllProduct = this.JsonData.getjsonData()
  }

}
