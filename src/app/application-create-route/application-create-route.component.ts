import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-application-create-route',
  templateUrl: './application-create-route.component.html',
  styleUrls: ['./application-create-route.component.css']
})
export class ApplicationCreateRouteComponent extends BaseComponent implements OnInit {

  constructor(
    userService: UserService,
  ) {
    super(userService);
  }

  public ngOnInit(): void {
  }

}
