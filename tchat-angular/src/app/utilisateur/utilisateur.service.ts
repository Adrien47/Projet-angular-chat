import {Injectable} from '@angular/core';
import {Utilisateur} from './utilisateur';
import {UrlService} from '../url.service';
import {Http} from '@angular/http';

@Injectable()
export class UtilisateurService {
  utilisateurs: Array<Utilisateur> = new Array<Utilisateur>();
  private utilisateur: Utilisateur;

  constructor(private http: Http) {
  }

  public findByUsername(username: string, http?: boolean): any {
    this.http
      .get(UrlService.urlServ + 'utilisateur/' + username)

    for (const utilisateur of this.utilisateurs) {
      if (utilisateur.username === username) {
        return utilisateur;
      }
    }
  }

  public connection(username: string): any {
    if (this.http
      .get(UrlService.urlServ + 'utilisateur/' + username + '/exists')) {
      alert('Ce nom d\'utilisateur existe déjà');
    } else {
      this.http.post(UrlService.urlServ + 'utilisateur', this.utilisateur);
    }
  }
}

