import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BaseService } from './base.service';
import { Event } from '../value-objects/event';
import { Chat } from '../entities/chat';

@Injectable()
export class ChatService extends BaseService {

  constructor(http: HttpClient) {
    super(http);
  }

  public events(): Observable<Event> {
    return Observable.create((observer) => {
      setInterval(() => {
        observer.next(new Event(null, 'chat.typing'));

        observer.next(new Event(null, 'chat.message'));
      }, 4000);
    });
  }

  public find(chatId: number): Observable<Chat> {
    return this.get(`/chat?chatId=${chatId}`);
  }

  public list(applicationId: number): Observable<Chat[]> {
    return this.get(`/chat?applicationId=${applicationId}`);
  }

}
