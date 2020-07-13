import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {DraughtsModel} from '../models/Draughts.model';
import {UserService} from './user.service';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DraughtsService {

  static API_END_POINT = environment.API;
  private headers: HttpHeaders;
  
  constructor(private http: HttpClient, private userService: UserService) {
    this.headers = new HttpHeaders();
    this.setHeaders();
  }

  get(){
    return this.http.get<DraughtsModel[]>(DraughtsService.API_END_POINT + '/draughts', {
      headers: this.headers
    });
  }

  getAllByUser(userId: string){
    return this.http.get<DraughtsModel[]>(DraughtsService.API_END_POINT + '/draughts/user/' + userId, {
      headers: this.headers
    });
  }

  post(game_name: string, board: string, turn: number){
    const creator = this.parseJwt()['_id'];
    const game = '{' +
      '"game_name": "' + game_name + '", ' +
      '"board": "' + board + '", ' +
      '"creator": "' + creator + '", ' +
      '"turn":"' + turn + '"}';
    return this.http.post<DraughtsModel>(DraughtsService.API_END_POINT + '/draughts', JSON.parse(game), {
      headers: this.headers
    });
  }

  put(game_name: string, board: string, turn: number){
    const game = '{' +
      '"board": "' + board + '", ' +
      '"turn":"' + turn + '"}';
    return this.http.put<DraughtsModel>(DraughtsService.API_END_POINT + '/draughts/' + game_name, JSON.parse(game), {
      headers: this.headers
    });
  }

  parseJwt () {
    const token = this.userService.getToken();
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }

  setHeaders(): HttpHeaders {
    return this.headers.set('Access-Control-Allow-Origin', '*');
  }
}
