import {Component, Input} from '@angular/core';
import {Pawn} from '../../models/Pawn';
import {Color} from '../../models/Color';

@Component({
  selector: 'pawn',
  templateUrl: '../../views/pieces/pawn.component.html',
  styleUrls: ['../../views/pieces/piece.component.css']
})
export class PawnComponent {
  @Input() pawn: Pawn;
  BLACK = Color.BLACK;
  RED = Color.RED;
}
