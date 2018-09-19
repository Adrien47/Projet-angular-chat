
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {MessageComponent} from './message.component';



const routes: Routes = [
  {path: 'message', component: MessageComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    MessageService,


  ],
  declarations: [

   MessageComponent,
  ],
  exports: [ ],
})
export class MessageModule {
}
