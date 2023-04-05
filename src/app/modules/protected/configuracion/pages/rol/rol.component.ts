import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {RolService} from '../../services/rol.service';
import {ConfirmDialogService} from 'src/app/shared/services/confirm-dialog.service';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.scss'],
})
export class RolComponent implements OnInit {
  rolForm!: FormGroup;
  create = false;
  constructor(
    public dialogRef: MatDialogRef<RolComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private rolS: RolService,
    private dialogService: ConfirmDialogService
  ) {}

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
        rolActivo: new FormControl(''),
      });
    }
    if (this.data.read) this.rolForm.disable();
  }

  updateRol() {
    this.dialogService.open({
      title: 'Modificar Rol',
      message: 'Seguro que desea modificar el rol?',
      cancelText: 'cancelar',
      confirmText: 'confirmar',
    });
    this.dialogService.confirmed().subscribe(confirmed => {
      if (confirmed) {
        this.rolS.updateRol(this.rolForm.controls['rolId'].value, this.rolForm.value).subscribe(() => {
          this.dialogRef.close();
        });
      }
    });
  }

  createRol() {
    this.dialogService.open({
      title: 'Creat Rol',
      message: 'Seguro que desea crear el rol?',
      cancelText: 'cancelar',
      confirmText: 'confirmar',
    });
    this.dialogService.confirmed().subscribe(confirmed => {
      if (confirmed) {
        this.rolS.addRol(this.rolForm.value).subscribe(() => {
          this.dialogRef.close();
        });
      }
    });
  }
}
