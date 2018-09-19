export class Message {
  id: number;
  texte: string;
  date: Date;
  expediteur: string;



  constructor(id?: number, texte?: string, date?: Date, expediteur?: string) {
    this.id = id;
    this.texte = texte;
    this.date = date;
    this.expediteur = expediteur;
  }
}
