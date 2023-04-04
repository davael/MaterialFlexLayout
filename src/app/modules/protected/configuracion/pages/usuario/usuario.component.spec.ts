import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioComponent } from './usuario.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UsuarioComponent', () => {
  let component: UsuarioComponent;
  let fixture: ComponentFixture<UsuarioComponent>;

  // create new instance of FormBuilder
  const formBuilder: FormBuilder = new FormBuilder();
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsuarioComponent],
      imports:[FormsModule,ReactiveFormsModule,HttpClientTestingModule],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: []},
        { provide: FormBuilder, useValue: formBuilder }
    ]
    }).compileComponents();

    fixture = TestBed.createComponent(UsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
