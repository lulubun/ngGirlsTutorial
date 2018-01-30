import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
    <div class="todo-item">
      <input type="checkbox" (click)="completeItem()"/>
      <p class="todo-title" [ngClass]="{'todo-complete': isComplete}">
        {{ todoItem.title }}
      </p>
      <button class="btn-red" (click)="removeItem()">
        remove
      </button>
    </div>
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  constructor() { }
  removeItem() {
    this.remove.emit(this.todoItem);
  }
  isComplete: boolean = false;
  completeItem() {
    this.isComplete = !this.isComplete;
  }
  ngOnInit() {
  }
  @Input() todoItem: any;
  @Output() remove:EventEmitter<any> = new EventEmitter();
}
