import { Routes } from '@angular/router';
import { AddEmployee } from './component/add-employee/add-employee';
import { AttributeDirective } from './component/attribute-directive/attribute-directive';
import { DataBinding } from './component/data-binding/data-binding';
import { EmployeeList } from './component/employee-list/employee-list';
import { Home } from './component/home/home';
import { StructuralDirective } from './component/structural-directive/structural-directive';
import { StudentTable } from './component/student-table/student-table';

export const routes: Routes = [
    {
        path: "",
        component: Home
    },
    {
        path: "att-dir",
        component: AttributeDirective
    },
    {
        path: "data-b",
        component: DataBinding
    },
    {
        path: "emp-list",
        component: EmployeeList
    },
    {
        path: "add-emp",
        component: AddEmployee
    },
    {
        path: "str-dir",
        component: StructuralDirective
    },
    {
        path: "std-table",
        component: StudentTable
    }
];
