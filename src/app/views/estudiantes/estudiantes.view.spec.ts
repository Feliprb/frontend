import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiantesView } from './estudiantes.view';

describe('EstudiantesView', () => {
  let component: EstudiantesView;
  let fixture: ComponentFixture<EstudiantesView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudiantesView ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudiantesView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
