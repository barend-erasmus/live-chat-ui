import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Team } from '../models/team';

@Injectable()
export class TeamService {

  constructor() {

  }

  public list(): Observable<Team[]> {
    return Observable.of([
      new Team(true, 1, 'Team 1', 'john-smith@example.com'),
      new Team(false, 2, 'Team 2', 'john-smith@example.com'),
      new Team(false, 3, 'Team 3', 'john-smith@example.com'),
    ]);
  }

}
