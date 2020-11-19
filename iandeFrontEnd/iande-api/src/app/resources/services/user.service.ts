import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticateService } from './authenticate.service'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    private root = "http://localhost:5000/api/Users/";
    
    constructor(private httpClient: HttpClient, private authenticateService: AuthenticateService) { }

    getUsers(){
        return this.httpClient.get(this.root + "GetUsers");
    }
}
