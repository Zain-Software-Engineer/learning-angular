import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddEmployee } from './component/add-employee/add-employee';
import { EmployeeList } from './component/employee-list/employee-list';

@Component({
  imports: [RouterOutlet, AddEmployee, EmployeeList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('myapp');
}
