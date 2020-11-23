import { Component, Input, OnInit } from '@angular/core';
import { Router, Navigation } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cart: boolean;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cart = false;
  }

  shoppingCart(){
    this.cart = !this.cart;
  }

  createAccount() {
    this.router.navigate(['#']);
  }

}
