import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TeamService } from '../services/team.service';
import { TypeaheadMatch } from 'ngx-bootstrap';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs/Observable';
import { BaseComponent } from '../base/base.component';
import { User } from '../entities/user';
import { Team } from '../entities/team';
import { TeamParticipantView } from '../entity-views/team-participant';
import { ValidationMessage } from '../models/validation-message';

@Component({
  selector: 'app-team-edit-route',
  templateUrl: './team-edit-route.component.html',
  styleUrls: ['./team-edit-route.component.css']
})
export class TeamEditRouteComponent extends BaseComponent implements OnInit {

  public team: Team = new Team(null, null, null, []);

  public participantTypeaheadDataSource: Observable<any[]> = null;

  public participantTypeaheadSelectedItem: User = null;

  public participantTypeaheadText: string = null;

  public validationMessages: ValidationMessage[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private teamService: TeamService,
    userService: UserService,
  ) {
    super(userService);

    this.participantTypeaheadDataSource = Observable.create((observer: any) => {
      observer.next(this.participantTypeaheadText);
    }).mergeMap((token: string) => {
      return this.userService.list(token);
    });
  }

  public ngOnInit(): void {
    this.initialize().subscribe(() => {
      this.activatedRoute.params.subscribe((params: Params) => {
        this.loadTeam(params['teamId']);
      });
    });
  }

  public onClickSave(): void {
    this.teamService.update(this.team).subscribe((team: Team) => {
      this.router.navigateByUrl(`/`);
    }, (err: any) => {
      this.validationMessages = err.error;
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
      new TeamParticipantView(
        false,
        this.participantTypeaheadSelectedItem.emailAddress,
        this.participantTypeaheadSelectedItem.displayName,
        this.participantTypeaheadSelectedItem.id,
      ));

    this.participantTypeaheadText = null;
  }

  public onClickRemoveParticipant(participant: TeamParticipantView): void {
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
