

import {SalonService} from './salon.service';
import {SalonComponent} from './salon.component';
import {SalonDetailComponent} from './salon-detail.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';



const routes: Routes = [
  {path: 'salon', component: SalonComponent},
  {path: 'salon/:id', component: SalonDetailComponent},

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


  ],
  exports: [ ],
})
export class SalonModule {
}
