import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'APP XAVIER';

  task: Task = new Task(21,'Enviar orçamento para o cliente X');
  task2: Task = new Task(25,'Enviar orçamento para o cliente G');
}

export class Task{
  public id: number;
  public title: string;

  constructor(id: number, title: string){
    this.id = id;
    this.title = title;
  }
}

