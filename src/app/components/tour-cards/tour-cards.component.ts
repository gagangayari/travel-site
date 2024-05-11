import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PackagePageComponent } from '../package-page/package-page.component';
import { Router } from '@angular/router';
import { PackageInfoService } from 'src/app/services/package-info.service';


@Component({
  selector: 'app-tour-cards',
  templateUrl: './tour-cards.component.html',
  styleUrls: ['./tour-cards.component.scss']
})
export class TourCardsComponent {

  @Input() tourObject : any ;

  constructor(
    private dialog : MatDialog,
    private route : Router,
    private pkgService : PackageInfoService
  ){

  }

  knowMore(){

    this.pkgService.selectedPackage = this.tourObject;
    this.route.navigateByUrl('package',  { state: { hello: 'world' } })
    // this.dialog.open(PackagePageComponent)

  }

}
