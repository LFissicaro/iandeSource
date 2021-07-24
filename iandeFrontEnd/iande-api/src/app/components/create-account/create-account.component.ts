import { Component, OnInit } from '@angular/core';
import { User } from '../../resources/models/User';
import { AccountService } from '../../resources/services/account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  newUser: User;
  users: User[]=[];
  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.newUser = new User();
  }

  console() {
    console.log(this.newUser.email)
  }

  createNewUser() {

  }

  getUsers() {
    var users = this.accountService.getUsers();
  }

}
