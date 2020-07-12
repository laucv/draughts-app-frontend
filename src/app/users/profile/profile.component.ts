import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {UserModel} from '../../models/User.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: UserModel;
  userId = '';
  username = '';
  email = '';
  confirmDelete = false;
  message = '';

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.userService.getUserProfile().subscribe(data => {
      this.user = data;
      this.username = this.user.username;
      this.email = this.user.email;
    });
  }

  updateProfile() {
    this.userService.updateUser(this.username).subscribe(data => {
      this.user = data;
      this.message = '';
    }, error => {
      this.message = error.statusText;
    });
  }

  undo() {
    this.confirmDelete = false;
  }

  deleteUser() {
    this.confirmDelete = true;
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }

  deleteAccount() {
    this.userService.deleteUser().subscribe(data => {
      alert('Account deleted');
      this.router.navigate(['']);
    });
  }
}
