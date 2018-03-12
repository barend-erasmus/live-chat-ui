import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from '../models/team';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-team-create-route',
  templateUrl: './team-create-route.component.html',
  styleUrls: ['./team-create-route.component.css']
})
export class TeamCreateRouteComponent implements OnInit {

  public team: Team = new Team(null, null, null, null);

  constructor(
    private router: Router,
    private teamService: TeamService,
  ) {

  }

  public ngOnInit(): void {

  }

  public onClickSave(): void {
    this.teamService.create(this.team).subscribe((team: Team) => {
      this.router.navigateByUrl(`/team/edit/${team.id}`);
    });
  }

}
