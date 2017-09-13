import { TodoService } from './../services/todo.service';
import { Todo } from './../models/todo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // projectTodos: Todo[];
  // personalTodos: Todo[];

  constructor(private todoService: TodoService) {
    // this.projectTodos = this.todoService.getTodoList()
    // .filter(todo => todo.type === 'project');
    // this.personalTodos = this.todoService.getTodoList()
    // .filter(todo => todo.type === 'personal');
   }

  ngOnInit() {
    // this.todoService.getTodoList();
  }

  addItemToList(todoText: string, type: string) {
    this.todoService.addTodo(todoText, type);
  }

  markItemAsDone(id: string) {
    this.todoService.markItemAsCompleted(id);
  }
}
