import { Injectable } from '@angular/core';
import { todo } from '../models/todo';
import { Http} from '@angular/http';
import * as _ from 'lodash';
@Injectable()
export class TodoDataService {
  firebaseUrl : string =  "https://myapp-afa97.firebaseio.com/todo.json";
 private toDoValues:  todo[]; 
  constructor(private _http: Http) {
  this.toDoValues = [];
  // this.toDoValues.push(new todo('Read Docs','Project',false));
  // this.toDoValues.push(new todo('Attend meetings','Project',false));
  // this.toDoValues.push(new todo('Checkin code','Project',false));
  //  this.toDoValues.push(new todo('Be positive','Personal',false));
  //  this.toDoValues.push(new todo('Practice yoga','Personal',false));
  //   this.toDoValues.push(new todo('Read a book','Personal',false));

   }
   getTodoList(){
    //return this.toDoValues;
    debugger;
    this._http.get(this.firebaseUrl)
    .subscribe(myresp =>{

      const resObj = myresp.json();
      this.toDoValues = _.values(resObj).map((data:todo)=>{
        console.log('TODO',this.toDoValues);
        return new todo(data.name,data.type,data.isDone);
       
      })
 
      
    });

 

   }
   getProjectTodos(){
    return this.toDoValues.filter(todo => todo.type === 'Project');  
   
   }
   getPersonalTodos(){
    return this.toDoValues.filter(todo => todo.type === 'Personal');

   }
   addTodo(name:string,type:string, isDone: boolean  ){
    let  newTodo = new todo(name,type, isDone);
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
