import { Component, OnInit } from '@angular/core';
import { TodolistService} from '../service/todolist.service';
@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  constructor(private todoService: TodolistService) { }

  ngOnInit() {
  }
onRollBack(id){
  this.todoService.markItemAsRollBacked(id);
}
onCrash(id){
  this.todoService.delete(id);
}
}
