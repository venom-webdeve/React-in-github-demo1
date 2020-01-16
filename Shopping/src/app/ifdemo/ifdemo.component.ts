import { Component } from '@angular/core';

@Component({
  selector: 'app-ifdemo',
  templateUrl: './ifdemo.component.html',
  styleUrls: ['./ifdemo.component.css']
})
export class IfdemoComponent{ 
   public frnd=["pankaj","golu"];
public isVisible=false;
public btnText='show';
public prods={
names:'Samsung TV',
prices:'900000',
photos:'assets/iphone.jpeg'

};
public DisplayClick(){
  this.isVisible=(this.isVisible==false)?true:false;
  this.btnText=(this.btnText=='show')?'Hide':'show';

}

}
