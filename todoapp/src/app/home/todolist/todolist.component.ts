import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Todo } from '../../model/todo.model';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
@Input() private todoList:Todo[];
@Input() private title:String;
@Output() private inputText:EventEmitter<String>=new EventEmitter<String>();
@Output() itemChecked: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
onKeyEnter(text:string){
   this.inputText.emit(text);
}
onClick(id){
  console.log(id);
  this.itemChecked.emit(id);
}
}
