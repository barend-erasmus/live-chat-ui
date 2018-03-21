import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { TeamService } from '../services/team.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ApplicationService } from '../services/application.service';
import { ValidationMessage } from '../models/validation-message';
import { Application } from '../entities/application';
import { TeamView } from '../entity-views/team';
import { BaseComponent } from '../base/base.component';
import { Team } from '../entities/team';

@Component({
  selector: 'app-application-edit-route',
  templateUrl: './application-edit-route.component.html',
  styleUrls: ['./application-edit-route.component.css']
})
export class ApplicationEditRouteComponent  extends BaseComponent implements OnInit {

  public application: Application = new Application(null, null, null);

  public teams: TeamView[] = [];

  public validationMessages: ValidationMessage[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private applicationService: ApplicationService,
    private router: Router,
    private teamService: TeamService,
    userService: UserService,
  ) {
    super(userService);
  }

  public ngOnInit(): void {
    this.initialize().subscribe(() => {
      this.activatedRoute.params.subscribe((params: Params) => {
        this.loadTeams();
        this.loadApplication(params['applicationId']);
      });
    });
  }

  private loadApplication(applicationId: number): void {
    this.applicationService.find(applicationId).subscribe((application: Application) => {
      this.application = application;

      if (this.teams.length > 0) {
        this.application.team = this.teams.find((team) => team.id === this.application.team.id);
      }
    });
  }

  private loadTeams(): void {
    this.teamService.list().subscribe((teams: Team[]) => {
      this.teams = teams.map((team) => new TeamView(team.id, team.name, team.owner));

      if (this.application.team) {
        this.application.team = this.teams.find((team) => team.id === this.application.team.id);
      }
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
