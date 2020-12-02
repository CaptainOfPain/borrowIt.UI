import { ToDoSubTaskModel } from "./toDo-subtask.model";
import { ToDoListStatus } from "./toDo-list-status.enum";

export class ToDoTaskModel {
    public id: string;
    public name: string;
    public description: string;
    public createDate: string;
    public modifyDate: string;
    public status: ToDoListStatus;
    public subTasks: ToDoSubTaskModel[];
}