import {Coordinate} from './Coordinate';

export enum Color {
  RED,
  BLACK
}

const LIMITS: number[] = [5, 2];
const StringIsNumber = value => isNaN(Number(value)) === false;

function getColor(row: number): Color {
  if (row >= LIMITS[Color.RED.valueOf()]) {
    return Color.RED;
  } else if (row <= LIMITS[Color.BLACK.valueOf()]) {
    return Color.BLACK;
  }
  return null;
}

export function colorGetInitialColor(coordinate: Coordinate): Color {
  if (coordinate.isBlack()) {
    return getColor(coordinate.getRow());
  }
  return null;
}

export function getColorValue(color: number): Color {
  if (color === 0) {
    return Color.RED;
  }
  if (color === 1) {
    return Color.BLACK;
  }
  return null;
}

export function colorValues() {
  return Object.keys(Color)
    .filter(StringIsNumber)
    .map(key => Color[key]);
}
