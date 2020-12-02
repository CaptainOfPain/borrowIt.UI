import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDoListModel } from 'app/todoLists/todo-lists/models/toDo-list.model';
import { ToDoTaskRequest } from '../../models/toDo-task.request';
import { ToDoListStatus } from '../../models/toDo-list-status.enum';
import { ToDoTaskChangeStatusRequest } from '../../models/toDo-task-change-status.request';
import { ToDoListChangeStatusRequest } from '../../models/toDo-list-change-status.request';

@Component({
  selector: 'app-to-do-lists-browser',
  templateUrl: './to-do-lists-browser.component.html',
  styleUrls: ['./to-do-lists-browser.component.css']
})
export class ToDoListsBrowserComponent implements OnInit {
  @Input() data: ToDoListModel[] = [];
  @Output() onTaskCreated = new EventEmitter<ToDoTaskRequest>();
  @Output() onTaskStatusChanged = new EventEmitter<ToDoTaskChangeStatusRequest>();
  @Output() onListStatusChanged = new EventEmitter<ToDoListChangeStatusRequest>();
  public isAddTaskView = false;
  public status = ToDoListStatus;

  constructor() { }

  ngOnInit(): void {
  }

  public taskCreated(request: ToDoTaskRequest): void {
    this.isAddTaskView = false;
    this.onTaskCreated.emit(request);
  }

  public changeTaskStatus(request: ToDoTaskChangeStatusRequest): void {
    this.onTaskStatusChanged.emit(request);
  }

  public beginList(list: ToDoListModel) {
    this.onListStatusChanged.emit(new ToDoListChangeStatusRequest(list.id, this.status.InProgress))
  }

  public holdList(list: ToDoListModel) {
    this.onListStatusChanged.emit(new ToDoListChangeStatusRequest(list.id, this.status.OnHold))
  }

  public cancelList(list: ToDoListModel) {
    this.onListStatusChanged.emit(new ToDoListChangeStatusRequest(list.id, this.status.Cancelled))
  }

  public removeList(list: ToDoListModel) {
    this.onListStatusChanged.emit(new ToDoListChangeStatusRequest(list.id, this.status.Archived))
  }

  public completeList(list: ToDoListModel) {
    this.onListStatusChanged.emit(new ToDoListChangeStatusRequest(list.id, this.status.Done))
  }

}
