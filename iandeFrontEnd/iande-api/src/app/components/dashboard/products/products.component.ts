import { Component, OnInit } from '@angular/core';
import { Product } from '../../../resources/models/Product'
import { AlertService } from 'src/app/resources/services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  displayDialog: boolean;
  newProd: boolean;
  product = new Product();

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

  constructor(
    private router: Router,
    private alertService: AlertService
  ) { }
  
  ngOnInit(): void {
    this.product = new Product();
    this.displayDialog = false;
    this.newProd = false;
  }

  deleteRow(){
    this.alertService.error("DELETAR", "Deseja deletar este registro?");
  }

  showDialogAdd(){
    this.product = new Product();
    this.displayDialog = true;
  }

  editRow(prod: Product){
    this.newProd = false;
    this.product = this.cloneProduct(prod);
    // this.displayDialog = true;
  }

  cloneProduct(p: Product) : Product {
    let prod = new Product();
    
    for( let prop in p) {
      prod[prop] = p[prop];
    }
    return prod;
  }

}
