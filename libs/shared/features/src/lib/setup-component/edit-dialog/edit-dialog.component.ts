import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'cwp-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss'],
})
export class EditDialogComponent implements OnInit {

  editHeaderForm!: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditDialogComponent>,

    public form: FormBuilder,
  ) {
  }
  ngOnInit(): void {
    console.log(this.data.backGroundColor);
    this.editHeaderForm = this.form.group({
      backgroundColor: this.form.control(this.data.backGroundColor),
      textColor: this.form.control(this.data.textColor),
    });
  }

  onChangeTitle(e: any, i: number): void {
    this.data.title[i] = e.target.value;
  }

  onChangeUrl(e: any, i: number): void {
    this.data.url[i] = e.target.value;
  }

  onSave(): void {
    console.log(this.editHeaderForm.value);
    console.log(this.data);
    this.dialogRef.close(this.data);

  }
}
