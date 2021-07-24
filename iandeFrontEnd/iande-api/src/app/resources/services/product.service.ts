import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Product } from '../models/Product';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  cartProducts: Product[] = [];
  private root = "http://localhost:5000/api/Products/";

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private alertService: AlertService
  ) { }

  getProducts() {
    return this.httpClient.get(this.root + "GetProducts");
  }

  getProduct(id: number) {
    return this.httpClient.get(this.root + "GetProduct/" + id);
  }

  getProductsByType(id: number) {
    return this.httpClient.get(this.root + "GetProductsByType/" + id);
  }

  contains(products: Product[], product: Product) {
    var contains = false;
    products.forEach(prod => {
      if (prod.id == product.id) {
        contains = true;
      }
    });
    return contains;
  }

  addToCart(product: Product) {
    if (this.contains(this.cartProducts, product)) {
      this.cartProducts.forEach(prod => {
        if (prod.id == product.id) {
          prod.quantity++;
        }
      });
    } else {
      product.quantity++;
      this.cartProducts.push(product);
    }
    this.alertService.success("Item adicionado ao carrinho!")
  }

  removeFromCart(product: Product) {
    product.quantity = 0;
    var newList: Product[] = [];
    this.cartProducts.forEach(prod => {
      if (prod.id != product.id) {
        newList.push(prod);
      }
    });
    this.cartProducts = newList;
    this.alertService.error("Produto removido do carrinho!");
    // return this.cartProducts;
  }

  updateCart() {
    return this.cartProducts;
  }

  checkout() {
    if (this.cartProducts.length == 0) {
      this.alertService.info("Voce deve adicionar produtos ao carrinho antes de fazer o checkout!");
      // this.router.navigate(['productPage']);
    } else {
      this.router.navigate(['checkout']);
    }
  }

}