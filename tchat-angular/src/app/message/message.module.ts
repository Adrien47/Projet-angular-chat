import { NgModule } from '@angular/core';
import {MessageComponent} from './message.component';
import {MessageService} from './message.service';
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

const routes: Routes = [
  {path: 'message', component: MessageComponent},
    ];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    MessageService
  ],
  declarations: [
    MessageComponent,

        ],
  exports: [  ]
})

export class MessageModule { }
