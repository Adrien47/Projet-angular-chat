import {Injectable} from '@angular/core';
import {Salon} from './salon';

import {Http} from '@angular/http';
import {AppConfigService} from '../app/app-config.service';


@Injectable()
export class SalonService {
  salons: Array<Salon> = new Array<Salon>();
  apiUrl = '';

  constructor(private http: Http, private appConfig: AppConfigService) {
    this.apiUrl = appConfig.apiUrl + '/salon/';

    this.http
      .get(this.apiUrl)
      .subscribe(resp => this.salons = resp.json());


  }

  public findAll() {
    return this.salons;
  }

  public findById(id: number, http?: boolean): any {
    if (http) {
      return this.http
        .get(this.apiUrl + id);
    }

    for (const salon of this.salons) {
      if (salon.id === id) {
        return salon;
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
          .post(this.apiUrl, salon)
          .subscribe(
            resp => this.salons.push(salon),
            err => console.log(err)
          );


      } else {
        this.http
          .put(this.apiUrl + salon.id, salon)
          .subscribe(
            resp => null,
            err => console.log(err)
          );
      }
    }
  }

  public delete(salon: Salon) {
    const pos: number = this.salons.indexOf(salon);

    this.http
      .delete(this.apiUrl + salon.id)
      .subscribe(
        resp => this.salons.splice(pos, 1),
        err => console.log(err)
      );
  }
}
