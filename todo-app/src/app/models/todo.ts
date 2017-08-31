export class Todo {
    name: string;
    isCompleted: boolean;
    type: string;

    constructor(name: string, isDone: boolean, type: string) {
        this.name = name;
        this.isCompleted = isDone;
        this.type = type;
    }
}