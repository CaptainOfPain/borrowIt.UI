import { ToDoTaskModel } from "./toDo-task.model";
import { ToDoListStatus } from "./toDo-list-status.enum";

export class ToDoListModel {
    public id: string;
    public name: string;
    public createDate: string;
    public modifyDate: string;
    public finishUntilDate: string;
    public status: ToDoListStatus;
    public tasks: ToDoTaskModel[];
}