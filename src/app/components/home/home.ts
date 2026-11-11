import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';


@Component({
  imports: [MatFormFieldModule, MatInputModule, CommonModule,FormsModule, MatButtonModule],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  task: string = ""
  tasklist: string[] = []

  addTask(){
    this.tasklist.push(this.task)
    this.task = ""
    console.log(this.tasklist)
  }
}
