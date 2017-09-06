import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.model';
import { Http,Response} from '@angular/http';
@Injectable()
export class TodolistService {
  private baseUrl="https://todoapp-f9bc9.firebaseio.com/todoApp.json";
 private todolist:Todo[];
 private personalTodo:Todo[];
 private projectTodo:Todo[];
  constructor(private http:Http) {
    this.todolist=[];
            }
      
   getTodosList(){
this.http.get(this.baseUrl).subscribe(
  (response:Response)=>{
    const todoArray=[];
  const jsObject= response.json();
  for(let key in jsObject){
    todoArray.push(jsObject[key]);
  }
 this.todolist = todoArray.map((todo:Todo)=>{
    return new Todo(todo.name,todo.type,todo.status);
  });

  }
)
   }
  public onAdddTodo(text:string,type:string){
    this.http.post(this.baseUrl,new Todo(text,type,false)).subscribe(
      (response)=>{console.log("sucess response"+" "+response);}
    ,(error)=>{console.log("error reponse"+" "+error);})
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
