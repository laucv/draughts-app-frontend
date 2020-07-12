import {Piece} from './Piece';
import {Coordinate} from './Coordinate';
import {Error} from './Error';

export class Draught extends Piece {

  private static readonly CODES: string[] = ['R', 'N'];
  private static readonly MAX_DISTANCE_JUMP: number = 2;

  isCorrectDiagonalMovement(pieceAmountBetweenCoordinates: number, pair: number, coordinates: Coordinate[]): Error {
    let distance: number = Number(coordinates[pair].getDiagonalDistance(coordinates[pair + 1]));
    if (distance > Draught.MAX_DISTANCE_JUMP && pieceAmountBetweenCoordinates === 1) {
      return Error.TOO_MUCH_DISTANCE_TO_JUMP;
    }
    if (pieceAmountBetweenCoordinates > 1) {
      return Error.TOO_MUCH_EATINGS;
    }
    return null;
  }

  getCode(): string {
    return Draught.CODES[this.color.valueOf()];
  }


}
