import { Component, OnInit } from '@angular/core';
import { TeamService } from '../services/team.service';
import { ApplicationService } from '../services/application.service';
import { BaseComponent } from '../base/base.component';
import { UserService } from '../services/user.service';
import { Application } from '../entities/application';
import { Team } from '../entities/team';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent extends BaseComponent implements OnInit {

  public applications: Application[] = [];

  public teams: Team[] = [];

  constructor(
    private applicationService: ApplicationService,
    private teamService: TeamService,
    userService: UserService,
  ) {
    super(userService);
  }

  public ngOnInit(): void {
    this.loadApplications();
    this.initialize().subscribe(() => {
      this.loadTeams();
    });
  }

  public loadApplications(): void {
    this.applicationService.list().subscribe((applications) => {
      this.applications = applications;
    });
  }

  public loadTeams(): void {
    this.teamService.list().subscribe((teams) => {
      this.teams = teams;
    });
  }

}
