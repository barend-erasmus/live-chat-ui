import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { Application } from '../entities/application';
import { Chat } from '../entities/chat';
import { Team } from '../entities/team';
import { ApplicationService } from '../services/application.service';
import { ChatService } from '../services/chat.service';
import { TeamService } from '../services/team.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-chat-route',
  templateUrl: './chat-route.component.html',
  styleUrls: ['./chat-route.component.css']
})
export class ChatRouteComponent extends BaseComponent implements OnInit {

  public chats: Chat[] = [];

  constructor(
    private applicationService: ApplicationService,
    private chatService: ChatService,
    private teamService: TeamService,
    userService: UserService,
  ) {
    super(userService);
  }

  public ngOnInit(): void {
    this.initialize().subscribe(() => {
      this.loadChats();
    });
  }

  private loadChats(): void {
    this.chats = [];

    this.teamService.list().subscribe((teams: Team[]) => {
      for (const team of teams) {
        this.applicationService.list(team.id).subscribe((applications: Application[]) => {
          for (const application of applications) {
            this.chatService.list(application.id).subscribe((chats: Chat[]) => {
              this.chats = this.chats.concat(chats);
            });
          }
        });
      }
    });
  }

}
