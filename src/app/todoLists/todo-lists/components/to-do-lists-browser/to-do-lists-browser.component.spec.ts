import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListsBrowserComponent } from './to-do-lists-browser.component';

describe('ToDoListsBrowserComponent', () => {
  let component: ToDoListsBrowserComponent;
  let fixture: ComponentFixture<ToDoListsBrowserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoListsBrowserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoListsBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
