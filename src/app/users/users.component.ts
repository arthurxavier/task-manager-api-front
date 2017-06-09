// Declaração OBJETO do component users
import { Component, OnInit } from "@angular/core";

import { User } from "./shared/user.model";

const USERS: Array<User> = [
  { id: 1, email: 'test@teste.com'},
  { id: 2, email: 'test1@teste.com'},
  { id: 3, email: 'test2@teste.com'},
  { id: 4, email: 'test3@teste.com'},
  { id: 5, email: 'test4@teste.com'},
  { id: 6, email: 'test5@teste.com'},
  { id: 7, email: 'test6@teste.com'},
  { id: 8, email: 'test7@teste.com'},

];

@Component({
  selector: 'users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit{
  public users;
  public selectedUser: User;
  
  public constructor(){
  }
  
  public ngOnInit(){
    this.users = USERS;
  }

  public onSelect(user: User):void  {
      this.selectedUser = user;
  }

}