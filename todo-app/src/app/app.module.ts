import { routes } from './app.routes';
import { TodoService } from './services/todo.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ArchiveComponent } from './archive/archive.component';
import { StatusHighlighterDirective } from './status-highlighter.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    TodoListComponent,
    ArchiveComponent,
    StatusHighlighterDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ TodoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
