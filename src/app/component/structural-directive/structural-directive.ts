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
  isDiv1Hidden: boolean = false;
  num1 : number = 1;
  num2 : number = 22;
  cities: string[] = ["karachi", "lahore", "islamabad"]

  showDiv1() : void {
    this.isDev1Visible = true;
    this.isDiv1Hidden = false;
  }
  hideDiv1() : void {
    this.isDev1Visible = false;
    this.isDiv1Hidden = true;

  }

  currentSem : string = "DISM";
  semArr : string[] = ["CPISM", "DISM", "HDSE-I", "HDSE-II", "ADSE-I", "ADSE-II"];
  

}
