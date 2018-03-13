import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Team } from '../models/team';

@Injectable()
export class TeamService extends BaseService {

  constructor(http: HttpClient) {
    super(http);
  }

  public create(team: Team): Observable<Team> {
    return this.post(`/team`, team);
  }

  public find(teamId: number): Observable<Team> {
    return this.get(`/team?teamId=${teamId}`);
  }

  public list(): Observable<Team[]> {
    return this.get(`/team`);
  }

  // public update(nutrient: any): Observable<any> {
  //   return this.put(`/nutrient/update`, nutrient);
  // }

}
