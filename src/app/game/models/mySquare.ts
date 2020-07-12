import {Piece} from './Piece';

export class MySquare {
  private row: number;
  private column: number;
  private piece: Piece;
  private selected: boolean;

  constructor(piece: Piece, row: number, column: number) {
    this.row = row;
    this.column = column;
    this.piece = piece;
    this.selected = false;
  }

  getRow(): number {
    return this.row;
  }

  getColumn(): number {
    return this.column;
  }

  public getPiece(): Piece {
    return this.piece;
  }

  public getPieceType(): string {
    if (this.piece === null) {
      return '';
    }
    return this.piece.getCode();
  }

  public setSelected(value: boolean) {
    this.selected = value;
  }

  public isSelected(): boolean {
    return this.selected;
  }

  clearPiece() {
    this.piece = null;
  }

  put(piece: Piece) {
    this.piece = piece;
  }

  setPiece(piece: Piece) {
    this.piece = piece;
  }
}
