import {Injectable} from '@angular/core';
import {Salon} from './salon';
import {Http} from '@angular/http';
import {AppConfigService} from '../app-config.service';


@Injectable()
export class SalonService {
  eleves: Array<Salon> = new Array<Salon>();
  apiUrl = '';

  constructor(private http: Http, private appConfig: AppConfigService) {
    this.apiUrl = appConfig.apiUrl + '/eleve/';

    this.http
      .get(this.apiUrl)
      .subscribe(resp => this.eleves = resp.json());

  }

  public findAll() {
    return this.eleves;
  }

  public findById(id: number, http?: boolean): any {
    if (http) {
      return this.http
        .get(this.apiUrl + id);
    }

    for (const eleve of this.eleves) {
      if (eleve.id === id) {
        return eleve;
      }
    }

    return null;
  }

  public save(eleve: Salon) {
    if (eleve) {
      if (!eleve.id) {

        if (this.eleves.length > 0) {
          eleve.id = this.eleves[this.eleves.length - 1].id + 1;
        } else {
          eleve.id = 1;
        }


        this.http
          .post(this.apiUrl, eleve)
          .subscribe(
            resp => this.eleves.push(eleve),
            err => console.log(err)
          );


      } else {
        this.http
          .put(this.apiUrl + eleve.id, eleve)
          .subscribe(
            resp => null,
            err => console.log(err)
          );
      }
    }
  }

  public delete(eleve: Salon) {
    const pos: number = this.eleves.indexOf(eleve);

    this.http
      .delete(this.apiUrl + eleve.id)
      .subscribe(
        resp => this.eleves.splice(pos, 1),
        err => console.log(err)
      );
  }
}
