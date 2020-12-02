import { Component, OnInit } from '@angular/core';
import { ListsService } from './services/lists.service';
import { ToDoListModel } from './models/toDo-list.model';
import { ToDoTaskRequest } from './models/toDo-task.request';
import { Observable } from 'rxjs';
import { ToDoTaskChangeStatusRequest } from './models/toDo-task-change-status.request';
import { NotificationsServiceService } from 'app/shared/services/notifications-service.service';
import { ToDoListChangeStatusRequest } from './models/toDo-list-change-status.request';

@Component({
  selector: 'app-todo-lists',
  templateUrl: './todo-lists.component.html',
  styleUrls: ['./todo-lists.component.css']
})
export class TodoListsComponent implements OnInit {
  public data: ToDoListModel[];
  public isListView: boolean = true;
  constructor(private readonly _listsService: ListsService, private readonly _notificationsService: NotificationsServiceService) { }

  ngOnInit(): void {
    this._refresh();
  }

  public addTask(request: ToDoTaskRequest): void {
    this._listsService.addTask(request).subscribe(x => {
      this._notificationsService.success("Task added successfully");
      this._refresh();
    });
    
  }

  public changeTaskStatus(request: ToDoTaskChangeStatusRequest): void {
    this._listsService.setTaskStatus(request).subscribe(x => {
      
      this._notificationsService.success("Task updated successfully");
      this._refresh();
    });
  }

  public changeListStatus(request: ToDoListChangeStatusRequest): void {
    this._listsService.setListStatus(request).subscribe(x => {
      
      this._notificationsService.success("List updated successfully");
      this._refresh();
    });
  }

  private _refresh(): void {
    this._listsService.getLists().subscribe(x => this.data = x.items);
  }

}
