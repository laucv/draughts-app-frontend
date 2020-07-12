import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {UserService} from './user.service';
import {UserModel} from '../models/User.model';

describe('UserService', () => {
  let httpTestingController: HttpTestingController;
  let service: UserService;
  let URL_SERVER: string = 'http://localhost:4600';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService],
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(UserService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve users from the API via GET', () => {
    const mockUsers: UserModel[] = [
      {_id: '1', username: 'username1', password: 'passssss1', email: 'username1@email.com'},
      {_id: '2', username: 'username2', password: 'passssss2', email: 'username2@email.com'},
      {_id: '3', username: 'username3', password: 'passssss3', email: 'username3@email.com'},
    ];
    service.getUsers().subscribe(users => {
      expect(users.length).toBe(3);
      expect(users).toEqual(mockUsers);
    });
    const request = httpTestingController.expectOne(URL_SERVER + '/users');
    expect(request.request.method).toBe('GET');
    request.flush(mockUsers);
  });

  it('should login users via POST', () => {
    const mockToken: string = '';
    service.login('username1', 'passssss1').subscribe(token => {
      expect(token).toBe(mockToken);
    });
    const request = httpTestingController.expectOne(URL_SERVER + '/users/login');
    expect(request.request.method).toBe('POST');
    request.flush(mockToken);
  });

  it('should register users via POST', () => {
    const mockUser: UserModel = {_id: '4', username: 'username4', password: 'passssss4', email: 'username4@email.com'};
    service.registration('username4', 'username4@email.com', 'passssss4',).subscribe(user => {
      expect(user).not.toBeUndefined();
      expect(user.username).toEqual('username4');
      expect(user.email).toEqual('username4@email.com');
    });
    const request = httpTestingController.expectOne(URL_SERVER + '/users');
    expect(request.request.method).toBe('POST');
    request.flush(mockUser);
  });

  it('should update user via PUT', () => {
    const mockUser: UserModel = {_id: '1', username: 'cambio', password: 'passssss1', email: 'username1@email.com'};
    service.updateUser('cambio').subscribe(user => {
      expect(user).not.toBeUndefined();
      expect(user.email).toEqual('username1@email.com');
      expect(user.username).toEqual('cambio');
    });
    const request = httpTestingController.expectOne(URL_SERVER + '/users/profile');
    expect(request.request.method).toBe('PUT');
    request.flush(mockUser);
  });

  it('should get user via GET', () => {
    const mockUser: UserModel = {_id: '1', username: 'username1', password: 'passssss1', email: 'username1@email.com'};
    service.getUserProfile().subscribe(user => {
      expect(user).not.toBeUndefined();
      expect(user.username).toEqual('username1');
      expect(user.email).toEqual('username1@email.com');
    });
    const request = httpTestingController.expectOne(URL_SERVER + '/users/profile');
    expect(request.request.method).toBe('GET');
    request.flush(mockUser);
  });

  it('should delete user via DELETE', () => {
    const mockUser: UserModel = {_id: '1', username: 'username1', password: 'passssss1', email: 'username1@email.com'};
    service.deleteUser().subscribe(user => {
      expect(user).not.toBeUndefined();
    });
    const request = httpTestingController.expectOne(URL_SERVER + '/users/profile');
    expect(request.request.method).toBe('DELETE');
    request.flush(mockUser);
  });

  it('should logout user', () => {
    spyOn(window, "alert");
    service.logout();
    expect(window.alert).toHaveBeenCalledWith('Thanks for playing Draughts');
  });

  it('should save token', () => {
    let store = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      }
    };
    spyOn(sessionStorage, 'getItem')
      .and.callFake(mockLocalStorage.getItem);
    spyOn(sessionStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
    spyOn(sessionStorage, 'removeItem')
      .and.callFake(mockLocalStorage.removeItem);
    expect(service.isUserActive()).toBeFalse();
    service.saveToken('sometoken');
    expect(sessionStorage.getItem('token')).toEqual('sometoken');
    expect(service.isUserActive()).toBeTrue();
  });
});
