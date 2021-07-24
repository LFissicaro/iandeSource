import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AlertService } from './alert.service';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private root = "http://localhost:5000/api/User/";

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private alertService: AlertService
  ) { }

  getUsers() {
    return this.httpClient.get(this.root + "GetUsers");
  }

  createUser(user: User) {
    return this.httpClient.post(this.root + "CreateUser", user);
  }

}
