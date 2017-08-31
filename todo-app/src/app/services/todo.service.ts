import { Todo } from './../models/todo';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  private todoList: Todo[];
  constructor() {
    this.todoList = [];
    this.todoList.push(new Todo('Learn Angular', false, 'personal'));
    this.todoList.push(new Todo('Fix bug # 3434', false, 'project'));
    this.todoList.push(new Todo('Attend scrum', false, 'project'));
    this.todoList.push(new Todo('Read a book', false, 'personal'));
    this.todoList.push(new Todo('Do Exercise', false, 'personal'));
   }

   getTodoList() {
      return this.todoList;
   }

   addTodo(name: string, type: string, isDone: boolean = false) {
     const newTodo = new Todo(name, isDone, type);
     this.todoList.push(newTodo);
     console.log(this.todoList);
   }

   getProjectTodos() {
     return this.todoList.filter(todo => todo.type === 'project');
   }

   getPersonalTodos() {
     return this.todoList.filter(todo => todo.type === 'personal');
   }

}
