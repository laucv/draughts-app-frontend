import { Component } from '@angular/core';
import {UserService} from './services/user.service';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'draughts';
  apiEndPoint: string;

  constructor(public userService: UserService) {
    this.apiEndPoint = environment.API;
  }
}
