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

  constructor(
    private applicationService: ApplicationService,
  ) {

   }

  public ngOnInit(): void {
    this.loadApplications();
  }

  public loadApplications(): void {
    this.applicationService.list().subscribe((applications) => {
      this.applications = applications;
    });
  }
}
