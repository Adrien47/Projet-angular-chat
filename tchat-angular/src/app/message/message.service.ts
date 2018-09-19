import {Injectable} from '@angular/core';
import {Message} from './message';

import {Http} from '@angular/http';
import {AppConfigService} from '../app/app-config.service';


@Injectable()
export class SalonService {
  salons: Array<Message> = new Array<Message>();
  apiUrl = '';

  constructor(private http: Http, private appConfig: AppConfigService) {
    this.apiUrl = appConfig.apiUrl + '/message/';

    this.http
      .get(this.apiUrl)
      .subscribe(resp => this.messages = resp.json());


  }

  public findAll() {
    return this.messages;
  }

  public findById(id: number, http?: boolean): any {
    if (http) {
      return this.http
        .get(this.apiUrl + id);
    }

    for (const message of this.messages) {
      if (message.id === id) {
        return message;
      }
    }

    return null;
  }

  public save(salon: Salon) {
    if (salon) {
      if (!salon.id) {

        if (this.salons.length > 0) {
          salon.id = this.salons[this.salons.length - 1].id + 1;
        } else {
          salon.id = 1;
        }


        this.http
          .post(this.apiUrl, message)
          .subscribe(
            resp => this.messages.push(message),
            err => console.log(err)
          );


      } else {
        this.http
          .put(this.apiUrl + message.id, message)
          .subscribe(
            resp => null,
            err => console.log(err)
          );
      }
    }
  }

  public delete(salon: Message) {
    const pos: number = this.salons.indexOf(message);

    this.http
      .delete(this.apiUrl + message.id)
      .subscribe(
        resp => this.messages.splice(pos, 1),
        err => console.log(err)
      );
  }
}
