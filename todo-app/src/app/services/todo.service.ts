import { Todo } from './../models/todo';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import * as _ from 'lodash';

@Injectable()
export class TodoService {

  private todoList: Todo[];
  firebaseURL: string;
  constructor(private http: Http) {
    this.firebaseURL = 'https://my-todo-app-db25f.firebaseio.com/todos.json';
    this.todoList = [];
    this.todoList.push(new Todo('Learn Angular', false, 'personal'));
    this.todoList.push(new Todo('Fix bug # 3434', false, 'project'));
    this.todoList.push(new Todo('Attend scrum', false, 'project'));
    this.todoList.push(new Todo('Read a book', false, 'personal'));
    this.todoList.push(new Todo('Do Exercise', false, 'personal'));
   }

   getTodoList() {
      // return this.todoList;
      this.http.get(this.firebaseURL)
      .subscribe(respData => { 
        console.log(respData.json());
        const respObj = respData.json();
        const tempTodoArr = [];
        console.log(_.values(respObj));

        // for key in respObj {
        //   let obj = respObj[i];
        //   tempTodoArr.push(obj);
        // }
        this.todoList = _.values(respObj).map((item: Todo) => {
          return new Todo(item.name, item.isCompleted, item.type);
        })
      }, (err => {
        console.log('Error in fetching data from Firebase', err);
      }))
   }

   addTodo(name: string, type: string, isDone: boolean = false) {
     const newTodo = new Todo(name, isDone, type);
     this.http.post(this.firebaseURL, newTodo)
     .subscribe(data => {
      console.log('Success', data);
      this.todoList.push(newTodo); 
      console.log(this.todoList);
     }, (err => {
       console.log('Error occured', err);
     }))
    //  .subscribe((function(data) {
    //   console.log('Success', data);
    //   console.log(this);
    //   this.todoList.push(newTodo);
    //  }).bind(this), function(err) {
    //    console.log('Error occured', err);
    //  });
    //  console.log(this.todoList);
   }

   getProjectTodos() {
     return this.todoList.filter(todo => todo.type === 'project');
   }

   getPersonalTodos() {
     return this.todoList.filter(todo => todo.type === 'personal');
   }

}
