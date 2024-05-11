import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PackageInfoService {

  selectedPackage : any;

  constructor() { }

  getSelectedPackage(){
    return this.selectedPackage;
  }
}
