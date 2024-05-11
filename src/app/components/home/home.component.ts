import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { BrandInfoService } from 'src/app/services/brand-info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'travel-site';

  tours = [
    {
      "name" : "Phuket-PhiPhi-Krabi",
      "price" : "1000 ฿",
      "activities" : [
        "snorkling", "Maya-bay", "Scuba diving"
      ]
    },
    {
      "name" : "Phuket-PhiPhi-AoNang",
      "price" : "1400 ฿",
      "activities" : [
        "snorkling", "Maya-bay", "Scuba diving"
      ]
    },
    {
      "name" : "Phuket-PhiPhi-Phuket",
      "price" : "1200 ฿",
      "activities" : [
        "snorkling", "Maya-bay", "Night stay at Phi-Phi Island", "Return to Phuket"
      ]
    }
  ]

  constructor (
    private dialog: MatDialog,
    private brandSvc : BrandInfoService
  ){
    this.title = this.brandSvc.brandName;

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
