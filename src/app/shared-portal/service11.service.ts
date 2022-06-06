import { Injectable } from '@angular/core';
import Data from  './json-file/data.json';




@Injectable({
  providedIn: 'root'
})
export class Service11Service {
 dataJson=Data;
  
getjsonData(){
  return this.dataJson;
}
  constructor() { }

 
  
}
