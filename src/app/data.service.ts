import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './dtos/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
private content=new BehaviorSubject<string>("abcd");
public share=this.content.asObservable();

private content1=new BehaviorSubject<User>(new User("neel","neel",100));
public share1=this.content1.asObservable();
  constructor() { }

  updateUser(user){
    this.content1.next(user);
  }

  updateData(txt){
    this.content.next(txt);
  }
}
