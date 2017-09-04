import { Injectable } from '@angular/core';
import { todo } from '../models/todo';

@Injectable()
export class TodoDataService {

 private toDoValues:  todo[]; 
  constructor() {
  this.toDoValues = [];
  this.toDoValues.push(new todo('Read Docs','Project',false));
  this.toDoValues.push(new todo('Attend meetings','Project',false));
  this.toDoValues.push(new todo('Checkin code','Project',false));
   this.toDoValues.push(new todo('Be positive','Personal',false));
   this.toDoValues.push(new todo('Practice yoga','Personal',false));
    this.toDoValues.push(new todo('Read a book','Personal',false));

   }
   getTodoList(){
     return this.toDoValues;
   }
   getProjectTodos(){
    return this.toDoValues.filter(todo => todo.type === 'Project');  
   
   }
   getPersonalTodos(){
    return this.toDoValues.filter(todo => todo.type === 'Personal');

   }
   addTodo(name:string,type:string, isDone: boolean  ){
    let  newTodo = new todo(name,type, isDone);
    this.toDoValues.push(newTodo);
    console.log(this.toDoValues);
   }
 
}
