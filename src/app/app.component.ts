import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'travel-site';

  constructor (private dialog: MatDialog){

  }
  


  login(){
    this.dialog.open(LoginComponent,
      {
        height: '400px',
        width: '400px',
      
      }
        );
    
  }
}
