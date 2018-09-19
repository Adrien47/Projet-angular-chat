import {Component, OnInit} from '@angular/core';
import {MessageService} from './message.service';
import {Matiere} from './message';

@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  private formMatiere: Matiere = null;

  constructor(private matiereService: MessageService) {
  }

  ngOnInit() {
  }

  public list() {
    return this.matiereService.findAll();
  }

  public add() {
    this.formMatiere = new Matiere();
  }

  public edit(id: number) {
    this.formMatiere = this.matiereService.findById(id);
  }

  public save() {
    this.matiereService.save(this.formMatiere);
    this.formMatiere = null;
  }

  public delete(id: number) {
    this.matiereService.delete(this.matiereService.findById(id));
  }
}
