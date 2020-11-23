import { Component, OnInit } from '@angular/core';
import { User } from '../../resources/models/User';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  newUser: User;

  constructor() { }

  ngOnInit(): void {
    this.newUser = new User();
  }

  console() {
    console.log(this.newUser.email)
  }

  createUserPassword(){
  }

}
