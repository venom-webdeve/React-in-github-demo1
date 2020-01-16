import { Component } from '@angular/core';

@Component({
  selector: 'app-styledemo',
  templateUrl: './styledemo.component.html',
  styleUrls: ['./styledemo.component.css']
})
export class StyledemoComponent {

public styleobject;
public forecolor='black';
public alignment='left';
public applyEffects(){
  this.styleobject={
    'color':this.forecolor,
    'text-align':this.alignment
  };
  return this.styleobject;
}
}
