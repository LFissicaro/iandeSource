import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/resources/models/Cart';
import { Product } from 'src/app/resources/models/Product';
import { ProductService } from 'src/app/resources/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  cart: Cart;
  @Input() product: Product;
  quantity = 1;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.quantity = 1;
    console.log(this.product);
  }

  addToCart(){
    this.cart.products.push(this.product);
  }

}
