import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service22Service {

  constructor() { }

  setDataToLocalStorage(Id:any){
localStorage.setItem("Product-id",JSON.stringify(Id ))
  }
  getDataToLocalStorage(){
return localStorage.getItem(JSON.parse("product-id" || "{}"))
  }
}
