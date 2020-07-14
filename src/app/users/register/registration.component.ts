import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {UserModel} from '../../models/User.model';

@Component({
  selector: 'app-user-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  user: UserModel = {_id: null, username: null, email: null, password: null}
  repetedPassword = '';
  message = '';

  constructor(private userService: UserService, private router: Router) {
  }

  register(){
    if (this.user.password === this.repetedPassword)
      this.userService.registration(this.user.username, this.user.email, this.user.password).subscribe(
        data => {
          this.router.navigate(['']);
        },
        error => {
          this.message = error.statusText;
        }
      );
  }
}
