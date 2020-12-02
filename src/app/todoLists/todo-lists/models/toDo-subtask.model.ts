import { ToDoListStatus } from "./toDo-list-status.enum";

export class ToDoSubTaskModel {
    public id: string;
    public name: string;
    public description: string;
    public createDate: string;
    public modifyDate: string;
    public status: ToDoListStatus;
}