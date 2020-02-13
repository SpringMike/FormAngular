import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  messages = [];
  onClick(){
    console.log(this.messages)
  }
  onInput(event){
    console.log(event)
    this.messages.push(event.target.value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
