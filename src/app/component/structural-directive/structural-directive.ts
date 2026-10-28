import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-structural-directive',
  styleUrl: './structural-directive.css',
  templateUrl: './structural-directive.html',
})
export class StructuralDirective {
  isDev1Visible : boolean = true;

  showDiv1() : void {
    this.isDev1Visible = true;
  }
  hideDiv1() : void {
    this.isDev1Visible = false;
  }

  num1 : number = 1;
  num2 : number = 22;
}
