export class ToDoTaskRequest {
    public listId: string;
    public name: string;
    public description: string;

    constructor(listId: string, name: string, description: string) {
        this.listId = listId;
        this.name = name;
        this.description = description;
    }
}