import { Component } from '@angular/core';

@Component({
  selector: 'app-mousedemo',
  templateUrl: './mousedemo.component.html',
  styleUrls: ['./mousedemo.component.css']
})
export class MousedemoComponent {
public  styleObject;
public Animate(event){
  this.styleObject={
    'position':'fixed',
    'left': event.ClientX + 'px',
    'top': event.ClientY + 'px'
  }
  return this.styleObject;
}
}
