import { Component, OnInit } from '@angular/core';
import { Chat } from '../models/chat';
import { ChatService } from '../services/chat.service';
import { Event } from '../models/event';

@Component({
  selector: 'app-home-route',
  templateUrl: './home-route.component.html',
  styleUrls: ['./home-route.component.css']
})
export class HomeRouteComponent implements OnInit {

  public chats: Chat[] = [];

  constructor(
    private chatService: ChatService,
  ) {
    this.loadChats();

    this.chatService.events().subscribe((event: Event) => this.handleEvent(event));
  }

  public ngOnInit(): void {

  }

  private handleEvent(event: Event): void {
    if (event.type === 'chat.message') {
      this.loadChats();
    }
  }

  private loadChats(): void {
    this.chatService.listUnread().subscribe((chats) => {
      this.chats = chats;
    });
  }
}
