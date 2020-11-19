import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router, Navigation } from '@angular/router';
import { Product } from 'src/app/resources/models/Product';
import { ProductType } from '../../resources/models/ProductType'
import { ProductTypeService } from '../../resources/services/prodct-type.service'

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  productTypes: ProductType[];
  productTypeSelected: ProductType;
  showcase: boolean;
  cartList: Product[];

  constructor(
    private productTypeService: ProductTypeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getProductTypes();
    this.showcase = false;
  }

  getProductTypes() {
    this.productTypeService.getProductTypes().subscribe(response => {
      this.productTypes = response as ProductType[];
      this.productTypes.forEach(pt => {
        var path = pt.imagePath;
        pt.imagePath = "../../../assets/images/" + path;
      })
    });
  }

  goToShowcase() {
    this.showcase = true;
    this.productTypeSelected = this.productTypes[0];
    console.log(this.productTypeSelected)
  }
}
