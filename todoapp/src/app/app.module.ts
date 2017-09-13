import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar/nav-bar.component';
import { TodoListComponent } from './todo-list/todo-list/todo-list.component';
import { ListItemComponent } from './list-item/list-item/list-item.component';
import { ServiceService } from "./service/service.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    TodoListComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
