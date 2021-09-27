import { Component, OnInit ,EventEmitter} from '@angular/core';
import {User} from "../../dtos/user";
import {AuthService} from "../../services/auth.service";
import {Router} from '@angular/router';
import { Customer } from 'src/app/dtos/cutomer';
import { DataService } from 'src/app/data.service';
import { CustomerService } from 'src/app/services/customer.service';
import { t } from '@angular/core/src/render3';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: User[];
  constructor(private authService: AuthService,private customerService:CustomerService) { }
  

  ngOnInit(): void{
    this.getUsers();
  }

  getUsers(): void{
    this.authService.getUsers()
    .subscribe((userData)=>{this.users=userData,console.log(userData)});
  }

  authenticateUser(): void{
      console.log("inside auth");
      if(this.confirm()){
        console.log("valid user");
        this.authService.auth();
        alert("Valid User");
      }
      else{
        alert("Invalid User,Please Try Again!");
      }
  }

  confirm(): boolean{
    for(let i in this.users){
      if(this.userFront.username===this.users[i]["username"] && this.userFront.password===this.users[i]["password"]){
        return true;
      }
    }

    return false;
  }

  userFront=new User('','',0);
} 
