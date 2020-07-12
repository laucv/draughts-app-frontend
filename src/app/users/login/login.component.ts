import {Component} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email = '';
  password = '';
  message = '';

  constructor(private userService: UserService, private router: Router) {
  }

  login() {
    this.userService.login(this.email, this.password).subscribe(
      data => {
        this.userService.saveToken(data['token']);
        this.router.navigate(['/']);
      },
      error => {
        this.message = error.statusText;
      });
  }
}
