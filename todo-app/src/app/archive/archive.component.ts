import { Todo } from './../models/todo';
import { TodoService } from './../services/todo.service';
import { Component, OnInit } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';


import 'rxjs/add/operator/do';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/debounceTime';


@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  searchVal: Subject<string>;
  filteredArchiveList$: Observable<Todo[]>;
  subs: any;

  constructor(private todoService: TodoService) { 
    this.searchVal = new Subject(); 
  }

  ngOnInit() {
    this.filteredArchiveList$ = this.todoService.todoList$
    .combineLatest(this.searchVal.startWith('').debounceTime(300), (list, searchVal) => {
      // console.log(list, searchVal);
      return list.filter( todo => todo.name.includes(searchVal))
    })
   

        // this.todoService.getTodoList();
        // this.filteredArchiveList = [];
        // this.subs = this.todoService.todoList$.subscribe(todoList => {
        //   console.log(todoList);
        //   this.filteredArchiveList = todoList.filter(todo => todo.isCompleted);
        // });
        // console.log(this.filteredArchiveList);
        // this.searchVal.subscribe(val => {
        //   console.log(val);
        //   this.filteredArchiveList = this.todoService.getArchivedTodos()
        //   .filter( todo => todo.name.includes(val));
        // })
  }

  onKeyUp(searchVal: string) {
    this.searchVal.next(searchVal);
  }

  ngOnDestroy(){
    // this.subs.unsubscribe();
  }

}
