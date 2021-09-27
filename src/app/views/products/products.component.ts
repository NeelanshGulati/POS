import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/dtos/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  prods: Product[];
  totalProducts: number;
  product=new Product();

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.getProducts();
    this.getTotalProducts();
  }

  getProducts(): void{
    this.productService.getAllProducts()
    .subscribe((productData)=>{this.prods=productData,console.log(productData)});
  }

  getTotalProducts(): void{
    this.productService.getTotalProdcuts()
    .subscribe((productCount)=>{this.totalProducts=productCount,console.log(productCount)});
  }

  addProduct(): void{
    this.productService.saveProduct(this.product)
    .subscribe((response)=>{console.log(response);
      this.reset();
      alert("Product has been added successfully");
      this.getProducts();
    },(error)=>{
      alert("Unable to add product");
    }
    );
  }

  
  updateProduct(): void{
    this.productService.updateProduct(this.product)
    .subscribe((response)=>{console.log(response);
      this.reset();
      alert("Product has been updated successfully");
      this.getProducts();
    },(error)=>{
      alert("Unable to update product");
    }
    );
  }

  private reset(){
    this.product.id=null;
    this.product.name=null;
    this.product.price=null;
    this.product.stock=null;
  }

  deleteProduct(code:number){
    this.productService.deleteProduct(code)
    .subscribe((response)=>{console.log(response);
      this.getProducts();
      alert("Product has been successfully deleted");
    },(error)=>{
      alert("Unable to delete product");
    }
    )
  }

  getProductById(code: number){
    this.productService.getProductById(code)
      .subscribe((productData)=>{this.product=productData;this.getProducts();},
        (error)=>{
          alert("Unable to get product");
        }
      );
  }
}
