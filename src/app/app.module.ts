// IMPORTE DOS COMPONENTS USADOS NO APP

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { UsersComponent } from "./users/users.component";
import {UserDetailComponent} from "./users/user-detail/user-detail.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
