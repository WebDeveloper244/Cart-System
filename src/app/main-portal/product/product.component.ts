import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessangerService } from 'src/app/shared-portal/messanger.service';
import { Service22Service } from 'src/app/shared-portal/non-volatile/service22.service';
import { Service11Service } from 'src/app/shared-portal/service11.service';






@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
   dataofsevice11:any=[]
   
  constructor(
   private _Service11 : Service11Service,
   private _router : Router,
   private _messanger : MessangerService,
   private service223:Service22Service   ){
    this.getDataFromservice()
   }


   getDataFromservice(){
     this.dataofsevice11 = this._Service11.getjsonData()
     
     
   }
   
   
  ngOnInit(): void {
  }
 
  goToCartPage(Id:any){
   
 
    this.service223.setDataToLocalStorage(Id)
   this._messanger.sendMessageFromMyData(Id)
   this._router.navigate(['cart'])
   
   
  }

}
