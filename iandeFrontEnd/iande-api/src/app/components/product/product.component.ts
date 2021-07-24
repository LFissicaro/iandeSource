import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router, Navigation, ActivatedRoute } from '@angular/router';
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
  products: Product[]=[];
  product: Product;
  quantity = 1;
  pid: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.product = new Product();
    this.getProduct();
  }

  addToCart() {
    this.productService.addToCart(this.product);
  }

  getProduct(){    
    this.pid = parseInt(this.route.snapshot.paramMap.get("id"));
    this.productService.getProduct(this.pid).subscribe(response => {
      this.product = response as Product;
      var path = this.product.imagePath 
      this.product.imagePath = "../../../assets/images/" + path;
      this.product.quantity = 1;
    });
  }



}
