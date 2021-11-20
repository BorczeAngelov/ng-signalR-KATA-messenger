import { Injectable, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { ChatRoom } from '../dataModels/ChatRoom';

@Injectable({ providedIn: 'root' })
export class MessengerService implements OnInit {
  private readonly hubUrl = 'https://localhost:5001/messenger';
  private hubConnection?: HubConnection

  public chatRoom?: ChatRoom;

  ngOnInit(): void {
    this.hubConnection = new HubConnectionBuilder().withUrl(this.hubUrl).build();

    this.hubConnection.start()
      .then(() => console.log('Connected to server'))
      .catch(err => console.log('Error while starting connection: ' + err));

    this.hubConnection.on("onConnected", (data: ChatRoom) => {
      console.log("onConnected callback", data);
      this.chatRoom = data;
    });

    this.hubConnection.on("onUpdatedChatRoom", (data: ChatRoom) => {
      console.log("onUpdatedChatRoom callback", data);
      this.chatRoom = data;
    });
  }

  sendMessage(message: string) {
    this.hubConnection?.invoke('sendMessage', message).catch(err => console.error(err));
  }
}
