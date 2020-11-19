import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RequestLogin } from 'src/app/resources/models/RequestLogin';
import { LoginService } from 'src/app/resources/services/login.service';
import { AlertService } from 'src/app/resources/services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private loginService: LoginService, 
    private alertService: AlertService,
    private router: Router
    ) { }

  public requestLogin: RequestLogin;

  ngOnInit(): void {
    this.requestLogin = new RequestLogin();
  }

  public login() : void {
    this.loginService.doLogin(this.requestLogin).subscribe(response =>{
      this.router.navigate(['dashboard']);
    }, (error) => {
      this.alertService.error(error.error.message);
    });
  }
}
