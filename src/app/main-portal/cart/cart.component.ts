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

  clickData:any;
  filterdata:any=[]
  service11data:any=[]
  totalQuantity:any=0;
  productQuantity:any;
  show:boolean=false;
  showBox:boolean=false;
  cartArray:any=[];
  newCartArray:any=[]
  selectedQuantity=0
  localstorageCartArray: any=[];

  

  constructor( 

   private _messanger:MessangerService,
   private _Service11:Service11Service,
   private nonvolatile:Service22Service
   
 
  )
   { 
    this._messanger.getMessageFromMyData().subscribe((datafrommesssanger:any)=>{
      this.clickData = datafrommesssanger; 
      })
      this.getdatafromservice11();
      // this.localstorageCartArray = this.nonvolatile.getProductToLocalStorage();
      // if(Object.entries(this.localstorageCartArray).length !== 0){
      //   this.showBox = true;
      
      
      
      
  }

  ngOnInit(): void {

}

getdatafromservice11(){
  
  this.service11data  = this._Service11.getjsonData();

  if(this.clickData === undefined){
   const ID = this.nonvolatile.getDataToLocalStorage()
   this.filterdata = this.service11data.filter((Result:any)=>{
    return (Result.id === ID)
    
   })
    this.productQuantity = this.filterdata[0].qty

   return

}
this.filterdata = this.service11data.filter((Result:any)=>{
  return (Result.id === this.clickData)
 })
 this.productQuantity = this.filterdata[0].qty ;
console.log(this.filterdata);
 
}

addition() {
  this.showBox = true;
  const cartObjectPlus = this.nonvolatile.getProductToLocalStorage();
  if(this.selectedQuantity >= this.productQuantity){

    return
  }
  

  if(Object.entries(cartObjectPlus).length === 0) {
    this.cartArray.push(this.filterdata[0]);
    this.nonvolatile.addProductToLocalStorage(this.cartArray);
    this.clickData = undefined;
    this.localstorageCartArray = this.nonvolatile.getProductToLocalStorage();
    return
    
    
   
  }

  if(Object.entries(cartObjectPlus).length !==0 && this.clickData !== undefined){
     this.newCartArray.push(this.filterdata[0]);
     cartObjectPlus.forEach((element:any)=>{
        this.newCartArray.push(element);
     });
     this.nonvolatile.addProductToLocalStorage(this.newCartArray);
     this.clickData = undefined;
     this.localstorageCartArray = this.nonvolatile.getProductToLocalStorage();
     return
  }


  cartObjectPlus.map((element:any) => {
    if(this.filterdata[0].id === element.id){
      element.newQuantity++;
      this.selectedQuantity++;
    
    }
      
  });
  this.nonvolatile.addProductToLocalStorage(cartObjectPlus);
  // this.nonvolatile.setcartQuantity(this.totalQuantity);
  this.localstorageCartArray = this.nonvolatile.getProductToLocalStorage();
   
 

}
Subract(){
  let cartObjectPlus = this.nonvolatile.getProductToLocalStorage();

  if(this.selectedQuantity <= 0){
    return
  }

  cartObjectPlus.map((element:any) => {
    if(this.filterdata[0].id === element.id){
      element.newQuantity--;
      this.selectedQuantity--;
      
     
    }
      
  });
  this.nonvolatile.addProductToLocalStorage(cartObjectPlus);
  // this.nonvolatile.setcartQuantity(this.totalQuantity);
  
 
}

}


