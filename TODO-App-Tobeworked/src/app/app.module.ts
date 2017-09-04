import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TodoDataService } from './services/todo-data.service';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    NavigationBarComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
