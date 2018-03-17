import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from '../services/team.service';
import { TypeaheadMatch } from 'ngx-bootstrap';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs/Observable';
import { BaseComponent } from '../base/base.component';
import { User } from '../entities/user';
import { Team } from '../entities/team';
import { TeamParticipantView } from '../entity-views/team-participant';

@Component({
  selector: 'app-team-create-route',
  templateUrl: './team-create-route.component.html',
  styleUrls: ['./team-create-route.component.css']
})
export class TeamCreateRouteComponent extends BaseComponent implements OnInit {

  public team: Team = new Team(null, null, null, []);

  public participantTypeaheadDataSource: Observable<any[]> = null;

  public participantTypeaheadSelectedItem: User = null;

  public participantTypeaheadText: string = null;

  constructor(
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

    });
  }

  public onClickSave(): void {
    this.teamService.create(this.team).subscribe((team: Team) => {
      this.router.navigateByUrl(`/team/edit/${team.id}`);
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

}
