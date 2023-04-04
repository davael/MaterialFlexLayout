import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRolesComponent } from './lista-roles.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from 'src/app/core/material/material.module';

describe('ListaRolesComponent', () => {
  let component: ListaRolesComponent;
  let fixture: ComponentFixture<ListaRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaRolesComponent],
      imports:[HttpClientTestingModule, MaterialModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
