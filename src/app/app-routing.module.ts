import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./views/login/login.component";
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { MainComponent } from './views/main/main.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ManageCustomersComponent } from './views/manage-customers/manage-customers.component';
import { PlaceOrderComponent } from './views/place-order/place-order.component';
import { ViewOrdersComponent } from './views/view-orders/view-orders.component';
import { ProductsComponent } from './views/products/products.component';

const appRoutes: Routes = [
  {
    path: "main",
    component: MainComponent,
    children: [
      {path: "dashboard", component: DashboardComponent},
      {
        path: "manage-customers",
        component: ManageCustomersComponent,
      },
      {
        path: "manage-items",
        component: ProductsComponent,
      },
      {
        path: "place-order",
        component: PlaceOrderComponent
      },
      {
        path: "view-order",
        component: ViewOrdersComponent
      },

      {
        path: "",
        pathMatch : "full",
        redirectTo: "/main/dashboard"
      }
    ]
  },
  {path: "login", component: LoginComponent},
  {path: "", component: LoginComponent},
  {path: "**",component: PageNotFoundComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
