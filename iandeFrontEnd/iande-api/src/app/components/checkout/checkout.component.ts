import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/resources/models/Product';
import { ProductService } from 'src/app/resources/services/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  productList: Product[];
  total: number;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getShoppingCart();
  }

  getShoppingCart(){
    this.productList = this.productService.updateCart();
    this.updateTotal();
    // this.productService.getProductsByType(1).subscribe(response => {
    //   this.productList = response as Product[];
    //   this.productList.forEach(p => {
    //     var path = p.imagePath;
    //     p.imagePath = "../../../assets/images/" + path;
    //     p.quantity += 1;
    //   });
    // });
  }

  updateTotal(){
    this.total = 0;
    this.productList.forEach(prod => {
      var totalByProd = prod.quantity * prod.sellPrice;
      this.total += totalByProd;
    });
  }

}
