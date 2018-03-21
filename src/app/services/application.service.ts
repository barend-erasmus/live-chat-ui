import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BaseService } from './base.service';
import { Application } from '../entities/application';

@Injectable()
export class ApplicationService extends BaseService {

  constructor(http: HttpClient) {
    super(http);
  }

  public list(teamId: number): Observable<Application[]> {
    return this.get(`/application?teamId=${teamId}`);
  }
}
