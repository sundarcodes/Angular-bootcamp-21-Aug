import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TodolistComponent } from './home/todolist/todolist.component';
import { TodolistService } from './service/todolist.service';
import { Todo } from './model/todo.model';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TodolistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
