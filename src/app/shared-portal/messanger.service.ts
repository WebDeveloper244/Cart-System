import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MessangerService {
 subject = new ReplaySubject(1)

 constructor(){}

 sendMessageFromMyData(PlayLoad:boolean){
   this.subject.next(PlayLoad);
 }

 getMessageFromMyData(){
   return this.subject.asObservable()
 }


}
