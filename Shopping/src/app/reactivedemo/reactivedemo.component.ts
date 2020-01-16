import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactivedemo',
  templateUrl: './reactivedemo.component.html',
  styleUrls: ['./reactivedemo.component.css']
})
export class ReactivedemoComponent {

  public txtName=new FormControl("Pankaj");
  public lstCities=new FormControl("HYD");

  public updateName(){
    this.txtName.setValue("golu");
  }
  
  
}
