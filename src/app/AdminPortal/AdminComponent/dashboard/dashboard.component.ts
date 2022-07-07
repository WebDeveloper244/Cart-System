import { Component, OnInit } from '@angular/core';
import { Service11Service } from 'src/app/shared-portal/service11.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  TotalProduct:any=[];

  constructor(
    private JsonData:Service11Service,
  ) { 
    this.Products()
  }

  ngOnInit(): void {
  }

  Products(){
    this.TotalProduct = this.JsonData.getjsonData();
  }

}
