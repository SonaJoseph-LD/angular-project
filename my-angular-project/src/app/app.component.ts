import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodolistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-project';
}
