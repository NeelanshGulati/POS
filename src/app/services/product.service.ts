import { Injectable } from '@angular/core';
import {Http,Response,RequestOptions,Headers} from '@angular/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import { map } from "rxjs/operators"; 
import { Product } from '../dtos/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: Http, private router: Router) { }

  getAllProducts(): Observable<Product[]>{
    return this.http.get('http://localhost:8080/RestfulApi/webapi/products')
    .pipe(map((response:Response )=> response.json()));
  }

  saveProduct(product:Product){
    let body=JSON.stringify(product);
    let headers=new Headers({'Content-Type':'application/json'});
    let options=new RequestOptions({headers:headers});
    return this.http.post("http://localhost:8080/RestfulApi/webapi/products",body,options); 
  }

  updateProduct(product:Product){
    let body=JSON.stringify(product);
    let headers=new Headers({'Content-Type':'application/json'});
    let options=new RequestOptions({headers:headers});
    return this.http.put("http://localhost:8080/RestfulApi/webapi/products",body,options);
  }

  deleteProduct(code: number){
    return this.http.delete("http://localhost:8080/RestfulApi/webapi/products/"+code);
  }

  getTotalProdcuts(): Observable<number>{
    return this.http.get('http://localhost:8080/RestfulApi/webapi/products/count')
    .pipe(map((response:Response )=> response.json()));
  }

  getProductById(code: number): Observable<Product>{
    return this.http.get('http://localhost:8080/RestfulApi/webapi/products/'+code)
    .pipe(map((response:Response )=> response.json()));
  }
}
