import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { RolService } from '../../services/rol.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  userForm!: FormGroup;
  roles!: Observable <any[]>;
  create = false;
  constructor(public dialogRef: MatDialogRef<UsuarioComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder, private _rolS: RolService) { }

  ngOnInit(): void {
    this.roles = this._rolS.getSelectedRoles();
    this.roles.subscribe( x => {
      console.log(x);
    })

    this.createUserForm();
  }

  createUserForm() {
    if (this.data.data !== null) {
      this.userForm = this.formBuilder.group(this.data.data);
    } else {
      this.create = true;
      this.userForm = new FormGroup({
        userId: new FormControl(0),
        userName: new FormControl(''),
        userActivo: new FormControl(1),
        userEmail: new FormControl('',[Validators.required, Validators.email]),
        userPass: new FormControl(''),
        userRol: new FormControl(0),
      });
    }
    if (this.data.read)
      this.userForm.disable();
  }

}
