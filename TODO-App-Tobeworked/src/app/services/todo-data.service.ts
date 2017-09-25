import { Injectable } from '@angular/core';
import { todo } from '../models/todo';
import { Http} from '@angular/http';
import * as _ from 'lodash';
@Injectable()
export class TodoDataService {
  firebaseUrl : string =  "https://tododemo-6ab8f.firebaseio.com/working.json";
 private toDoValues:  todo[]; 
 private todoList: todo[];
  constructor(private _http: Http) {
  this.toDoValues = [];
  this.todoList = [];
  // this.toDoValues.push(new todo('Read Docs','Project',false));
  // this.toDoValues.push(new todo('Attend meetings','Project',false));
  // this.toDoValues.push(new todo('Checkin code','Project',false));
  //  this.toDoValues.push(new todo('Be positive','Personal',false));
  //  this.toDoValues.push(new todo('Practice yoga','Personal',false));
  //   this.toDoValues.push(new todo('Read a book','Personal',false));
  //this.getTodoList();
   }
   getTodoList(){
    //return this.toDoValues;
    
     this._http.get(this.firebaseUrl)
    .subscribe(myresp =>{
     const resObj = myresp.json();
     console.log(resObj);
     console.log(Object.keys(resObj));
     for(let i=0;i<Object.keys(resObj).length;i++){
      let obj1 = resObj[Object.keys(resObj)[i]];
      console.log("this is obj1",obj1);
      let newTodo = new todo(Object.keys(resObj)[i],obj1.name,obj1.type,obj1.isDone)
      console.log("newtod value:",newTodo);
      this.toDoValues.push(newTodo);
    }
    });
   
   }
   getProjectTodos(){
    return this.toDoValues.filter(todo => todo.type === 'Project' && !todo.isDone);  
   
   }
   getPersonalTodos(){
    return this.toDoValues.filter(todo => todo.type === 'Personal' && !todo.isDone);

   }
   addTodo(name:string,type:string, isDone: boolean =true  ){
    
    let  newTodo = new todo('',name,type, isDone);
    //this.toDoValues.push(newTodo);
    //console.log(this.toDoValues);
  //  this._http.post(this.firebaseUrl,newTodo).subscribe((function(data){
  //  console.log("success",data);
  //  this.toDoValues.push(newTodo);
  //  console.log(this.toDoValues);
  //   }).bind(this),function(error){console.log("error",error)});

   this._http.post(this.firebaseUrl,newTodo).subscribe(data => {
     console.log("Data",data);
     this.toDoValues.push(newTodo);
     console.log("toDoValues Data",this.toDoValues);
   }, err=>{
     console.log(err);
   });
  
  

    }
   
 
}
