import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvregistradoComponent } from './nvregistrado.component';

describe('NvregistradoComponent', () => {
  let component: NvregistradoComponent;
  let fixture: ComponentFixture<NvregistradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvregistradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvregistradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
