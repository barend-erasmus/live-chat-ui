import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BaseService } from './base.service';
import { Chat } from '../entities/chat';

@Injectable()
export class ChatService extends BaseService {

  constructor(http: HttpClient) {
    super(http);
  }

  public markAsRead(chatId: number, timestamp: Date): Observable<void> {
    return this.get(`/chat?chatId=${chatId}&timestamp=${timestamp.toString()}`);
  }

  public find(chatId: number): Observable<Chat> {
    return this.get(`/chat?chatId=${chatId}`);
  }

  public list(applicationId: number): Observable<Chat[]> {
    return this.get(`/chat?applicationId=${applicationId}`);
  }

}
