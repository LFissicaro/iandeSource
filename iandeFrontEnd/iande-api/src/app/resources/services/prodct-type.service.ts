import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticateService } from './authenticate.service'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductTypeService {

    private root = "http://localhost:5000/api/ProductTypes/";
    
    constructor(private httpClient: HttpClient, private authenticateService: AuthenticateService) { }

    getProductTypes(){
        return this.httpClient.get(this.root + "GetProductTypes");
    }

    getProductType(id: number){
      return this.httpClient.get(this.root + "GetProductType/" + id);
    }
}