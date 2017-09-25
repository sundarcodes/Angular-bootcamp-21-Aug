import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TodolistComponent } from './home/todolist/todolist.component';
import { TodolistService } from './service/todolist.service';
import {ArchiveComponent} from './archive/archive.component';
import { Todo } from './model/todo.model';
import { AboutComponent } from './about/about.component';
import { RoutesModule } from './app.module.routes';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TodolistComponent,
    ArchiveComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RoutesModule
  ],
  providers: [TodolistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
