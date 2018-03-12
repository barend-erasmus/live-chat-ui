import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { TeamService } from './services/team.service';
import { ApplicationService } from './services/application.service';
import { ChatService } from './services/chat.service';
import { HomeRouteComponent } from './home-route/home-route.component';
import { LoginRouteComponent } from './login-route/login-route.component';
import { AuthGuard } from './auth.guard';
import { TeamCreateRouteComponent } from './team-create-route/team-create-route.component';
import { TypeaheadModule } from 'ngx-bootstrap';
import { UserService } from './services/user.service';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeRouteComponent,
    canActivate: [
      AuthGuard,
    ],
  },
  {
    path: 'team/create',
    component: TeamCreateRouteComponent,
    canActivate: [
      AuthGuard,
    ],
  },
  {
    path: 'login',
    component: LoginRouteComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeRouteComponent,
    SideMenuComponent,
    LoginRouteComponent,
    TeamCreateRouteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    TypeaheadModule.forRoot(),
  ],
  providers: [
    ApplicationService,
    AuthGuard,
    ChatService,
    TeamService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
