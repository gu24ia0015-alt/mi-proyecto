import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioMascota } from './formulario-mascota';

describe('FormularioMascota', () => {
  let component: FormularioMascota;
  let fixture: ComponentFixture<FormularioMascota>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioMascota],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioMascota);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
