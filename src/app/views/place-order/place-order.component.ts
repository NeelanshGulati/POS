import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';
import { Order } from 'src/app/dtos/orders';
import { Product } from 'src/app/dtos/products';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/dtos/cutomer';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {
  order=new Order();
  product=new Product();
  quantity:number;
  cuts: Customer[];
  prods: Product[];
  constructor(private productService:ProductService,private orderService:OrderService,
    private customerService:CustomerService) { }

  ngOnInit() {
    this.getCustomers();
    this.getProducts();
  }

  getProductById(event: any): void {
    this.productService.getProductById(event.target.value).subscribe(
      (result) => {
        this.product = result;
        console.log(this.product);
      }
    );
  }

  getProducts(): void{
    this.productService.getAllProducts()
      .subscribe((productData)=>{this.prods=productData,console.log(productData)});
  }

  getCustomers(): void{
    this.customerService.getCustomers()
    .subscribe((customerData)=>{this.cuts=customerData,console.log(customerData)});
  } 

  updateProduct(): void{
    this.productService.updateProduct(this.product)
    .subscribe((response)=>{console.log(response);
    },(error)=>{
      console.log(error);
    }
    );
  }

  addOrder(): void{
    this.orderService.addOrder(this.order)
    .subscribe((response)=>{console.log(response);
      alert("Order has been added successfully");
    },(error)=>{
      alert("Unable to add orders");
    }
    );
  }  

  integrated(){
    this.addOrder();
    this.updateProduct();
  }

  totalPrice(){
    if(this.quantity>this.product.stock){
      alert("Quantity cannot exceed stock");
    }else{
    this.order.totalPrice=(this.quantity*this.product.price)+100;
    this.product.stock=this.product.stock-this.quantity;
    // console.log(this.quantity);
  }
  }
}
