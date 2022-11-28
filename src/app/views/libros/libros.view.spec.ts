import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosView } from './libros.view';

describe('LibrosView', () => {
  let component: LibrosView;
  let fixture: ComponentFixture<LibrosView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrosView ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrosView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
