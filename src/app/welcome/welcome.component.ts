import {Component} from '@angular/core';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent {

  constructor(public userService:UserService) {
  }
}
