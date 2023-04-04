import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolComponent } from './rol.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from 'src/app/core/material/material.module';

describe('RolComponent', () => {
  let component: RolComponent;
  let fixture: ComponentFixture<RolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RolComponent],
      imports:[FormsModule,ReactiveFormsModule,HttpClientTestingModule, MaterialModule],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: []},
    ]
    }).compileComponents();

    fixture = TestBed.createComponent(RolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
