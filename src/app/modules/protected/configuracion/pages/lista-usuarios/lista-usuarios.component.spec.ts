import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ListaUsuariosComponent} from './lista-usuarios.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {MaterialModule} from 'src/app/core/material/material.module';

describe('ListaUsuariosComponent', () => {
  let component: ListaUsuariosComponent;
  let fixture: ComponentFixture<ListaUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaUsuariosComponent],
      imports: [HttpClientTestingModule, MaterialModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
