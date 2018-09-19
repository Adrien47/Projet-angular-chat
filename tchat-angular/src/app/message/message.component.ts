import {Component, OnInit} from '@angular/core';
import {MessageService} from './message.service';
import {Message} from './message';

@Component({
  selector: 'app-matiere',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  private formMessage: Message = null;

  constructor(private messageService: MessageService) {
  }

  ngOnInit() {
  }

  public list() {
    return this.messageService.findAll();
  }

  public add() {
    this.formMessage = new Message();
  }

  public save() {
    this.messageService.save(this.formMessage);
    this.formMessage = null;
  }


}
