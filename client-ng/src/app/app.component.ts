import { Component, OnInit } from '@angular/core';
import { MessengerService } from './services/messenger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public messangerService: MessengerService) { }

  ngOnInit(): void {
    this.messangerService.ngOnInit();
  }

  sendMessage(message: string) {
    this.messangerService.sendMessage(message)
  }
}
