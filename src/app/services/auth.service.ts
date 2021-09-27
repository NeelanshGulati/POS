import {Injectable,EventEmitter} from '@angular/core';
import {Http,Response,RequestOptions,Headers} from '@angular/http';
import {User} from '../dtos/user';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import { map } from "rxjs/operators"; 



@Injectable()
export class AuthService {
  eventEE=new EventEmitter();

  constructor(private http: Http, private router: Router) {
  }

  getUsers(): Observable<User[]> {
    
    return this.http.get('http://localhost:8080/RestfulApi/webapi/users')
    .pipe(map((response:Response )=> response.json()));
  }

  logout(): void {
    this.router.navigate(['/login']);
  }

  auth() {
    this.eventEE.emit("hi");
    this.router.navigate(['/main']);
  }
}
