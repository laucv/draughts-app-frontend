import {Component, Input} from '@angular/core';
import {Draught} from '../../models/Draught';
import {Color} from '../../models/Color';

@Component({
  selector: 'draught',
  templateUrl: '../../views/pieces/draught.component.html',
  styleUrls: ['../../views/pieces/piece.component.css']
})
export class DraughtComponent {
  @Input() draught: Draught;
  BLACK = Color.BLACK;
  RED = Color.RED;
}
