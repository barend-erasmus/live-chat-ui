import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Application } from '../models/application';
import { Team } from '../models/team';
import { BaseService } from './base.service';

@Injectable()
export class ApplicationService extends BaseService {

  constructor() {
    super();
  }

  public list(): Observable<Application[]> {
    return this.get('applications');
  }
}
