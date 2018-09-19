import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Message } from './message';
import { AppConfigService } from '../app-config.service';




@Injectable()
export class MessageService {
  messages: Array<Message> = new Array<Message>();
  apiUrl = '';

  constructor(private http: Http, private appConfig:  AppConfigService) {
    this.apiUrl = appConfig.apiUrl + '/matiere/';

    this.http
      .get(this.apiUrl)
      .subscribe(resp => this.matieres = resp.json());

    // this.matieres.push(new Matiere(1, 0, 'JPA', 'FACILE', new Date(), new Date()));
    // this.matieres.push(new Matiere(2, 1, 'HTML', 'DIFFICILE', new Date(), new Date()));
    // this.matieres.push(new Matiere(3, 0, 'JAVASCRIPT', 'FACILE', new Date(), new Date()));
  }

  public findAll() {
    return this.messages;
  }

  public findById(id: number, http?: boolean): any {
    if (http) {
      return this.http
        .get(this.apiUrl + id);
    }

    for (const matiere of this.matieres) {
      if (matiere.id === id) {
        return matiere;
      }
    }

    return null;
  }


  public save(matiere: Matiere) {
    if (matiere) {
      if (!matiere.id) {
        matiere.version = 0;
        if (this.matieres.length > 0) {
          matiere.id = this.matieres[this.matieres.length - 1].id + 1;
        } else {
          matiere.id = 1;
        }

        // this.matieres.push(matiere);

        this.http
          .post(this.apiUrl, matiere)
          .subscribe(
            resp => this.matieres.push(matiere),
            err => console.log(err)
          );
      } else {
        this.http
          .put(this.apiUrl + matiere.id, matiere)
          .subscribe(
            resp => null,
            err => console.log(err)
          );
      }
    }
  }

  public delete(matiere: Matiere) {
    const pos: number = this.matieres.indexOf(matiere);

    this.http
      .delete(this.apiUrl + matiere.id)
      .subscribe(
        resp => this.matieres.splice(pos, 1),
        err => console.log(err)
      );
  }
}
