import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { DashboardComponent } from './dashboard.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { SaleComponent } from './sale/sale.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent
  },
  {
    path: 'products', component: ProductsComponent
  },
  {
    path: 'purchase', component: PurchaseComponent
  },
  {
    path: 'sale', component: SaleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
