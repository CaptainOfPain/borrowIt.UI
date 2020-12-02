import { Injectable } from '@angular/core';
import { UrlBuilderService } from 'app/shared/services/url-builder.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDoListModel } from '../models/toDo-list.model';
import { ToDoListResultModel } from '../models/toDo-list-result.model';
import { ToDoTaskRequest } from '../models/toDo-task.request';
import { ToDoTaskChangeStatusRequest } from '../models/toDo-task-change-status.request';
import { ToDoListChangeStatusRequest } from '../models/toDo-list-change-status.request';

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  constructor(private readonly _urlBuilderService: UrlBuilderService, private readonly _httpClient: HttpClient) { }

  public createList(name: string, expiryDate: Date): Observable<void> {
    return this._httpClient.post<void>(this._urlBuilderService.buildUrl('toDo/toDoList/'), {name, finishUntilDate: expiryDate});
  }

  public getLists(): Observable<ToDoListResultModel> {
    return this._httpClient.post<ToDoListResultModel>(this._urlBuilderService.buildUrl('toDo/toDoList/getLists'), {});
  }

  public addTask(request: ToDoTaskRequest): Observable<void> {
    return this._httpClient.post<void>(this._urlBuilderService.buildUrl('toDo/toDoList/tasks'), request);
  }

  public setTaskStatus(request: ToDoTaskChangeStatusRequest): Observable<void> {
    return this._httpClient.put<void>(this._urlBuilderService.buildUrl('toDo/toDoList/tasks/changeStatus'), request);
  }

  public setListStatus(request: ToDoListChangeStatusRequest): Observable<void> {
    return this._httpClient.put<void>(this._urlBuilderService.buildUrl('toDo/toDoList/changeStatus'), request);
  }

}
