import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { ProductComponent } from './components/product/product.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { StoreComponent } from './components/store/store.component';
import { AuthGuardService } from './resources/services/auth-guard.service';

const routes: Routes = [
  {path: '', component: StoreComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'product', component: ProductComponent},
  {path: 'productPage', component: ProductPageComponent},   
  {path: 'showcase/:id', component: ShowcaseComponent}, 
  {path: 'checkout', component: CheckoutComponent},
  {path: 'createAccount', component: CreateAccountComponent},
  {
    path: 'dashboard', 
    // canActivate: [AuthGuardService],
    loadChildren: () => import('./components/dashboard/dashboard.module').then(
    (m) => m.DashboardModule
    ), 
  },
  { path:'**', redirectTo: '' }//caso tente digitar qualquer rota diferente das que já existem, o usuario é redirecionado a raiz
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
