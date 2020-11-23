import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule}   from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { StoreComponent } from './components/store/store.component';
import {MenubarModule} from 'primeng/menubar';
import {DataViewModule} from 'primeng/dataview';
import {DropdownModule} from 'primeng/dropdown';
import { HeaderComponent } from './components/header/header.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { ProductComponent } from './components/product/product.component';
import {InputNumberModule} from 'primeng/inputnumber';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { SidebarModule } from 'primeng/sidebar';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import {PasswordModule} from 'primeng/password';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    HeaderComponent,
    ProductPageComponent,
    ProductComponent,
    ShowcaseComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    CreateAccountComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CardModule,
    HttpClientModule,
    ButtonModule,
    FormsModule,
    MenubarModule,
    DataViewModule,
    InputNumberModule,
    DropdownModule,
    SidebarModule,
    InputTextModule,
    PasswordModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
