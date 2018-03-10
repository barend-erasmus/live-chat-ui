import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { TeamService } from './services/team.service';
import { ApplicationService } from './services/application.service';
import { ChatService } from './services/chat.service';
import { HomeRouteComponent } from './home-route/home-route.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeRouteComponent,
    canActivate: [
      // AuthGuard,
    ],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeRouteComponent,
    SideMenuComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    ApplicationService,
    ChatService,
    TeamService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
