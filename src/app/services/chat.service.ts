import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { BaseService } from './base.service';
import { Event } from '../value-objects/event';
import { Chat } from '../entities/chat';

@Injectable()
export class ChatService extends BaseService {

  constructor() {
    super(null);
  }

  public events(): Observable<Event> {
    return Observable.create((observer) => {
      setInterval(() => {
        observer.next(new Event(null, 'chat.typing'));

        observer.next(new Event(null, 'chat.message'));
      }, 4000);
    });
  }

  public listUnread(): Observable<Chat[]> {
    return this.get('chats');
  }
}
