import { Component, Input, OnInit } from '@angular/core';
import { ProductType } from 'src/app/resources/models/ProductType';
import { Router, Navigation, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../resources/services/product.service';
import { Product } from 'src/app/resources/models/Product';
import { ProductTypeService } from 'src/app/resources/services/prodct-type.service';
import { AlertService } from 'src/app/resources/services/alert.service';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {

  products: Product[];
  productType: ProductType;
  ptId: string;

  constructor(
    private router: Router,
    private productService: ProductService,    
    private productTypeService: ProductTypeService,
    private route: ActivatedRoute,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.productType = new ProductType();
    this.ptId = this.route.snapshot.paramMap.get("id");
    this.getProductType();
    this.getProductsByType();
  }

  getProductsByType(){
    this.productService.getProductsByType(parseInt(this.ptId)).subscribe(response => {
      this.products = response as Product[];
      this.products.forEach(p => {
        var path = p.imagePath;
        p.imagePath = "./../../assets/images/" + path;
      });
    });    
  }

  getProductType(){
    this.productTypeService.getProductType(parseInt(this.ptId)).subscribe(response => {
      this.productType = response as ProductType;
    });
  }

  addProductToCart(product){
    this.productService.addToCart(product);
  }

  goToProductPage(product){
  }

}