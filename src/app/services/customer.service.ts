import { Injectable } from '@angular/core';
import {Http,Response,RequestOptions,Headers} from '@angular/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import { map } from "rxjs/operators"; 
import { Customer } from '../dtos/cutomer';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http: Http, private router: Router) {}

  getCustomers(): Observable<Customer[]> {
    return this.http.get('http://localhost:8080/RestfulApi/webapi/employees')
    .pipe(map((response:Response )=> response.json()));
  }

  getTotalCustomers(): Observable<number> {
    return this.http.get('http://localhost:8080/RestfulApi/webapi/employees/count')
    .pipe(map((response:Response )=> response.json()));

  }

  addCustomer(customer:Customer){
    let body=JSON.stringify(customer);
    let headers=new Headers({'Content-Type':'application/json'});
    let options=new RequestOptions({headers:headers});
    return this.http.post("http://localhost:8080/RestfulApi/webapi/employees",body,options);  
  }

  deleteCustomer(code:number){
      return this.http.delete("http://localhost:8080/RestfulApi/webapi/employees/"+code);
  }
}
