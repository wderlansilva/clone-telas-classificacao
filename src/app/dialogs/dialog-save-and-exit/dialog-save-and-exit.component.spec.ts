import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSaveAndExitComponent } from './dialog-save-and-exit.component';

describe('DialogSaveAndExitComponent', () => {
  let component: DialogSaveAndExitComponent;
  let fixture: ComponentFixture<DialogSaveAndExitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSaveAndExitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogSaveAndExitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
