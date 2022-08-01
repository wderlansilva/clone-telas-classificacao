import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogsErroEditComponent } from './dialogs-erro-edit.component';

describe('DialogsErroEditComponent', () => {
  let component: DialogsErroEditComponent;
  let fixture: ComponentFixture<DialogsErroEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogsErroEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogsErroEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
