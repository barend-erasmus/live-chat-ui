import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { BaseComponent } from '../base/base.component';
import { UserService } from '../services/user.service';
import { Chat } from '../entities/chat';
import { ApplicationService } from '../services/application.service';
import { TeamService } from '../services/team.service';
import { Team } from '../entities/team';
import { Application } from '../entities/application';

@Component({
  selector: 'app-home-route',
  templateUrl: './home-route.component.html',
  styleUrls: ['./home-route.component.css']
})
export class HomeRouteComponent extends BaseComponent implements OnInit {

  public chats: Chat[] = [];

  constructor(
    private applicationService: ApplicationService,
    private chatService: ChatService,
    private teamService: TeamService,
    userService: UserService,
  ) {
    super(userService);
    // TODO
    // this.loadChats();

    // this.chatService.events().subscribe((event: Event) => this.handleEvent(event));
  }

  public ngOnInit(): void {
    this.initialize().subscribe(() => {

    });
  }

  private handleEvent(event: Event): void {
    if (event.type === 'chat.message') {
      this.loadChats();
    }
  }

  private loadChats(): void {
    this.chats = [];

    this.teamService.list().subscribe((teams: Team[]) => {
      for (const team of teams) {
        this.applicationService.list(team.id).subscribe((applications: Application[]) => {
          for (const application of applications) {
            this.chatService.list(application.id).subscribe((chats) => {
              this.chats.concat(chats);
            });
          }
        });
      }
    });
  }
}
