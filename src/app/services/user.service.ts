import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../entities/user';

@Injectable()
export class UserService extends BaseService {

  constructor(http: HttpClient) {
    super(http);
  }

  public info(): Observable<User> {
    return this.get(`/user/info`);
  }

  public list(query: string): Observable<User[]> {
    return this.get(`/user?query=${query}`);
  }

}
