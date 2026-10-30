import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddEmployee } from './component/add-employee/add-employee';
import { EmployeeList } from './component/employee-list/employee-list';
import { Home } from './component/home/home';
import { DataBinding } from './component/data-binding/data-binding';
import { StructuralDirective } from './component/structural-directive/structural-directive';
import { StudentTable } from './component/student-table/student-table';

@Component({
  imports: [RouterOutlet, AddEmployee, EmployeeList,Home, DataBinding, StructuralDirective, StudentTable],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('myapp');
}
