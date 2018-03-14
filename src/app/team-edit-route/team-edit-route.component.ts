import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Team } from '../models/team';
import { TeamService } from '../services/team.service';
import { TypeaheadMatch } from 'ngx-bootstrap';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import { TeamParticipant } from '../models/team-participant';

@Component({
  selector: 'app-team-edit-route',
  templateUrl: './team-edit-route.component.html',
  styleUrls: ['./team-edit-route.component.css']
})
export class TeamEditRouteComponent implements OnInit {

  public team: Team = new Team(null, null, null, []);

  public participantTypeaheadDataSource: Observable<any[]> = null;

  public participantTypeaheadSelectedItem: User = null;

  public participantTypeaheadText: string = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private teamService: TeamService,
    private userService: UserService,
  ) {
    this.participantTypeaheadDataSource = Observable.create((observer: any) => {
      observer.next(this.participantTypeaheadText);
    }).mergeMap((token: string) => {
      return this.userService.list(token);
    });
  }

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.loadTeam(params['teamId']);
    });
  }

  public onClickSave(): void {
    this.teamService.update(this.team).subscribe((team: Team) => {
      this.router.navigateByUrl(`/`);
    });
  }

  public onClickAcceptParticipant(): void {
    this.teamService.accept(this.team.id).subscribe((team: Team) => {
      this.team = team;
    });
  }

  public onClickAddParticipant(): void {
    if (!this.participantTypeaheadText) {
      return;
    }

    if (this.team.participants.find((participant) => participant.id === this.participantTypeaheadSelectedItem.id)) {
      return;
    }

    this.team.participants.push(
      new TeamParticipant(
        false,
        this.participantTypeaheadSelectedItem.emailAddress,
        this.participantTypeaheadSelectedItem.displayName,
        this.participantTypeaheadSelectedItem.id,
      ));

    this.participantTypeaheadText = null;
  }

  public onClickRemoveParticipant(participant: TeamParticipant): void {
    const index: number = this.team.participants.indexOf(participant);

    this.team.participants.splice(index, 1);
  }

  public onSelectParticipant(item: TypeaheadMatch): void {
    this.participantTypeaheadSelectedItem = item.item;
  }

  private loadTeam(teamId: number): void {
    this.teamService.find(teamId).subscribe((team: Team) => {
      this.team = team;
    });
  }

}
