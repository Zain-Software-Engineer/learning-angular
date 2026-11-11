import { Component, signal } from '@angular/core';
<<<<<<< HEAD
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';

@Component({
  imports: [RouterOutlet, Navbar],
=======
import { RouterLink, RouterOutlet } from '@angular/router';
import { AddEmployee } from './component/add-employee/add-employee';
import { EmployeeList } from './component/employee-list/employee-list';
import { Home } from './component/home/home';
import { DataBinding } from './component/data-binding/data-binding';
import { StructuralDirective } from './component/structural-directive/structural-directive';
import { StudentTable } from './component/student-table/student-table';
import { AttributeDirective } from './component/attribute-directive/attribute-directive';
import { Navabr } from './component/navabr/navabr';

@Component({
  imports: [ Navabr, RouterLink,RouterOutlet, AddEmployee, EmployeeList,Home, DataBinding, StructuralDirective, StudentTable,AttributeDirective],
>>>>>>> origin/main
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
<<<<<<< HEAD
  protected readonly title = signal('app');
=======
  protected readonly title = signal('myapp');
>>>>>>> origin/main
}
