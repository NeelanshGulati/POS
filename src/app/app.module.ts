import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {NgxPaginationModule} from "ngx-pagination";
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './views/login/login.component';
import {AppRoutingModule} from "./app-routing.module";
import {AuthService} from "./services/auth.service";
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { HttpModule } from '@angular/http';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { MainComponent } from './views/main/main.component';
import { ManageCustomersComponent } from './views/manage-customers/manage-customers.component';
import { PlaceOrderComponent } from './views/place-order/place-order.component';
import { ViewOrdersComponent } from './views/view-orders/view-orders.component';
import { CustomerService } from './services/customer.service';
import { ProductsComponent } from './views/products/products.component';
import { ProductService } from './services/product.service';
import { OrderService } from './services/order.service';
import { DataService } from './data.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    DashboardComponent,
    MainComponent,
    ManageCustomersComponent,
    PlaceOrderComponent,
    ViewOrdersComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    AuthService,
    CustomerService,
    ProductService,
    OrderService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
