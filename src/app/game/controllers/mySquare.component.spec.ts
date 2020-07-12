import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {GameService} from '../game.service';
import {MySquareComponent} from './mySquare.component';
import {Color} from '../models/Color';
import {Pawn} from '../models/Pawn';
import {Draught} from '../models/Draught';
import {Error} from '../models/Error';
import {Coordinate} from '../models/Coordinate';

describe('MySquareComponet', () => {
  let component: MySquareComponent;
  let fixture: ComponentFixture<MySquareComponent>;
  let service: GameService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        MySquareComponent
      ],
      providers: [
        GameService
      ]
    });
    fixture = TestBed.createComponent(MySquareComponent);
    component = fixture.componentInstance;
    service = TestBed.get(GameService);
  }));

  afterEach(() => {
    fixture.destroy();
  });

  it('should instantiate', () => {
    expect(component).toBeDefined();
  });

  it('should check is a piece is selected', () => {
    component.square = service.getBoardView()[5][2];
    component.userMoves();
    fixture.detectChanges();
    expect(service.getPiece()).toEqual(new Pawn(Color.RED));
    expect(service.isPieceSelected()).toBeTrue();
  });

  it('should move the piece from coordinate[5, 2] to coordinate [4, 1]', () => {
    component.square = service.getBoardView()[5][2];
    component.userMoves();
    expect(service.isPieceSelected()).toBeTrue();
    component.square = service.getBoardView()[4][1];
    expect(component.square.getPiece()).toEqual(null);
    component.userMoves();
    expect(component.square.getPiece()).not.toEqual(null);
    expect(service.isPieceSelected()).toBeFalse();
    fixture.detectChanges();
  });

  it('should test Red Pawn movement with multijump', () => {
    service.setPiece(null, 0, 7);
    service.setPiece(null, 2, 5);
    service.setPiece(null, 0, 3);
    service.setPiece(new Pawn(Color.RED), 4, 3);
    service.setPiece(new Pawn(Color.BLACK), 3, 4);
    component.square = service.getBoardView()[4][3];
    component.userMoves();
    expect(service.isPieceSelected()).toBeTrue();
    expect(component.square.getPiece()).not.toEqual(null);
    component.square = service.getBoardView()[2][5];
    component.userMoves();
    expect(component.square.getPiece()).not.toEqual(null);
    expect(service.isPieceSelected()).toBeTrue();
    expect(service.getNumberOfPieces(Color.BLACK)).toEqual(9);
    component.userMoves();
    expect(service.isMultiJump()).toBeTrue();
    component.square = service.getBoardView()[0][7];
    component.userMoves();
    expect(component.square.getPiece()).not.toEqual(null);
    expect(service.isPieceSelected()).toBeFalse();
    expect(service.getNumberOfPieces(Color.BLACK)).toEqual(8);
    fixture.detectChanges();
  });

  it('should check user selects empty square', () => {
    component.square = service.getBoardView()[4][1];
    component.userMoves();
    expect(service.getPiece()).toBeNull();
    expect(service.isPieceSelected()).toBeFalse();
    fixture.detectChanges();
  });

  it('should send an OPPOSITE_PIECE error', () => {
    component.square = service.getBoardView()[2][1];
    component.userMoves();
    component.square = service.getBoardView()[3][0];
    let error = component.userMoves();
    fixture.detectChanges();
    expect(error).toEqual(Error.OPPOSITE_PIECE);
  });

  it('should test transform Pawn to Draught', () => {
    component.square = service.getBoardView()[5][2];
    component.userMoves();
    component.square = service.getBoardView()[4][3];
    component.userMoves();
    service.setPiece(new Pawn(Color.BLACK), 6, 1);
    service.setPiece(null, 7, 0);
    expect(service.getBoardView()[6][1].getPiece()).toEqual(new Pawn(Color.BLACK));
    expect(service.getBoardView()[7][0].getPiece()).toBeNull();
    component.square = service.getBoardView()[6][1];
    component.userMoves();
    component.square = service.getBoardView()[7][0];
    component.userMoves();
    expect(component.square.getPiece()).not.toBeNull();
    expect(component.square.getPiece()).toEqual(new Draught(Color.BLACK));
    fixture.detectChanges();
  });

  it('should test Draught movement from Coordinate [5, 0] to [4,1]', () => {
    service.setPiece(new Draught(Color.RED), 5, 0);
    expect(service.getBoardView()[5][0].getPiece()).toEqual(new Draught(Color.RED));
    component.square = service.getBoardView()[5][0];
    component.userMoves();
    component.square = service.getBoardView()[4][1];
    component.userMoves();
    expect(component.square.getPiece()).not.toBeNull();
    expect(service.getBoardView()[5][0].getPiece()).toBeNull();
    fixture.detectChanges();
  });

  it('should test Black Pawn movement with multijump', () => {
    component.square = service.getBoardView()[5][0];
    component.userMoves();
    component.square = service.getBoardView()[4][1];
    component.userMoves();
    service.setPiece(null, 6, 1);
    service.setPiece(null, 6, 5);
    service.setPiece(new Pawn(Color.RED), 3, 4);
    component.square = service.getBoardView()[2][5];
    component.userMoves();
    expect(service.isPieceSelected()).toBeTrue();
    expect(component.square.getPiece()).not.toEqual(null);
    component.square = service.getBoardView()[4][3];
    component.userMoves();
    expect(component.square.getPiece()).not.toEqual(null);
    expect(service.isPieceSelected()).toBeTrue();
    expect(service.getNumberOfPieces(Color.RED)).toEqual(10);
    component.userMoves();
    expect(service.isMultiJump()).toBeTrue();
    component.square = service.getBoardView()[6][1];
    component.userMoves();
    expect(component.square.getPiece()).not.toEqual(null);
    expect(service.isPieceSelected()).toBeFalse();
    expect(service.getNumberOfPieces(Color.RED)).toEqual(9);
    fixture.detectChanges();
  });

  it('should return NOT_DIAGONAL error', () => {
    component.square = service.getBoardView()[5][2];
    component.userMoves();
    component.square = service.getBoardView()[4][5];
    let error = component.userMoves();
    expect(error).toEqual(Error.NOT_DIAGONAL);
  });

  it('should return WITHOUT_EATING error', () => {
    component.square = service.getBoardView()[5][2];
    component.userMoves();
    component.square = service.getBoardView()[3][4];
    let error = component.userMoves();
    expect(error).toEqual(Error.WITHOUT_EATING);
  });

  it('should return TOO_MUCH_ADVANCED error', () => {
    service.setPiece(null, 2, 5);
    component.square = service.getBoardView()[5][2];
    component.userMoves();
    component.square = service.getBoardView()[2][5];
    let error = component.userMoves();
    expect(error).toEqual(Error.TOO_MUCH_ADVANCED);
  });

  it('should return TOO_MUCH_EATINGS error', () => {
    service.setPiece(new Draught(Color.RED), 5, 2);
    service.setPiece(new Draught(Color.BLACK), 4, 3);
    service.setPiece(new Draught(Color.BLACK), 3, 4);
    service.setPiece(null, 2, 5);
    component.square = service.getBoardView()[5][2];
    component.userMoves();
    component.square = service.getBoardView()[2][5];
    let error = component.userMoves();
    expect(error).toEqual(Error.TOO_MUCH_EATINGS);
  });

  it('should return game is finished', () => {
    for (let i = 0; i < Coordinate.getDimension(); i++) {
      for (let j = 0; j < Coordinate.getDimension(); j++) {
        service.setPiece(null, i, j);
      }
    }
    expect(service.getNumberOfPieces(Color.BLACK)).toEqual(0);
    service.setPiece(new Pawn(Color.RED), 5, 2);
    service.setPiece(new Pawn(Color.BLACK), 4, 3);
    expect(service.getNumberOfPieces(Color.BLACK)).toEqual(1);
    component.square = service.getBoardView()[5][2];
    component.userMoves();
    component.square = service.getBoardView()[3][4];
    component.userMoves();
    expect(service.getNumberOfPieces(Color.BLACK)).toEqual(0);
  });

});
