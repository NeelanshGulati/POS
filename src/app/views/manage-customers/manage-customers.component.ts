import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/dtos/cutomer';
import { User } from 'src/app/dtos/user';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-manage-customers',
  templateUrl: './manage-customers.component.html',
  styleUrls: ['./manage-customers.component.css']
})
export class ManageCustomersComponent implements OnInit {

  cuts: Customer[];
  customer=new Customer();
  totalCustomers:number;
  constructor(private customerService:CustomerService,private data:DataService) { }

  ngOnInit() {
    this.getTotalCustomers();
    this.getCustomers();
  }

  getCustomers(): void{
    this.customerService.getCustomers()
    .subscribe((customerData)=>{this.cuts=customerData,console.log(customerData)});
  } 

  getTotalCustomers(): void{
    this.customerService.getTotalCustomers()
    .subscribe((customerCount)=>{this.totalCustomers=customerCount,console.log(customerCount)});
  }

  addCustomer(): void{
      this.customerService.addCustomer(this.customer)
      .subscribe((response)=>{console.log(response);
        this.reset();
        this.getCustomers();
        alert("Customer added successfully");
      },(error)=>{
        alert("Unable to add customer");
      });
  }

  private reset(){
    this.customer.employeeName=null;
    this.customer.email=null;
    this.customer.dateOfBirth=null;
    this.customer.employeeCode=null;
    this.customer.location=null;
  }

  deleteCustomer(code:number){
    this.customerService.deleteCustomer(code)
    .subscribe((response)=>{console.log(response);
      this.getCustomers();
      alert("Customer deleted successfully");
    },(error)=>{
      alert("Unable to delete customer");
    })
  }
}
