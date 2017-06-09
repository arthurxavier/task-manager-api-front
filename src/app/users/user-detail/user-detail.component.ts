import { Component, Input } from "@angular/core";

import { User } from "../shared/user.model";

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html'
})

export class UserDetailComponent{
  @Input() public user: User;

  public constructor(){}
}

