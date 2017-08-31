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

}
