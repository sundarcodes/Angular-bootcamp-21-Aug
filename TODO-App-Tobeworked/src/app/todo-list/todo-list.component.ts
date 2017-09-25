import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { todo } from '../models/todo';
 
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
 @Input() itemList :  todo[];
 @Input() title : string;
 @Output() newItemAdded: EventEmitter<String> = new EventEmitter();
 @Output() showId: EventEmitter<String> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onEnterPress(text){
     this.newItemAdded.emit(text);
  }
  selectId(id: string){
 
     this.showId.emit(id);
  }

}
