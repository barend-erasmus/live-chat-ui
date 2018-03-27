import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Message } from '../entities/message';
import { BaseService } from './base.service';

@Injectable()
export class MessageService extends BaseService {

  constructor(http: HttpClient) {
    super(http);
  }

  public create(message: Message): Observable<Message> {
    return this.post(`/message`, message);
  }

  public list(chatId: number): Observable<Message[]> {
    return this.get(`/message?chatId=${chatId}`);
  }

}
