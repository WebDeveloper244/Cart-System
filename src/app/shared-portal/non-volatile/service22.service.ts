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

}
