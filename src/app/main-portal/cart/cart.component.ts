import { Component, OnInit } from '@angular/core';
import { MessangerService } from '../../shared-portal/messanger.service';



import { Service22Service } from '../../shared-portal/non-volatile/service22.service';
import { Service11Service } from '../../shared-portal/service11.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  Data:any;
  filterdata:any=[]
  service11data:any=[]
  cartQuantity:any=0;
  productQuantity:any;
  show:boolean=false
 

  constructor( 

   private _messanger:MessangerService,
   private _Service11:Service11Service,
   private nonvolatile:Service22Service
   
 
  )
   { 
    this._messanger.getMessageFromMyData().subscribe((datafrommesssanger:any)=>{
      this.Data = datafrommesssanger; 
      })
      this.getdatafromservice11();
      
  }

  ngOnInit(): void {

}

getdatafromservice11(){
  
  this.service11data  = this._Service11.getjsonData();

  if(this.Data === undefined){
   const ID = this.nonvolatile.getDataToLocalStorage()
   this.filterdata = this.service11data.filter((Result:any)=>{
    return (Result.id === ID)
    
   })
    this.productQuantity = this.filterdata[0].qty

   return

}
this.filterdata = this.service11data.filter((Result:any)=>{
  return (Result.id === this.Data)
 })
 this.productQuantity = this.filterdata[0].qty ;
console.log(this.filterdata);
 
}
addition(){
  if(this.cartQuantity >= this.productQuantity){
    
    return
  }
  this.cartQuantity++
  this.show=true;
 
 
}
subract(){
  if(this.cartQuantity <= 0){
    return
  }
 
  this.cartQuantity--
};











}