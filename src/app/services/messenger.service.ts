import { Injectable } from '@angular/core';
//this subject will help us listening and triggering something
import {Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject()

  constructor() { }


  //will be called from product item
  sendMessage(product:any) {
    this.subject.next(product)//triggering an event
  }

  //will be called inside cart component
  getMessage() {
    return this.subject.asObservable()
  }
}
