import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { Team } from '../entities/team';
import { TeamService } from '../services/team.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent extends BaseComponent implements OnInit {

  public teams: Team[] = [];

  constructor(
    private teamService: TeamService,
    userService: UserService,
  ) {
    super(userService);
  }

  public ngOnInit(): void {
    this.initialize().subscribe(() => {
      this.loadTeams();
    });
  }

  public loadTeams(): void {
    this.teamService.list().subscribe((teams) => {
      this.teams = teams;
    });
  }

}
