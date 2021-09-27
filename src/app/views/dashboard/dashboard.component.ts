import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { ProductService } from 'src/app/services/product.service';
import { OrderService } from 'src/app/services/order.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  totalCustomers: number;
  totalProducts: number;
  totalOrders: number=0;

  constructor(private customerService:CustomerService,private productService:ProductService,
    private orderService:OrderService,private authSrevice:AuthService) { }

  ngOnInit() { 
    this.getTotalCustomers();
    this.getTotalProducts();
    this.getTotalOrders();
  }


  getTotalCustomers(): void{
    this.customerService.getTotalCustomers()
    .subscribe((customerCount)=>{this.totalCustomers=customerCount});
  }

  getTotalProducts(){
    this.productService.getTotalProdcuts()
    .subscribe((productCount)=>{this.totalProducts=productCount})
  }

  getTotalOrders(){
    this.orderService.getTotalOrders()
    .subscribe((orderCount)=>{this.totalOrders=orderCount})
  }


}
