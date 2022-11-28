import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoresView } from './autores.view';

describe('AutoresView', () => {
  let component: AutoresView;
  let fixture: ComponentFixture<AutoresView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoresView ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoresView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
