import { ToDoListStatus } from "./toDo-list-status.enum";

export class ToDoListChangeStatusRequest {
    public listId: string;
    public status: ToDoListStatus;

    constructor(listId: string, status: ToDoListStatus) {
         this.listId = listId;
         this.status = status;
    }
}