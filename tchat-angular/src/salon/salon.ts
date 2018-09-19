export class Salon {
  id: number;
  version: number;
  nom: string;
  description: string;
  dateCreation: Date;
  createur: any = '';


  constructor(id?: number, version?: number, nom?: string, description?: string, dateCreation?: Date) {
    this.id = id;
    this.version = version;
    this.nom = nom;
    this.description = description;
    this.dateCreation = dateCreation;

  }
}
