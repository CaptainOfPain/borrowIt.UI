import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDoTaskModel } from 'app/todoLists/todo-lists/models/toDo-task.model';
import { ToDoListStatus } from 'app/todoLists/todo-lists/models/toDo-list-status.enum';
import { ToDoTaskChangeStatusRequest } from 'app/todoLists/todo-lists/models/toDo-task-change-status.request';

@Component({
  selector: 'app-to-do-list-details',
  templateUrl: './to-do-list-details.component.html',
  styleUrls: ['./to-do-list-details.component.css']
})
export class ToDoListDetailsComponent implements OnInit {
  @Input() public tasks: ToDoTaskModel[] = [];
  @Input() public listId: string;
  @Output() public onTaskStatusChanged = new EventEmitter<ToDoTaskChangeStatusRequest>();
  public status = ToDoListStatus;
  constructor() { }

  ngOnInit(): void {
  }

  public beginTask(task: ToDoTaskModel) {
    this.onTaskStatusChanged.emit(new ToDoTaskChangeStatusRequest(this.listId, task.id, this.status.InProgress))
  }

  public holdTask(task: ToDoTaskModel) {
    this.onTaskStatusChanged.emit(new ToDoTaskChangeStatusRequest(this.listId, task.id, this.status.OnHold))
  }

  public cancelTask(task: ToDoTaskModel) {
    this.onTaskStatusChanged.emit(new ToDoTaskChangeStatusRequest(this.listId, task.id, this.status.Cancelled))
  }

  public removeTask(task: ToDoTaskModel) {
    this.onTaskStatusChanged.emit(new ToDoTaskChangeStatusRequest(this.listId, task.id, this.status.Archived))
  }

  public completeTask(task: ToDoTaskModel) {
    this.onTaskStatusChanged.emit(new ToDoTaskChangeStatusRequest(this.listId, task.id, this.status.Done))
  }

}
