import {Component, OnInit} from '@angular/core';
import {SalonService} from './salon.service';
import {Salon} from './salon';
import {Message} from './message';

@Component({
  selector: "app-message"
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  private formMessage: Message = null;

  constructor(private salonMessage: MessageService) {
  }

  ngOnInit() {
  }

  public list() {
    return this.messageService.findAll();
  }

  public add() {
    this.formMessage = new Message();
  }

  public edit(id: number) {
    this.formMessage = this.messageService.findById(id);
  }

  public save() {
    this.messageService.save(this.formMessage);
    this.formMessage = null;
  }

  public delete(id: number) {
    this.messageService.delete(this.messageService.findById(id));
  }

  public cancel(id: number) {
      this.formMessage = null;
    }

}
