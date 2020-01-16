import { Component } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-keydemo',
  templateUrl: './keydemo.component.html',
  styleUrls: ['./keydemo.component.css']
})
export class KeydemoComponent {

 public userList=[{UserName:'pankaj'},{UserName:'pankaj123'},{UserName:'pankaj_3'},{UserName:'pankajRex'},];
 public userName;
 public msg;
 public warn;
 public pwd;
 public regExp=/(?=.*[A-Z])\W{4,15}/;
 public pwdStrength='';
 public min;
 public max;
 public high;
 public low;
 public val;

 public strengthMeter(min,max,high,low,val)
 {
   this.high=high;
   this.low=low;
   this.max=max;
   this.min=min;
   this.val=val;
 }
public verifyUser(){
  for(var i=0;i<this.userList.length;i++)
  {
    if(this.userList[i].UserName==this.userName)
    {
      this.msg='user name is taken-- try another username';
      break;
    }
    else
    {
      this.msg='user name is avaliable';
    }
  }
}
public verifyCaps(event){
  if(event.keyCode>=65&&event.keyCode<=90)
  {
    this.warn='warning!cap is on';
  }
  else
  {
    this.warn='';
  }
}
public verifyPassword(){
  if(this.pwd.match(this.regExp))
  {
    this.pwdStrength="strong password required";
    this.strengthMeter(1,100,100,0,0);
  }
  else
  {
    if(this.pwd.length<4)
    {
      this.pwdStrength='Poor--- password';
      this.strengthMeter(1,100,100,60,80);
    }
  
  else{
    this.pwdStrength='Weak password';
    this.strengthMeter(1,100,100,40,80);
  }
}
}
}
