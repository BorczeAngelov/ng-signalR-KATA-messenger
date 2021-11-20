import { Injectable, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';

@Injectable({ providedIn: 'root' })
export class MessengerService implements OnInit {

  private readonly hubUrl = 'https://localhost:5001/messenger';
  private hubConnection?: HubConnection

  ngOnInit(): void {
    this.hubConnection = new HubConnectionBuilder().withUrl(this.hubUrl).build();

    this.hubConnection.start()
      .then(() => console.log('Connected to server'))
      .catch(err => console.log('Error while starting connection: ' + err));


    this.hubConnection?.on("onConnected", data => {
      const message = "Processing onConnected response from server: " + data;
      console.log(message);
    })
  }
}
