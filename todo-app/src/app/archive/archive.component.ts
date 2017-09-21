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
  filteredList: Todo[];

  constructor(private todoService: TodoService) { 
    this.searchVal = new Subject(); 
    this.filteredList = [];
  }

  ngOnInit() {
    this.filteredArchiveList$ = this.todoService.todoList$
    .combineLatest(this.searchVal.startWith('').debounceTime(800), (list, searchVal) => {
      // console.log(list, searchVal);
      console.log(list);
      return list.filter( todo => todo.name.includes(searchVal))
    })

    // this.subs = this.filteredArchiveList$.subscribe(data => {
    //   this.filteredList = data;
    // })
   

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
    if (this.subs) this.subs.unsubscribe();
  }

}
