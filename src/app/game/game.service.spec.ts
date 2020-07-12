import {async, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {GameService} from './game.service';

describe('GameService', () => {
  let service: GameService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [],
      providers: [
        GameService
      ]
    });
    service = TestBed.inject(GameService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
