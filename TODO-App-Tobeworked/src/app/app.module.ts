import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TodoDataService } from './services/todo-data.service';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    NavigationBarComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }