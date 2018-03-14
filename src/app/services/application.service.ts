import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Application } from '../models/application';
import { Team } from '../models/team';
import { BaseService } from './base.service';

@Injectable()
export class ApplicationService extends BaseService {

  constructor() {
    super(null);
  }

  public list(): Observable<Application[]> {
    return this.get('applications');
  }
}
