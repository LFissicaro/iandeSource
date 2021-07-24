import { Component, OnInit, Output } from '@angular/core';
import { ProductService } from '../../resources/services/product.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/resources/models/Product';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  products=[
    {name: "argila Preta", cod: "01", price: "15,99", storage: "155"},
    {name: "argila Maroom", cod: "02", price: "15,99", storage: "155"},
    {name: "argila Amarela", cod: "03", price: "15,99", storage: "155"},
    {name: "argila Azul", cod: "04", price: "15,99", storage: "155"},
    {name: "argila Verde", cod: "05", price: "15,99", storage: "155"},
    {name: "velas para massagem", cod: "06", price: "9,99", storage: "33"},
    {name: "Canudos de aço reto", cod: "07", price: "9,99", storage: "33"},
    {name: "Canudos de aço Curvo", cod: "08", price: "9,99", storage: "33"},
    {name: "", cod: "09", price: "9,99", storage: "33"},
    {name: "velas para massagem", cod: "10", price: "9,99", storage: "33"},
    {name: "argila Preta", cod: "01", price: "15,99", storage: "155"},
    {name: "argila Maroom", cod: "02", price: "15,99", storage: "155"},
    {name: "argila Amarela", cod: "03", price: "15,99", storage: "155"},
    {name: "argila Azul", cod: "04", price: "15,99", storage: "155"},
    {name: "argila Verde", cod: "05", price: "15,99", storage: "155"},
    {name: "velas para massagem", cod: "06", price: "9,99", storage: "33"},
    {name: "Canudos de aço reto", cod: "07", price: "9,99", storage: "33"},
    {name: "Canudos de aço Curvo", cod: "08", price: "9,99", storage: "33"},
    {name: "", cod: "09", price: "9,99", storage: "33"},
    {name: "velas para massagem", cod: "10", price: "9,99", storage: "33"}
  ]

  goProduct: boolean;
  productList: Product[];
  @Output() product: Product;
  intro = "Consumir de forma consciente faz de toda compra um ato politico. Por isso nossos produtos são minimamente processados de forma que ao chegar nas mãos de você, nosso cliente,ele está o mais perto da natureza possível"
  
  constructor(
    private productService: ProductService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.product = new Product();
    this.product.name = "Argila Preta";
    this.product.sellPrice = 14.99;
    this.getProducts();
  }

  login() {
    this.router.navigate(['Login']);
  }

  clickPrice(){
    console.log("click");
  }

  goToProduct(){
    this.goProduct = true;
    this.router.navigate(['product']);
  }

  getProducts(){
    this.productService.getProducts().subscribe(res => {
      this.productList = res as Product[];
      console.log(this.productList);
    });
  }

}
