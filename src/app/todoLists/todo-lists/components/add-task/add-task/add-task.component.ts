import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDoTaskRequest } from 'app/todoLists/todo-lists/models/toDo-task.request';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Input() public listId: string;
  @Output() public onTaskCreated = new EventEmitter<ToDoTaskRequest>();
  @Output() public onCancelled = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  public addTask(name: string, description: string): void {
    this.onTaskCreated.emit(new ToDoTaskRequest(this.listId, name, description));
  }

  public cancel(): void {
    this.onCancelled.emit();
  }
}
