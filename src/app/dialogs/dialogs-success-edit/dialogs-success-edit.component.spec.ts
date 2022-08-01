import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogsSuccessEditComponent } from './dialogs-success-edit.component';

describe('DialogsSuccessEditComponent', () => {
  let component: DialogsSuccessEditComponent;
  let fixture: ComponentFixture<DialogsSuccessEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogsSuccessEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogsSuccessEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
