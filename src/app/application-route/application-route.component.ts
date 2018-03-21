import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { Application } from '../entities/application';
import { Team } from '../entities/team';
import { ApplicationService } from '../services/application.service';
import { TeamService } from '../services/team.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-application-route',
  templateUrl: './application-route.component.html',
  styleUrls: ['./application-route.component.css']
})
export class ApplicationRouteComponent extends BaseComponent implements OnInit {

  public applications: Application[] = [];

  constructor(
    private applicationService: ApplicationService,
    private teamService: TeamService,
    userService: UserService,
  ) {
    super(userService);
  }

  public ngOnInit(): void {
    this.initialize().subscribe(() => {
      this.loadApplications();
    });
  }

  private loadApplications(): void {
    this.applications = [];

    this.teamService.list().subscribe((teams: Team[]) => {
      for (const team of teams) {
        this.applicationService.list(team.id).subscribe((applications: Application[]) => {
          this.applications = this.applications.concat(applications);
        });
      }
    });
  }

}
