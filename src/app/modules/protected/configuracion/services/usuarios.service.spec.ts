import { TestBed } from '@angular/core/testing';

import { UsuariosService } from './usuarios.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

describe('UsuariosService', () => {
  let service: UsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: []},
    ]
    });
    service = TestBed.inject(UsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
