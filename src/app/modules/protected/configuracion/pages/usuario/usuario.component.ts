import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Observable} from 'rxjs';
import {RolService} from '../../services/rol.service';
import {UsuariosService} from '../../services/usuarios.service';
import {RolGet} from '../../interfaces/rol-get';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
})
export class UsuarioComponent implements OnInit {
  userForm!: FormGroup;
  roles!: Observable<RolGet[]>;
  setPass = false;

  aleatoria = true;
  constructor(
    public dialogRef: MatDialogRef<UsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private _rolS: RolService,
    private _uS: UsuariosService
  ) {}

  ngOnInit(): void {
    this.roles = this._rolS.getSelectedRoles();
    if (this.data.mode == 'view') {
      this.createLoadUserForm();
    }
    if (this.data.mode == 'add') {
      this.createUserForm();
    }
    if (this.data.mode == 'update') {
      this.createUpdateUserForm();
    }
  }

  createUserForm() {
    this.userForm = new FormGroup({
      userId: new FormControl(0),
      userName: new FormControl('', Validators.required),
      userActivo: new FormControl(1),
      userEmail: new FormControl('', [Validators.required, Validators.email]),
      userPass: new FormControl('', Validators.required),
      userRolNavigation: new FormControl(null, [Validators.required]),
    });
    this.setRandomPass();
  }

  createLoadUserForm() {
    this.userForm = this.formBuilder.group(this.data.data);
    const rolControl = new FormControl(this.data.data.userRolNavigation.rolId);
    this.userForm.setControl('userRolNavigation', rolControl);
    this.userForm.disable();
  }

  createUpdateUserForm() {
    this.userForm = this.formBuilder.group(this.data.data);
    const rolControl = new FormControl(this.data.data.userRolNavigation.rolId);
    this.userForm.setControl('userRolNavigation', rolControl);
  }

  changeAleatoria() {
    this.aleatoria = !this.aleatoria;
    this.userForm.controls['userPass'].setValue('');
    if (this.aleatoria) {
      this.setRandomPass();
    } else {
      this.userForm.controls['userPass'].enable();
    }
  }

  private setRandomPass() {
    const r = (Math.random() + 1).toString(36).substring(2);
    this.userForm.controls['userPass'].enable();
    this.userForm.controls['userPass'].setValue(r);
    this.userForm.controls['userPass'].disable();
  }

  guardarUsuario() {
    this._uS
      .addUser({
        userPass: this.userForm.controls['userPass'].value,
        userName: this.userForm.controls['userName'].value,
        userEmail: this.userForm.controls['userEmail'].value,
        userRol: this.userForm.controls['userRolNavigation'].value,
      })
      .subscribe(() => {
        this.dialogRef.close();
      });
  }

  updateUsuario() {
    this._uS
      .updateUser(this.userForm.controls['userId'].value, {
        userId: this.userForm.controls['userId'].value,
        userPass: this.userForm.controls['userPass'].value,
        userName: this.userForm.controls['userName'].value,
        userEmail: this.userForm.controls['userEmail'].value,
        userRol: this.userForm.controls['userRolNavigation'].value,
        userActivo: this.userForm.controls['userActivo'].value,
      })
      .subscribe(() => {
        this.dialogRef.close();
      });
  }

  blanquearPass() {
    this.setPass = true;
    this.setRandomPass();
  }
}
