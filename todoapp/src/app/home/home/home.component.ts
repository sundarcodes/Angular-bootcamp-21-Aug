import { Component, OnInit } from '@angular/core';
import { ServiceService } from "../../service/service.service";
import { Todo } from "../../models/todo";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   projectTodos: Todo[];
   personalTodos: Todo[];
  constructor(private todoService:ServiceService) {
 this.projectTodos = this.todoService.getTodoList()
 .filter(todo => todo.type === 'project');
 this.personalTodos = this.todoService.getTodoList()
 .filter(todo => todo.type === 'personal');

   }

   
  ngOnInit() {
  }

}
