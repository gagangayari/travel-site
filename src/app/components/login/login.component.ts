import { Component } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  login = true;
  signUp: boolean = false;
  constructor(public dialogRef: MatDialogRef<LoginComponent>){

  }

  onLogin(): void {
    this.login = true;
    this.signUp = false;

  }

  onSignUp(): void {
    this.signUp = true;
    this.login = false;

  }

  activeTab: string = 'login';

  toggleTab(tab: string) {
    this.activeTab = tab;
  }

}
