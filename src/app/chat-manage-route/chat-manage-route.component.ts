import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { UserService } from '../services/user.service';
import { ChatService } from '../services/chat.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Chat } from '../entities/chat';
import { Message } from '../entities/message';
import { ApplicationView } from '../entity-views/application';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-chat-manage-route',
  templateUrl: './chat-manage-route.component.html',
  styleUrls: ['./chat-manage-route.component.css']
})
export class ChatManageRouteComponent extends BaseComponent implements OnInit {

  public chat: Chat = new Chat(new ApplicationView(null, null), null, null, null, null, null);

  public messages: Message[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private chatService: ChatService,
    private messageService: MessageService,
    userService: UserService,
  ) {
    super(userService);
  }

  public ngOnInit(): void {
    this.initialize().subscribe(() => {
      this.activatedRoute.params.subscribe((params: Params) => {
        this.loadChat(params['chatId']);

        this.loadMessages(params['chatId']);
      });
    });
  }

  private loadChat(chatId: number): void {
    this.chatService.find(chatId).subscribe((chat: Chat) => {
      this.chat = chat;
    });
  }

  private loadMessages(chatId: number): void {
    this.messageService.list(chatId).subscribe((messages: Message[]) => {
      this.messages = messages;
    });
  }
}
