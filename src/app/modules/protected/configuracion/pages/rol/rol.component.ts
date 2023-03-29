import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RolService } from '../../services/rol.service';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.scss']
})
export class RolComponent implements OnInit {

  rolForm!: FormGroup;
  create = false;
  constructor(public dialogRef: MatDialogRef<RolComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder, private rolS: RolService) { }

  ngOnInit(): void {
    this.createRolForm();
  }

  createRolForm() {
    if (this.data.data !== null) {
      this.rolForm = this.formBuilder.group(this.data.data);
    } else {
      this.create = true;
      this.rolForm = new FormGroup({
        rolId: new FormControl(0),
        rolDescripcion: new FormControl(''),
        rolActivo: new FormControl('')
      });
    }

    if (this.data.read)
      this.rolForm.disable();
  }

  updateRol() {
    this.rolS.updateRol(this.rolForm.controls['rolId'].value, this.rolForm.value).subscribe(x => {
      this.dialogRef.close();
    })

  }

  createRol() {
    this.rolS.addRol(this.rolForm.value).subscribe(x => {
      this.dialogRef.close();
    })
  }
}
