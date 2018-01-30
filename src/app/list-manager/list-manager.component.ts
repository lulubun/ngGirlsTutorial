import { Component } from '@angular/core';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'todo-list-manager',
  template: 
  `<div style="text-align:center" class="todo-app">
    <h1>
      Welcome to {{ title }}!
    </h1>
    <todo-input class="todo-add" (submit)="addItem($event)"></todo-input>
    <ul>
      <li *ngFor="let item of todoList">
        <todo-item [todoItem]="item" (remove)="removeItem($event)" ></todo-item>
      </li>
    </ul>
    </div>`,
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent {
  title = 'todo works';
  todoList: any;
  constructor(private todoListService:TodoListService) {
  }
  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }

  addItem(title:string) {
    this.todoList = this.todoListService.addItem({ title });
  }

  removeItem(item) {
    this.todoList = this.todoListService.removeItem(item);
  }

}
