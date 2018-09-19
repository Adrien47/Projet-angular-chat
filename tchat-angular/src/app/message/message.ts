export class Message {
  id: number;
  version: number;
  nom: string;
  difficulte: string;
  dtDebut: Date;
  dtFin: Date;


  constructor(id?: number, version?: number, nom?: string, difficulte?: string, dtDebut?: Date, dtFin?: Date) {
    this.id = id;
    this.version = version;
    this.nom = nom;
    this.difficulte = difficulte;
    this.dtDebut = dtDebut;
    this.dtFin = dtFin;
  }
}
