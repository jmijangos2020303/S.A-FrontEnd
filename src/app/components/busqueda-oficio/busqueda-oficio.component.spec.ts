import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaOficioComponent } from './busqueda-oficio.component';

describe('BusquedaOficioComponent', () => {
  let component: BusquedaOficioComponent;
  let fixture: ComponentFixture<BusquedaOficioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedaOficioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaOficioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
