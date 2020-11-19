import { Injectable } from '@angular/core';
import { RequestLogin } from '../models/RequestLogin';
import { ResponseLogin } from '../models/ResponseLogin';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthenticateService } from './authenticate.service'; 

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient, private authenticateService: AuthenticateService) { }

  doLogin(requestLogin: RequestLogin) : Observable<ResponseLogin>{
    return this.httpClient.post<ResponseLogin>
    ("http://localhost:8080/api/login",
    requestLogin).pipe(tap((loginResponse) => (this.authenticateService.loginResponse = loginResponse)));//pipe usado para armazenar o token de login
  }
}
