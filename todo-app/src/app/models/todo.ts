export class Todo {
    id: string;
    name: string;
    isCompleted: boolean;
    type: string;
    startDate: number;
    endDate: number;

    constructor(id: string, name: string, isDone: boolean, type: string, 
    startDate: number, endDate: number = null) {
        this.id = id;
        this.name = name;
        this.isCompleted = isDone;
        this.type = type;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}