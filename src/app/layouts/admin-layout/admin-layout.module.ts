import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule, MatNativeDateModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { NotificationsServiceService } from 'app/shared/services/notifications-service.service';
import { TodoListsComponent } from 'app/todoLists/todo-lists/todo-lists.component';
import { ListsService } from 'app/todoLists/todo-lists/services/lists.service';
import { AddListComponent } from 'app/todoLists/todo-lists/components/add-list/add-list.component';
import { MatTimepickerModule } from 'mat-timepicker';
import { ToDoListsBrowserComponent } from 'app/todoLists/todo-lists/components/to-do-lists-browser/to-do-lists-browser.component';
import { ToDoListDetailsComponent } from 'app/todoLists/todo-lists/components/list-details/to-do-list-details/to-do-list-details.component';
import { AddTaskComponent } from 'app/todoLists/todo-lists/components/add-task/add-task/add-task.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatNativeDateModule,
    MatTimepickerModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    TodoListsComponent,
    AddListComponent,
    ToDoListsBrowserComponent,
    ToDoListDetailsComponent,
    AddTaskComponent
  ],
  providers: [
    NotificationsServiceService,
    ListsService
  ]
})

export class AdminLayoutModule {}
