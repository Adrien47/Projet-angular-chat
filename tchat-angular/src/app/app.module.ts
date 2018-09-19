
import {FormsModule} from '@angular/forms';
import {SalonModule} from '../salon/salon.module';
import {MessageModule} from './message/matiere.module';
import {AppComponent} from './app.component';
import {HttpModule} from '@angular/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MessageModule,
    SalonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
