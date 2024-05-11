import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { PackageInfoService } from 'src/app/services/package-info.service';

@Component({
  selector: 'app-package-page',
  templateUrl: './package-page.component.html',
  styleUrls: ['./package-page.component.scss']
})
export class PackagePageComponent {

  packageObject : any;
  
  packageName: string = "Phuket - PhiPhi - Krabi";
  packagePrice: number = 1000; // Example price
  packageInfo: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu ipsum sagittis, consequat neque et, luctus quam. Duis vestibulum nulla nec eros scelerisque, nec convallis felis malesuada.";
  
  imageUrls: string[] = [
    'assets/david-marcu-78A265wPiO4-unsplash.jpg',
    // 'path/to/image2.jpg',
    // 'path/to/image3.jpg'
  ];
  itinerary: string[] = [
    'Day 1: Arrival and Check-in at Hotel',
    'Day 2: Guided Tour of Attractions',
    'Day 3: Adventure Activities',
    'Day 4: Leisure Day',
    'Day 5: Departure'
  ];


  constructor(
    private pkgSvc : PackageInfoService
  ){
    this.packageObject = this.pkgSvc.getSelectedPackage()
  
  }

  ngOnInit() {
    
  }

}
