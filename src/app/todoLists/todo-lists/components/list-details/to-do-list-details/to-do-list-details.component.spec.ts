import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListDetailsComponent } from './to-do-list-details.component';

describe('ToDoListDetailsComponent', () => {
  let component: ToDoListDetailsComponent;
  let fixture: ComponentFixture<ToDoListDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoListDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
