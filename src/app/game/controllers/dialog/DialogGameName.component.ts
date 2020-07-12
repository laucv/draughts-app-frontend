import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'dialog-game-name',
  templateUrl: '../../views/dialog/dialog-game-name.html',
})
export class DialogGameName {

  constructor(
    public dialogRef: MatDialogRef<DialogGameName>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
