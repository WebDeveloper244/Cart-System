import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service22Service {

  constructor() { }

  setDataTolocalStorage(Id:any){
localStorage.setItem("product-id", JSON.stringify(Id));
  }
  getDataToLocalStorage(){
    return JSON.parse(localStorage.getItem("product-id") || '{}');
  }
  addProductToLocalStorage(data:any){
    localStorage.setItem("User-cart" , JSON.stringify(data));
  }
  getProductToLocalStorage(){
   return  JSON.parse(localStorage.getItem("User-Cart") || "{}");
  }

  setcartQuantity(Quantity:any){
    localStorage.setItem("User-cart" , JSON.stringify(Quantity));
  }
  getcartQuantity(){
   return  JSON.parse(localStorage.getItem("User-Cart") || "{}");
  }

}
