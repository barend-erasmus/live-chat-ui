import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { BaseComponent } from '../base/base.component';
import { UserService } from '../services/user.service';
import { Chat } from '../entities/chat';

@Component({
  selector: 'app-home-route',
  templateUrl: './home-route.component.html',
  styleUrls: ['./home-route.component.css']
})
export class HomeRouteComponent extends BaseComponent implements OnInit {

  public chats: Chat[] = [];

  constructor(
    private chatService: ChatService,
    userService: UserService,
  ) {
    super(userService);
    // TODO
    // this.loadChats();

    // this.chatService.events().subscribe((event: Event) => this.handleEvent(event));
  }

  public ngOnInit(): void {
    this.initialize().subscribe(() => {

    });
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
