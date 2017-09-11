import { Todo } from './../models/todo';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import * as _ from 'lodash';

@Injectable()
export class TodoService {

  private todoList: Todo[];
  firebaseURL: string;
  constructor(private http: Http) {
    this.firebaseURL = 'https://my-todo-app-db25f.firebaseio.com/todos';
    this.todoList = [];
    this.getTodoList();
    // this.todoList.push(new Todo('Learn Angular', false, 'personal'));
    // this.todoList.push(new Todo('Fix bug # 3434', false, 'project'));
    // this.todoList.push(new Todo('Attend scrum', false, 'project'));
    // this.todoList.push(new Todo('Read a book', false, 'personal'));
    // this.todoList.push(new Todo('Do Exercise', false, 'personal'));
   }

   getTodoList() {
      // return this.todoList;
      this.http.get(this.firebaseURL + '.json')
      .subscribe(respData => { 
        console.log(respData.json());
        const respObj = respData.json();
        const tempTodoArr = [];
        console.log(_.values(respObj));

        // for key in respObj {
        //   let obj = respObj[i];
        //   tempTodoArr.push(obj);
        // }
        // for (let i = 0; i < Object.keys(respObj).length; i++) {
        //   let obj1 = respObj[Object.keys(respObj)[i]];
        //   console.log(obj1);
        //   let newTodo = new Todo(Object.keys(respObj)[i], obj1.name, obj1.isCompleted, obj1.type);
        //   this.todoList.push(newTodo);
        // }

        this.todoList = Object.keys(respObj)
        .map(key => {
          let obj = respObj[key];
          return new Todo(key, obj.name, obj.isCompleted, obj.type, obj.startDate, obj.endDate)
        });
        // console.log(this.todoList);

        
        // this.todoList = _.values(respObj).map((item: Todo) => {
        //   return new Todo(item.name, item.isCompleted, item.type);
        // })
      }, (err => {
        console.log('Error in fetching data from Firebase', err);
      }))
   }

   addTodo(name: string, type: string, isDone: boolean = false) {
     const newTodo = new Todo('', name, isDone, type, Date.now());
     this.http.post(this.firebaseURL + '.json', newTodo)
     .subscribe(rsp => {
      console.log('Success', rsp);
      newTodo.id = rsp.json().name;
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
     return this.todoList.filter(todo => todo.type === 'project' && !todo.isCompleted);
   }

   getPersonalTodos() {
     return this.todoList.filter(todo => todo.type === 'personal' && !todo.isCompleted);
   }

   getArchivedTodos() {
     return this.todoList.filter(todo => todo.isCompleted)
   }

   markItemAsCompleted(id: string) {
    let todoObj = this.fetchTodoForId(id);
    todoObj.isCompleted = true;
    todoObj.endDate = Date.now();
    // this.http.put(this.firebaseURL + '/' + id + '.json', todoObj)
    this.http.put(`${this.firebaseURL}/${id}.json`, todoObj)
    .subscribe(res => console.log(res));
    // console.log(todoObj);
   }

   fetchTodoForId(id: string) {
     return this.todoList.find(todo => todo.id === id);
    //  this.todoList.find(function(todo) {
    //    return todo.id === id;
    //  })
   }

}
