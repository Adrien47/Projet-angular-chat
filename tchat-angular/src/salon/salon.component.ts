import {Component, OnInit} from '@angular/core';
import {SalonService} from './salon.service';
import {Salon} from './salon';

@Component({

  templateUrl: './salon.component.html',
  styleUrls: ['./salon.component.css']
})
export class SalonComponent implements OnInit {

  private formEleve: Salon = null;

  constructor(private eleveService: SalonService) {
  }

  ngOnInit() {
  }

  public list() {
    return this.eleveService.findAll();
  }

  public add() {
    this.formEleve = new Salon();
  }

  public edit(id: number) {
    this.formEleve = this.eleveService.findById(id);
  }

  public save() {
    this.eleveService.save(this.formEleve);
    this.formEleve = null;
  }

  public delete(id: number) {
    this.eleveService.delete(this.eleveService.findById(id));
  }

  public cancel(id: number) {
      this.formEleve = null;
    }

}
