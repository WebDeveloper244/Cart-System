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
  show:boolean=false;
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







addition() {
  if(this.cartQuantity >= this.productQuantity){

    return
  }
  // this.cartQuantity++
  // this.show=true;

  const cartObjectPlus = this.nonvolatile.getProductToLocalStorage();



  if(Object.entries(cartObjectPlus).length === 0) {
    this.cartArray.push(this.filterdata[0]);
    this.nonvolatile.addProductToLocalStorage(this.cartArray);
    this.nonvolatile.setcartQuantity(this.cartQuantity);
    this.Data = undefined
    this.localstorageCartArray = this.nonvolatile.getProductToLocalStorage();
    return
   
  }

  if(Object.entries(cartObjectPlus).length !==0 && this.Data !== undefined){
     this.newCartArray.push(this.filterdata[0]);
     cartObjectPlus.forEach((element:any)=>{
        this.newCartArray.push(element)
     });
     this.nonvolatile.setDataTolocalStorage(this.newCartArray);
     this.Data = undefined;
     this.localstorageCartArray = this.nonvolatile.getProductToLocalStorage()
  }


  cartObjectPlus.map((element:any) => {
    if(this.filterdata[0].id === element.id){
      element.newQuantity++;
      this.cartQuantity++;
      
     
    }
      
  });
  this.nonvolatile.addProductToLocalStorage(cartObjectPlus);
  this.nonvolatile.setcartQuantity(this.selectedQuantity)
  this.localstorageCartArray = this.nonvolatile.getProductToLocalStorage()

}
subract(){
  let cartObjectPlus = this.nonvolatile.getProductToLocalStorage();

  if(this.cartQuantity <= 0){
    return
  }

  cartObjectPlus.map((element:any) => {
    if(this.filterdata[0].id === element.id){
      element.newQuantity++;
      this.cartQuantity++;
      
     
    }
      
  });
  this.nonvolatile.addProductToLocalStorage(cartObjectPlus);
  this.nonvolatile.setcartQuantity(this.selectedQuantity)
  
  
  // this.cartQuantity--


  
};











}


