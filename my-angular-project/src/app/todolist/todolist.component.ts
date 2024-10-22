import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgFor, CommonModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
    
  taskArray = [{ taskName: 'Brush teeth', isCompleted: false }];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form);

    this.taskArray.push({
      taskName: form.controls['task'].value,
      isCompleted: false
    })

    form.reset();
  }

  onDelete(index: number) {
    console.log(index);

    this.taskArray.splice(index, 1);
  }

  onCheck(index: number) {
    console.log(this.taskArray);

    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  }
}
