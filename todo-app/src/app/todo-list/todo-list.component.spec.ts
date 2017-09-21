import { Todo } from './../models/todo';
import { TodoListComponent } from './todo-list.component';
import { TestBed, async } from '@angular/core/testing';
import { Component } from '@angular/core';

import { By }              from '@angular/platform-browser';
import { StatusHighlighterDirective } from '../status-highlighter.directive';


@Component({
    selector: 'TestComponent',
    template: `<div><app-todo-list [title]="title"
    [todoList]="todos" ></app-todo-list></div>`
})
class TestComponent {
    title: string = "Testing Todo";
    todos: Todo[] = [];
    constructor() {
        this.todos.push(new Todo('1', 'Fix bug', false, 'project', Date.now()))
        this.todos.push(new Todo('2', 'Code  Review', false, 'project', Date.now()))
    }
}

fdescribe('TodoList Component', () => {
    let fixture: any;
    let componentInstance: any;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        TodoListComponent,
        StatusHighlighterDirective
      ],
    }).compileComponents();
     fixture = TestBed.createComponent(TestComponent);
     fixture.detectChanges();
     componentInstance = fixture.debugElement.componentInstance;
  }));

  it('should create the todolist component', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should have proper title', () => {
      console.log(componentInstance.title);
      let de = fixture.debugElement.query(By.css('h3'));
      expect(de.nativeElement.innerHTML).toEqual(componentInstance.title);
  });

  it('input passed to todolist should be equal to checkboxes displayed', () => {
      let inputListLength = componentInstance.todos.length;
      let de = fixture.debugElement.queryAll(By.css('input[type="checkbox"]'));
      console.log(de);
      expect(de.length).toEqual(inputListLength);
  });

  


});
