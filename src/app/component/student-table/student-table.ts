import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface student {
  std_id : number,
  std_name : string,
  std_city : string,
  isActive : boolean
}
@Component({
  imports: [CommonModule],
  selector: 'app-student-table',
  styleUrl: './student-table.css',
  templateUrl: './student-table.html',
})
export class StudentTable {
  studentsList : student[] = [
    {std_id : 1, std_name : "Wasay", std_city : "karachi", isActive : true},
    {std_id : 2, std_name : "ammad", std_city : "karachi", isActive : true},
    {std_id : 3, std_name : "Fawad", std_city : "karachi", isActive : false}
  ]; 
}
