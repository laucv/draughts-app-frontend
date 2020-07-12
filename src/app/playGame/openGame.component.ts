import {Component} from '@angular/core';
import {DraughtsModel} from '../models/Draughts.model';
import {DraughtsService} from '../services/draughts.service';
import {DialogGameBoard} from '../game/controllers/dialog/DialogGameBoard.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-open-game',
  templateUrl: './openGame.component.html'
})
export class OpenGame {

  public games: DraughtsModel[];
  private userId;

  constructor(private draughtsService: DraughtsService, private dialog: MatDialog) {
    this.userId = this.draughtsService.parseJwt()['_id'];
    this.draughtsService.getAllByUser(this.userId).subscribe(data => {
      this.games = data;
    });
  }

  selectGame(gameName: string, board: string){
    const dialogRef = this.dialog.open(DialogGameBoard, {
      height: '600px',
      width: '1500px',
      data: {gameName: gameName, board: board}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.draughtsService.getAllByUser(this.userId).subscribe(data => {
        this.games = data;
      });
    });
  }
}
