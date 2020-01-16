import { Component } from '@angular/core';

@Component({
  selector: 'app-focus',
  templateUrl: './focus.component.html',
  styleUrls: ['./focus.component.css']
})
export class FocusComponent {

  public uname;
  public msg;
  public ChangeCase(){
    this.uname=this.uname.toUpperCase();
    this.msg="";
  }
  public ShowMsg(){

    this.msg="Name in Block letter";
  }
 
}
