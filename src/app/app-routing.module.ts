import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackagePageComponent } from './components/package-page/package-page.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path : '', redirectTo : '/home',pathMatch :'full'},
  {path :'home', component : HomeComponent},
  {path : 'package', component : PackagePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations :[
    // PackagePageComponent
  ]
})
export class AppRoutingModule { }
