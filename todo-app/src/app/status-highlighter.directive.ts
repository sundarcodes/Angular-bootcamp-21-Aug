import { Todo } from './models/todo';
import { Directive, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStatusHighlighter]'
})
export class StatusHighlighterDirective implements OnInit{


@Input() todo: Todo;

 constructor(private el: ElementRef, private renderer: Renderer2) {
    console.log('In directive');
   }

  ngOnInit(){
    console.log(this.todo);
    let classToBeAdded = '';
    switch(this.getElapsedDays(this.todo.startDate)) {
      case 0:
        classToBeAdded = 'status-green';
        break;
      case 1:
        classToBeAdded = 'status-amber';
        break;
      case 2:
        classToBeAdded = 'status-red';
        break;
    }
    // this.el.nativeElement.addClass(classToBeAdded);
    this.renderer.addClass(this.el.nativeElement, classToBeAdded);
  }

  // Returns 0 if same day (24H)
  // Returns 1 if between 1 and 2 days
  // Returns 2 otherwise
  getElapsedDays(startDate: number) {
    const currentDateInMs = Date.now();
    const numberOfMsInDay = 24 * 60 * 60 * 1000;
    const numberOfMsIn2Days = 2 * numberOfMsInDay;

    const diffInMs = currentDateInMs - startDate;

    if (diffInMs <= numberOfMsInDay) {
      return 0;
    } else if (diffInMs > numberOfMsInDay && diffInMs <= numberOfMsIn2Days) {
      return 1; 
    } else {
      return 2;
    }
  }

}
