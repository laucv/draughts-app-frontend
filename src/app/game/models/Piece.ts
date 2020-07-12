import {Color} from "./Color";
import {Coordinate} from "./Coordinate";
import {Error} from './Error';

export abstract class Piece {

  protected color: Color;

  constructor(color: Color) {
    if (color !== null)
      this.color = color;
  }

  isCorrectMovement(betweenDiagonalPieces: Array<Piece>, pair: number, coordinates: Coordinate[]): Error {
    if (coordinates[pair] === null)
      if (coordinates[pair + 1] === null)
        return Error.BAD_FORMAT;
    if (!coordinates[pair].isOnDiagonal(coordinates[pair + 1]))
      return Error.NOT_DIAGONAL;
    for (let piece of betweenDiagonalPieces)
      if (this.color == piece.getColor())
        return Error.COLLEAGUE_EATING;
    return this.isCorrectDiagonalMovement(betweenDiagonalPieces.length, pair, coordinates);
  }

  abstract isCorrectDiagonalMovement(amountBetweenDiagonalPieces: number, pair: number, coordinates: Coordinate[]): Error;

  isAdvanced(origin: Coordinate, target: Coordinate): boolean {
    if (origin === null || target === null)
      return false;
    let difference: number = origin.getRow() - target.getRow();
    if (this.color == Color.RED)
      return difference > 0;
    return difference < 0;
  }

  isLimit(coordinate: Coordinate): boolean {
    return coordinate.isFirst() && this.getColor() === Color.RED
      || coordinate.isLast() && this.getColor() === Color.BLACK;
  }

  getColor(): Color {
    return this.color;
  }

  abstract getCode():string;
}
