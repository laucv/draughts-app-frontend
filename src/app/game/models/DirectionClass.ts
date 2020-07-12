import {Coordinate} from "./Coordinate";

export class DirectionClass {
  public static readonly NE = new DirectionClass(1,1);
  public static readonly SE = new DirectionClass(-1,1);
  public static readonly SW = new DirectionClass(-1,-1);
  public static readonly NW = new DirectionClass(1,-1);

  private readonly horizontalShift: number;
  private readonly verticalShift: number;

  private constructor(horizontalShift: number, verticalShift: number) {
    this.horizontalShift = horizontalShift;
    this.verticalShift = verticalShift;
  }

  isOnDirection(coordinate: Coordinate): boolean{
    if (Math.abs(coordinate.getRow()) != Math.abs(coordinate.getColumn()))
      return false;
    if (coordinate.getRow()==0)
      return false;
    if (this.horizontalShift * coordinate.getRow() < 0)
      return false;
    if (this.verticalShift * coordinate.getColumn() < 0)
      return false;
    return true;
  }

  getDistanceCoordinateRow(distance: number): number{
    return this.horizontalShift * distance;
  }

  getDistanceCoordinateColumn(distance: number): number{
    return this.verticalShift * distance;
  }

  static values(): Array<DirectionClass>{
    return [DirectionClass.NE, DirectionClass.SE, DirectionClass.SW, DirectionClass.NW];
  }
}

enum EnumDirection {
  NE,
  SE,
  SW,
  NW
}

export const Direction = new Map<DirectionClass, EnumDirection>([
  [DirectionClass.NE, EnumDirection.NE],
  [DirectionClass.SE, EnumDirection.SE],
  [DirectionClass.SW, EnumDirection.SW],
  [DirectionClass.NW, EnumDirection.NW]
]);
