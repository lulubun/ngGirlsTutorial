import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
    <input class="todo-input" [value]="title" 
      (keyup.enter)="changeTitle($event.target.value)"
      #inputElement>    
    <button class="btn btn-red" (click)="changeTitle(inputElement.value)">
      Save
    </button>
    <p>{{ title }}</p>
  `,
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  title: string = '';
  constructor() {

   }

  ngOnInit() {

  }

  changeTitle(newTitle: string): void {
    console.log(newTitle);
    this.submit.emit(newTitle);
  }
  @Output() submit: EventEmitter<string> = new EventEmitter();
}
