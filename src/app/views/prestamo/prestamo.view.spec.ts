import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamoView } from './prestamo.view';

describe('PrestamoView', () => {
  let component: PrestamoView;
  let fixture: ComponentFixture<PrestamoView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestamoView ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrestamoView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
