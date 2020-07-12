import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  username = '';
  email = '';
  password = '';
  repetedPassword = '';

  constructor(private userService: UserService, private router: Router) {
  }

  register(){
    if (this.password === this.repetedPassword)
      this.userService.registration(this.username, this.email, this.password).subscribe(
        data => {
          this.router.navigate(['']);
        }
      );
  }
}
