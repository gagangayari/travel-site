import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PackagePageComponent } from '../package-page/package-page.component';

@Component({
  selector: 'app-tour-cards',
  templateUrl: './tour-cards.component.html',
  styleUrls: ['./tour-cards.component.scss']
})
export class TourCardsComponent {

  constructor(
    private dialog : MatDialog
  ){

  }

  knowMore(){
    this.dialog.open(PackagePageComponent)

  }

}
