import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SalonService } from './salon.service';
import { Salon } from './salon';

@Component({
  templateUrl: './salon-detail.component.html',
  styleUrls: ['./salon-detail.component.css']
})
export class SalonDetailComponent implements OnInit {

  private eleve: Salon = new Salon();

  constructor(private route: ActivatedRoute, private eleveService: SalonService ) {
    this.route.params.subscribe(params => {
      console.log(params['id']);
      this.eleveService
        .findById(Number(params['id']), true)
        .subscribe(resp => this.eleve = resp.json());
    });
  }

  ngOnInit() {
  }
}
