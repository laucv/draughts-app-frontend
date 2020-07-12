import {DirectionClass} from './DirectionClass';

export class Coordinate {
  private row: number;
  private column: number;
  private static readonly LOWER_LIMIT: number = 0;
  private static readonly UPPER_LIMIT: number = 7;
  private static readonly DIMENSION: number = Coordinate.UPPER_LIMIT + 1;

  constructor(row: number, column: number) {
    this.row = row;
    this.column = column;
  }

  private isWithIn(): boolean {
    return Coordinate.LOWER_LIMIT <= this.row && this.row <= Coordinate.UPPER_LIMIT
      && Coordinate.LOWER_LIMIT <= this.column && this.column <= Coordinate.UPPER_LIMIT;
  }

  private subtract(coordinate: Coordinate): Coordinate {
    return new Coordinate(this.row - coordinate.row, this.column - coordinate.column);
  }

  private plus(coordinate: Coordinate): Coordinate {
    return new Coordinate(this.row + coordinate.row, this.column + coordinate.column);
  }

  public getDirection(coordinate: Coordinate): DirectionClass {
    if (coordinate === null) {
      return null;
    }
    let substract: Coordinate = coordinate.subtract(this);
    for (let direction of DirectionClass.values()) {
      if (direction.isOnDirection(substract)) {
        return direction;
      }
    }
    return null;
  }

  public isOnDiagonal(coordinate: Coordinate): boolean {
    return this.getDirection(coordinate) != null;
  }

  public getDiagonalDistance(coordinate: Coordinate): number {
    if (!this.isOnDiagonal(coordinate)) {
      return null;
    }
    return Math.abs(this.subtract(coordinate).getRow());
  }

  private getDistanceCoordinate(direction: DirectionClass, distance: number): Coordinate {
    return new Coordinate(direction.getDistanceCoordinateRow(distance), direction.getDistanceCoordinateColumn(distance));
  }

  public getBetweenDiagonalCoordinates(coordinate: Coordinate): Array<Coordinate> {
    if (!this.isOnDiagonal(coordinate)) {
      return null;
    }
    let coordinates: Array<Coordinate> = new Array<Coordinate>();
    let direction: DirectionClass = this.getDirection(coordinate);
    let cursor: Coordinate = this.plus(this.getDistanceCoordinate(direction, 1));
    while (!cursor.equals(coordinate)) {
      coordinates.push(cursor);
      cursor = cursor.plus(this.getDistanceCoordinate(direction, 1));
    }
    return coordinates;
  }

  public equals(coordinate: Coordinate) {
    return this.getRow() === coordinate.getRow() && this.getColumn() === coordinate.getColumn();
  }

  public getDiagonalCoordinates(level: number): Array<Coordinate> {
    let diagonalCoordinates: Array<Coordinate> = new Array<Coordinate>();
    for (let direction of DirectionClass.values()) {
      let diagonalCoordinate: Coordinate = this.plus(this.getDistanceCoordinate(direction, level));
      if (diagonalCoordinate !== null && diagonalCoordinate.isWithIn()) {
        diagonalCoordinates.push(diagonalCoordinate);
      }
    }
    return diagonalCoordinates;
  }

  public getDiagonalCoordinate(direction: DirectionClass, level: number): Coordinate {
    return this.plus(this.getDistanceCoordinate(direction, level));
  }

  public isBlack(): boolean {
    return (this.row + this.column) % 2 != 0;
  }

  public isLast(): boolean {
    return this.row == Coordinate.UPPER_LIMIT;
  }

  public isFirst(): boolean {
    return this.row == Coordinate.LOWER_LIMIT;
  }

  public getRow(): number {
    return this.row;
  }

  public getColumn(): number {
    return this.column;
  }

  public static getDimension(): number {
    return Coordinate.DIMENSION;
  }

}
