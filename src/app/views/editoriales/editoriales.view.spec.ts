import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorialesView } from './editoriales.view';

describe('EditorialesView', () => {
  let component: EditorialesView;
  let fixture: ComponentFixture<EditorialesView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorialesView ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorialesView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
