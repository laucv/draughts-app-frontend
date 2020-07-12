import {Component, Input} from '@angular/core';
import {MySquare} from '../models/mySquare';
import {GameService} from '../game.service';
import {Error} from '../models/Error';

@Component({
  selector: 'app-board-square',
  templateUrl: '../views/mySquare.component.html',
  styleUrls: ['../views/mySquare.component.css']
})
export class MySquareComponent {

  @Input() public square: MySquare;

  constructor(private gameService: GameService) {
  }

  userMoves(): Error {
    return this.gameService.userClicks(this.square.getPiece(), this.square.getRow(), this.square.getColumn());
  }
}
