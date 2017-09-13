import { Injectable } from '@angular/core';
import { Todo } from "../models/todo";

@Injectable()
export class ServiceService {
private todoList:Todo[];
  constructor() { 
this.todoList=[];
 this.todoList.push(new Todo('1','Learn Angular', false, 'personal'));
 this.todoList.push(new Todo('2','Fix bug # 3434', false, 'project'));
 this.todoList.push(new Todo('3','Attend scrum', false, 'project'));
 this.todoList.push(new Todo('4','Read a book', false, 'personal'));
 this.todoList.push(new Todo('5','Do Exercise', false, 'personal'));

  }

  getTodoList(){
    return this.todoList;
  }

  getProjectTodos() {
    return this.todoList.filter(todo => todo.type === 'project' && !todo.isCompleted);
  }

  getPersonalTodos() {
    return this.todoList.filter(todo => todo.type === 'personal' && !todo.isCompleted);
  }
}
