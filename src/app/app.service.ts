import { Injectable } from '@angular/core';
import { BehaviorSubject, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  islogedIn : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { 
    if(localStorage.getItem('islogedIn') && JSON.parse(localStorage.getItem('islogedIn')))
      this.islogedIn.next(true)
    else
      this.islogedIn.next(false)
  }
}
