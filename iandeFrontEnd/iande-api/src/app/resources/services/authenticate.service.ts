import { Injectable } from '@angular/core';
import { ResponseLogin } from '../models/ResponseLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  public loginResponse: ResponseLogin;

  constructor() { }

  public clear(): void {
    this.loginResponse = undefined;
  }

  public isAuthenticated():boolean{
    return Boolean(this.loginResponse?.jwt);//se existir um login respondse ele é lido para que um boolean seja retornado
  }
}
