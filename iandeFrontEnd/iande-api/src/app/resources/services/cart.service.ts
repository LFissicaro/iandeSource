import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticateService } from './authenticate.service'; 
import { Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

    private root = "http://localhost:5000/api/Carts/";
    public productList: Product[];
    
    constructor(private httpClient: HttpClient, private authenticateService: AuthenticateService) { }

    getCarts(){
      return this.httpClient.get(this.root + "GetCarts");
    }

    getProductList(){
      return this.productList;
    }

    updateCart(products){
      this.productList = products;
    }
}