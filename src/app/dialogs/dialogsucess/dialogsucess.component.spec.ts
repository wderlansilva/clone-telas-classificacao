import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogsucessComponent } from './dialogsucess.component';

describe('DialogsucessComponent', () => {
  let component: DialogsucessComponent;
  let fixture: ComponentFixture<DialogsucessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogsucessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogsucessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
