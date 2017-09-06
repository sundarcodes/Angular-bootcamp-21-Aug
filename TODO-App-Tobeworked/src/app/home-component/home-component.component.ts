import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../services/todo-data.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor(private TodoDataService: TodoDataService) { }

  ngOnInit() {
    debugger;
    var abc = this.TodoDataService.getTodoList();
    console.log(abc);
    debugger;
  }

}
