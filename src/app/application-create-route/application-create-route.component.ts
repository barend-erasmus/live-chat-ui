import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../base/base.component';
import { Application } from '../entities/application';
import { Team } from '../entities/team';
import { TeamView } from '../entity-views/team';
import { ValidationMessage } from '../models/validation-message';
import { ApplicationService } from '../services/application.service';
import { TeamService } from '../services/team.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-application-create-route',
  templateUrl: './application-create-route.component.html',
  styleUrls: ['./application-create-route.component.css']
})
export class ApplicationCreateRouteComponent extends BaseComponent implements OnInit {

  public application: Application = new Application(null, null, null);

  public teams: TeamView[] = [];

  public validationMessages: ValidationMessage[] = [];

  constructor(
    private applicationService: ApplicationService,
    private router: Router,
    private teamService: TeamService,
    userService: UserService,
  ) {
    super(userService);
  }

  public ngOnInit(): void {
    this.initialize().subscribe((() => {
      this.loadTeams();
    }));
  }

  private loadTeams(): void {
    this.teamService.list().subscribe((teams: Team[]) => {
      this.teams = teams.map((team) => new TeamView(team.id, team.name, team.owner));
    });
  }

  public onClickSave(): void {
    this.applicationService.create(this.application).subscribe((application: Application) => {
      this.router.navigateByUrl(`/application/edit/${this.application.id}`);
    }, (err: any) => {
      this.validationMessages = err.error;
    });
  }

}
