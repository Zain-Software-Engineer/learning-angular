import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-attribute-directive',
  styleUrl: './attribute-directive.css',
  templateUrl: './attribute-directive.html',
})
export class AttributeDirective {
  div1BgColor : string = "bg-primary"

  bgRed():void{
    this.div1BgColor = "bg-danger"

  }
   bgblue():void{
    this.div1BgColor = "bg-primary"

  }

  toggle():void{
    if(this.div1BgColor == "bg-primary"){
    this.div1BgColor = "bg-danger"
  }
  else{
    this.div1BgColor = "bg-primary"
  }
  }
}
