import { Component, OnInit } from '@angular/core';
import { Team } from '../models/team';
import { TeamService } from '../services/team.service';
import { ApplicationService } from '../services/application.service';
import { Application } from '../models/application';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  public applications: Application[] = [];

  public teams: Team[] = [];

  constructor(
    private applicationService: ApplicationService,
    private teamService: TeamService,
  ) {

   }

  public ngOnInit(): void {
    // this.loadApplications();
    this.loadTeams();
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
