import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/dtos/orders';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {
  ords: Order[];
  totalOrder: number;

  constructor(private orderService:OrderService) { }

  
  ngOnInit() {
    this.getOrders();
    this.getTotalOrders();
  }

  getOrders(): void{
    this.orderService.getOrders()
    .subscribe((orderData)=>{this.ords=orderData,console.log(orderData)});
  } 

  getTotalOrders(): void{
    this.orderService.getTotalOrders()
    .subscribe((orderCount)=>{this.totalOrder=orderCount,console.log(orderCount)});
  }
}
