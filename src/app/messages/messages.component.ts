import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  //public messageService: MessageService;
  
  constructor(public messageService: MessageService) {
    //this.messageService = messageService;
  }

  ngOnInit() {
  }

}
