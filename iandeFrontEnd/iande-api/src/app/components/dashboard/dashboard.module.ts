import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';
import {PanelMenuModule} from 'primeng/panelmenu';
import {ProductsComponent} from './products/products.component'
import {TableModule} from 'primeng/table';
import {PurchaseComponent} from './purchase/purchase.component';
import {SaleComponent} from './sale/sale.component';
import {ToastModule} from 'primeng/toast';
import {DialogModule} from 'primeng/dialog';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    ProductsComponent,
    PurchaseComponent,
    SaleComponent],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    SidebarModule,
    PanelMenuModule,
    TableModule,
    ToastModule,
    DialogModule,
    FormsModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
