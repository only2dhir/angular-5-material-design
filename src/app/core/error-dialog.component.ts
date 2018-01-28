import {Component, Inject, Injectable} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material';

@Component({
  selector: 'dialog-overview-example',
  templateUrl: 'error-dialog.component.html'
  //styleUrls: ['dialog-overview-example.css'],
})

export class ErrorDialogComponent {

  constructor(private dialogRef: MatDialogRef<ErrorDialogComponent>, @Inject(MAT_DIALOG_DATA) public data : any) {

  }

  public closeDialog(){
    this.dialogRef.close();
  }

}
