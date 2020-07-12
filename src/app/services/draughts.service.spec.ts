import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {DraughtsService} from './draughts.service';
import {UserService} from './user.service';
import {DraughtsModel} from '../models/Draughts.model';

describe('DraughtsService', () => {
  let httpTestingController: HttpTestingController;
  let service: DraughtsService;
  let URL_SERVER: string = 'http://localhost:4600';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DraughtsService, UserService],
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(DraughtsService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve games from the API via GET', () => {
    const mockGames: DraughtsModel[] = [
      {game_name: "game0", board: "_n_R_n_rn___n__________n______n___________n___r__r_____r__N___r_", creator: 'userId1', turn: 0},
      {game_name: "game1", board: "_n_R_N_rn___n__________n______n___________n___r__r_____r__R___r_", creator: 'userId2', turn: 0},
      {game_name: "game2", board: "_n_R_n_rn___n__________N______n___________n___r__r_____r__n___r_", creator: 'userId1', turn: 2},
    ];
    service.get().subscribe(games => {
      expect(games.length).toBe(3);
      expect(games).toEqual(mockGames);
    });
    const request = httpTestingController.expectOne(URL_SERVER + '/draughts');
    expect(request.request.method).toBe('GET');
    request.flush(mockGames);
  });

  it('should retrieve user games from the API via GET', () => {
    const mockGames: DraughtsModel[] = [
      {game_name: "game0", board: "_n_R_n_rn___n__________n______n___________n___r__r_____r__N___r_", creator: 'userId1', turn: 0},
      {game_name: "game3", board: "_n_R_N_rn___n__________n______n___________n___r__r_____r__R___r_", creator: 'userId1', turn: 0},
      {game_name: "game43", board: "_n_R_n_rn___n__________N______n___________n___r__r_____r__n___r_", creator: 'userId1', turn: 2},
    ];
    service.getAllByUser('userId1').subscribe(games => {
      expect(games.length).toBe(3);
      expect(games).toEqual(mockGames);
    });
    const request = httpTestingController.expectOne(URL_SERVER + '/draughts/user/userId1');
    expect(request.request.method).toBe('GET');
    request.flush(mockGames);
  });

  it('should create a game from the API via POST', () => {
    const mockGame: DraughtsModel = {game_name: "gamePrueba",
      board: "_n_R_n_rn___n__________n______n___________n___r__r_____r__N___r_", creator: 'userId1', turn: 0};
    sessionStorage.setItem('token',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJ1c2VySWQxIiwiaWF0IjoxNTkwMzQ3NzMyfQ.76cGdpM9bkddZXNYuCrjHjkWka4DIOg8VDOhsRM1qS0');
    service.post('gamePrueba', '_n_R_n_rn___n__________n______n___________n___r__r_____r__N___r_', 0)
      .subscribe(game => {
        expect(game).toEqual(mockGame);
        expect(game.creator).toBe('userId1');
        expect(game.turn).toBe(0);
        expect(game.game_name).toBe('gamePrueba');
        expect(game.board).toBe('_n_R_n_rn___n__________n______n___________n___r__r_____r__N___r_');
      });
    const request = httpTestingController.expectOne(URL_SERVER + '/draughts');
    expect(request.request.method).toBe('POST');
    request.flush(mockGame);
  });

  it('should update a game from the API via PUT', () => {
    const mockGame: DraughtsModel = {game_name: "game",
      board: "_n_R_n_rn___n__________n______R___________n___r__r_____r__N___r_", creator: 'user', turn: 1};
    service.put('game', '_n_R_n_rn___n__________n______R___________n___r__r_____r__N___r_', 1)
      .subscribe(game => {
        expect(game).toEqual(mockGame);
        expect(game.creator).toBe('user');
        expect(game.turn).toBe(1);
        expect(game.game_name).toBe('game');
        expect(game.board).toBe('_n_R_n_rn___n__________n______R___________n___r__r_____r__N___r_');
      });
    const request = httpTestingController.expectOne(URL_SERVER + '/draughts/game');
    expect(request.request.method).toBe('PUT');
    request.flush(mockGame);
  });

});
