import { Component, OnInit } from '@angular/core';
import { TodolistService} from '../service/todolist.service';
import { Todo } from '../model/todo.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
private personalTodoList:Todo[];
 private projectTodoList:Todo[];
  constructor(private todolistService:TodolistService) { }

  ngOnInit() {
    this.personalTodoList=this.todolistService.getPersonalTodo();
    this.projectTodoList=this.todolistService.getProjectTodo();
      }
onaddtodo(text:string,type:string){
 if(type=='personal'){
  this.personalTodoList.push(new Todo(text,type,false));
}
if(type=='project'){
  this.projectTodoList.push(new Todo(text,type,false));
}
}
}