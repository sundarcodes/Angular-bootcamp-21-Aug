import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.model';
@Injectable()
export class TodolistService {
 private todolist:Todo[];
 private personalTodo:Todo[];
 private projectTodo:Todo[];
  constructor() {
    this.todolist=[];
    this.todolist.push(new Todo("pavan","project",false));
    this.todolist.push(new Todo("pavan2","project",false));
    this.todolist.push(new Todo("pavan3","personal",false));
    this.todolist.push(new Todo("pavan4","personal",false));
        }
public getPersonalTodo(){
  this.personalTodo=this.todolist.filter(element=>element.type=='personal');
  return this.personalTodo;
}
public getProjectTodo(){
  this.projectTodo=this.todolist.filter(element=>element.type=='project');
  return this.projectTodo;
}
}
