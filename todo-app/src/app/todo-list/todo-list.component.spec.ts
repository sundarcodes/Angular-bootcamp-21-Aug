import { StatusHighlighterDirective } from './../status-highlighter.directive';
import { Todo } from './../models/todo';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { TodoListComponent } from './todo-list.component';

@Component({
  selector: 'app-test-host',
  template: `<div>
  <app-todo-list [title]="title" [todoList]="todos" 
  (itemAdded)="onItemAdded($event)"
  (itemChecked)="onItemChecked($event)" ></app-todo-list>
  </div>`
})
class TestHostComponent {
  title: string = 'List of Todos';
  todos: Todo[] = [];
  constructor() {
    this.todos.push(new Todo('1', 'Fix bug # 233', false, 'project', Date.now()));
    this.todos.push(new Todo('2', 'Learn Angular', false, 'personal', Date.now()));
    this.todos.push(new Todo('3', 'Design Discussion', false, 'project', Date.now()));
  }
}

fdescribe('TodoListComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHostComponent, TodoListComponent, StatusHighlighterDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
