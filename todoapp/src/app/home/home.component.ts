import { Component, OnInit } from '@angular/core';
import { TodolistService} from '../service/todolist.service';
import { Todo } from '../model/todo.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private todolistService:TodolistService) { }

  ngOnInit() {
   this.todolistService.getTodosList();
      }
onaddtodo(text:string,type:string){
this.todolistService.onAdddTodo(text,type);
}
}