import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {SalonService} from './salon.service';
import {SalonComponent} from './salon.component';
import {SalonDetailComponent} from './salon-detail.component';
import {CiviliteAsStringPipe} from './civilite.pipe';


const routes: Routes = [
  {path: 'eleve', component: SalonComponent},
  {path: 'eleve/:id', component: SalonDetailComponent},

];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    SalonService,


  ],
  declarations: [

   SalonComponent,
    SalonDetailComponent,
    CiviliteAsStringPipe

  ],
  exports: [ ],
})
export class SalonModule {
}
