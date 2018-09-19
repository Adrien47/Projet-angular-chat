import { Personne } from '../personne/personne';
import { Civilite } from './civilite.enum';

export class Salon extends Personne {
  civilite: Civilite;
  dateNaissance: Date;
  formateur: any = '';



  constructor(id?: number, civilite?: Civilite, nom?: string, prenom?: string, dateNaissance?: Date) {
    super(id, nom, prenom);
    this.civilite = civilite;
    this.dateNaissance = dateNaissance;
  }
}
