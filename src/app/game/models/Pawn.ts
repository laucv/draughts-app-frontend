import {Piece} from "./Piece";
import {Color} from "./Color";
import {Coordinate} from "./Coordinate";
import {Error} from "./Error";

export class Pawn extends Piece{

  private static readonly CODES: string[] = ['r', 'n'];
  private static readonly MAX_DISTANCE: number = 2;

  constructor(color: Color) {
    super(color);
  }

  isCorrectDiagonalMovement(pieceAmountBetweenCoordinates: number, pair: number, coordinates: Coordinate[]): Error {
    if (!this.isAdvanced(coordinates[pair], coordinates[pair+1]))
      return Error.NOT_ADVANCED;
    let  distance: number = Number(coordinates[pair].getDiagonalDistance(coordinates[pair+1]));
    if (distance > Pawn.MAX_DISTANCE)
      return Error.TOO_MUCH_ADVANCED;
    if (distance === Pawn.MAX_DISTANCE && pieceAmountBetweenCoordinates !== 1)
      return Error.WITHOUT_EATING;
    return null;
  }

  getCode(): string {
    return Pawn.CODES[this.color.valueOf()];
  }


}
