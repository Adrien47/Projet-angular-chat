import {FormsModule} from '@angular/forms';
import {SalonModule} from '../salon/salon.module';

import {AppComponent} from './app.component';
import {HttpModule} from '@angular/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {AppConfigService} from './app-config.service';

const routes: Routes = [



];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(routes),
    SalonModule
  ],
  providers: [AppConfigService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
