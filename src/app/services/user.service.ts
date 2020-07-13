import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserModel} from "../models/User.model";
import {Observable} from "rxjs";

@Injectable()
export class UserService {

  private url: string = 'http://localhost:4600';

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.url + '/users');
  }

  login(email: string, password: string): Observable<string> {
    const user = '{' +
      '"email": "' + email + '", ' +
      '"password":"' + password + '"}';
    return this.http.post<string>(this.url + '/users/login', JSON.parse(user));
  }

  getUserProfile(): Observable<UserModel> {
    return this.http.get<UserModel>(this.url + '/users/profile', {
      headers: this.getHeaders()
    });
  }

  isUserActive() {
    if (window.sessionStorage.getItem('token') !== null) {
      return true;
    } else {
      return false;
    }
  }

  registration(username: string, email: string, password: string): Observable<UserModel> {
    const user = '{' +
      '"username": "' + username + '", ' +
      '"email": "' + email + '", ' +
      '"password":"' + password + '"}';
    return this.http.post<UserModel>(this.url + '/users', JSON.parse(user));
  }

  saveToken(token: string) {
    window.sessionStorage.setItem('token', token);
  }

  getToken(): string {
    return window.sessionStorage.getItem('token');
  }

  deleteUser(): Observable<UserModel> {
    return this.http.delete<UserModel>(this.url + '/users/profile', {
      headers: this.getHeaders()
    });
  }

  getHeaders(): HttpHeaders {
    return new HttpHeaders().set('auth-token', this.getToken());
  }

  updateUser(username: string): Observable<UserModel> {
    const user = '{' +
      '"username": "' + username + '"}';

    return this.http.put<UserModel>(this.url + '/users/profile', JSON.parse(user), {
      headers: this.getHeaders()
    });
  }

  logout(){
    window.sessionStorage.removeItem('token');
    alert('Thanks for playing Draughts');
  }
}