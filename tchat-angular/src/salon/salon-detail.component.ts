// @ts-ignore
import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { ActivatedRoute } from '@angular/router';
import { SalonService } from './salon.service';
import { Salon } from './salon';

@Component({
  templateUrl: './salon-message.component.html',
  styleUrls: ['./salon-detail.component.css']
})
export class SalonDetailComponent implements OnInit {

  private salon: Salon = new Salon();

  constructor(private route: ActivatedRoute, private salonService: SalonService ) {
    this.route.params.subscribe(params => {
      console.log(params['id']);
      this.salonService
        .findById(Number(params['id']), true)
        .subscribe(resp => this.salon = resp.json());
    });
  }

  ngOnInit() {
  }
}
