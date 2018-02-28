import {Component, Inject, Injectable} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material';

@Component({
  templateUrl: 'error-dialog.component.html'
})

export class ErrorDialogComponent {

  constructor(private dialogRef: MatDialogRef<ErrorDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  public closeDialog() {
    this.dialogRef.close();
  }

}
