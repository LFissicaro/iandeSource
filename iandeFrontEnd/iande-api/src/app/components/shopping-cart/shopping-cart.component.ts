import { Component, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/resources/models/Product';
import { ProductPageComponent } from '../product-page/product-page.component';
import { CartService } from '../../resources/services/cart.service';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/resources/services/product.service';
import { AlertService } from 'src/app/resources/services/alert.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  x = 0;
  @Input() cart;
  products: Product[];
  cartList: Product[] = [];
  total: number;

  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.total = 0;
    this.cartList = this.productService.updateCart();
    this.calculateTotal();
  }

  updateCart() {
    this.cartList = this.cartService.getProductList();
  }

  removeProduct(product) {
    this.productService.removeFromCart(product);
    this.cartList = this.productService.updateCart();
    this.calculateTotal();
  }

  checkout(){
    this.productService.checkout();
    // document.getElementById('sidebar').toggleAttribute('')
  }

  calculateTotal(){
    this.total = 0;
    this.cartList.forEach(prod => {
      this.total += prod.sellPrice * prod.quantity;
    });
  }
}
