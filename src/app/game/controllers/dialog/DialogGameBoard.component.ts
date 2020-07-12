import {Component, Inject, OnInit} from '@angular/core';
import {MySquare} from '../../models/mySquare';
import {Color} from '../../models/Color';
import {GameService} from '../../game.service';
import {DraughtsService} from '../../../services/draughts.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DialogGameName} from './DialogGameName.component';
import {Pawn} from '../../models/Pawn';
import {Draught} from '../../models/Draught';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-draughts',
  templateUrl: '../../views/dialog/dialog-game-board.component.html',
  styleUrls: ['../../views/dialog/dialog-game-board.component.css']
})
export class DialogGameBoard implements OnInit {

  boardDimension: MySquare[][];
  gameName: string;

  constructor(private gameService: GameService, private draughtsService: DraughtsService, private userService: UserService,
              private dialog: MatDialog, public dialogRef: MatDialogRef<DialogGameName>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.gameName = null;
  }

  ngOnInit(): void {
    if (this.data.gameName !== null) {
      this.setBoard(this.data.board);
      this.gameName = this.data.gameName;
    } else {
      this.gameService.resetGame();
    }
    this.boardDimension = this.gameService.getBoardView();
  }

  setBoard(board: string){
    let position: number = 0;
    for (let row = 0; row < this.gameService.getDimension(); row++) {
      for (let column = 0; column < this.gameService.getDimension(); column++) {
        if (board.charAt(position) === '_') {
          this.gameService.setPiece(null, row, column);
        } else if (board.charAt(position) === 'r') {
          this.gameService.setPiece(new Pawn(Color.RED), row, column);
        } else if (board.charAt(position) === 'R') {
          this.gameService.setPiece(new Draught(Color.RED), row, column);
        } else if (board.charAt(position) === 'n') {
          this.gameService.setPiece(new Pawn(Color.BLACK), row, column);
        } else if (board.charAt(position) === 'N') {
          this.gameService.setPiece(new Draught(Color.BLACK), row, column);
        }
        position++;
      }
    }
  }

  getTurnColor(): Color {
    return this.gameService.getTurnColor();
  }

  saveGame() {
    if (this.gameName === null) {
      this.openDialog();
    } else {
      this.draughtsService.put(this.gameName, this.gameService.toStringBoard(), this.gameService.getTurnColor()).subscribe(
        data => {
          alert('Game update');
        }
      );
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogGameName, {
      height: '250px',
      width: '250px',
      data: {gameName: this.gameName}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.gameName = result;
      this.draughtsService.post(this.gameName, this.gameService.toStringBoard(), this.gameService.getTurnColor()).subscribe(
        data => {
          alert('Game saved');
        }
      );
    });
  }

  logout(){
    this.dialog.closeAll();
    this.userService.logout();
  }
}
