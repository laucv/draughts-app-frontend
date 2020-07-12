import {Color, getColorValue} from './Color';

export class Turn {

  private color: Color;

  constructor() {
    this.color = Color.RED;
  }

  change(){
    this.color = this.getOppositeColor();
  }

  getOppositeColor(): Color{
    return getColorValue(Number(this.color.valueOf() + 1) % 2);
  }

  getColor() : Color{
    return this.color;
  }

  public resetColor(){
    this.color = Color.RED;
  }
}
