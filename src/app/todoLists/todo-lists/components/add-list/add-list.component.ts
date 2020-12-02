import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ListsService } from '../../services/lists.service';
import { NotificationsServiceService } from 'app/shared/services/notifications-service.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {
  @Output() finished = new EventEmitter<boolean>();
  constructor(private readonly _listsService: ListsService, private readonly _notificationsService: NotificationsServiceService) { }

  ngOnInit(): void {
  }

  public addList(name: string, expiryDateText: string, expiryTime: string): void {
    let expiryDate = new Date(expiryDateText+'T'+expiryTime);
    this._listsService.createList(name, expiryDate).subscribe(
      x => {
        this._notificationsService.success('List added successfully');
        this.finished.emit(true);
      }
      )
  }
}
