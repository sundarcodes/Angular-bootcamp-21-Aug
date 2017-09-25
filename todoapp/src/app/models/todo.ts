export class Todo{
    id:string;
    name:string;
    isCompleted:boolean;
    type:string;
    constructor(id:string, name:string, isCompleted:boolean,type:string){
        this.id = id;
        this.name = name;
        this.isCompleted = isCompleted;
        this.type = type;
    }
}