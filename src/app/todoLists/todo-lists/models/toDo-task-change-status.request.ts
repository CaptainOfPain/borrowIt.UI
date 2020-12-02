import { ToDoListStatus } from "./toDo-list-status.enum";

export class ToDoTaskChangeStatusRequest {
    public listId: string;
    public taskId: string;
    public status: ToDoListStatus;

    constructor(listId: string, taskId: string, status: ToDoListStatus) {
        this.listId = listId;
        this.taskId = taskId;
        this.status = status;
    }
}