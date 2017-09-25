import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.model';
import { Http,Response} from '@angular/http';
@Injectable()
export class TodolistService {
  private baseUrl="https://todoapp-f9bc9.firebaseio.com/todoApp";
 private todolist:Todo[];
 private personalTodo:Todo[];
 private projectTodo:Todo[];
  constructor(private http:Http) {
    this.todolist=[];
            }
      
   getTodosList(){
this.http.get(this.baseUrl+'.json').subscribe(
  (response:Response)=>{
  const jsObject= response.json();
  this.todolist=Object.keys(jsObject).map
  ((key)=>{
   const obj =jsObject[key];
   return new Todo(key,obj.name,obj.type,obj.status);
  });

  }, (err => {
    console.log('Error in fetching data from Firebase', err);
  }))

   }
  public onAdddTodo(text:string,type:string){
   const newTodo= new Todo('',text,type,false);
    this.http.post(this.baseUrl+'.json',newTodo).subscribe(
      (response)=>{console.log("sucess response"+" "+response);this.todolist.push(newTodo); }
    ,(error)=>{console.log("error reponse"+" "+error);})
  }
public getPersonalTodo(){
  this.personalTodo=this.todolist.filter(element=>element.type=='personal' && !element.status);
  console.log(this.personalTodo);
  return this.personalTodo;
}
public getProjectTodo(){
  this.projectTodo=this.todolist.filter(element=>element.type=='project' && !element.status);
  return this.projectTodo;
}
getArchivedTodos() {
  return this.todolist.filter(todo => todo.status);
}

markItemAsCompleted(id: string) {
  let todoObj = this.fetchTodoForId(id);
  todoObj.status = true;
  this.http.put(`${this.baseUrl}/${id}.json`, todoObj)
  .subscribe(res => console.log(res));
   }
markItemAsRollBacked(id: string) {let todoObj = this.fetchTodoForId(id);
todoObj.status = false;
this.http.put(`${this.baseUrl}/${id}.json`, todoObj)
.subscribe(res => console.log(res));
}
 fetchTodoForId(id: string) {
   return this.todolist.find(todo => todo.id === id);
  }
  delete(id:string){
    let todoObj = this.fetchTodoForId(id);
    this.http.delete(`${this.baseUrl}/${id}.json`)
    .subscribe(res => console.log(res));
  }
}
