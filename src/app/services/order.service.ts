import { Injectable } from '@angular/core';
import {Http,Response,RequestOptions,Headers} from '@angular/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import { map } from "rxjs/operators"; 
import { Order } from '../dtos/orders';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: Http, private router: Router) { }

  getOrders(): Observable<Order[]> {
    return this.http.get('http://localhost:8080/RestfulApi/webapi/orders')
    .pipe(map((response:Response )=> response.json()));
  }

  getTotalOrders(): Observable<number> {
    return this.http.get('http://localhost:8080/RestfulApi/webapi/orders/count')
    .pipe(map((response:Response )=> response.json()));
  }

  addOrder(order:Order){
    let body=JSON.stringify(order);
    let headers=new Headers({'Content-Type':'application/json'});
    let options=new RequestOptions({headers:headers});
    return this.http.post("http://localhost:8080/RestfulApi/webapi/orders",body,options);  
  }
}
