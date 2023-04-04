import { TestBed } from '@angular/core/testing';

import { ConfirmDialogService } from './confirm-dialog.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from 'src/app/core/material/material.module';

describe('ConfirmDialogService', () => {
  let service: ConfirmDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[MaterialModule],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: []},
    ]
    });
    service = TestBed.inject(ConfirmDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
